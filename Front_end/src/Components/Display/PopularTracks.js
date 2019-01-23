import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import { NavLink } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { Row, Col, CardImg, Container } from 'reactstrap';



const url = 'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF';
 // TOP50 most playable tracks in the world
class PopularTracks extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
         }
    }

    componentDidMount() {
        let access_token = this.props.cookies.get('access_token');
        axios
        .get(url, { 'headers': { 'Authorization': 'Bearer ' + access_token } })
          .then(response => {
            this.setState({
              data: response.data.tracks.items,
            })
          })
          .catch(function(error) {
            console.log(error)
          })
      }

    render() {
        const image = '../../Images/songbird.png';
        const renderData =  <> <Row style={{marginTop: '30px'}}>
                                <h1>The Most Popular Tracks</h1>
                                </Row>
                                    <Row>
                                        <Col>
                                            <Row style = {{ marginBottom: '20px' }}>
                                                <Col sm={2} style={{ textAlign: 'center' }}>Art</Col>
                                                <Col sm={1} style={{ textAlign: 'left' }}>Popularity</Col>
                                                <Col sm={5} style={{ textAlign: 'left' }}>Track Name</Col>
                                                <Col sm={4} style={{ textAlign: 'left' }}>Artist Name</Col>
                                            </Row>
                                                {this.state.data.map(data => {
                                                    return data.track.artists.map(artist => {
                                                        if (data.track.popularity > 95) {
                                                        return data.track.album.images.length === 0 ? null : 
                                                            <NavLink to={`/tracks/${data.track.id}`}>
                                                                <Row key = {data.track.id} style = {{ maxWidth: '1600px', textAlign: 'center', padding: '1rem' }}>
                                                                    <Col sm={2}>
                                                                    <CardImg src= {!data.track.album.images[0] ? image : data.track.album.images[0].url}
                                                                            alt = {data.track.name} style = {{borderRadius: '50%', width: '7rem'}}
                                                                    />  
                                                                    </Col>
                                                                    <Col sm={1} className="d-flex align-items-center">{data.track.popularity}</Col>
                                                                    <Col sm={5} className="d-flex align-items-center">{data.track.name}</Col>
                                                                    <Col sm={4} className="d-flex align-items-center">{artist.name}</Col>
                                                                </Row>
                                                            </NavLink>
                                                        }
                                                    })
                                                })}
                                        </Col>
                                    </Row>
                                </>
        return (
            <Container>
                {renderData}   
            </Container>
         );
    }
}
 
export default withCookies(PopularTracks);