import React, { Fragment } from "react";
import axios from "axios";
import { instanceOf } from "prop-types";
import { Cookies } from "react-cookie";
import { Button, Modal, ModalBody, Col, Row } from "reactstrap";
import EditStars from "../StarsRating/EditStars";
import "./modals.css";

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
      spotifyTrackID: this.props.trackId,
      userID: this.props.userID
    });
  }

  addHandler = event => {
    // event.preventDefault();
    axios
      .post(`https://labs9-car-reviews.herokuapp.com/trackReviews`, {
        dateCreated: new Date()
          .toString()
          .split("G", 1)[0]
          .slice(3, 15),
        dateModified: new Date()
          .toString()
          .split("G", 1)[0]
          .slice(3, 15),
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
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={true}
          style={{
            borderRadius: "10px",
            fontFamily: "Lato"
          }}
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
                    style={{
                      margin: "15px 0",
                      align: "center",
                      maxWidth: "250px",
                      maxHeight: "250px"
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <ModalBody>
                  <h3
                    style={{
                      textAlign: "center",
                      margin: "0",
                      color: "#eac67a"
                    }}
                  >
                    {this.props.track}
                  </h3>
                </ModalBody>
              </Row>
            </Col>
          </Row>
          <div className="container center-align" style={{ margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>Set Star Rating</div>
            <Row style={{ justifyContent: "center", margin: "5px 0" }}>
              <EditStars
                rating={this.state.rating}
                updateRating={this.updateRating}
              />
            </Row>
            <div>
              <div style={{ margin: "5px 0" }}>Write Review</div>
              <textarea
                onChange={this.handleEditChange}
                name="review"
                value={this.state.review}
                maxlength="1500"
                style={{ resize: "none", width: "100%", height: "150px" }}
              />
            </div>
          </div>
          <ModalBody
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button
              onClick={event => {
                this.addHandler();
                this.toggleAll();
              }}
              style={{
                color: "#EAC67A",
                backgroundColor: "#984B43",
                fontWeight: "650"
              }}
            >
              Save
            </Button>
            <Button
              style={{
                color: "#984B43",
                backgroundColor: "#233237",
                fontWeight: "650"
              }}
              onClick={event => {
                this.toggle();
              }}
            >
              Cancel
            </Button>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default TrackReviewCreateModal;
