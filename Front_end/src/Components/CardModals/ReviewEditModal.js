import React, { Fragment } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Col,
  Row
} from "reactstrap";
import EditStars from "../StarsRating/EditStars";
import "./modals.css";

class ReviewEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumReviewID: "",
      review: "",
      dateModified: "",
      rating: 0,
      modal: false,
      delNestedModal: false,
      editNestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDelNested = this.toggleDelNested.bind(this);
    this.toggleEditNested = this.toggleEditNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  componentDidMount() {
    this.setState({
      review: this.props.review.review,
      rating: this.props.review.rating
    });
  }

  editHandler = event => {
    // event.preventDefault();
    axios
      .put(
        `https://labs9-car-reviews.herokuapp.com/albumReviews/${
          this.props.review.albumReviewID
        }`,
        {
          review: this.state.review,
          rating: this.state.rating,
          dateModified: new Date().toString().split("G", 1)[0]
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  deleteHandler = id => {
    axios
      .delete(`https://labs9-car-reviews.herokuapp.com/albumReviews/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  updateRating = newRating => {
    this.setState({ rating: newRating });
  };

  handleEditChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleDelNested() {
    this.setState({
      delNestedModal: !this.state.delNestedModal,
      closeAll: false
    });
  }

  toggleEditNested() {
    this.setState({
      editNestedModal: !this.state.editNestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  dateStamp() {
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let dateString = month + 1 + "/" + date + "/" + year;
    console.log(dateString);
    this.setState({ dateModified: dateString });
  }

  render() {
    return (
      <Fragment>
        <Button
          onClick={this.toggle}
          style={{
            margin: "8px 0",
            color: "#984B43",
            backgroundColor: "#EAC67A",
            fontWeight: "650"
          }}
        >
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={true}
          style={{
            border: "3px solid #EAC67A",
            borderRadius: "10px",
            fontFamily: "Lato",
            color: "#eac67a",
            textShadow:
              "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
          }}
        >
          <Row class="d-flex justify-content-around">
            <Col class="container">
              <Col>
                <div>
                  {/* Edit Modal Album and Artist Headers */}
                  <ModalBody
                    style={{
                      textAlign: "center",
                      color: "#eac67a",
                      textShadow:
                        "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                    }}
                  >
                    <h4>Album: </h4>
                    <h5>{this.props.album}</h5>
                  </ModalBody>
                  <ModalBody
                    style={{
                      textAlign: "center",
                      color: "#eac67a",
                      textShadow:
                        "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                    }}
                  >
                    <h4>Artist: </h4>
                    <h5>{this.props.artist}</h5>
                  </ModalBody>
                </div>
              </Col>
              <Col class="container">
                {/* Edit Modal Album Art */}
                <div>
                  <img
                    src={this.props.art}
                    alt="Album cover art"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <div>
                {/* Edit Modal Track List */}
                <Row>
                  <Col>
                    <Row className="d-flex justify-content-center">
                      <h3
                        style={{
                          color: "#eac67a",
                          textShadow:
                            "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                        }}
                      >
                        Track List
                      </h3>
                    </Row>
                    <Row className="d-flex justify-content-center">
                      <Col
                        className="d-flex align-items-start justify-content-space-around flex-column"
                        style={{
                          margin: "15px 25px",
                          maxHeight: "300px",
                          maxWidth: "60%",
                          overflow: "auto",
                          color: "#eac67a",
                          textShadow:
                            "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                        }}
                      >
                        {this.props.tracks.map(track => (
                          <div style={{ margin: "0 10px" }}>
                            <strong>{track.track_number}.</strong> {track.name}
                          </div>
                        ))}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div class="container center-align" style={{ margin: "0 auto" }}>
            <Row style={{ justifyContent: "center", margin: "0 auto" }}>
              {/* Editable Star Rating  */}
              <EditStars
                rating={this.props.review.rating}
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
                  color: "#984B43"
                }}
              />
            </div>
          </div>
          <ModalFooter>
            <Button
              style={{
                color: "#984B43",
                backgroundColor: "#EAC67A",
                fontWeight: "650"
              }}
              onClick={this.toggleEditNested}
            >
              Submit
            </Button>
            {/* Edit Submit Confirmation Nested Modal */}
            <Modal
              isOpen={this.state.editNestedModal}
              toggle={this.toggleEditNested}
              style={{
                top: "50%"
              }}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader
                style={{
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
                    this.editHandler();
                    this.dateStamp();
                  }}
                >
                  Submit
                </Button>
                <Button
                  style={{
                    color: "#EAC67A",
                    backgroundColor: "#984B43",
                    fontWeight: "650"
                  }}
                  onClick={this.toggleEditNested}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Button
              style={{
                color: "#984B43",
                backgroundColor: "#EAC67A",
                fontWeight: "650"
              }}
              onClick={this.toggleDelNested}
            >
              Delete
            </Button>
            {/* Delete Confirmation Nested Modal */}
            <Modal
              isOpen={this.state.delNestedModal}
              toggle={this.toggleDelNested}
              style={{
                top: "50%"
              }}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader
                style={{
                  color: "#eac67a",
                  textShadow:
                    "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                }}
              >
                Are you sure you want to DELETE this review?
              </ModalHeader>
              <ModalFooter>
                {/* Delete Review Button */}
                <Button
                  style={{
                    color: "#984B43",
                    backgroundColor: "#EAC67A",
                    fontWeight: "650"
                  }}
                  onClick={event => {
                    this.deleteHandler(this.props.review.albumReviewID);
                    this.toggleAll();
                  }}
                >
                  Delete
                </Button>
                <Button
                  style={{
                    color: "#EAC67A",
                    backgroundColor: "#984B43",
                    fontWeight: "650"
                  }}
                  onClick={this.toggleDelNested}
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
              onClick={this.toggle}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ReviewEditModal;
