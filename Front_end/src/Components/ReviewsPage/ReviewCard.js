import React, { Component } from "react";
import { Row, Col, Jumbotron } from "reactstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ViewStars from "../StarsRating/ViewStars";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

const iconStyle = {
  padding: "1rem",
  fontSize: "1.5rem"
}

class AlbumReviewCard extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      nickname: "",
      albumReviews: [],
      trackReviews: [],
      liked: false,
      disliked: false,
    };
  }

  getUser() {
    axios
      .get("https://labs9-car-reviews.herokuapp.com/users")
      .then(response => {
        const users = response.data;
        const newState = Object.assign({}, this.state, {
          users: users
        });
        this.setState(newState);
      })
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
  }

  likeReview = () => {
    this.setState({ liked : !this.state.liked, disliked: false })
    console.log('liked review');
  }

  dislikeReview = () => {
    this.setState({ liked : false, disliked: !this.state.disliked })
    console.log('disliked Review');
  }

  componentDidMount() {
    this.getUser();
    this.getNickname(this.props.review.userID);
    this.getAlbumReviews();
    this.getTrackReviews();
  }

  render() {
    const userAlbumReviews = this.state.albumReviews.filter(review => {
      return review.userID === parseInt(this.props.review.userID);
    });
    const userTrackReviews = this.state.trackReviews.filter(review => {
      return review.userID === parseInt(this.props.review.userID);
    });
    const liked = this.state.liked ? "fas fa-thumbs-up" : "far fa-thumbs-up";
    const disliked = this.state.disliked ? "fas fa-thumbs-down" : "far fa-thumbs-down"
    return (
      <Jumbotron
        fluid
        style={{
          margin: "10px 10px",
          padding: "1rem",
          fontFamily: "Lato",
          backgroundColor: "#233237",
          border:
            this.props.albumReview === true
              ? "3px solid #984B43"
              : "3px solid #EAC67A",
          borderRadius: "10px"
        }}
      >
        {/* User info */}
        <Row>
          <Col
            md="3"
            style={{
              textAlign: "center"
            }}
          >
            <div>
              <img
                src={require("../../Images/defaultUser.png")}
                alt="Default profile"
                style={{
                  width: "100%",
                  maxWidth: "200px"
                }}
              />
            </div>
            <div>
              <NavLink
                to={`/user/reviews/${this.props.review.userID}`}
                style={{ textDecoration: "none", color: "#984B43" }}
              >
                <strong>{this.state.nickname}</strong>
              </NavLink>
            </div>
            {/* <div>Member status</div> */}
            <div>
              <strong>Reviews: </strong>
              {userAlbumReviews.length + userTrackReviews.length}
            </div>
          </Col>
          <Col md="9" style={{ padding: "1rem 2rem" }}>
            <Row>
              <Col md="auto" className="mb-3">
                <ViewStars rating={this.props.review.rating} />
              </Col>
              <Col sm="12" md="6">
                <p style={{ margin: "auto" }}>
                  Written: {this.props.review.dateCreated}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{this.props.review.review}</p>
              </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "flex-end" }}>
              <i className={ liked } style={ iconStyle } onClick={this.likeReview} />
              <i className={ disliked } style={ iconStyle } onClick={this.dislikeReview} />
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default withCookies(AlbumReviewCard);
