import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Row, Col, Container, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';


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
        tracks: []
      }
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

  onChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
          this.renderAlbumArtistTrack()
        } else if (!this.state.query) {
      }
    })
  }



  convertToSeconds = (ms) => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  render() {
    const image = '../../Images/songbird.png';
    const renderSearch = <Container style = {{marginTop: '30px'}}>
                            <Row>
                              <h3>Albums</h3>
                            </Row>
                            
                              <div className="d-flex flex-row flex-nowrap align-items-center" style = {{overflow: 'auto', WebkitOverflowScrolling: 'touch'}} >
                              {this.state.albums.map(album => {
                                    return  <NavLink to={`/album/${album.id}`} style={{ textDecoration: 'none' }}><Col>
                                                <Card key = {album.id} style = {{width: '10rem', border: 'none'}}>
                                                  <CardImg src= {!album.images[0] ?  image : album.images[0].url}  alt = {album.name} style = {{borderRadius: '50%', width: '7rem'}}/>
                                                  <CardBody>
                                                    <CardTitle>{album.name}</CardTitle>
                                                  </CardBody>
                                                </Card>
                                            </Col>
                                            </NavLink>
                                  })
                                }
                            </div>
                            <Row>
                            <Row style = {{marginTop: '20px'}}>
                              <h3>Artists</h3>
                            </Row>
                            
                              <div className="d-flex flex-row flex-nowrap align-items-center" style ={{overflow: 'auto', WebkitOverflowScrolling: 'touch'}}>
                              {this.state.artists.map(artist => {
                                    return  artist.images.length === 0 ? null : <NavLink to={`/artist/${artist.id}`}><Col>
                                                <Card key = {artist.id} style = {{width: '10rem', border: 'none'}}>
                                                  <CardImg src= {!artist.images[0] ? image : artist.images[0].url}  alt = {artist.name} style = {{borderRadius: '50%', width: '7rem'}}/>
                                                  <CardBody>
                                                    <CardTitle>{artist.name}</CardTitle>
                                                  </CardBody>
                                                </Card>
                                            </Col>
                                            </NavLink>
                                  })
                                }
                            </div>
                            </Row>
                            <Row style={{marginTop: '30px'}}>
                              <h3>Tracks</h3>
                            </Row>
                            <Row>
                              <Col>
                              <Row style = {{marginBottom: '20px'}}><Col sm={2}>Art</Col><Col sm={5}>Track Name</Col><Col sm={3} className = 'd-none d-md-block'>Album Name</Col><Col sm={2} className = 'd-none d-lg-block'>Track Time</Col></Row>
                                {this.state.tracks.map(track => {

                                  const seconds = this.convertToSeconds(track.duration_ms);
                                    return track.album.images.length === 0 ? null : <Row key = {track.id} style = {{borderBottom: '1px solid grey', padding: '5px 0 5px 0'}}><Col sm={2} align-middle = 'true'><img src= {track.album.images[2].url} alt = {track.name} className="rounded-circle"/></Col><Col sm={5} align-middle = 'true'>{track.name}</Col><Col sm={3} className = 'd-none d-md-block' align-middle = 'true'>{track.album.name}</Col><Col sm={2} className = 'd-none d-lg-block' align-middle = 'true'>{seconds}</Col></Row>
                                  })
                                }
                              </Col>
                            </Row>
                        </Container>
                     

    return (
      <Container fluid>
        <Row >
          <Col xs = '12' sm = '12' md = '12' lg = '12'>
            <Form>
                <Input
                  placeholder = 'Enter an Album, Artist or Track'
                  innerRef={input => this.search = input}
                  onChange={this.onChange}
                  style={{
                    padding: '5px',
                    height: '30px',
                    backgroundColor: '#495057',
                    color: '#fff'
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

