import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

const cardStyle = {
  maxWidth: "12rem",
  textAlign: 'left',
  border: 'none',
  textDecoration: "none",
  border: "2px solid #984b43",
  background: "#233237",
  color: "#eac67a",
  margin: "1rem",
  fontFamily: "Lato"
}

class AlbumCard extends Component {
  render() {
    return (
      <Col xs="12">
        <Card style={ cardStyle }>
          <CardImg
            top
            width="100%"
            src={this.props.image}
            alt={this.props.alt}
          />
          <CardBody>
            <CardTitle>Album: <br />{this.props.album}</CardTitle>
            <CardSubtitle>Tracks: {this.props.total_tracks}</CardSubtitle><br />
            <CardSubtitle>Date: {this.props.release_date}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default AlbumCard;
