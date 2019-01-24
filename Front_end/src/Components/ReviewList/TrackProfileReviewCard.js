import React, { Component, Fragment } from "react";
import ReviewEditModal from "../CardModals/ReviewEditModal";
import ViewStars from "../StarsRating/ViewStars";
import { Row, Col, Container } from "reactstrap";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class TrackProfileReviewCard extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      data: [],
      album: "",
      artist: "",
      art: "",
      tracks: [],
      track: "",
      albumId: ""
    };
    this.getAlbum = this.getAlbum.bind(this);
  }
  getTrack = (trackId, token) => {
    axios
      .get(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(data => {
        this.setState({
          track: data.data.name,
          albumId: data.data.album.id
        });
      })
      .catch(err => console.log(err));
  };

  getAlbum = (albumId, token) => {
    axios
      .get(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(data => {
        this.setState({
          data,
          album: data.data.name,
          artist: data.data.artists[0]["name"],
          art: data.data.images[1]["url"],
          tracks: data.data.tracks.items
        });
      })
      .catch(err => console.log(err));
  };  

  componentDidMount() {
    this.getTrack(
      this.props.review.spotifyTrackID,
      this.props.cookies.get("access_token")
    );
    this.getAlbum(
        this.state.albumId,
        this.props.cookies.get("access_token")
      );
  }
  render() {
      console.log(this.state.albumId)
      console.log(this.state.data)
    return (
      <Fragment>
        <Container>
          <Row style={{ display: "flex", padding: "1rem" }}>
            {/* User info */}
            <Col md="3" style={{ margin: "auto 0" }}>
              <img src={this.state.art} alt="Album cover art" />
              <div>Album: {this.state.album}</div>
              <div>Artist: {this.state.artist}</div>
              <div>Track: {this.state.track}</div>
              {/* If logged in edit button shows otherwise null */}
              {this.props.loggedIn === true && this.props.review.userID === this.props.userID ? (
                <ReviewEditModal
                  {...this.props}
                  album={this.state.album}
                  artist={this.state.artist}
                  art={this.state.art}
                  tracks={this.state.tracks}
                />
              ) : null}
            </Col>
            <Col md="9" style={{ padding: "1rem 5rem" }}>
              <Row style={{ display: "flex" }}>
                <ViewStars rating={this.props.review.rating} />
                <p style={{ padding: "0 20px" }}>
                  Date Created: {this.props.review.dateCreated}
                </p>
                <p style={{ padding: "0 20px" }}>
                  Updated On: {this.props.review.dateModified}
                </p>
              </Row>
              <Row>
                <div align="left">
                  <p>{this.props.review.review}</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withCookies(TrackProfileReviewCard);
