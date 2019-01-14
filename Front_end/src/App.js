import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ReviewList from './Components/ReviewList/ReviewList';
import LandingPage from './Components/LandingPage';
import SearchLanding from './Components/SearchLanding/SearchLanding';
import Billing from './Components/Billing/Billing';
import SettingsPage from './Components/Settings/SettingsPage';
import SignUpPage from './Components/Signup/SignUpPage';
import LogInPage from './Components/Login/LogInPage';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/search_landing" component={SearchLanding} />
        <Route path="/reviews" component={ReviewList} />
        <Route path="/billing" component={Billing} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LogInPage} />
      </div>
    );
  }
}

export default App;
