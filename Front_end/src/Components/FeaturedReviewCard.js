import React, { Component } from 'react'
import { Col, Card, CardTitle, Modal } from 'react-materialize'
import Ratings from 'react-ratings-declarative'
import ReviewCardPop from './ReviewCardPop';

class FeaturedStars extends Component {
  render() {
    return (
      <Ratings rating={this.props.rating} widgetRatedColors="orange">
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
      <Col m={6} s={12} l={3}>
        <Card
          className="large"
          header={<Modal trigger = {<CardTitle image = {this.props.image}></CardTitle>}><h3>{this.props.year} {this.props.make} {this.props.model} {this.props.trim}</h3> <a href="#">
          @{this.props.reviewer}</a> 
          <ReviewCardPop image = {this.props.image}/></Modal>}
          actions={[
            <a href="#">
              @{this.props.reviewer}
            </a>
          ]}
        >
          <div className = 'center-align'>
            <FeaturedStars rating={this.props.rating} />
          </div>
          {this.props.year} {this.props.make} <br /> {this.props.model}{' '}
          {this.props.trim}
        </Card>
      </Col>
    )
  }
}

export default FcCard
