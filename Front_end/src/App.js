import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ReviewList from './Components/ReviewList/ReviewList';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';
import LandingPage from './Components/LandingPage';
import SearchLanding from './Components/SearchLanding/SearchLanding';
import Billing from './Components/Billing/Billing';
import SettingsPage from './Components/Settings/SettingsPage';
import SignUpPage from './Components/Signup/SignUpPage';
import LogInPage from './Components/Login/LogInPage';
import ForgotPasswordPage from './Components/ForgotPassword/ForgotPasswordPage';
import axios from 'axios';
//import './App.css';
// function to refresh token every hour...

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      token: '',
    }
  }
  refreshToken = () => {
    // axios call endpoint to refresh token. to be implemented
  }
  render () {
    return (
      <div className="container-fluid">
        <Route exact path="/" component={LandingPage} />
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
