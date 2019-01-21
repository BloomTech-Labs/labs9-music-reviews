import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron, CardImg, Button } from 'reactstrap';
import Navigation from '../Navigation/Navigation';
import Stars from '../StarsRating/Stars';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const Sidebar = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    height: 100%;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: 'center';
`;

class ReviewsPage extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props){
        super(props);
        this.state = {
            data: [],
            album: '',
            artist: '',
            art: '',
            tracks: [],
        }
        this.getAlbum = this.getAlbum.bind(this);
    }
    getAlbum = (albumId, token) => {
        axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then( data => {
                this.setState({
                    data: data.data,
                    album: data.data.name,
                    artist: data.data.artists[0]['name'],
                    art: data.data.images[1].url,
                    tracks: data.data.tracks.items
                })
            })
            .catch( err => console.log(err) );
    }
    componentDidMount(){
        this.getAlbum('4aawyAB9vmqN3uQ7FjRGTy', this.props.cookies.get('access_token'))
    }
    render(){
        console.log(this.state.data.images)
        return (
            <Fragment>
                <Navigation />

                <Container fluid={true} style={{ display: 'flex', margin: '0 auto', maxWidth: '1600px' }}>
                    <Sidebar>
                        <Row style={{ alignSelf: 'center' }}>
                            <h3>{this.state.album}</h3>
                        </Row>
                        <Row style={{ alignSelf: 'center' }}>
                            <h5>{this.state.artist}</h5>
                        </Row>
                        {/* can add logic to render different size of album art based on screen size: stacked ternary */}
                        {/* need to find a way to manipulate the img object from res.data */}
                        <CardImg src={this.state.art} alt='Album Art' />
                        <Row style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1rem' }}>
                            <Button>Buy Now</Button>
                            <Button>Write Review</Button>
                        </Row>
                        <Row>
                            <Col>
                                <h5 style={{ padding: '1rem' }}>Tracklist</h5>
                                {this.state.tracks.map( track => {
                                    return (
                                        <Row style={{ display: 'flex', justifyContent: 'space-between'}} >
                                            <Col xs='1'>
                                                <h6>{track.track_number}</h6>
                                            </Col>
                                            <Col xs='9'>
                                                <ul style={{ fontSize: '0.8rem' }} key={track.id}>{track.name}</ul>
                                            </Col>
                                            <Col xs='2'>
                                                <span style={{ color: 'red', fontWeight: '800'}}>
                                                    {track.explicit === true ? 'E' : ' '}
                                                </span>
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Col>
                        </Row>
                    </Sidebar>

                    <Container fluid={true} style={{ maxWidth: '1150px' }}>
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
                                    <Row style={{ display: 'flex' }}>
                                        <Stars />
                                        <p style={{ margin: 'auto' }}>Date Written: (DATE)</p>
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
                                    <Row style={{ display: 'flex' }}>
                                        <Stars />
                                        <p style={{ margin: 'auto' }}>Date Written: (DATE)</p>
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
                                    <Row style={{ display: 'flex' }}>
                                        <Stars />
                                        <p style={{ margin: 'auto' }}>Date Written: (DATE)</p>
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

export default withCookies(ReviewsPage);