import React, { Component, Fragment } from "react";
import ReviewEditModal from "../CardModals/ReviewEditModal";
import ViewStars from "../StarsRating/ViewStars";
import { Row, Col, Container } from "reactstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

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
      artistID: ""
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
      .catch(err => console.log(err));
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
          <Row style={{ display: "flex", padding: "1rem" }}>
            {/* User info */}
            <Col md="3" style={{ margin: "auto 0", border: "1px solid red" }}>
              <NavLink to={`/albums/${this.props.review.spotifyAlbumID}`} style={{ maxWidth: "150px", maxHeight: "150px", textDecoration: 'none', color: 'black' }}>
                <img src={this.state.art} alt="Album cover art" />
              </NavLink>
              <NavLink to={`/albums/${this.props.review.spotifyAlbumID}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div>Album: {this.state.album}</div>
              </NavLink>
              <NavLink to={`/artists/${this.state.artistID}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div>Artist: {this.state.artist}</div>
              </NavLink>
              {/* If logged in edit button shows otherwise null */}
              {this.props.loggedIn === true &&
              this.props.review.userID === this.props.userID ? (
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

export default withCookies(AlbumProfileReviewCard);
