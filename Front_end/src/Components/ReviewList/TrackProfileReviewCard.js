import React, { Component, Fragment } from "react";
import TrackReviewEditModal from "../CardModals/TrackReviewEditModal";
import ViewStars from "../StarsRating/ViewStars";
import { Row, Col, Container } from "reactstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
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
      album: "",
      artist: "",
      artistID: "",
      art: "",
      track: ""
    };
  }
  getTrack = (trackId, token) => {
    axios
      .get(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          track: res.data.name,
          album: res.data.album.name,
          albumID: res.data.album.id,
          artist: res.data.artists[0].name,
          artistID: res.data.artists[0]["id"],
          art: res.data.album.images[1].url
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getTrack(
      this.props.review.spotifyTrackID,
      this.props.cookies.get("access_token")
    );
  }

  render() {
    console.log(this.props.review.spotifyTrackID);
    console.log(this.state.track);
    return (
      <Fragment>
        <Container>
          <Row style={{ display: "flex", padding: "1rem" }}>
            {/* User info */}
            <Col md="5" style={{ margin: "auto 0" }}>
              <NavLink
                to={`/albums/${this.state.albumID}`}
                style={{ textDecoration: "none", color: "black", maxWidth: "150px", maxHeight: "150px", }}
              >
                <img src={this.state.art} alt="Album cover art" />
              </NavLink>
              <NavLink
                to={`/albums/${this.state.albumID}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>Album: {this.state.album}</div>
              </NavLink>
              <NavLink
                to={`/artists/${this.state.artistID}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>Artist: {this.state.artist}</div>
              </NavLink>
              <NavLink
                to={`/tracks/${this.props.review.spotifyTrackID}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>Track: {this.state.track}</div>
              </NavLink>
              {/* If logged in edit button shows otherwise null */}
              {this.props.loggedIn === true &&
              this.props.review.userID === this.props.userID ? (
                <TrackReviewEditModal
                  {...this.props}
                  album={this.state.album}
                  artist={this.state.artist}
                  art={this.state.art}
                  track={this.state.track}
                />
              ) : null}
            </Col>
            <Col md="7" style={{ padding: "1rem 5rem" }}>
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
