import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Search from './Components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Search />
      </div>
    );
  }
}

export default App;