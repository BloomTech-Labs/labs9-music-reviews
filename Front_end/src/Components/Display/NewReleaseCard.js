import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Col } from 'reactstrap';

class NewReleaseCard extends Component {
  render() {
    return (
      // <Col md="3" xs="12" style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>
          <Col xs="12" md="4" style={{padding: "2rem 1rem 0 1rem" }}> 
          <NavLink to={`/albums/${this.props.id}`}>
            <Card style={{ border: "2px solid #984B43", color: "#4b0082", textDecoration: "none", maxHeight: "650px", backgroundColor: '#EAC67A', margin:'auto' }}>
              <CardImg top src={this.props.image} alt={this.props.alt} />
              <CardBody>
                <CardTitle><h6 xs="3" md="4" style={{color:'#984B43'}}>Album:</h6><p style={{color:'#984B43', textDecoration: 'none', fontFamily:'merriweather'}}>{this.props.album}</p></CardTitle>
                <CardTitle><h6 xs="3" md="4" style={{color:'#984B43'}}>Artist:</h6><p style={{color:'#984B43', textDecoration: 'none', fontFamily:'merriweather'}}>{this.props.artist}</p></CardTitle>
                <CardTitle><h6 xs="3" md="4" style={{color:'#984B43'}}>Release Date:</h6><p style={{color:'#984B43', textDecoration: 'none', fontFamily:'merriweather'}}>{this.props.date}</p></CardTitle>
              </CardBody>
            </Card>
            </NavLink>
          </Col>
    )
  }
}

export default NewReleaseCard;
