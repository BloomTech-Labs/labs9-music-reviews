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
      review: {
        id: null,
        username: "",
        artist: "",
        albumTitle: "",
        trackTitle: "",
        reviewText: "",
        createdTime: "",
        modifiedTime: ""
      },
      input: "",
      loggedIn: true,
      username: ""
    };
  }

  componentDidMount() {
    axios
      .get('./DummyData/dummyData.json')
      .then(response => {
        const newReviews = response.data;
        const newState = Object.assign({}, this.state, { reviews: newReviews });
        this.setState(newState);
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

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
            <p>Reviews: 1</p>
          </ProfileInfo>
        </Container>
        <Container fluid={true}>
          <Row style={{ display: "flex", padding: "3rem 1rem" }}>
            {/* User info */}
            <Col md="3" style={{ margin: "auto 0" }}>
              <img
                src="http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
                alt="Placeholder album image"
              />
              <div>Album</div>
              <div>Artist</div>
              <div>Track</div>
              {this.state.loggedIn === true ? <ReviewEditModal /> : null}
            </Col>
            <Col md="9" style={{ padding: "1rem 5rem" }}>
              <Row style={{ display: "flex" }}>
                <Stars />
                <p style={{ padding: "0 20px" }}>Date Written: (DATE)</p>
              </Row>
              <Row>
                <div align="left">
                  <p>
                    And I know you're saying, 'Oh Bob, you've done it this
                    time.' And you may be right. Nature is so fantastic, enjoy
                    it. Let it make you happy. Put light against light - you
                    have nothing. Put dark against dark - you have nothing. It's
                    the contrast of light and dark that each give the other one
                    meaning. Every time you practice, you learn more.
                    Everything's not great in life, but we can still find beauty
                    in it. This is gonna be a happy little seascape.
                  </p>

                  <p>
                    And I will hypnotize that just a little bit. This is truly
                    an almighty mountain. We don't have anything but happy trees
                    here. Do an almighty painting with us. It looks so good, I
                    might as well not stop. Trees cover up a multitude of sins.
                  </p>

                  <p>
                    Fluff it up a little and hypnotize it. We artists are a
                    different breed of people. We're a happy bunch. There is no
                    right or wrong - as long as it makes you happy and doesn't
                    hurt anyone.
                  </p>

                  <p>
                    You don't have to spend all your time thinking about what
                    you're doing, you just let it happen. That's a crooked tree.
                    We'll send him to Washington. If what you're doing doesn't
                    make you happy - you're doing the wrong thing. We'll lay all
                    these little funky little things in there. We need a shadow
                    side and a highlight side.
                  </p>

                  <p>
                    It's almost like something out of a fairytale book. Little
                    short strokes. Now we don'twant him to get lonely, so we'll
                    give him a little friend. You don't have to be crazy to do
                    this but it does help.
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
          <Row style={{ display: "flex", padding: "3rem 1rem" }}>
            {/* User info */}
            <Col md="3" style={{ margin: "auto 0" }}>
              <img
                src="http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
                alt="Placeholder album image"
              />
              <div>Album</div>
              <div>Artist</div>
              <div>Track</div>
              {this.state.loggedIn === true ? <ReviewEditModal /> : null}
            </Col>
            <Col md="9" style={{ padding: "1rem 5rem" }}>
              <Row style={{ display: "flex" }}>
                <Stars />
                <p style={{ padding: "0 20px" }}>Date Written: (DATE)</p>
              </Row>
              <Row>
                <div align="left">
                  <p>
                    And I know you're saying, 'Oh Bob, you've done it this
                    time.' And you may be right. Nature is so fantastic, enjoy
                    it. Let it make you happy. Put light against light - you
                    have nothing. Put dark against dark - you have nothing. It's
                    the contrast of light and dark that each give the other one
                    meaning. Every time you practice, you learn more.
                    Everything's not great in life, but we can still find beauty
                    in it. This is gonna be a happy little seascape.
                  </p>

                  <p>
                    And I will hypnotize that just a little bit. This is truly
                    an almighty mountain. We don't have anything but happy trees
                    here. Do an almighty painting with us. It looks so good, I
                    might as well not stop. Trees cover up a multitude of sins.
                  </p>

                  <p>
                    Fluff it up a little and hypnotize it. We artists are a
                    different breed of people. We're a happy bunch. There is no
                    right or wrong - as long as it makes you happy and doesn't
                    hurt anyone.
                  </p>

                  <p>
                    You don't have to spend all your time thinking about what
                    you're doing, you just let it happen. That's a crooked tree.
                    We'll send him to Washington. If what you're doing doesn't
                    make you happy - you're doing the wrong thing. We'll lay all
                    these little funky little things in there. We need a shadow
                    side and a highlight side.
                  </p>

                  <p>
                    It's almost like something out of a fairytale book. Little
                    short strokes. Now we don'twant him to get lonely, so we'll
                    give him a little friend. You don't have to be crazy to do
                    this but it does help.
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        </div>
        
      </div>
    );
  }
}

export default ReviewList;
