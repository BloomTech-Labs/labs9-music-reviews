import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col
} from "reactstrap";

const cardStyle = {
  maxWidth: "12rem",
  textAlign: 'left',
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
            <CardTitle style={{ fontWeight: "650" }}>
              Album:
            </CardTitle>
            <CardText>
              {this.props.album}
            </CardText>
            <CardSubtitle style={{ fontWeight: "650" }}>
              Tracks:
            </CardSubtitle>
              <CardText>
                {this.props.total_tracks}
            </CardText>  
            <CardSubtitle style={{ fontWeight: "650" }}>
              Date Released:
            </CardSubtitle>
              <CardText>
                {this.props.release_date}
              </CardText>  
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default AlbumCard;
