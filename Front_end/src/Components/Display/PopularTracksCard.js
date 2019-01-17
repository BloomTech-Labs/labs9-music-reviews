import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardLink, Col } from 'reactstrap';

class PopularTracksCard extends Component {
  render() {
    return (
          <Col xs = '12' sm = '6' md = '4' lg = '3'>
            <Card>
              <CardImg top width="100%" src={this.props.image} alt={this.props.alt} />
              <CardBody>
                <CardTitle>Track: {this.props.track}</CardTitle>
                <CardSubtitle>Artist: {this.props.artist}</CardSubtitle>
                <CardSubtitle>Album: {this.props.album}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
    )
  }
}

export default PopularTracksCard;
