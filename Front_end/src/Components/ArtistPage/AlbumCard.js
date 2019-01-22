import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  Col
} from "reactstrap";

class AlbumCard extends Component {
  render() {
    return (
      <Col xs="12" sm="6" md="4" lg="3">
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.image}
            alt={this.props.alt}
          />
          <CardBody>
            <CardTitle>Album: {this.props.album}</CardTitle>
            <CardSubtitle>Artist: {this.props.artist}</CardSubtitle>
            <CardSubtitle># of Tracks: {this.props.total_tracks}</CardSubtitle>
            <CardSubtitle>Released: {this.props.release_date}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default AlbumCard;
