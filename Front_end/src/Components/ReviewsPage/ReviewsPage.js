import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Sidebar = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 50px;
    border: 2px solid black;
`;

class ReviewsPage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container fluid={true} style={{ display: "flex", maxWidth: "1500px", margin: "0 auto" }}>
                <Sidebar>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <div>Album</div>
                        <div>Artist</div>
                    </div>
                    <p style={{ height: "300px", width: "300px", margin: "0 auto", border: "2px solid black" }}>Album Art</p>{/* img */}
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <button>Buy Now</button>
                        <button>Write Review</button>
                    </div>
                    <div>
                        <h3>Tracklist:</h3>
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
                        <ul>13</ul>
                        <ul>14</ul>
                    </div>
                </Sidebar>
                <Row noGutters={true} style={{ display: "flex", border: "3px solid blue" }}>
                    {/* User info */}
                    <Col lg="4" style={{ border: "1px solid red" }}>
                        <div>User Profile Pic</div>
                        <div>Member status</div>
                        <div>Location</div>
                        <div>Name</div>
                        <div>Number of Reviews Written</div>
                    </Col>
                    <Col lg="8">
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ReviewsPage;