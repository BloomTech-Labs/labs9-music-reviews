import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Row, Col, CardImg, Button } from "reactstrap";
// import TrackReviewCreateModal from "../CardModals/TrackReviewCreateModal";
// import AlbumReviewCard from "./AlbumReviewCard";
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

class TrackReviewsPage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        album: "",
        albumId: "",
        artist: "",
        art: "",
        track: "",
        trackId: "",
        tracks: [],
        reviews: []
    };
    this.getTrack = this.getTrack.bind(this);
  }
  getTrack = (trackId, token) => {
    axios
      .get(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({
          data: res.data,
          album: res.data.album.name,
          albumId: res.data.album.id,
          artist: res.data.artists[0]["name"],
          track: res.data.name,
          trackId: res.data.id,
        }, () => this.getAlbum(this.state.albumId, token));
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };
  getAlbum = (albumId, token) => {
    axios
      .get(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState({
          art: res.data.images[1].url,
          tracks: res.data.tracks.items
        });
      })
      .catch(err => console.log(err));
  };
  getTrackReviews() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/trackReviews")
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
    this.getTrack(this.props.match.params.id, this.props.cookies.get("access_token"));
    this.getTrackReviews();
  }
  render() {
    // console.log(this.props.match.params.id)
    // const albumReviews = this.state.reviews.filter(review => {
    //   return review.spotifyAlbumID === this.props.match.params.id;
    // });
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
            <Row style={{ alignSelf: "center" }}>
              <h5>{this.state.artist}</h5>
            </Row>
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
              <Button>Buy Now</Button>
              {/* Write Review Button Modal */}
              {/* <TrackReviewCreateModal
                {...this.props}
                album={this.state.album}
                artist={this.state.artist}
                art={this.state.art}
                track={this.state.track}
                trackId={this.state.trackId}
              /> */}
            </Row>
            <Row>
              <Col>
                <h5 style={{ padding: "1rem" }}>Tracklist</h5>
                {this.state.tracks.map(track => {
                  return (
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <Col xs="1">
                        <h6>{track.track_number}</h6>
                      </Col>
                      <Col xs="9">
                        <ul style={{ fontSize: "0.8rem" }} key={track.id}>
                          {track.name}
                        </ul>
                      </Col>
                      <Col xs="2">
                        <span style={{ color: "red", fontWeight: "800" }}>
                          {track.explicit === true ? "E" : " "}
                        </span>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
            </Row>
          </Sidebar>
          
          <Container fluid={true}>
                <h2>Track: {this.state.track}</h2>
          </Container>
          {/* <Container fluid={true} style={{ maxWidth: "1150px" }}>
            {albumReviews.map(review => (
              <AlbumReviewCard review={review}/>
            ))}
          </Container> */}
        </Container>
      </Fragment>
    );
  }
}

export default withCookies(TrackReviewsPage);
