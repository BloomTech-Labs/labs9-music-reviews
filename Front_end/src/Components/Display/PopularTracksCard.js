import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Col } from 'reactstrap';
const cardStyle = {
  color:'#eac67a',
  textDecoration: 'none',
  textAlign: 'center',
  fontFamily:'Lato',
  fontSize: "1.1rem",
  fontWeight: "700"
};

class PopularTracksCard extends Component {
  render() {
    return (
        <Col xs="6" md="3"> 
          <NavLink to={`/albums/${this.props.id}`} style={{ textDecoration: "none" }}>
                <Card style={{
                    border: "2px solid #984b43",
                    color: "#eac67a",
                    minHeight: "325px",
                    maxWidth: "200px",
                    backgroundColor: '#233237',
                    margin:'0.5rem auto',
                    overflowY: "hidden"
                }}
                >
                    <CardImg top src={this.props.image} alt={this.props.alt} 
                        style={{
                            maxWidth: "150px",
                            borderRadius: "50%",
                            margin: "1rem auto 0 auto" 
                        }}  
                    />
                    <CardBody>
                        <CardTitle>
                        <p style={ cardStyle }>{this.props.artist}</p>
                        </CardTitle>
                        <CardTitle>
                        <p style={{ color:'#eac67a',
                                textDecoration: 'none',
                                textAlign: 'center',
                                fontFamily:'Lato',
                                fontSize: "1rem",
                                fontWeight: "500" }}
                        >
                            {this.props.track}
                        </p>
                        </CardTitle>
                    </CardBody>
                </Card>
            </NavLink>
        </Col>
    )
  }
}

export default PopularTracksCard;
