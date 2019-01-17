import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ReviewEditModal from "../CardModals/ReviewEditModal";
import Navigation from "../Navigation/Navigation";
import Stars from "../StarsRating/Stars";
import { Row, Col, Container } from "reactstrap";

const ProfileInfo = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  overflow-x: hidden;
  height: 100%;
  padding-top: 20px;
`;

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      input: "",
      loggedIn: true,
      username: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/albumReviews")
      .then(response => {
        const userReviews = response.data;
        const newState = Object.assign({}, this.state, { reviews: userReviews });
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  handleReviewChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // const userReviews = this.state.reviews.filter(review => {
    //   return (
    //     review.review
    //       .toLowerCase()
    //       .indexOf(this.state.username.toLowerCase()) !== -1
    //   );
    // });
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div>
          <Container
            fluid={true}
            style={{
              display: "flex",
              justifyItems: "space-around",
              margin: "0 auto"
            }}
          >
            <ProfileInfo>
              <img
                src="https://wakarukana.com/UserPictures/default.png"
                alt="Default profile image"
              />
              <p>Status</p>
              <p>Username</p>
              <p>Reviews: {this.state.reviews.length}</p>
            </ProfileInfo>
          </Container>
          <Container fluid={true}>
            {this.state.reviews.map(review => (
              <Row style={{ display: "flex", padding: "3rem 1rem" }}>
                {/* User info */}
                <Col md="3" style={{ margin: "auto 0" }}>
                  <img
                    src="http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
                    alt="Placeholder album image"
                  />
                  <div>{review.albumName}</div>
                  <div>Artist</div>
                  {review.trackName ?
                  <div>{review.trackName}</div> : null}
                  {this.state.loggedIn === true ? <ReviewEditModal /> : null}
                </Col>
                <Col md="9" style={{ padding: "1rem 5rem" }}>
                  <Row style={{ display: "flex" }}>
                    <Stars />
                    <p style={{ padding: "0 20px" }}>Date Written: (DATE)</p>
                  </Row>
                  <Row>
                    <div align="left">
                      <p>{review.reviewText}</p>
                    </div>
                  </Row>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      </div>
    );
  }
}

export default ReviewList;
