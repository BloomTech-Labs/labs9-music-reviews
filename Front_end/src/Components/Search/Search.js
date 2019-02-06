import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Row, Col, Container, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import './Search.css';

const H3 = styled.h3`
  font-family: Merriweather Sans,
  color: #984b43;
`

const cardStyle = {
  maxWidth: '180px',
  height: '14rem',
  padding: '0.5rem 0',
  margin: '0.5rem auto',
  alignItems: 'center',
  overflow: 'hidden',
  background: "#233237",
  textDecoration: "none",
  color: "#eac67a"
};

const API_URL = 'https://api.spotify.com/v1/search';

class Search extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props){
    super(props);
    const { cookies } = props;
      this.state = {
        query: '',
        data: [],
        albums: [],
        artists: [],
        tracks: [],
      }
  }

  componentDidMount() {
    this.renderAlbumArtistTrack(this.state.query)
  }

  renderAlbumArtistTrack = () => {
    let access_token = this.props.cookies.get('access_token');
    axios.get(`${API_URL}?q=${this.state.query.split(' ').join('%20')}&type=album%2Cartist%2Ctrack`, { 'headers': { 'Authorization': 'Bearer ' + access_token } })
      .then(({ data }) => {
          this.setState({ 
            data: data,
            albums: data.albums.items,
            artists: data.artists.items,
            tracks: data.tracks.items,
          })
      })
      .catch(error => error.message)
  }

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
          this.renderAlbumArtistTrack()
        } else if (!this.state.query) {
      }
    })
  }

  noEnter = (event) => {
    event.preventDefault();
  }

  convertToSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  keyPress = (event) => {
    event.preventDefault();
    if (!this.props.loggedIn){
    window.location = '/login';
    }
  }

  render() {         
    const image = '../../Images/songbird.png';
    const renderSearch = 
    
    <Container fluid style={{ 
          position: "relative",
          margin: "0 auto",
          padding: "1rem 0",
          color: "#984b43",
          maxWidth: "1200px",
          fontFamily: "Lato",
          overflow: "hidden"
        }}
      >
      {/* albums */}
      <Row>
        <Col md="4" xs="12" style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>      
          <H3>Albums</H3>
          <Container style={{
              maxHeight: this.props.maxHeight,
              margin: "0 auto",
              overflowY: 'scroll', 
              WebkitOverflowScrolling: 'touch',
              WebkitScrollbarDisplay: 'none',
              scrollBehavior: "smooth",
              backgroundColor: "rgba(35, 50, 55, 0)"
            }}
          >
          {this.state.albums.map(album => {
                return  <NavLink key={album.id} to={`/albums/${album.id}`} style={{ textDecoration: 'none' }}>
                          <Col>
                              <Card key = {album.id} 
                                style = { cardStyle }
                              >
                                <CardImg src= {!album.images[0] ?  image : album.images[0].url}  alt = {album.name} style = {{ borderRadius: '50%', width: '7rem' }}/>
                                <CardBody>
                                  <CardTitle>{album.name}</CardTitle>
                                </CardBody>
                              </Card>
                          </Col>
                        </NavLink>
              })
            }
          </Container>
        </Col>

        {/* artists */}
        <Col md="4" xs="12" style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>
          <H3>Artists</H3>
          <Container style={{
              maxHeight: this.props.maxHeight,
              margin: "0 auto",
              overflowY: 'scroll', 
              WebkitOverflowScrolling: 'touch',
              WebkitScrollbarDisplay: 'none',
              scrollBehavior: "smooth",
              backgroundColor: "rgba(35, 50, 55, 0)"
            }}
          >
            {this.state.artists.map(artist => {
                  return  artist.images.length === 0 ? null : 
                          <NavLink key = {artist.id} key ={artist.id}to={`/artists/${artist.id}`} style={{ textDecoration: 'none' }}>
                            <Col>
                                <Card  
                                      style = { cardStyle }
                                  >
                                  <CardImg src= {!artist.images[0] ? image : artist.images[0].url}  alt = {artist.name} style = {{borderRadius: '50%', width: '7rem'}}/>
                                  <CardBody>
                                    <CardTitle>{artist.name}</CardTitle>
                                  </CardBody>
                                </Card>
                            </Col>
                          </NavLink>
                })
              }
            </Container>
        </Col>

        {/* tracks */}
        <Col md="4" xs="12" style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>
          <H3>Tracks</H3>
          <Container style={ {
                maxHeight: this.props.maxHeight,
                margin: "0 auto",
                overflowY: 'scroll', 
                WebkitOverflowScrolling: 'touch',
                WebkitScrollbarDisplay: 'none',
                scrollBehavior: "smooth",
                backgroundColor: "rgba(35, 50, 55, 0)"
              }}
            >
            {this.state.tracks.map(track => {
                return track.album.images.length === 0 ? null : 
                  <NavLink  key = {track.id} to={`/tracks/${track.id}`} style={{ textDecoration: "none" }}>
                    <Col>
                      <Card style = { cardStyle }> 
                        <CardImg src= {!track.album.images[0] ? image : track.album.images[0].url} alt = {track.name} style = {{ borderRadius: '50%', width: '7rem', padding: "0" }} />  
                          <CardBody>
                            <CardTitle>{track.artists[0].name}</CardTitle>
                            <CardTitle>{track.name}</CardTitle>
                          </CardBody>
            
                        </Card>
                    </Col>
      
                  </NavLink>
              })
            }
          </Container>
        </Col>
      </Row>
    </Container>
                     
    return (
      <Container fluid>
        <Row>
          <Col xs = '12' sm = '12' md = '12' lg = '12'>
            <Form onSubmit={this.noEnter} style={{ position: "relative" }}>
                <Input
                  type="search"
                  name="search"
                  placeholder = 'Enter an Album, Artist or Track'
                  onChange={this.onChange}
                  value = {this.state.query}
                  style={{
                    minWidth: "300px",
                    border: "none",
                  }}
                  />
              </Form>
          </Col>
        </Row>

        {this.state.query.length <= 1 || !this.state.query ? null : renderSearch}
      </Container>
      
    );
  }
}

export default withCookies(Search);

