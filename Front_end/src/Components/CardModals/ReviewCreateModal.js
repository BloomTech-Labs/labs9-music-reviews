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
import ViewStars from "../StarsRating/ViewStars";
import { type } from "os";

class ReviewCreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateCreated: "",
      rating: 0,
      review: "",
      spotifyAlbumID: "382ObEPsp2rxGrnsizN5TX",
      userID: 1,
      writeReview: false,
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.writeToggle = this.writeToggle.bind(this);
  }

  //   componentDidMount() {
  //     this.setState({
  //       userID: this.props.userID,
  //       spotifyAlbumID: this.props.spotifyAlbumID
  //     });
  //   }

//   componentDidMount() {
//     let currentDate = new Date();
//     let date = currentDate.getDate();
//     let month = currentDate.getMonth();
//     let year = currentDate.getFullYear();
//     let dateString = month + 1 + "/" + date + "/" + year;
//     console.log("CDM Date", dateString);
//     this.setState({ dateModified: dateString });
//   }

  addHandler = event => {
    // event.preventDefault();    
    this.dateStamp();
    axios
      .post(`https://labs9-car-reviews.herokuapp.com/albumReviews`, {
        dateCreated: this.state.dateCreated,
        dateModified: this.state.dateCreated,
        rating: this.state.rating,
        review: this.state.review,
        spotifyAlbumID: this.state.spotifyAlbumID,
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

  writeToggle() {
    this.setState({
      writeReview: !this.state.writeReview
    });
  }

  dateStamp() {
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let dateString = month + 1 + "/" + date + "/" + year;    
    this.setState({ dateCreated: dateString }, () => console.log("Function Date",this.state.dateCreated));
  }

  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={this.toggle}>
          Create New Review
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={true}
        >
          <Row className="d-flex justify-content-around">
            <Col className="container">
              <div>
                <ModalHeader>Album</ModalHeader>
                <ModalHeader>Artist</ModalHeader>
              </div>
              <div>
                <ListGroup>
                  <ListGroupItem>Track 1</ListGroupItem>
                  <ListGroupItem>Track 2</ListGroupItem>
                  <ListGroupItem>Track 3</ListGroupItem>
                  <ListGroupItem>Track 4</ListGroupItem>
                  <ListGroupItem>Track 5</ListGroupItem>
                  <ListGroupItem>Track 6</ListGroupItem>
                  <ListGroupItem>Track 7</ListGroupItem>
                  <ListGroupItem>Track 8</ListGroupItem>
                  <ListGroupItem>Track 9</ListGroupItem>
                  <ListGroupItem>Track 10</ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col className="container">
              <div>
                <img
                  src="http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
                  alt="Placeholder album image"
                />
              </div>
            </Col>
          </Row>
          <div className="container center-align" style={{ margin: "0 auto" }}>
            <Row style={{ margin: "0 auto" }}>
              {this.state.writeReview === false ? (
                <ViewStars rating={this.state.rating} />
              ) : (
                <EditStars
                  rating={this.state.rating}
                  updateRating={this.updateRating}
                />
              )}
            </Row>
            <div>
              {this.state.writeReview === true ? (
                <textarea
                  onChange={this.handleEditChange}
                  name="review"
                  value={this.state.review}
                  maxlength="1500"
                  style={{ resize: "none", width: "100%" }}
                />
              ) : null}
            </div>
          </div>
          <ModalFooter>
            {this.state.writeReview === false ? (
              <Button color="primary" onClick={this.editHandler}>
                Read
              </Button>
            ) : null}
            {this.state.writeReview === false ? (
              <Button color="primary" onClick={this.writeToggle}>
                Review
              </Button>
            ) : (
              <Button color="primary" onClick={this.toggleNested}>
                Submit
              </Button>
            )}
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              style={{
                top: "50%"
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
                    this.addHandler();
                    this.toggleAll();
                  }}
                >
                  Submit
                </Button>
                <Button color="secondary" onClick={this.toggleNested}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            <Button
              color="secondary"
              onClick={event => {
                this.toggle();
                if (this.state.writeReview === true) {
                  this.writeToggle();
                }
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

export default ReviewCreateModal;
