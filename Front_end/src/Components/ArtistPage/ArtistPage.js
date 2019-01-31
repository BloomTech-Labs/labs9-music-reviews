import React, { Component } from "react";
import { Row, Col, ListGroup, Container, Card } from "reactstrap";
import AlbumCard from "./AlbumCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

const cardStyle = {
  background: "#233237",
  padding: "1rem",
}

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
    function dateConverter(date) {
      var msec = Date.parse(date);
      var d = new Date(msec);
      return d.toString().split("G",1)[0].slice(3,15);
    }
    // Album Data
    const renderData = this.state.albums.map(album => {
      return (
        <NavLink to={`/albums/${album.id}`} style={{ textDecoration: 'none', color: "black", margin: "0 auto" }}>
          <AlbumCard
            key={album.id}
            total_tracks={album.total_tracks}
            image={album.images[1].url}
            album={album.name}
            release_date={dateConverter(album.release_date)}
          />
        </NavLink>
      );
    });

    return (
      <Container fluid style={{ fontFamily: "Lato", margin: "0 auto", maxWidth: "1600px" }}>
        <Row style={{ 
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              top: "12rem",
              margin: "0 auto",
              maxWidth: "800px",
            }}
          >
          <Col xs="12" md="6" style={{ maxWidth: "320px", margin: "1rem" }}>
            <Card style={ cardStyle }>
              <h1 style={{ fontFamily: "Merriweather Sans", padding: "1rem" }}>
                {this.state.artist}
              </h1>
                <h6 style={{ paddingLeft: "1rem", fontWeight: "700" }}>Genre(s):</h6>
      
              <Col>
                <ListGroup style={{ fontFamily: "Lato" }}>
                  {this.state.genres.map((genre, index) => {
                    return `${ (index ? ', ' : '') + genre }`;
                  })}
                </ListGroup>
              </Col>
            </Card>
          </Col>

          <Col xs="12" md="6" style={{ display: "flex", margin: "0 auto" }}>
            <img src={this.state.art} alt="Art of the artist"
              style={{ maxWidth: '325px', maxHeight: "325px", border: "2px solid #984b43", margin: "0 auto" }}
            />
          </Col>

        </Row>
                  
        <Row>
          <h1 style={{ 
              position: "relative",
              color: "#984b43",
              top: "12rem",
              fontFamily: "Merriweather Sans",
              margin: "0 auto",
            }}
          >
            Albums
          </h1>
          <Row style={{ position: "relative", top: "12rem", maxHeight: "40rem", overflowY: "scroll" }}>{renderData}</Row>
        </Row>
      </Container>
    );
  }
}

export default withCookies(ArtistPage);
