import React, { Fragment } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Col,
  Row
} from "reactstrap";
import EditStars from "../StarsRating/EditStars";

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
          updated_at: this.state.dateModified
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
    console.log(this.props.tracks);
    return (
      <Fragment>
        <Button color="danger" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={true}
        >
          <Row class="d-flex justify-content-around">
            <Col class="container">
              <Col>
                <div>
                  {/* Edit Modal Album and Artist Headers */}
                  <ModalHeader>Album: {this.props.album}</ModalHeader>
                  <ModalHeader>Artist: {this.props.artist}</ModalHeader>
                </div>
              </Col>
              <Col class="container">
                {/* Edit Modal Album Art */}
                <div>
                  <img src={this.props.art} alt="Album cover art" />
                </div>
              </Col>
              <div>
                {/* Edit Modal Track List */}
                <Row>
                  <Col>
                    <h5 style={{ padding: "1rem" }}>Tracklist</h5>
                    {this.props.tracks.map(track => {
                      return (
                        <Row
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          <Col xs="1">
                            <h6>{track.track_number}</h6>
                          </Col>
                          <Col xs="9">
                            <ul style={{ fontSize: "0.8rem" }} key={track.id}>
                              {track.name}
                            </ul>
                          </Col>
                          <Col xs="2">
                            <span style={{ color: "red", fontWeight: "800" }}>
                              {track.explicit === true ? "E" : " "}
                            </span>
                          </Col>
                        </Row>
                      );
                    })}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <div class="container center-align" style={{ margin: "0 auto" }}>
            <Row style={{ margin: "0 auto" }}>
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
                style={{ resize: "none", width: "100%" }}
              />
            </div>
          </div>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleEditNested}>
              Submit
            </Button>
            {/* Edit Submit Confirmation Nested Modal */}
            <Modal
              isOpen={this.state.editNestedModal}
              toggle={this.toggleEditNested}
              style={{
                top: "80%"
              }}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>
                Are you sure you want to SUBMIT this review?
              </ModalHeader>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={event => {
                    this.editHandler();
                    this.dateStamp();
                  }}
                >
                  Submit
                </Button>
                <Button color="secondary" onClick={this.toggleNested}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Button color="primary" onClick={this.toggleDelNested}>
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
              <ModalHeader>
                Are you sure you want to DELETE this review?
              </ModalHeader>
              <ModalFooter>
                {/* Delete Review Button */}
                <Button
                  color="primary"
                  onClick={event => {
                    this.deleteHandler(this.props.review.albumReviewID);
                    this.toggleAll();
                  }}
                >
                  Delete
                </Button>
                <Button color="secondary" onClick={this.toggleNested}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ReviewEditModal;
