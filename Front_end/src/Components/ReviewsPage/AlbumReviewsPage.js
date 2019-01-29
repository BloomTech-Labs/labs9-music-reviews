import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Row, Col, CardImg } from "reactstrap";
import AlbumReviewCreateModal from "../CardModals/AlbumReviewCreateModal";
import ReviewCard from "./ReviewCard";
import axios from "axios";
import { Link } from 'react-router-dom';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { withAuthorization } from '../Session';

// const Sidebar = styled.div`
//   position: -webkit-sticky;
//   position: sticky;
//   top: 0;
//   z-index: 1;
//   height: 100%;
//   padding-top: 80px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const Iframe = styled.iframe`
  width: 103%;
  height: 80px;
  frameborder: 0;
  align: middle;
`

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
          albumId: res.data.id,
          artist: res.data.artists[0]["name"],
          artistId: res.data.artists[0]["id"],
          art: res.data.images[1].url,
          tracks: res.data.tracks.items,
          width: res.data.images[1].height,
        }, console.log(res.data));
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
    const albumReviews = this.state.reviews.filter(review => {
      return review.spotifyAlbumID === this.props.match.params.id;
    });
    console.log(albumReviews, 'albumReviews')

    const albumReviewsFilteredbyUserID = albumReviews.filter(album => {
      return album.userID === this.props.userID
    })

    console.log(albumReviewsFilteredbyUserID, 'albumReviewFilteredUserID')

    // for (let i = 0;i < albumReviews.length;i++) {
    //   if (albumReviews[i].userID === this.props.userID) {
    //     // you have already written a review for the album
    //   }
    //   else {
    //     // write a review
    //   }
    // }
    console.log(this.state.tracks)
    return (
      <Fragment>
        <Container fluid={true} 
          style={{
              display: "flex",
              margin: "auto",
              maxWidth: "1600px",
              position: "relative",
              top: "8rem" 
            }} 
          >
        <Row>
          <Col xs="12" md="4" style={{ position: "relative", top: "7rem", margin: "0 auto", paddingBottom: "3rem" }}>
              <Row style={{ margin: "auto" }}>
                <h3>{this.state.album}</h3>
              </Row>
              <Link to={`/artists/${this.state.artistId}`}>
                <Row style={{ margin: "auto" }}>
                  <h5>{this.state.artist}</h5>
                </Row>
              </Link>
              {/* can add logic to render different size of album art based on screen size: stacked ternary */}
              {/* need to find a way to manipulate the img object from res.data */}
              <CardImg src={this.state.art} alt="Album Art" />

              {/* Spotify Player */}
              <Iframe src={`https://open.spotify.com/embed/album/${this.state.albumId}`}
                allowtransparency="true" allow="encrypted-media" />

              <Row style={{ display: "flex", justifyContent: "space-evenly", padding: "1rem" }}>
                {/* Write Review Button Modal */}
                {albumReviewsFilteredbyUserID.length === 0 ?
                  <AlbumReviewCreateModal
                    {...this.props}
                    album={this.state.album}
                    artist={this.state.artist}
                    art={this.state.art}
                    tracks={this.state.tracks}
                    userID={this.props.userID}
                  />
                  : null}
              </Row>
              {/* end of Create  */}
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

          </Col>
        <Col md="6" sm="12">
          <Container fluid={true} style={{ maxWidth: "1150px", position: "relative", top: "5rem" }}>
            {albumReviews.length === 0 ?
              <Row><h3>Be the first to write a review for this album!</h3></Row> :
              albumReviews.map(review => (
              <ReviewCard review={review} userID={this.props.userID}/>
              ))
            }
          </Container>
        </Col>  
        </Row>
      </Container>
      </Fragment>
    );
  }
}


const condition = authUser => !!authUser
export default withAuthorization(condition)(withCookies(AlbumReviewsPage));

//export default withCookies(AlbumReviewsPage);
