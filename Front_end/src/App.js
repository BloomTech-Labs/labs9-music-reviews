import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ReviewList from './Components/ReviewList/ReviewList';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';
import LandingPage from './Components/LandingPage';
import SplashPage from './Components/SplashPage/SplashPage';
import SearchLanding from './Components/SearchLanding/SearchLanding';
import Billing from './Components/Billing/Billing';
import SettingsPage from './Components/Settings/SettingsPage';
import SignUpPage from './Components/Signup/SignUpPage';
import LogInPage from './Components/Login/LogInPage';
import ForgotPasswordPage from './Components/ForgotPassword/ForgotPasswordPage';
//import './App.css';
import axios from 'axios';

var clientId = "b56e28cbf84e4c38aec748a3f8891a29";
axios.get("https://accounts.spotify.com/authorize", {
      client_id: clientId,
      response_type: "code",
      redirect_uri: "http://localhost:3000",
      scope: "user-read-private user-read-email"
    })
    .then( res => console.log("RESPONSE: ", res) )
    .catch(err => console.log(err) );

class App extends Component {
  render () {
    return (
      <div className="container-fluid" style={{ padding: "0"}}>
        <Route exact path="/" component={SplashPage} />
        <Route path="/home" component={LandingPage} />
        <Route path="/search_landing" component={SearchLanding} />
        <Route path="/reviews" component={ReviewList} />
        <Route path="/album_reviews" component={ReviewsPage} />
        <Route path="/billing" component={Billing} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
      </div>
    );
  }
}

export default App;
