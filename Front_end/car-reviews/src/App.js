import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Search from './Components/Search';
import FeaturedReviews from './Components/Featured_reviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Search />
        <FeaturedReviews />
      </div>
    );
  }
}

export default App;