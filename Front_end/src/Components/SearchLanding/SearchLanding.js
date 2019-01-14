import React from 'react'
import Navigation from '../Navigation/Navigation'
import Search from '../SearchLanding/Search'
import Filter from '../SearchLanding/Filter'
import SearchView from '../SearchLanding/SearchView'
import About from '../SearchLanding/About'

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Search />
      <Filter />
      <SearchView />
      <About />
    </div>
  )
}

export default LandingPage
