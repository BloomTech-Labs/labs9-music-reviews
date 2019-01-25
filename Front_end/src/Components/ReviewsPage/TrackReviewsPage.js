


import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Row, Col, CardImg } from "reactstrap";
import TrackReviewCreateModal from "../CardModals/TrackReviewCreateModal";
import TrackReviewCard from "./TrackReviewCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

// const Sidebar = styled.div`
//   position: -webkit-sticky;
//   position: sticky;
//   top: 0;
//   z-index: 1;
//   height: 100%;
//   padding-top: 80px;
//   display: flex;
//   flex-direction: column;
//   align-items: middle;
// `;
const Iframe = styled.iframe`
  width: 380px;
  height: 80px;
  frameborder: 0;
`

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
      artistId: "",
      art: "",
      track: "",
      trackId: "",
      tracks: [],
      reviews: [],
      width: ""
    };
    this.getTrack = this.getTrack.bind(this);
  }
  getTrack = (trackId, token) => {
    axios
      .get(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState(
          {
            data: res.data,
            album: res.data.album.name,
            albumId: res.data.album.id,
            artist: res.data.artists[0]["name"],
            track: res.data.name,
            trackId: res.data.id
          },
          () => this.getAlbum(this.state.albumId, token)
        );
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
          width: res.data.images[1].height,
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
  redirectTo = (id, name) => {
    this.setState({
      trackId: id,
      track: name
    });
  };
  componentDidMount() {
    this.getTrack(
      this.props.match.params.id,
      this.props.cookies.get("access_token")
    );
    this.getTrackReviews();
  }
  render() {
    const trackReviews = this.state.reviews.filter(review => {
      return review.spotifyTrackID === this.props.match.params.id;
    });
    // console.log(trackReviews)
    const trackReviewFilteredbyUserID = trackReviews.filter(track => {
      return track.userID = this.props.userID
    })
    return (
      <Fragment>
        <Container
          fluid={true}
          style={{
            display: "flex",
            margin: "0 auto",
            maxWidth: "1600px",
            position: "relative",
            top: "6rem"  
          }}
        >
          <Row>
            <Col xs="12" md="4" style={{ position: "relative", top: "5rem", border: "1px solid red"}}>
              <Link to={`/albums/${this.state.albumId}`}>
                <Row style={{ alignSelf: "center" }}>
                  <h3>{this.state.album}</h3>
                </Row>
              </Link>
              <Link to={`/artists/${this.state.artistId}`}>
                <Row style={{ alignSelf: "center" }}>
                  <h5>{this.state.artist}</h5>
                </Row>
              </Link>
              {/* can add logic to render different size of album art based on screen size: stacked ternary */}
              {/* need to find a way to manipulate the img object from res.data */}
              <Link to={`/albums/${this.state.albumId}`}>
                <CardImg src={this.state.art} alt="Album Art" style={{ alignItems: "center"}}/>
              </Link>


              <Container fluid={true}> 
                {/* Spotify Player */}
                <Iframe src={`https://open.spotify.com/embed/track/${this.state.trackId}`}
                  allowtransparency="true" allow="encrypted-media"
                />
              </Container>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "1rem"
                }}
              >
                {/* Write Review Button Modal */}
                {trackReviewFilteredbyUserID.length === 0 ?
                  <TrackReviewCreateModal
                    {...this.props}
                    album={this.state.album}
                    artist={this.state.artist}
                    art={this.state.art}
                    track={this.state.track}
                    trackId={this.state.trackId}
                    userID={this.props.userID}
                  />
                  : null}
              </Row>
              <Row>
                <Col>
                  <h5 style={{ padding: "1rem" }}>Tracklist</h5>
                  {this.state.tracks.map(track => {
                    return (
                      <Link
                        to={`/tracks/${track.id}`}
                        onClick={() => this.redirectTo(track.id, track.name)}
                      >
                        <Row
                          className="align-items-center"
                          style={
                            track.id === this.state.trackId
                              ? {
                                display: "flex",
                                justifyContent: "space-between",
                                border: "3px solid red",
                                alignItems: "center"
                              }
                              : {
                                display: "flex",
                                justifyContent: "space-between"
                              }
                          }
                        >
                          <Col xs="1">
                            <h6>{track.track_number}</h6>
                          </Col>
                          <Col xs="10`">
                            <ul
                              className="align-items-center"
                              style={{
                                fontSize: "0.8rem",
                                alignItems: "center"
                              }}
                              key={track.id}
                            >
                              {track.name}
                            </ul>
                          </Col>
                          <Col xs="1">
                            <p
                              className="align-items-center"
                              style={{ color: "red", fontWeight: "800" }}
                            >
                              {track.explicit === true ? "E" : " "}
                            </p>
                          </Col>
                        </Row>
                      </Link>
                    );
                  })}
                </Col>
              </Row>
            </Col>

            <Col xs="12" md="8">
              <Container>
                <Container fluid={true} style={{ maxWidth: "1150px", position: "relative", top: "5rem" }}>
                  {trackReviews.map(review => (
                    <TrackReviewCard review={review} />
                  ))}
                </Container>
              </Container>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withCookies(TrackReviewsPage);