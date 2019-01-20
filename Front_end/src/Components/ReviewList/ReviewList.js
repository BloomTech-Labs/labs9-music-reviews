import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ReviewEditModal from "../CardModals/ReviewEditModal";
import Stars from "../StarsRating/Stars";
import { Row, Col, Container } from "reactstrap";
import ProfileReviewCard from "./ProfileReviewCard";
import ReviewCreateModal from "../CardModals/ReviewCreateModal";

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
              <ReviewCreateModal />
            </ProfileInfo>
          </Container>
          <Container fluid={true}>
            {this.state.reviews.map(review => (
              <ProfileReviewCard review={review} loggedIn={this.state.loggedIn} key={review.id}/>
            ))}
          </Container>
        </div>
      </div>
    );
  }
}

export default ReviewList;
