import React, { Component } from "react";
import ReviewList from "./Components/reviewlist";
import { Route } from "react-router-dom";
import LandingPage from "./Components/Landing_page";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path = '/' component = { LandingPage } />
        <Route path="/reviews" component={ReviewList} />
      </div>
    )
  }
}

export default App;
