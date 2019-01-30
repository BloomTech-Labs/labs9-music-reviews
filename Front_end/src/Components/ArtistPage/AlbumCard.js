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
        <Card style = {{width: '10rem', textAlign: 'left', border: 'none', textDecoration: "none"}}>
          <CardImg
            top
            width="100%"
            src={this.props.image}
            alt={this.props.alt}
          />
          <CardBody style = {{width: '100%'}}>
            <CardTitle>Album: {this.props.album}</CardTitle>
            <CardSubtitle>Tracks: {this.props.total_tracks}</CardSubtitle>
            <CardSubtitle>Date: {this.props.release_date}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default AlbumCard;
