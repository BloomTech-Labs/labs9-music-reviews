import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Row, Col, Jumbotron, CardImg, Button } from "reactstrap";
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
      data: [],
      album: "",
      artist: "",
      art: "",
      tracks: []
    };
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
                md="2"
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
                    style={{ maxWidth: '150px'}}
                  />
                </div>
                <div>Member status</div>
                <div>Location</div>
                <div>Name</div>
                <div>Number of Reviews Written</div>
              </Col>
              <Col md="10" style={{ padding: "1rem 5rem" }}>
                <Row style={{ display: "flex" }}>
                <ViewStars rating={this.props.review.rating} />
                  <p style={{ margin: "auto" }}>Date Written: (DATE)</p>
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
