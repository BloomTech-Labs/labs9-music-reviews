import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Row, Col, Container, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import './Search.css';

const H3 = styled.h3`
  color: #eac67a;
  text-shadow:
    -0.5px -0.5px 0 #000,
    0.5px -0.5px 0 #000,
    -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
`

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
      .catch(error => {
        console.log(error)
      })
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
    console.log('Enter is clicked');
    if (!this.props.loggedIn){
    window.location = '/login';
    }
  }

  render() {         
    const image = '../../Images/songbird.png';
    const renderSearch = 
    
    <Container fluid style = {{ position: "relative", margin: "0 auto", padding: "1rem 0", color: "#eac67a", maxWidth: "1600px" }}>
      {/* albums */}
      <Row>
        <Col md="3" xs="12" style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>
          {/* <Row  className="d-flex flex-column flex-wrap align-items-center"  */}        
          <H3>Albums</H3>
          <Card
                style = {{
                  maxHeight: "30rem",
                  margin: "0 auto",
                  // overflow: 'auto', 
                  overflowY: 'scroll', 
                  WebkitOverflowScrolling: 'touch',
                  WebkitScrollbarDisplay: 'none',
                  scrollBehavior: "smooth",
                  backgroundColor: "rgba(35, 50, 55, 1.0)"
                }}
          >
          {this.state.albums.map(album => {
                return  <NavLink key={album.id} to={`/albums/${album.id}`} style={{ textDecoration: 'none' }}>
                          <Col>
                              <Card key = {album.id} 
                                style = {{ 
                                  maxWidth: '180px',
                                  height: '14rem',
                                  padding: '0.5rem 0',
                                  margin: '0.5rem auto',
                                  border: '2px solid orange',
                                  alignItems: 'center',
                                  overflow: 'hidden',
                                }}
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
          </Card>
        </Col>

        {/* artists */}
        <Col md="3" xs="12" style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>
          <H3>Artists</H3>
          {/* <Row  className="d-flex flex-column flex-wrap align-items-center"  */}
          <Card
              style = {{
                maxHeight: "30rem",
                margin: "0 auto",
                // overflow: 'auto', 
                overflowY: 'scroll', 
                WebkitOverflowScrolling: 'touch',
                WebkitScrollbarDisplay: 'none',
                scrollBehavior: "smooth",
                border: "2px solid #eac67a",
                backgroundColor: "rgba(35, 50, 55, 1.0)"
            }}
            >
            {this.state.artists.map(artist => {
                  return  artist.images.length === 0 ? null : 
                          <NavLink key ={artist.id}to={`/artists/${artist.id}`}>
                            <Col>
                                <Card key = {artist.id} 
                                      style = {{ 
                                        maxWidth: '180px',
                                        height: '14rem',
                                        padding: '0.5rem 0',
                                        margin: '0.5rem auto',
                                        border: '2px solid orange',
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                      }}
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
            </Card>
        </Col>

        {/* tracks */}
        <Col md="6" xs="12" style={{ overflow: "hidden", textAlign: "center", padding: "2rem 1rem 0 1rem" }}>
          <H3>Tracks</H3> 
          <Card style={{ minWidth: "385px", backgroundColor: "rgba(35, 50, 55, 1.0)", borderBottom: "none" }}>
            <Row style={{ textAlign: "center", padding: "1rem" }}>
              <Col xs="3" md="4">Art</Col>
              <Col xs="3" md="4">Track Name</Col>
              <Col xs="3" md="4">Album Name</Col>
              {/* <Col md={2} xl={2} className="d-none d-xl-block" style={{ textAlign: 'center' }}>Track Time</Col> */}
            </Row>
          </Card>

          <Card
            className="flex-sm-column"
            style = {{
                maxHeight: "28.25rem",
                minWidth: "500px",
                margin: "0 auto",
                // overflow: 'auto';
                overflowY: 'scroll', 
                WebkitOverflowScrolling: 'touch',
                backgroundColor: "rgba(35, 50, 55, 1.0)"
              }}
          >
            {this.state.tracks.map(track => {
              // const seconds = this.convertToSeconds(track.duration_ms);
                return track.album.images.length === 0 ? null : 
                  <NavLink to={`/tracks/${track.id}`}>
                    <Card key = {track.id} style = {{ textAlign: 'center', margin: "0.5rem", padding: "1rem", border: "2px solid #eac67a" }}>
                    <Row noGutters>
                      <Col md="4" xs="2" style={{ verticalAlign: "middle", paddingLeft: "1rem" }}>
                        <CardImg src= {!track.album.images[0] ? image : track.album.images[0].url} alt = {track.name} style = {{ borderRadius: '50%', width: '4rem', padding: "0" }}
                        />  
                      </Col>
                      <Col md="4" xs="3" style={{ verticalAlign: "middle", paddingLeft: "1rem" }}>{track.name}</Col>
                      <Col md="4" xs="2" style={{ verticalAlign: "middle", paddingLeft: "1rem" }}>{track.album.name}</Col>
                      {/* <Col  md={2} xl={2} className="d-none d-xl-block" >{seconds}</Col> */}
                    </Row>
                    </Card>
                  </NavLink>
              })
            }
          </Card>
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
                    backgroundColor: '#eac67a',
                    color: 'white',
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

