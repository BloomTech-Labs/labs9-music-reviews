import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Form, Input, Row, Col, Container, Card, CardImg, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
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

  render() {
    const image = '../../Images/songbird.png';
    const renderSearch = <Container style = {{marginTop: '30px'}}>
                            <Row>
                              <h3>Albums</h3>
                            </Row>
                            
                              <div className="d-flex flex-row overflow-auto" >
                              {this.state.albums.map(album => {
                                    return  <Col>
                                                <Card key = {album.id} style = {{width: '10rem', textAlign: 'center', border: 'none'}}>
                                                  <CardImg src= {!album.images[0] ?  image : album.images[0].url}  alt = {album.name} style = {{borderRadius: '50%', width: '7rem'}}/>
                                                  <CardBody>
                                                    <CardTitle>{album.name}</CardTitle>
                                                  </CardBody>
                                                </Card>
                                            </Col>
                                  })
                                }
                            </div>
                            <Row>
                            <Row style = {{marginTop: '20px'}}>
                              <h3>Artists</h3>
                            </Row>
                            
                              <div className="d-flex flex-row overflow-auto">
                              {this.state.artists.map(artist => {
                                    return  artist.images.length === 0 ? null : <Col>
                                                <Card key = {artist.id} style = {{width: '10rem', textAlign: 'center', border: 'none'}}>
                                                  <CardImg src= {!artist.images[0] ? image : artist.images[0].url}  alt = {artist.name} style = {{borderRadius: '50%', width: '7rem'}}/>
                                                  <CardBody>
                                                    <CardTitle>{artist.name}</CardTitle>
                                                  </CardBody>
                                                </Card>
                                            </Col>
                                  })
                                }
                            </div>
                            </Row>
                            <Row>
                              <h3>Tracks</h3>
                            </Row>
                            <Row>
                              <Col>
                                {this.state.tracks.map(track => {
                                    return track.album.images.length === 0 ? null : <Row key = {track.id} align-middle = 'true'><Col><img src= {track.album.images[2].url} alt = {track.name} className="rounded-circle"/></Col> <Col>{track.name}</Col><Col>{track.album.name}</Col><Col>{(track.duration_ms/60000).toFixed(2)} minutes</Col></Row>
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

