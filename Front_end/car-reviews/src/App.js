import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReviewList from "./Components/reviewlist";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/reviews" component={ReviewList} />
      </div>
    );
  }
}

export default App;
