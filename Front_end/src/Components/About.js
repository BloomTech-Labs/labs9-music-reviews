import React from 'react'
import { Footer } from 'react-materialize'

const About = () => {
  return (
    <Footer
      className="blue"
      links={
        // copyrights="@copy 2015 Copyright Text"

        <a className="grey-text text-lighten-3" href="#!">
          About the team
        </a>
      }
    />
  )
}

export default About
