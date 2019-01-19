import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';


class ViewStars extends Component {
  render() {
    return (
      <Ratings 
        rating={this.props.rating} 
        widgetRatedColors="orange"
        widgetDimensions = "30px"
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

export default ViewStars;