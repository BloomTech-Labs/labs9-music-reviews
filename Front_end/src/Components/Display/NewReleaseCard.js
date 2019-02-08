import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Col } from 'reactstrap';
import styled from 'styled-components';

const cardStyle = {
  color:'#eac67a',
  textDecoration: 'none',
  textAlign: 'left',
  fontFamily: 'Lato',
  fontSize: "0.9rem",
  fontWeight: 'normal'
};

const H5 = styled.h5`
  font-weight: 700;
  text-align: left;
  font-size: 1rem;
  font-family: Merriweather Sans, sans-serif
`;

class NewReleaseCard extends Component {
  render() {
    return (
        <Col xs="12" md="3" style={{ padding: "2rem 1rem 0 1rem" }}> 
          <NavLink to={`/albums/${this.props.id}`} style={{ textDecoration: "none" }}>
            <Card style={{
                border: "2px solid #984b43",
                color: "#eac67a",
                minHeight: "425px",
                maxWidth: "300px",
                backgroundColor: '#233237',
                margin:'0.5rem auto',
                overflowY: "hidden"
              }}
            >
              <CardImg top src={this.props.image} alt={this.props.alt} style={{ maxWidth: "150px", borderRadius: "50%", margin: "0.5rem auto 0 auto" }} />
              <CardBody>
                <CardTitle>
                  <H5 xs="3" md="3">Album:</H5>
                  <p style={ cardStyle }>{this.props.album}</p>
                </CardTitle>
                <CardTitle>
                  <H5 xs="3" md="3">Artist:</H5>
                  <p style={ cardStyle }>{this.props.artist}</p>
                </CardTitle>
                <CardTitle>
                  <H5 xs="3" md="3">Date Released:</H5>
                  <p style={ cardStyle }>{this.props.date}</p>
                </CardTitle>
              </CardBody>
            </Card>
            </NavLink>
        </Col>
    )
  }
}

export default NewReleaseCard;
