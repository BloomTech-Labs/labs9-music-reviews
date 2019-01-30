import React, { Component, Fragment } from "react";
import { Row, Col, ListGroup, ListGroupItem, Container } from "reactstrap";
import AlbumCard from "./AlbumCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class ArtistPage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      artist: "",
      art: "",
      albums: []
    };
  }

  getArtistInfo = (artistId, token) => {
    axios
      .get(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        this.setState({
          genres: response.data.genres,
          artist: response.data.name,
          art: response.data.images[1].url
        });
      })
      .catch(err => console.log(err));
  };

  getArtistAlbums = (artistId, token) => {
    axios
      .get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(data => {
        this.setState({
          albums: data.data.items
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getArtistInfo(
      this.props.match.params.id,
      this.props.cookies.get("access_token")
    );
    this.getArtistAlbums(
      this.props.match.params.id,
      this.props.cookies.get("access_token")
    );
  }

  render() {
    const renderData = this.state.albums.map(album => {
      return (
        <NavLink to={`/albums/${album.id}`} style={{ textDecoration: 'none', color: "black" }}>
          <AlbumCard
            key={album.id}
            total_tracks={album.total_tracks}
            image={album.images[1].url}
            album={album.name}
            release_date={album.release_date}
          />
        </NavLink>
      );
    });

    return (
      <Container fluid>
        <Row style={{ position: "relative", top: "15rem" }}>
          <Col xs="4">
            <h1>{this.state.artist}</h1>
            <Row>
              <Col align="right">
                <h4>Genre(s):</h4>
              </Col>
              <Col>
                <ListGroup>
                  {this.state.genres.map((genre, index) => {
                    return `${ (index ? ', ' : '') + genre }`;
                  })}
                </ListGroup>
              </Col>
            </Row>
          </Col>
          <Col xs="6">
            <img src={this.state.art} alt="Art of the artist" align="center"  style={{ maxWidth: '500px', maxHeight: "500px" }}/>
          </Col>
        </Row>
        <h1 style={{ position: "relative", top: "15rem" }}>Albums</h1>

        <Row style={{ position: "relative", top: "15rem" }}>{renderData}</Row>
      </Container>
    );
  }
}

export default withCookies(ArtistPage);
