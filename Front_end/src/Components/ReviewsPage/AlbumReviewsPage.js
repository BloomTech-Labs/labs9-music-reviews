import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Row, Col, CardImg, Button } from "reactstrap";
import ReviewCreateModal from "../CardModals/ReviewCreateModal";
import AlbumReviewCard from "./AlbumReviewCard";
import axios from "axios";
import { Link } from 'react-router-dom';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

const Sidebar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class AlbumReviewsPage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      album: "",
      artist: "",
      artistId: "",
      art: "",
      tracks: [],
      reviews: []
    };
    this.getAlbum = this.getAlbum.bind(this);
  }
  getAlbum = (albumId, token) => {
    axios
      .get(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({
          data: res.data,
          album: res.data.name,
          artist: res.data.artists[0]["name"],
          artistId: res.data.artists[0]["id"],
          art: res.data.images[1].url,
          tracks: res.data.tracks.items
        });
      })
      .catch(err => console.log(err));
  };

  getAlbumReviews() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/albumReviews")
      .then(response => {
        const userReviews = response.data;
        const newState = Object.assign({}, this.state, {
          reviews: userReviews
        });
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAlbum(this.props.match.params.id, this.props.cookies.get("access_token"));
    this.getAlbumReviews();
  }
  render() {
    console.log(this.props.match.params.id)
    const albumReviews = this.state.reviews.filter(review => {
      return review.spotifyAlbumID === this.props.match.params.id;
    });
    return (
      <Fragment>
        <Container
          fluid={true}
          style={{ display: "flex", margin: "0 auto", maxWidth: "1600px" }}
        >
          <Sidebar>
            <Row style={{ alignSelf: "center" }}>
              <h3>{this.state.album}</h3>
            </Row>
            <Link to={`/artists/${this.state.artistIdgit }`}>
              <Row style={{ alignSelf: "center" }}>
                <h5>{this.state.artist}</h5>
              </Row>
            </Link>
            {/* can add logic to render different size of album art based on screen size: stacked ternary */}
            {/* need to find a way to manipulate the img object from res.data */}
            <CardImg src={this.state.art} alt="Album Art" />
            <Row
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "1rem"
              }}
            >
              {/* Write Review Button Modal */}
              <ReviewCreateModal
                {...this.props}
                album={this.state.album}
                artist={this.state.artist}
                art={this.state.art}
                tracks={this.state.tracks}
              />
            </Row>
            <Row>
              <Col>
                <h5 style={{ padding: "1rem" }}>Tracklist</h5>
                {this.state.tracks.map(track => {
                  return (
                    <Link to={`/tracks/${track.id}`}>
                      <Row
                        className="align-items-center" 
                        style={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Col xs="1">
                          <h6>{track.track_number}</h6>
                        </Col>
                        <Col xs="10`">
                          <ul className="align-items-center" style={{ fontSize: "0.8rem", alignItems: "center" }} key={track.id}>
                            {track.name}
                          </ul>
                        </Col>
                        <Col xs="1">
                          <p className="align-items-center" style={{ color: "red", fontWeight: "800" }}>
                            {track.explicit === true ? "E" : " "}
                          </p>
                        </Col>
                      </Row>
                    </Link>
                  );
                })}
              </Col>
            </Row>
          </Sidebar>
          
          <Container fluid={true} style={{ maxWidth: "1150px" }}>
            {albumReviews.map(review => (
              <AlbumReviewCard review={review}/>
            ))}
          </Container>
        </Container>
      </Fragment>
    );
  }
}

export default withCookies(AlbumReviewsPage);
