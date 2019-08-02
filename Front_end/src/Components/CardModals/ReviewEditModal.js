import React, { Fragment } from "react";
import axios from "axios";
import { Button, Modal, ModalBody, Col, Row } from "reactstrap";
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
          dateModified: new Date()
            .toString()
            .split("G", 1)[0]
            .slice(3, 15)
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
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={true}
          style={{
            fontFamily: "Lato",
            color: "#eac67a"
          }}
        >
          <Row class="d-flex justify-content-around">
            <Col class="container">
              <Col>
                {/* Edit Modal Album Header */}
                <div style={{ padding: "0 15%" }}>
                  <ModalBody
                    style={{
                      textAlign: "center",
                      color: "#eac67a"
                    }}
                  >
                    <h5>Album: {this.props.album}</h5>
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
            </Col>
          </Row>
          <div class="container center-align" style={{ margin: "10px auto" }}>
            <div style={{ textAlign: "center" }}>Select Star Rating</div>
            <Row style={{ justifyContent: "center", margin: "0 auto" }}>
              {/* Editable Star Rating  */}
              <EditStars
                rating={this.props.review.rating}
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
                style={{
                  resize: "none",
                  width: "100%",
                  height: "150px"
                }}
              />
            </div>
          </div>
          <ModalBody
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
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
              Save
            </Button>
            <Button
              style={{
                color: "#EAC67A",
                backgroundColor: "#984B43",
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
              <ModalBody
                style={{
                  color: "#eac67a"
                }}
              >
                Are you sure you want to DELETE this review?
              </ModalBody>
              <ModalBody
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* Delete Review Button */}
                <Button
                  style={{
                    color: "#EAC67A",
                    backgroundColor: "#984B43",
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
                    color: "#984B43",
                    backgroundColor: "#233237",
                    fontWeight: "650"
                  }}
                  onClick={this.toggleDelNested}
                >
                  Cancel
                </Button>
              </ModalBody>
            </Modal>
            <Button
              style={{
                color: "#984B43",
                backgroundColor: "#233237",
                fontWeight: "650"
              }}
              onClick={this.toggle}
            >
              Cancel
            </Button>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default ReviewEditModal;
