import React, { Component, Fragment } from "react";
import ReviewEditModal from "../CardModals/ReviewEditModal";
import ViewStars from "../StarsRating/ViewStars";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

const ReviewText = styled.div`
  padding-top: 20px;
  align-items: left;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

class AlbumProfileReviewCard extends Component {
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
      artistID: "",
      albumReview: true
    };
    this.getAlbum = this.getAlbum.bind(this);
  }

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
          artistID: data.data.artists[0]["id"],
          art: data.data.images[1]["url"],
          tracks: data.data.tracks.items
        });
      })
      .catch(err => (err.message));
  };

  componentDidMount() {
    this.getAlbum(
      this.props.review.spotifyAlbumID,
      this.props.cookies.get("access_token")
    );
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row
            style={{
              display: "flex",
              padding: "1rem",
              border: "3px solid #984B43",
              borderRadius: "10px",
              margin: "15px 0",
              backgroundColor: "#233237"
            }}
          >
            {/* REVIEW INFO */}
            <Col
              lg="4"
              md="5 d-flex flex-column justify-content-start"
            >
              {/* ALBUM INFO */}
              <NavLink
                to={`/albums/${this.props.review.spotifyAlbumID}`}
                style={{ textDecoration: "none", color: "#EAC67A" }}
              >
                <div style={{ margin: "8px 0" }}>
                  <h5><strong>Album:</strong> {this.state.album}</h5>
                </div>
              </NavLink>
              {/* ALBUM COVER ART */}
              <NavLink
                to={`/albums/${this.props.review.spotifyAlbumID}`}
                style={{ textDecoration: "none", color: "#EAC67A" }}
              >
                <img
                  className="img-fluid mx-auto d-block"
                  src={this.state.art}
                  alt="Album cover art"
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    minWidth: "150px",
                    border: "3px solid #984B43"
                  }}
                />
              </NavLink>
              {/* ARTIST INFO */}
              <NavLink
                to={`/artists/${this.state.artistID}`}
                style={{ textDecoration: "none", color: "#EAC67A" }}
              >
                <div style={{ margin: "8px 0" }}>
                  <strong>Artist:</strong>
                  <br /> {this.state.artist}
                </div>
              </NavLink>
              {/* EDIT BUTTON: If logged in edit button shows otherwise null */}
              {this.props.loggedIn === true &&
              this.props.review.userID === this.props.userID ? (
                <ReviewEditModal
                  {...this.props}
                  album={this.state.album}
                  artist={this.state.artist}
                  art={this.state.art}
                  tracks={this.state.tracks}
                  albumReview={this.state.albumReview}
                />
              ) : null}
            </Col>
            <Col lg="8" md="7" style={{ padding: "1rem 3rem" }}>
              <Row
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                {/* STAR RATING */}
                <ViewStars rating={this.props.review.rating} />
                {/* DATE CREATED */}
                <p style={{ padding: "0 20px", color: "#EAC67A" }}>
                  Written: {this.props.review.dateCreated}
                </p>
                {/* Edited */}
                {this.props.review.dateCreated !== this.props.review.dateModified ? <i>(edited)</i> : null}
              </Row>
              {/* REVIEW TEXT */}
              <Row>
                <ReviewText>
                  <p style={{ color: "#EAC67A" }}>{this.props.review.review}</p>
                </ReviewText>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default withCookies(AlbumProfileReviewCard);
