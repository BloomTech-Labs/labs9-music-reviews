import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import dummyData from '../DummyData/dummyData.js'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carReviews: [],
    }
  }
  componentDidMount() {
    this.setState({
      carReviews: dummyData,
    })
  }
}

export default Search
