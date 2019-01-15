import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import ReviewEditModal from "../CardModals/ReviewEditModal";
import Navigation from "../Navigation/Navigation";
import NewReviewModalCard from "../CardModals/NewReviewModalCard";
import EditReviewModalCard from "../CardModals/EditReviewModalCard";
import ViewReviewModalCard from "../CardModals/ViewReviewModalCard";
import {
  Breadcrumb,
  MenuItem,
  Row,
  SideNav,
  SideNavItem,
  Button,
  Icon
} from "react-materialize";

const BreadcrumbDiv = styled.div`
  text-align: left;
`;

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      review: {
        id: null,
        username: "",
        year: "",
        make: "",
        model: "",
        trim: "",
        reviewText: "",
        modifiedTime: ""
      },
      input: "",
      loggedIn: false
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('./DummyData/dummyData.json')
  //     .then(response => {
  //       const newReviews = response.data;
  //       const newState = Object.assign({}, this.state, { reviews: newReviews });
  //       this.setState(newState);
  //       console.log(this.state);
  //     })
  //     .catch(err => console.log(err));
  // };

  handleReviewChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const userReviews = this.state.reviews.filter(review => {
      return (
        review.review
          .toLowerCase()
          .indexOf(this.state.username.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <ReviewEditModal />
        <ReviewEditModal />
        <Row>
          
        </Row>
      </div>
    );
  }
}

export default ReviewList;
