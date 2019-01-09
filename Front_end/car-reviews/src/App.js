import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Search from './Components/Search';
import FeaturedReviews from './Components/Featured_reviews';
import PopularCars from './Components/Popular_cars';
import PopularReviewers from './Components/Popular_reviewers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Search />
        <FeaturedReviews />
        <PopularCars />
        <PopularReviewers />
      </div>
    );
  }
}

export default App;