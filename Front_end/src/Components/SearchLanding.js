import React from 'react'
import Navigation from './Navigation'
import Search from './Search'
import Filter from './Filter'
import SearchView from './SearchView'
import About from './About'

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
