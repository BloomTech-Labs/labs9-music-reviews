import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Form, Input, Row, Col, ListGroup, ListGroupItem, Container } from 'reactstrap';
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
        if (this.state.query.length % 2 === 0) {
          this.renderAlbumArtistTrack()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    const renderSearh = <Fragment>
                            <Row>
                              <Col>
                                <ListGroup>
                                  <h1>Matching albums for {this.state.query}</h1>
                                {this.state.albums.map(album => {
                                    return <Link to={`/album/${album.id}`}>
                                      <ListGroupItem><img src= {album.images[2].url} className="rounded float-left" /> {album.name}</ListGroupItem>
                                    </Link>
                                  })
                                }
                                </ListGroup>
                              </Col>
                            </Row>
                            <Row>
                                <Col>
                                  <ListGroup>
                                    <h1>Matching artists for {this.state.query}</h1>
                                  {this.state.artists.map(artist=> {
                                      return artist.images.length === 0 ? null :<ListGroupItem> <img src={artist.images[2].url} className="rounded float-left" /> {artist.name}</ListGroupItem>
                                    })
                                  }
                                
                                
                                  </ListGroup>
                                </Col>
                              </Row>
                            <Row>
                              <Col>
                                <ListGroup>
                                  <h1>Matching tracks for {this.state.query}</h1>
                                {this.state.tracks.map(track => {
                                    return track.album.images.length === 0 ? null : <ListGroupItem><img src= {track.album.images[2].url}  /> {track.name}</ListGroupItem>
                                  })
                                }
                                </ListGroup>
                              </Col>
                            </Row>
                        </Fragment>
                     

    return (
      <Container fluid>
        <Row>
          <Col xs = '12' sm = '12' md = '12' lg = '12'>
            <Form>
                <Input
                  placeholder = 'Enter an Album, Artist or Track'
                  innerRef={input => this.search = input}
                  onChange={this.onChange}
                  />
              </Form>
          </Col>
        </Row>

        {this.state.query.length <= 1 || !this.state.query ? null : renderSearh}
      </Container>
      
    );
  }
}

export default withCookies(Search);

