import React, { Component } from 'react';
import ReviewList from './Components/ReviewList';
import { Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SearchLanding from './Components/SearchLanding';
import Billing from './Components/Billing';
import SettingsPage from './Components/SettingsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/search_landing" component={SearchLanding} />
        <Route path="/reviews" component={ReviewList} />
        <Route path="/billing" component={Billing} />
        <Route path="/settings" component={SettingsPage} />
      </div>
    );
  }
}

export default App;
