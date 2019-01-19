import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
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
    overflow-x: hidden;
    height: 100%;
    padding-top: 20px;
`;

const TOKEN_URL = process.env.REACT_APP_TOKEN_URL || 'http://localhost:9000/login'

class ReviewsPage extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props){
        super(props);
        const { cookies } = props;
        this.state = {
            data: [],
            album: '',
            artist: '',
            art: '',
            tracks: [],
            token: cookies.get('access_token'),
        }
        this.getToken = this.getToken.bind(this);
        this.getAlbum = this.getAlbum.bind(this);
    }
    getToken = () => {
        axios.get(TOKEN_URL)
            .then( res => this.setState({
                token: this.props.cookies.get('access_token'),
            }))
            .catch( err => console.log(err) )
    }
    getAlbum = (albumId, token) => {
        axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then( data => {
                this.setState({
                    data,
                    album: data.data.name,
                    artist: data.data.artists[0]['name'],
                    art: data.data.images[1]['url'],
                    tracks: data.data.tracks
                })
            })
            .catch( err => console.log(err) );
    }
    componentDidMount(){
        this.getToken();
        this.getAlbum('4aawyAB9vmqN3uQ7FjRGTy', this.state.token)
    }
    render(){
        return (
            <Fragment>
                <Navigation />

                <Container fluid={true} style={{ display: 'flex', margin: '0 auto', maxWidth: '1500px' }}>
                    <Sidebar>
                        <Row style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div>{this.state.album}</div>
                            <div>{this.state.artist}</div>
                        </Row>
                        <img src={this.state.art} alt='Album Art' />
                        <Row style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <button>Buy Now</button>
                            <button>Write Review</button>
                        </Row>
                        <Row>
                            <Col sm='5'>
                                <h5>Tracklist:</h5>
                                {Object.keys(this.state.tracks).map( element => {
                                    if (element === "items") {
                                        this.state.tracks[element].map( track => {
                                            return (
                                                <ul key={track.id}>{track.name}</ul>
                                            )
                                        })
                                    }
                                })}
                            </Col>
                        </Row>
                    </Sidebar>

                    <Container fluid={true} style={{ maxWidth: '1200px' }}>
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