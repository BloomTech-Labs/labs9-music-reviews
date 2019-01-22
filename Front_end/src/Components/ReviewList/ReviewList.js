import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { Row, Col, Container, CardImg, Button } from "reactstrap";
import ProfileReviewCard from "./ProfileReviewCard";

const Sidebar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: "center";
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
    this.getAlbumReviews();
    this.setState({ loggedIn: this.props.match.params.loggedIn });
  }

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

  handleReviewChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.props.match);
    console.log(this.props);
    const userReviews = this.state.reviews.filter(review => {
      return (
        review.review
          .toLowerCase()
          .indexOf(this.state.username.toLowerCase()) !== -1
      );
    });
    return (
      <Fragment>
          <Container
            fluid={true}
            style={{
              display: "flex",
              justifyItems: "space-around",
              margin: "0 auto",
              maxWidth: "1600px"
            }}
          >
            <Sidebar>
              <CardImg
                src={require("../../Images/RecordThumb.png")}
                alt="Default profile image"
                style={{ maxWidth: "200px" }}
              />
              <Row style={{ alignSelf: "center" }}>
                <h3>Username</h3>
              </Row>
              <Row style={{ alignSelf: "center" }}>
                <h5>Status</h5>
              </Row>
              <Row style={{ alignSelf: "center" }}>
                <h5>Reviews: {this.state.reviews.length}</h5>
              </Row>
              {/* can add logic to render different size of album art based on screen size: stacked ternary */}
              {/* need to find a way to manipulate the img object from res.data */}

              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "1rem"
                }}
              >
              </Row>
            </Sidebar>
          </Container>
          <Container fluid={true} style={{ maxWidth: "1150px" }}>
            {userReviews.map(review => (
              <ProfileReviewCard
                review={review}
                loggedIn={this.state.loggedIn}
                key={review.id}
              />
            ))}
          </Container>
      </Fragment>
    );
  }
}

export default ReviewList;
