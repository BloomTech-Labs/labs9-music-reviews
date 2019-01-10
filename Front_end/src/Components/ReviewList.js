import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import NewReviewModalCard from "./NewReviewModalCard";
import EditReviewModalCard from "./EditReviewModalCard";
import ViewReviewModalCard from "./ViewReviewModalCard";
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
      loggedIn: true
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
        <BreadcrumbDiv>
          {/* Breadcrumb*/}
          <Breadcrumb>
            <MenuItem>
              <a href="/">Home</a>
            </MenuItem>
            <MenuItem>My Reviews</MenuItem>
          </Breadcrumb>
        </BreadcrumbDiv>

        {/* If no reviews on account display prompt for new review otherwise display all reviews on account */}

        <div style={{ display: "flex" }}>
          {/* <SideNav style={{ position: "relative", height: "800px" }}>
            <SideNavItem
              userView
              user={{
                background: "img/image.jpg",
                image: "img/image.jpg",
                name: "Name Surname",
                email: "gmailk@gmail.com"
              }}
            />
            <SideNavItem icon="search">Search</SideNavItem>
            <SideNavItem icon="rate_review">My Reviews</SideNavItem>
            <SideNavItem icon="attach_money">Billing</SideNavItem>
            <SideNavItem icon="settings">Settings</SideNavItem>
            <SideNavItem divider />
            <SideNavItem icon="cancel">Sign Out</SideNavItem>
          </SideNav> */}
          <SideNav
            trigger={
              <Button
                style={{ background: "#ee6e73", hover: "none", border: "none" }}
              >
                <Icon medium>menu</Icon>
              </Button>
            }
            options={{ closeOnClick: true }}
          >
            <SideNavItem icon="search">Search</SideNavItem>
            <SideNavItem icon="rate_review">My Reviews</SideNavItem>
            <SideNavItem icon="attach_money">Billing</SideNavItem>
            <SideNavItem icon="settings">Settings</SideNavItem>
            <SideNavItem divider />
            <SideNavItem icon="cancel">Sign Out</SideNavItem>
          </SideNav>
          <div>
            {1 === 0 ? (
              <div>
                {/* Create a new Review */}
                <NewReviewModalCard
                  reviews={this.state.reviews}
                  handleReviewChange={this.handleReviewChange}
                  input={this.state.input}
                  loggedIn={this.state.loggedIn}
                />
              </div>
            ) : (
              <div>
                {/* Review Card Map */}
                {this.state.loggedIn === false ? (
                  <Row>
                    {userReviews.map(review => (
                      <ViewReviewModalCard
                        reviews={this.state.reviews}
                        handleReviewChange={this.handleReviewChange}
                        input={this.state.input}
                        loggedIn={this.state.loggedIn}
                      />
                    ))}
                  </Row>
                ) : (
                  <Row>
                    {userReviews.map(review => (
                      <EditReviewModalCard
                        reviews={this.state.reviews}
                        handleReviewChange={this.handleReviewChange}
                        input={this.state.input}
                        loggedIn={this.state.loggedIn}
                      />
                    ))}
                    {/* Create a new Review */}
                    <NewReviewModalCard
                      reviews={this.state.reviews}
                      handleReviewChange={this.handleReviewChange}
                      input={this.state.input}
                      loggedIn={this.state.loggedIn}
                    />
                  </Row>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewList;
