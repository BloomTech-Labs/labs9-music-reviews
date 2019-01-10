import React, { Component } from 'react'
import ReviewList from './Components/ReviewList'
import { Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import SearchLanding from './Components/SearchLanding'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/search_landing" component={SearchLanding} />
        <Route path="/reviews" component={ReviewList} />
      </div>
    )
  }
}

export default App
