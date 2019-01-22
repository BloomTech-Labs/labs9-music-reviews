import React, { Component } from 'react'
import axios from "axios";
import Ratings from 'react-ratings-declarative'

class Stars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
    }
  }

  componentDidMount() {
      this.setState({ rating: this.props.rating})
  }

  changeRating = newRating => {
    this.setState({
      rating: newRating,
    }, () => this.props.updateRating(this.state.rating))
    console.log("Child Rating", this.state.rating);
  }

  render() {
    return (
      <Ratings
        rating={this.state.rating}
        widgetRatedColors="orange"
        changeRating={this.changeRating}
        style={{ margin: '0 auto' }}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    )
  }
}

export default Stars