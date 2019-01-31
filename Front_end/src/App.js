import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import UserReviewList from "./Components/ReviewList/UserReviewList";
import AlbumReviewsPage from "./Components/ReviewsPage/AlbumReviewsPage";
import TrackReviewsPage from "./Components/ReviewsPage/TrackReviewsPage";
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import SearchLanding from "./Components/SearchLanding/SearchLanding";
import Billing from "./Components/Billing/Billing";
import SettingsPage from "./Components/Settings/SettingsPage";
import SignUpPage from "./Components/Signup/SignUpPage";
import ArtistPage from "./Components/ArtistPage/ArtistPage"
import LogInPage from "./Components/Login/LogInPage";
import ForgotPasswordPage from "./Components/ForgotPassword/ForgotPasswordPage";
import { Container } from "reactstrap";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import SearchResults from "./Components/Search/SearchResults";
import { withAuthentication } from './Components/Session'
import * as ROUTES from './constants/routes/routes';


let refreshTime = 15*60*1000; // 15 mins

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loaded: false,
      loggedIn: false,
      userID: "",
      firebaseUID: "",
      email: "",
      paidStatus: false,
      subscriptionExpiration: null,
      nickname: "",
    }
    this.getToken = this.getToken.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
  }
  getUser = (email) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}users/get/${email}`)
      .then((res) => {
        this.setState({
          userID: res.data.userID,
          firebaseUID: res.data.firebaseUID,
          email: res.data.emailAddress,
          paidStatus: res.data.paidMembership,
          subscriptionExpiration: res.data.subscriptionExpiration,
          nickname: res.data.nickname,
          loaded: true,
          loading: false,
          loggedIn: true,
        });
      })
      
      .catch((err) => this.setState({ loaded: false, loading: false }, console.log(err)));
  }
  getToken = () => {
    axios
      .get(process.env.REACT_APP_TOKEN_URL)
      .then(res => {
        if ( typeof this.props.cookies.get("access_token") == undefined ){
          this.props.cookies.remove("access_token")
          console.log("token removed")
          this.getToken();
        } else {
          this.props.cookies.set("access_token", res.data.access_token)
        }
      })
      .catch(err => console.log(err));
  };
  refreshToken = () => {
    this.props.cookies.remove("access_token");
    axios.get(process.env.REACT_APP_REFRESH_TOKEN_URL)
      .then( res => {
        this.props.cookies.set('access_token', res.data.access_token)
        console.log("Token Refreshed")
      })
      .catch( err => console.log(err) )
  }
  changeLoginState = (boolean) => {
    localStorage.setItem("loggedIn", boolean);
    this.setState({ loggedIn: Boolean(boolean) }, () => {
      if (this.state.loggedIn === false){
        window.location.href="https://labs9carreviews.netlify.com/"
      }
    })
  }
  componentDidMount(){
    this.setState({ loading: true }, () => {
      //when component mounts
      //check to see if there is a user that has been authenticated
      this.props.firebase.auth.onAuthStateChanged((user) => {
        // if there has been make a call to our own database to find user
        if (user) {
          //if successful set state with details of the user
          const email = user.email;
          this.getUser(email)
        } else {
          this.setState({ loaded: false, loading: false });
          //no user so data has been loaded since there was none to be found.
        }
      })
    });
    this.getToken();
    setInterval(this.refreshToken, refreshTime);
  }
  render() {
    return (
      <Container fluid>
        <Navigation
          loggedIn={this.state.loggedIn}
          signout={() => this.changeLoginState(false)}
          userID={this.state.userID}
        />
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/search_landing" component={SearchLanding} />
        <Route path="/user/billing" render={(props) => ( 
          <Billing {...props} userID={this.state.userID} 
                              subscriptionExpiration={this.state.subscriptionExpiration} 
                              nickname={this.state.nickname}
                              tier={this.state.subscriptionExpiration !== null? "Subscriber" : "Free User"}
          /> )} 
        />
        <Route path="/user/settings" component={SettingsPage} />
        <Route path="/signup" render={(props) =>
          <SignUpPage {...props} changeLogInState={() => this.changeLoginState(true)} /> }
        />
        <Route path="/login" render={(props) => 
          <LogInPage {...props} changeLogInState={() => this.changeLoginState(true)} /> }
        />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
        <Route path="/search"  render={(props) => 
          <SearchResults {...props} loggedIn={this.state.loggedIn} /> }/>
        <Route
          path="/albums/:id"
          render={props => (
            <AlbumReviewsPage {...props} userID={this.state.userID} nickname={this.state.nickname}/>
          )}
        />
        <Route
          path="/tracks/:id"
          render={props => (
            <TrackReviewsPage {...props} userID={this.state.userID} nickname={this.state.nickname}/>
            // id="75IN3CtuZwTHTnZvYM4qnJ"
          )}
        />
        <Route
          path="/artists/:id"
          render={props => (
            <ArtistPage {...props} userID={this.state.userID}/>
          )}
        />
        <Route
          path="/user/reviews/:id"
          render={props => (
            <UserReviewList {...props} loggedIn={this.state.loggedIn} userID={this.state.userID} nickname={this.state.nickname}/>
          )}
        />
      </Container>
    );
  }
}

export default withAuthentication(withCookies(App));
