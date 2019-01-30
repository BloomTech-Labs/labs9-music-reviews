import React, { Fragment } from "react";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Col,
  Row,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import EditStars from "../StarsRating/EditStars";
import { type } from "os";

class AlbumReviewCreateModal extends React.Component {
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
      spotifyAlbumID: "",
      userID: 0,
      modal: false,
      nestedModal: false,
      closeAll: false,
      dropdownOpen: false,
      discs: [],
      disc: 1
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.setState({
      spotifyAlbumID: this.props.match.params.id,
      userID: this.props.userID
    });
  }

  addHandler = event => {
    // event.preventDefault();
    axios
      .post(`https://labs9-car-reviews.herokuapp.com/albumReviews`, {
        dateCreated: new Date().toString().split("G", 1)[0],
        dateModified: new Date().toString().split("G", 1)[0],
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

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
          size="lg"
        >
          <Row>
            <Col className="container d-flex align-items-center justify-content-center">
              <div style={{ padding: "15px 50px" }}>
                <ModalBody>
                  <h3>Album: </h3>
                  <h5>{this.props.album}</h5>
                </ModalBody>
                <ModalBody>
                  <h3>Artist: </h3>
                  <h5>{this.props.artist}</h5>
                </ModalBody>
              </div>
            </Col>
            <Col className="container">
              <div className= "d-flex justify-content-center">
                <img
                  src={this.props.art}
                  alt="Album cover art"
                  style={{ margin: "20px" }}
                />
              </div>
            </Col>
          </Row>
          <Row className= "d-flex justify-content-center">
            <h3>Track List</h3>
          </Row>
          <Row className= "d-flex justify-content-center">
            <Col
              className="d-flex align-items-start justify-content-space-around flex-column"
              style={{
                margin: "15px 25px",
                maxHeight: "300px",
                maxWidth: "60%",
                overflow: "auto"
              }}
            >
              {this.props.tracks.map(track => (
                <div style={{ margin: "0 10px" }}>
                  <strong>{track.track_number}.</strong> {track.name}
                </div>
              ))}
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

export default AlbumReviewCreateModal;
