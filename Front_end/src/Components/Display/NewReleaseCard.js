import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Col } from 'reactstrap';

class NewReleaseCard extends Component {
  render() {
    return (
          <Col sm="12" md="3">
          <NavLink to={`/albums/${this.props.id}`}>
            <Card style={{ border: "2px solid #dc9f2e", color: "#4b0082", textDecoration: "none", maxHeight: "500px", maxWidth: "200px" }}>
              <CardImg top src={this.props.image} alt={this.props.alt} />
              <CardBody style={{ padding: "1rem" }}>
                <CardTitle><h6>Album:</h6><p>{this.props.album}</p></CardTitle>
                <CardTitle><h6>Artist:</h6><p>{this.props.artist}</p></CardTitle>
                <CardTitle><h6>Release Date:</h6><p>{this.props.date}</p></CardTitle>
              </CardBody>
            </Card>
            </NavLink>
          </Col>
    )
  }
}

export default NewReleaseCard;
