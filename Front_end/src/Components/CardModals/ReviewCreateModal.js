import React, { Fragment } from "react";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
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
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      dateCreated: "",
      rating: 0,
      review: "",
      spotifyAlbumID: "",
      userID: 1,
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.writeToggle = this.writeToggle.bind(this);
  }

  componentDidMount() {
    this.setState({
      spotifyAlbumID: this.props.match.params.id
    });
  }

  addHandler = event => {
    // event.preventDefault();
    this.dateStamp();
    axios
      .post(`https://labs9-car-reviews.herokuapp.com/albumReviews`, {
        created_at: this.state.dateCreated,
        updated_at: this.state.dateCreated,
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
    this.setState({ dateCreated: dateString }, () =>
      console.log("Function Date", this.state.dateCreated)
    );
  }

  render() {
    console.log("Album ID", this.props.match.params.id)
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
                <ModalHeader>{this.props.album}</ModalHeader>
                <ModalHeader>{this.props.artist}</ModalHeader>
              </div>
              <div>
                <ListGroup>
                  {this.props.tracks.map(track => (
                    <ListGroupItem>
                      {track.track_number}. {track.name}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col className="container">
              <div>
                <img src={this.props.art} alt="Album cover art" />
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
            <Button color="primary" onClick={this.toggleNested}>
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
