import React, { Fragment } from "react";
import axios from "axios";
import { instanceOf } from "prop-types";
import styled from "styled-components";
import { withCookies, Cookies } from "react-cookie";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Col,
  Row
} from "reactstrap";
import EditStars from "../StarsRating/EditStars";
import './modals.css';

class TrackReviewCreateModal extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      dateCreated: "",
      rating: 3,
      review: "",
      spotifyTrackID: "",
      userID: 1,
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  componentDidMount() {
    this.setState({
      spotifyTrackID: this.props.trackID,
      userID: this.props.userID
    });
  }

  addHandler = event => {
    // event.preventDefault();
    axios
      .post(`https://labs9-car-reviews.herokuapp.com/trackReviews`, {
        dateCreated: new Date().toString().split("G", 1)[0],
        dateModified: new Date().toString().split("G", 1)[0],
        rating: this.state.rating,
        review: this.state.review,
        spotifyTrackID: this.props.trackId,
        userID: this.state.userID
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  handleEditChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateRating = newRating => {
    this.setState({ rating: newRating });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
  render() {
    console.log(this.props.trackId);
    return (
      <Fragment>
        <Button
          onClick={this.toggle}
          style={{
            color: "#984B43",
            backgroundColor: "#EAC67A",
            fontWeight: "650",
            fontFamily: "Lato"
          }}
        >
          Create New Review
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={true}
          style={{ border: "3px solid #EAC67A", borderRadius: "10px", fontFamily: "Lato" }}
        >
          <Row className="d-flex justify-content-around">
            <Col className="container">
              <Row>
                <Col
                  className="container d-flex justify-content-center"
                  style={{}}
                >
                  <img
                    src={this.props.art}
                    alt="Album cover art"
                    style={{ margin: "15px 0", align: "center" }}
                  />
                </Col>
              </Row>
              <Row>
                <ModalBody>
                  <h3
                    style={{
                      textAlign: "center",
                      margin: "0",
                      color: "#eac67a",
                      textShadow:
                        "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                    }}
                  >
                    {this.props.track}
                  </h3>
                </ModalBody>
              </Row>
              <Row>
                <ModalBody>
                  <h5
                    style={{
                      textAlign: "center",
                      color: "#eac67a",
                      textShadow:
                        "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                    }}
                  >
                    {this.props.artist} - {this.props.album}
                  </h5>
                </ModalBody>
              </Row>
            </Col>
          </Row>
          <div className="container center-align" style={{ margin: "0 auto" }}>
            <Row style={{ justifyContent: "center", margin: "15px 0" }}>
              <EditStars
                rating={this.state.rating}
                updateRating={this.updateRating}
              />
            </Row>
            <div>
              <textarea
                onChange={this.handleEditChange}
                name="review"
                value={this.state.review}
                maxlength="1500"
                style={{
                  resize: "none",
                  width: "100%",
                  backgroundColor: "#eac67a",
                  color: ""
                }}
              />
            </div>
          </div>
          <ModalFooter>
            <Button
              onClick={this.toggleNested}
              style={{
                color: "#984B43",
                backgroundColor: "#EAC67A",
                fontWeight: "650"
              }}
            >
              Submit
            </Button>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              style={{
                top: "50%"
              }}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader
                style={{
                  margin: "0",
                  color: "#eac67a",
                  textShadow:
                    "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                }}
              >
                Are you sure you want to SUBMIT this review?
              </ModalHeader>
              <ModalFooter>
                <Button
                  style={{
                    color: "#984B43",
                    backgroundColor: "#EAC67A",
                    fontWeight: "650"
                  }}
                  onClick={event => {
                    this.addHandler();
                    this.toggleAll();
                  }}
                >
                  Submit
                </Button>
                <Button
                  onClick={this.toggleNested}
                  style={{
                    color: "#EAC67A",
                    backgroundColor: "#984B43",
                    fontWeight: "650"
                  }}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Button
              style={{
                color: "#EAC67A",
                backgroundColor: "#984B43",
                fontWeight: "650"
              }}
              onClick={event => {
                this.toggle();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default TrackReviewCreateModal;
