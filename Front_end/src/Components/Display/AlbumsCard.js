import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';

class AlbumsCard extends Component {
  render() {
    return (
          <Col xs = '12' sm = '6' md = '4' lg = '3'>
            <Card>
              <CardImg top width="25%" src={this.props.image} alt={this.props.alt} />
              <CardBody>
                <CardTitle>Album: {this.props.album}</CardTitle>
                <CardSubtitle>Artist: {this.props.artist}</CardSubtitle>
                <CardSubtitle>Total Tracks: {this.props.track}</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
    )
  }
}

export default AlbumsCard;
