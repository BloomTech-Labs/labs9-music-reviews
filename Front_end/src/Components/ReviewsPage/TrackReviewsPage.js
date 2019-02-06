import React, { Component } from "react";
import { Row, Col, CardImg, Card } from "reactstrap";
import TrackReviewCreateModal from "../CardModals/TrackReviewCreateModal";
import ReviewCard from "./ReviewCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { withAuthorization } from "../Session";
import './reviews.css'

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
      width: "",
      trackReview: true
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
    console.log(trackReviews, "Line 97");
    const trackReviewFilteredbyUserID = trackReviews.filter(track => {
      return (track.userID = this.props.userID);
    });

    return (
      <Row style={{ paddingTop: "10rem", marginBottom: "1rem" }}>
        <Col md={5} id="left" className="scrollbox scrollbox-content">
        <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#984B43",
              fontFamily: "Merriweather Sans",
              width: "75%",
              margin: "15px auto 0"
            }}
          >
            <h2>Track: {this.state.album}</h2>
          </div>
          {/* can add logic to render different size of album art based on screen size: stacked ternary */}
          {/* need to find a way to manipulate the img object from res.data */}
          {/* COVER ART */}
          <Card
            body
            className="text-center"
            style={{
              background: "transparent",
              border: "none",
              alignItems: "center",
              textDecoration: "none"
            }}
          >
            <Link
              style={{ maxWidth: "400px", width: "100%" }}
              to={`/albums/${this.state.albumId}`}
            >
              <CardImg
                src={this.state.art}
                alt="Album Art"
                style={{ maxWidth: "400px", width: "100%" }}
              />
            </Link>
            {/* Spotify Player */}
            <iframe
              src={`https://open.spotify.com/embed/track/${this.state.trackId}`}
              allowtransparency="true"
              allow="encrypted-media"
              title='Spotify music player'
              style={{
                maxWidth: "400px",
                width: "100%",
                height: "80px",
                border: "none"
              }}
              class="d-block mx-auto"
            />
          </Card>
          <Row className="mb-3" style={{ justifyContent: "center" }}>
            {/* Write Review Button Modal */}
            {trackReviewFilteredbyUserID.length === 0 ? (
              <TrackReviewCreateModal
                {...this.props}
                album={this.state.album}
                artist={this.state.artist}
                art={this.state.art}
                track={this.state.track}
                trackId={this.state.trackId}
                userID={this.props.userID}
              />
            ) : null}
          </Row>
          {/* end of Create  */}

          <Row style={{ justifyContent: "center" }}>
            <Link className="link" to={`/artists/${this.state.artistId}`}>
              <h5>See all albums by: {this.state.artist} </h5>
            </Link>
          </Row>
          <Col
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              padding: "1rem"
            }}
          >
            {this.state.tracks.map(track => {
              return (
                <Link
                  to={`/tracks/${track.id}`}
                  onClick={() => this.redirectTo(track.id, track.name)}
                  className="link"
                >
                  <Row>
                    <Col xs="3" style={{ textAlign: "right" }}>
                      <h6>{track.track_number}.</h6>
                    </Col>
                    <Col xs="9">                      
                        {track.id === this.state.trackId ? (
                          <h6 key={track.id} style={{ fontWeight: "bold" }}>
                          {track.name}{" "}
                          <i
                            style={{ marginLeft: "1rem", color: "black", }}
                            class="fas fa-compact-disc"
                          />
                        </h6>) : <h6 key={track.id}>
                          {track.name}</h6>}                      
                    </Col>
                  </Row>
                </Link>
              );
            })}
          </Col>
        </Col>
        <Col md={{ size: 7, offset: 5 }}>
          {trackReviews.length === 0 ? (
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#984B43", 
                fontFamily: "Merriweather Sans"
              }}
            >
              <h3>Be the first to write a review for this track!</h3>
            </Row>
          ) : (
            trackReviews.map(review => (
              <ReviewCard
                review={review}
                trackReview={this.state.trackReview}
              />
            ))
          )}
        </Col>
      </Row>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(withCookies(TrackReviewsPage));
//export default withCookies(TrackReviewsPage);
