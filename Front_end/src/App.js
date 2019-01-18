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
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
//import './App.css';
// function to refresh token every hour...

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props){
    super(props);
    this.state = {
      token: '',
    }
  }
  // refreshToken = () => {
  //   // axios call endpoint to refresh token. to be implemented
  //   // axios.get(REFRESH_TOKEN_URL).then().catch()
  //   // let hour = 60*60*1000
  //   // setTimeout( this.refreshToken(), 60*60*1000) // this will call function every hour
  // }
  // getToken = () => {
  //   axios.get(TOKEN_URL)
  //     .then( res => this.setState({ token: cookies.get}) )
  //     .catch( err => console.log(err) )
  // }
  // componentDidMount(){
  //   this.getToken();
  //   this.setState({})
  // }
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

export default withCookies(App);
