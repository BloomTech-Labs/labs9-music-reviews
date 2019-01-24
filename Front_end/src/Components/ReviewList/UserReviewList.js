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

class UserReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumReviews: [],
      trackReviews: [],
      input: "",
      loggedIn: false,
      userID: 0,
      username: ""
    };
  }

  componentDidMount() {
    this.getAlbumReviews();
    this.setState({ 
      loggedIn: this.props.loggedIn,
      userID: this.props.userID
    });
  }

  getAlbumReviews() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/albumReviews")
      .then(response => {
        const userAlbumReviews = response.data;
        const newState = Object.assign({}, this.state, {
          reviews: userAlbumReviews
        });
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  getTrackReviews() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/trackReviews")
      .then(response => {
        const userTrackReviews = response.data;
        const newState = Object.assign({}, this.state, {
          reviews: userTrackReviews
        });
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  handleReviewChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.props.match.params)
    const userAlbumReviews = this.state.albumReviews.filter(review => {
      return (
        review.userID.indexOf(this.props.match.params.id)
      );
    });
    const userTrackReviews = this.state.trackReviews.filter(review => {
      return (
        review.userID.indexOf(this.props.match.params.id)
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
                <h5>Reviews: {(this.state.albumReviews.length) + (this.state.trackReviews.length)}</h5>
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
            {userAlbumReviews.map(review => (
              <ProfileReviewCard
                review={review}
                loggedIn={this.state.loggedIn}
                userID={this.props.userID}
                key={review.id}
              />
            ))}
            {userTrackReviews.map(review => (
              <ProfileReviewCard
                review={review}
                loggedIn={this.state.loggedIn}
                userID={this.props.userID}
                key={review.id}
              />
            ))}
          </Container>
      </Fragment>
    );
  }
}

export default UserReviewList;
