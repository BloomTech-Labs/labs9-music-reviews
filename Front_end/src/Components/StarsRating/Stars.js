import React, { Component } from 'react'
import Ratings from 'react-ratings-declarative'

class Stars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
    }
  }

  changeRating = newRating => {
    this.setState({
      rating: newRating,
    })
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
