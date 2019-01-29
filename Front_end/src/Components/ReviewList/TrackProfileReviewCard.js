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
          <Row style={{ display: "flex", padding: "1rem", border: "3px solid #EAC67A", borderRadius: "10px", margin: "10px 0", backgroundColor: "#233237"}}>
            {/* User info */}
            <Col md="3" style={{ margin: "auto 0" }}>
              <NavLink
                to={`/albums/${this.state.albumID}`}
                style={{ textDecoration: "none", color: "#EAC67A", maxWidth: "150px", maxHeight: "150px", }}
              >
                <img src={this.state.art} alt="Album cover art" style={{ maxWidth: "200px", border: "3px solid #EAC67A"}}/>
              </NavLink>
              <NavLink
                to={`/albums/${this.state.albumID}`}
                style={{ textDecoration: "none", color: "#EAC67A" }}
              >
                <div style={{ margin: '8px 0' }}>Album:<br/> {this.state.album}</div>
              </NavLink>
              <NavLink
                to={`/artists/${this.state.artistID}`}
                style={{ textDecoration: "none", color: "#EAC67A" }}
              >
                <div style={{ margin: '8px 0' }}>Artist:<br/> {this.state.artist}</div>
              </NavLink>
              <NavLink
                to={`/tracks/${this.props.review.spotifyTrackID}`}
                style={{ textDecoration: "none", color: "#EAC67A" }}
              >
                <div style={{ margin: '8px 0' }}>Track:<br/> {this.state.track}</div>
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
            <Col md="9" style={{ padding: "1rem 5rem" }}>
              <Row style={{ display: "flex" }}>
                <ViewStars rating={this.props.review.rating} />
                <p style={{ padding: "0 20px", color: "#EAC67A" }}>
                  Date Created: {this.props.review.dateCreated}
                </p>
                <p style={{ padding: "0 20px", color: "#EAC67A" }}>
                  Updated On: {this.props.review.dateModified}
                </p>
              </Row>
              <Row>
                <div align="left">
                  <p style={{ color: "#EAC67A" }}>{this.props.review.review}</p>
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
