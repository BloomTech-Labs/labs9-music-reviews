import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardLink, Col } from 'reactstrap';
import Ratings from 'react-ratings-declarative';


class FeaturedStars extends Component {
  render() {
    return (
      <Ratings 
        rating={this.props.rating} 
        widgetRatedColors="orange"
        widgetDimensions = "35px"
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

class FcCard extends Component {
  render() {
    return (
          <Col sm = '12' md = '6' lg = '3'>
            <Card>
              <CardImg top width="100%" src={this.props.image} alt={this.props.track} />
              <CardBody>
                <FeaturedStars rating = {this.props.rating}/>
                <CardTitle>Track: {this.props.track}</CardTitle>
                <CardSubtitle>Artist: {this.props.artist}</CardSubtitle>
                <CardLink href= '#'>@{this.props.reviewer}</CardLink>
              </CardBody>
            </Card>
          </Col>
    )
  }
}

export default FcCard;
