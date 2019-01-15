import React from 'react'
import Navigation from '../Navigation/Navigation'
import Filter from '../SearchLanding/Filter'
import SearchView from '../SearchLanding/SearchView'
import About from '../SearchLanding/About'

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Filter />
      <SearchView />
      <About />
    </div>
  )
}

export default LandingPage
