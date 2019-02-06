import React, { Component, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { Row, Col, Container, CardImg } from "reactstrap";
import AlbumProfileReviewCard from "./AlbumProfileReviewCard";
import TrackProfileReviewCard from "./TrackProfileReviewCard";

const Sidebar = styled.div`
  position: fixed;
  margin-top: 15px;
  left: 10%;
  height: 350px;
  width: 20%;
  max-width: 500px;
  min-width: 200px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #233237;
  border-radius: 10px;
  @media (max-width: 768px) {
    position: static;
    margin: 20px auto 0;
    width: 50%;
    min-width: 280px;
  }
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
      nickname: ""
    };
  }

  componentDidMount() {
    this.setState({
      userID: this.props.userID,
      loggedIn: this.props.loggedIn
    });
    this.getAlbumReviews();
    this.getTrackReviews();
    this.getNickname(this.props.match.params.id);
  }

  getAlbumReviews() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/albumReviews")
      .then(response => {
        const userAlbumReviews = response.data;
        const newState = Object.assign({}, this.state, {
          albumReviews: userAlbumReviews
        });
        this.setState(newState);
      })
      .catch(err => (err.message));
  }

  getTrackReviews() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/trackReviews")
      .then(response => {
        const userTrackReviews = response.data;
        const newState = Object.assign({}, this.state, {
          trackReviews: userTrackReviews
        });
        this.setState(newState);
      })
      .catch(err => (err.message));
  }

  getNickname(userID) {
    axios
      .get(`https://labs9-car-reviews.herokuapp.com/users/${userID}/nickname`)
      .then(response => {
        const userNickname = response.data[0].nickname;
        const newState = Object.assign({}, this.state, {
          nickname: userNickname
        });
        this.setState(newState);
      })
      .catch(err => (err.message));
  }

  handleReviewChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const userAlbumReviews = this.state.albumReviews.filter(review => {
      return review.userID === parseInt(this.props.match.params.id);
    });
    const userTrackReviews = this.state.trackReviews.filter(review => {
      return review.userID === parseInt(this.props.match.params.id);
    });

    return (
      <Fragment>
        <Container
          fluid={true}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyItems: "space-around",
            margin: "0 auto",
            paddingTop: "10rem",
            fontFamily: "Lato",
            color: "#984B43",
            maxWidth: "1600px"
          }}
        >
          <Col xs="12" md="4">
            <Sidebar>
              <Row>
                <CardImg
                  src={require("../../Images/defaultUser.png")}
                  alt="Default profile image"
                  style={{
                    maxWidth: "250px",
                    maxHeight: "250px",
                    padding: "2rem",
                    margin: "0 auto"
                  }}
                />
              </Row>

              <div style={{ alignSelf: "center" }}>
                <h3 style={{ fontFamily: "Merriweather Sans, sans-serif" }}>
                  <strong>{this.state.nickname}</strong>
                </h3>
              </div>
              {/* <div style={{ alignSelf: "center" }}>
                <h5>Status</h5>
              </div> */}
              <div style={{ alignSelf: "center", color: "#EAC67A" }}>
                <h5>
                  Reviews: {userAlbumReviews.length + userTrackReviews.length}
                </h5>
              </div>
            </Sidebar>
          </Col>
          {userAlbumReviews.length + userTrackReviews.length === 0 ? (
            <Col
              xs="12"
              md="8"
              style={{ fontFamily: "Merriweather Sans", margin: "20px 0" }}
            >
              <h3>You have no reviews. Please go write some reviews!</h3>
            </Col>
          ) : (
            <Col xs="12" md="8">
              {userAlbumReviews.map(review => (
                <AlbumProfileReviewCard
                  review={review}
                  loggedIn={this.props.loggedIn}
                  userID={this.props.userID}
                  key={review.id}
                  nickname={this.props.nickname}
                />
              ))}
              {userTrackReviews.map(review => (
                <TrackProfileReviewCard
                  review={review}
                  loggedIn={this.props.loggedIn}
                  userID={this.props.userID}
                  key={review.id}
                  nickname={this.props.nickname}
                />
              ))}
            </Col>
          )}
        </Container>
      </Fragment>
    );
  }
}

export default UserReviewList;
