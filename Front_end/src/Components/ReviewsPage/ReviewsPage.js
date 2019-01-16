import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Navigation from '../Navigation/Navigation';
import Stars from '../StarsRating/Stars';

const Sidebar = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    overflow-x: hidden;
    height: 100%;
    padding-top: 20px;
`;

class ReviewsPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Fragment>
                <Navigation />

                <Container fluid={true} style={{ display: "flex", margin: "0 auto", maxWidth: "1500px" }}>
                    <Sidebar>
                        <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <div>Album</div>
                            <div>Artist</div>
                        </Row>
                        <p style={{ height: "250px", width: "250px", margin: "0 auto", border: "2px solid black" }}>Album Art</p>{/* img */}
                        <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <button>Buy Now</button>
                            <button>Write Review</button>
                        </Row>
                        <Row>
                            <Col sm='5'>
                                <h5>Tracklist:</h5>
                                <ul>1</ul>
                                <ul>2</ul>
                                <ul>3</ul>
                                <ul>4</ul>
                                <ul>5</ul>
                                <ul>6</ul>
                                <ul>7</ul>
                                <ul>8</ul>
                                <ul>9</ul>
                                <ul>10</ul>
                                <ul>11</ul>
                                <ul>12</ul>
                            </Col>
                        </Row>
                    </Sidebar>

                    <Container fluid={true} style={{ maxWidth: "1200px"}}>
                        <Jumbotron fluid style={{ display: 'flex', padding: '1rem' }}>
                            {/* User info */}
                            <Row>
                                <Col md='2' style={{textAlign: 'center', margin: 'auto', padding: '1rem' }}>
                                    <div>User Profile Pic</div>
                                    <div>Member status</div>
                                    <div>Location</div>
                                    <div>Name</div>
                                    <div>Number of Reviews Written</div>
                                </Col>
                                <Col md='10' style={{ padding: '1rem 5rem' }}>
                                    <Row style={{ display: 'flex'}}>
                                        <Stars />
                                        <p style={{ margin: "auto" }}>Date Written: (DATE)</p>
                                    </Row>
                                    <Row>
                                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                    </Row>
                                </Col>
                            </Row>
                        </Jumbotron>
                        
                        <Jumbotron fluid style={{ display: 'flex', padding: '1rem' }}>
                            {/* User info */}
                            <Row>
                                <Col md='2' style={{textAlign: 'center', margin: 'auto', padding: '1rem' }}>
                                    <div>User Profile Pic</div>
                                    <div>Member status</div>
                                    <div>Location</div>
                                    <div>Name</div>
                                    <div>Number of Reviews Written</div>
                                </Col>
                                <Col md='10' style={{ padding: '1rem 5rem' }}>
                                    <Row style={{ display: 'flex'}}>
                                        <Stars />
                                        <p style={{ margin: "auto" }}>Date Written: (DATE)</p>
                                    </Row>
                                    <Row>
                                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                    </Row>
                                </Col>
                            </Row>
                        </Jumbotron>
                        
                        <Jumbotron fluid style={{ display: 'flex', padding: '1rem' }}>
                            {/* User info */}
                            <Row>
                                <Col md='2' style={{textAlign: 'center', margin: 'auto', padding: '1rem' }}>
                                    <div>User Profile Pic</div>
                                    <div>Member status</div>
                                    <div>Location</div>
                                    <div>Name</div>
                                    <div>Number of Reviews Written</div>
                                </Col>
                                <Col md='10' style={{ padding: '1rem 5rem' }}>
                                    <Row style={{ display: 'flex'}}>
                                        <Stars />
                                        <p style={{ margin: "auto" }}>Date Written: (DATE)</p>
                                    </Row>
                                    <Row>
                                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                    </Row>
                                </Col>
                            </Row>
                        </Jumbotron>
                        
                    </Container>
                </Container>
            </Fragment>
        )
    }
}

export default ReviewsPage;