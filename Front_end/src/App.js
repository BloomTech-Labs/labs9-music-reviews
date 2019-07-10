import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import UserReviewList from "./Components/ReviewList/UserReviewList";
import AlbumReviewsPage from "./Components/ReviewsPage/AlbumReviewsPage";
import TrackReviewsPage from "./Components/ReviewsPage/TrackReviewsPage";
import HomePage from "./Components/HomePage";
import LandingPage from "./Components/LandingPage/LandingPage";
import SettingsPage from "./Components/Settings/SettingsPage";
import SignUpPage from "./Components/Signup/SignUpPage";
import ArtistPage from "./Components/ArtistPage/ArtistPage";
import LogInPage from "./Components/Login/LogInPage";
import ForgotPasswordPage from "./Components/ForgotPassword/ForgotPasswordPage";

import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import SearchResults from "./Components/Search/SearchResults";
import { withAuthentication } from "./Components/Session";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/Footer/AboutUs";
import "./index.css";

let refreshTime = 45 * 60 * 1000; // 45 mins

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
      nickname: ""
    };
  }
  getUser = email => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}users/get/${email}`)
      .then(res => {
        this.setState(() => ({
          userID: res.data.userID,
          firebaseUID: res.data.firebaseUID,
          email: res.data.emailAddress,
          paidStatus: res.data.paidMembership,
          subscriptionExpiration: res.data.subscriptionExpiration,
          nickname: res.data.nickname,
          loaded: true,
          loading: false,
          loggedIn: true
        }));
      })
      .catch(err =>
        this.setState(
          { loggedIn: false, loaded: false, loading: false },
          console.log(err)
        )
      );
  };
  getToken = () => {
    const { cookies } = this.props;
    axios
      .get(`${process.env.REACT_APP_TOKEN_URL}`)
      .then(res => {
        if (cookies.cookies.access_token) cookies.remove("access_token");
        cookies.set("access_token", res.data.access_token);
      })
      .catch(err => console.log(err));
  };
  changeLoginState = () => {
    if (this.state.loggedIn === false) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  };
  componentDidMount() {
    this.setState({ loading: true }, () => {
      //when component mounts
      //check to see if there is a user that has been authenticated
      this.props.firebase.auth.onAuthStateChanged(user => {
        // if there has been make a call to our own database to find user
        if (user) {
          //if successful set state with details of the user
          const email = user.email;
          this.getUser(email);
        } else {
          this.setState({ loggedIn: false, loaded: false, loading: false });
          //no user so data has been loaded since there was none to be found.
        }
      });
    });
    this.getToken();
    setInterval(this.getToken, refreshTime);
  }
  componentWillUnmount() {
    clearInterval();
  }

  render() {
    return (
      <wrapper class="d-flex flex-column">
        <Navigation
          loggedIn={this.state.loggedIn}
          signout={this.props.changeLogInState}
          userID={this.state.userID}
        />
        <main className="container-fluid py-3 flex-fill">
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about-us" component={AboutUs} />
          <Route
            path="/user/settings"
            render={props => (
              <SettingsPage
                {...props}
                subscriptionExpiration={this.state.subscriptionExpiration}
                userID={this.state.userID}
                nickname={this.state.nickname}
              />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <SignUpPage {...props} changeLogInState={this.changeLoginState} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LogInPage {...props} changeLogInState={this.changeLoginState} />
            )}
          />
          <Route path="/forgot_password" component={ForgotPasswordPage} />
          <Route
            path="/search"
            render={props => (
              <SearchResults {...props} loggedIn={this.state.loggedIn} />
            )}
          />
          <Route
            path="/albums/:id"
            render={props => (
              <AlbumReviewsPage
                {...props}
                userID={this.state.userID}
                nickname={this.state.nickname}
              />
            )}
          />
          <Route
            path="/tracks/:id"
            render={props => (
              <TrackReviewsPage
                {...props}
                userID={this.state.userID}
                nickname={this.state.nickname}
              />
            )}
          />
          <Route
            path="/artists/:id"
            render={props => (
              <ArtistPage {...props} userID={this.state.userID} />
            )}
          />
          <Route
            path="/user/reviews/:id"
            render={props => (
              <UserReviewList
                {...props}
                loggedIn={this.state.loggedIn}
                userID={this.state.userID}
                nickname={this.state.nickname}
              />
            )}
          />
        </main>
        <Footer loggedIn={this.state.loggedIn} />
      </wrapper>
    );
  }
}

export default withAuthentication(withCookies(withRouter(App)));
