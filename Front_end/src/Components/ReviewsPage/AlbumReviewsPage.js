import React, { Component } from "react";
import { Card, Row, Col, CardImg } from "reactstrap";
import AlbumReviewCreateModal from "../CardModals/AlbumReviewCreateModal";
import ReviewCard from "./ReviewCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { withAuthorization } from "../Session";
import "./reviews.css";

class AlbumReviewsPage extends Component {
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
      tracks: [],
      reviews: [],
      width: "",
      albumReview: true
    };
    this.getAlbum = this.getAlbum.bind(this);
  }
  getAlbum = (albumId, token) => {
    axios
      .get(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        this.setState(
          {
            data: res.data,
            album: res.data.name,
            albumId: res.data.id,
            artist: res.data.artists[0]["name"],
            artistId: res.data.artists[0]["id"],
            art: res.data.images[1].url,
            tracks: res.data.tracks.items,
            width: res.data.images[1].height
          },
          console.log(res.data)
        );
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
    this.getAlbum(
      this.props.match.params.id,
      this.props.cookies.get("access_token")
    );
    this.getAlbumReviews();
  }
  render() {
    const albumReviews = this.state.reviews.filter(review => {
      return review.spotifyAlbumID === this.props.match.params.id;
    });
    const albumReviewsFilteredbyUserID = albumReviews.filter(album => {
      return album.userID === this.props.userID;
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
            <h2>Album: {this.state.album}</h2>
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
              textDecoration: "none",
              textShadow:
                "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
            }}
          >
            <CardImg
              src={this.state.art}
              alt="Album Art"
              style={{ maxWidth: "400px", width: "100%" }}
            />

            {/* Spotify Player */}
            <iframe
              src={`https://open.spotify.com/embed/album/${this.state.albumId}`}
              title="Spotify player"
              allowtransparency="true"
              allow="encrypted-media"
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
            {albumReviewsFilteredbyUserID.length === 0 ? (
              <AlbumReviewCreateModal
                {...this.props}
                album={this.state.album}
                artist={this.state.artist}
                art={this.state.art}
                tracks={this.state.tracks}
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
                <Link to={`/tracks/${track.id}`} className="link">
                  <Row>
                    <Col xs="3" style={{ textAlign: "right" }}>
                      <h6>{track.track_number}.</h6>
                    </Col>
                    <Col xs="9">
                      <ul
                        style={{
                          fontSize: "0.8rem",
                          alignItems: "center"
                        }}
                        key={track.id}
                      >
                        {track.name}
                      </ul>
                    </Col>
                  </Row>
                </Link>
              );
            })}
          </Col>
        </Col>
        <Col md={{ size: 7, offset: 5 }}>
          {albumReviews.length === 0 ? (
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#984B43",
                fontFamily: "Merriweather Sans"
              }}
            >
              <h3>Be the first to write a review for this album!</h3>
            </Row>
          ) : (
            albumReviews.map(review => (
              <ReviewCard
                review={review}
                userID={this.props.userID}
                albumReview={this.state.albumReview}
              />
            ))
          )}
        </Col>
      </Row>
    );
  }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(withCookies(AlbumReviewsPage));

//export default withCookies(AlbumReviewsPage);
