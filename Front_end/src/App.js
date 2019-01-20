import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ReviewList from './Components/ReviewList/ReviewList';
import ReviewsPage from './Components/ReviewsPage/ReviewsPage';
import HomePage from './Components/HomePage';
import LandingPage from './Components/LandingPage/LandingPage';
import SearchLanding from './Components/SearchLanding/SearchLanding';
import Billing from './Components/Billing/Billing';
import SettingsPage from './Components/Settings/SettingsPage';
import SignUpPage from './Components/Signup/SignUpPage';
import LogInPage from './Components/Login/LogInPage';
import ForgotPasswordPage from './Components/ForgotPassword/ForgotPasswordPage';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
//import './App.css';
// function to refresh token every hour...

let refreshTime = 50*60*1000; // 50 mins
const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
const REFRESH_TOKEN_URL = process.env.REFRESH_TOKEN_URL;

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props){
    super(props);
    this.state = {
    }
  }
  getToken = () => {
    axios.get('http://labs9-car-reviews.herokuapp.com/get_token')
        .then( res => this.props.cookies.set('access_token', res.data.access_token) )
        .catch( err => console.log(err) )
  }
  refreshToken = () => {
    // axios call endpoint to refresh token. to be implemented
    axios.get(REFRESH_TOKEN_URL)
      .then( res => this.props.cookies.set('access_token', res.data.access_token) )
      .catch( err => console.log(err) )
  }
  componentDidMount(){
    this.getToken();
    setInterval(this.refreshToken, refreshTime); 
  }
  render () {
    return (
      <div className="container-fluid" style={{ padding: "0"}}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
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

export default withCookies(App);
