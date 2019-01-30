import React, { Component } from "react";
import Ratings from "react-ratings-declarative";
import styled from "styled-components";

class ViewStars extends Component {
  render() {
    return (
      <Ratings
        rating={this.props.rating}
        widgetRatedColors="orange"
        widgetDimensions="30px"
        widgetSpacings="2px"
        style={{ align: "center"}}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    );
  }
}

export default ViewStars;
