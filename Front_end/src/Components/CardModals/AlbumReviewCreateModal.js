import React, { Fragment } from "react";
import axios from "axios";
import { instanceOf } from "prop-types";
import { Cookies } from "react-cookie";
import { Button, Modal, ModalBody, Col, Row } from "reactstrap";
import EditStars from "../StarsRating/EditStars";
import "./modals.css";

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

  static getDerivedStateFromProps(nextProps, prevState){
    return nextProps.userID !== prevState.userID ? { userID: nextProps.userID } : {}
  }

  addHandler = event => {
    // event.preventDefault();
    axios
      .post(`https://labs9-car-reviews.herokuapp.com/albumReviews`, {
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
            fontFamily: "Lato"
          }}
        >
          <Row>
            <Col className="container d-flex align-items-center justify-content-center">
              <div style={{ padding: "15px 50px" }}>
                <ModalBody
                  style={{
                    textAlign: "center",
                    color: "#eac67a",
                    textShadow:
                      "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"
                  }}
                >
                  <h3 style={{ fontFamily: "Merriweather Sans, sans-serif" }}>
                    Album:{" "}
                  </h3>
                  <h5>{this.props.album}</h5>
                </ModalBody>
              </div>
            </Col>
            <Col className="container">
              <div className="d-flex justify-content-center">
                <img
                  src={this.props.art}
                  alt="Album cover art"
                  style={{
                    margin: "20px",
                    maxWidth: "250px",
                    maxHeight: "250px"
                  }}
                />
              </div>
            </Col>
          </Row>
          <div className="container center-align" style={{ margin: "0 auto" }}>
            <div style={{ textAlign: "center", color: "rgb(234, 198, 122)" }}>Select Star Rating</div>
            <Row style={{ justifyContent: "center", margin: "5px 0" }}>
              <EditStars
                rating={this.state.rating}
                updateRating={this.updateRating}
              />
            </Row>
            <div>
              <div style={{ margin: "5px 0", color: "rgb(234, 198, 122)" }}>Write Review</div>
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
                color: "#984B43",
                backgroundColor: "#EAC67A",
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

export default AlbumReviewCreateModal;
