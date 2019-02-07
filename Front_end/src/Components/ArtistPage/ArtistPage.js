import React, { Component } from "react";
import { Row, Col, ListGroup, Container, Card } from "reactstrap";
import AlbumCard from "./AlbumCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { withAuthorization } from '../Session';

const cardStyle = {
  background: "#233237",
  padding: "1rem",
  height: "100%",
  flexGrow: "3",
  color: "rgb(234, 198, 122)"
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
      return d.toString().split("G",1)[0].slice(4,15);
    }

    function getUnique(arr, comp) {
      const unique = arr
          .map(e => e[comp])
          .map((e, i, final) => final.indexOf(e) === i && i)  // store the keys of the unique objects
          .filter(e => arr[e]).map(e => arr[e]);             // eliminate the dead keys & store unique objects
       return unique;
    }
    
    // Album Data
    const renderData = getUnique(this.state.albums.map(album => {
      return (
        <NavLink  key={album.name} to={`/albums/${album.id}`} style={{ textDecoration: 'none', color: "black", margin: "0 auto" }}>
          <AlbumCard
            key={album.name}
            total_tracks={album.total_tracks}
            image={album.images[1].url}
            album={album.name}
            release_date={dateConverter(album.release_date)}
          />
        </NavLink>
      );
    }), 'key').sort((a,b) => { return new Date(b['props']['children']['props']['release_date']) - new Date(a['props']['children']['props']['release_date']) });

    console.log(renderData)

    return (
      <Container fluid style={{ fontFamily: "Lato", margin: "0 auto", maxWidth: "1600px", paddingTop: '8rem' }}>
        
        <Row noGutters style={{ 
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              position: "relative",
              margin: "0 auto",
              maxWidth: "800px",
            }}
          >
          <h1 style={{ color: "#984b43", fontFamily: "Merriweather Sans", fontWeight: "700" }}>Artist Info</h1>
          <Row noGutters style={{ margin: "0 auto" }}>
            <Col xs="12" md="6">
              <Card style={ cardStyle }>
                <h2 style={{ fontFamily: "Merriweather Sans", padding: "1rem" }}>
                  {this.state.artist}
                </h2>
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

            <Col xs="12" md="6">
              <img src={this.state.art} alt="Art of the artist"
                style={{ border: "2px solid #984b43", width: "100%" }}
              />
            </Col>
          </Row>

        </Row>
                  
        <Container fluid>
        <Row>
          <h1 style={{ 
             
              color: "#984b43",
              fontFamily: "Merriweather Sans",
              fontWeight: "700",
              margin: "0 auto",
              padding: "2rem 0"
            }}
          >
            Albums
          </h1>
          </Row>
          <Row style={{  maxHeight: "40rem", overflowY: "scroll" }}>{renderData}</Row>
        </Container>
      </Container>
    );
  }
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(withCookies(ArtistPage));

// export default withCookies(ArtistPage);
