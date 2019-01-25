import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, CardImg, Button } from "reactstrap";
import axios from "axios";
import ViewStars from "../StarsRating/ViewStars";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class AlbumReviewCard extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      nickname: ""
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

  componentDidMount() {
    this.getUser();
    this.getNickname(this.props.review.userID);
  }

  render() {
    console.log(this.props.review);
    return (
      <Fragment>
        <Container>
          <Jumbotron fluid style={{ display: "flex", padding: "1rem" }}>
            {/* User info */}
            <Row>
              <Col
                md="4"
                style={{
                  textAlign: "center",
                  margin: "auto",
                  padding: "1rem"
                }}
              >
                <div>
                  <img
                    src={require("../../Images/RecordThumb.png")}
                    alt="Default profile image"
<<<<<<< HEAD:Front_end/src/Components/ReviewsPage/AlbumReviewCard.js
                    style={{ 
                      maxWidth: "250px",
                      maxHeight: "250px",
                      padding: "2rem",
                      margin: "0 auto",
                    }}
=======
                    style={{ maxWidth: "150px" }}
>>>>>>> f48f31f27a8f9456e319c18b6efd6b6e25a2a6aa:Front_end/src/Components/ReviewsPage/ReviewCard.js
                  />
                </div>
                <div>
                  <strong>Nickname: </strong>
                  {this.state.nickname}
                </div>
                <div>Member status</div>
                <div>
                  <strong>Reviews: </strong>
                </div>
              </Col>
              <Col md="8" style={{ padding: "1rem 5rem" }}>
                <Row style={{ display: "flex" }}>
<<<<<<< HEAD:Front_end/src/Components/ReviewsPage/AlbumReviewCard.js
                  <Col sm="12" md="6">
                    <ViewStars rating={this.props.review.rating} />
                  </Col>
                  <Col sm="12" md="6">
                    <p style={{ margin: "auto" }}>Date Written: (DATE)</p>
                  </Col>
=======
                  <ViewStars rating={this.props.review.rating} />
                  <p style={{ margin: "auto" }}>Date Written: (DATE)</p>
>>>>>>> f48f31f27a8f9456e319c18b6efd6b6e25a2a6aa:Front_end/src/Components/ReviewsPage/ReviewCard.js
                </Row>
                <Row>
                  <div align="left">
                    <p>{this.props.review.review}</p>
                  </div>
                </Row>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </Fragment>
    );
  }
}

export default withCookies(AlbumReviewCard);
