import React, { Component } from "react";
import "./App.css";
import ReviewList from "./Components/reviewlist";
import { Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Search from './Components/Search';
import FeaturedReviews from './Components/Featured_reviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/reviews" component={ReviewList} />
        <Navigation />
        <Search />
        <FeaturedReviews />
      </div>
    )
  }
}

export default App;
