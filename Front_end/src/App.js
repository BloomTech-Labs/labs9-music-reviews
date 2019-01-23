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
import Search from "./Components/Search/Search";
//import './App.css';

let refreshTime = 29*60*1000; // 29 mins

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loaded: false,
      loggedIn: Boolean(localStorage.getItem("loggedIn")),
      userID: "",
      firebaseUID: "",
      email: "",
      paidStatus: false,
      subscriptionExpiration: null,
      nickname: "",
    }
    this.getToken = this.getToken.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.login = this.login.bind(this);
    this.signout = this.signout.bind(this);
  }
  getUser = (email) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}user/get/${email}`)
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
        });
      })
      .catch((err) => this.setState({ loaded: false, loading: false }, console.log(err)));
  }
  getToken = () => {
    axios
      .get(process.env.REACT_APP_TOKEN_URL)
      .then(res => {
        if ( !this.props.cookies.get("access_token") ){
          this.props.cookies.remove("access_token")
          console.log("token removed")
          this.props.cookies.set("access_token", res.data.access_token)
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
  login = (boolean) => {
    localStorage.setItem("loggedIn", boolean);
    this.setState({ loggedIn: boolean })
  }
  signout = (boolean) => {
    localStorage.setItem("loggedIn", boolean);
    this.setState({ loggedIn: boolean });
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
    console.log(this.state.userID)
    this.getToken();
    setInterval(this.refreshToken, refreshTime);
  }
  render() {
    console.log(this.state.loggedIn)
    let loginState = localStorage.getItem("loggedIn") === "false" ? true : false;
    return (
      <Container fluid style={{ padding: "0" }}>
        <Navigation loggedIn={this.state.loggedIn} signout={() => this.signout(loginState)} userID={this.state.userID}/>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/search_landing" component={SearchLanding} />
        {/* <Route path="/user/reviews" component={UserReviewList} /> */}
        <Route path="/user/billing" component={Billing} />
        <Route path="/user/settings" component={SettingsPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" render={(props) => 
          <LogInPage {...props} changeLogInState={() => this.login(loginState)} /> }
        />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
        <Route path="/search" component={Search} />
        <Route
          path="/albums/:id"
          render={props => (
            <AlbumReviewsPage {...props} userID={this.state.userID}/>
          )}
        />
        <Route
          path="/tracks/:id"
          render={props => (
            <TrackReviewsPage {...props} userID={this.state.userID}/>
            // id="75IN3CtuZwTHTnZvYM4qnJ"
          )}
        />
        <Route
          path="/artists/:id"
          render={props => (
            <ArtistPage {...props}/>
          )}
        />
        <Route
          path="/user/reviews/:id"
          render={props => (
            <UserReviewList {...props} loggedIn={this.state.loggedIn} userID={this.state.userID}/>
          )}
        />
      </Container>
    );
  }
}

export default withCookies(App);
