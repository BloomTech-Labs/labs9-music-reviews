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
import Stars from "../StarsRating/Stars";

class ReviewEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      reviewText: "",
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.setState( {reviewText: this.props.review.reviewText})
  }

  editHandler = (event, id) => {
    event.preventDefault();
    axios
      .put(
        `https://labs9-car-reviews.herokuapp.com/albumReviews/${id}`,
        {
          reviewText: this.state.reviewText,
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
    this.setState(
      {
        id: this.state.id,
        reviewText: this.state.reviewText,
      },
    );
  };

  deleteHandler = id => {
    axios
      .delete(
        `https://labs9-car-reviews.herokuapp.com/albumReviews/${id}`
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  handleEditChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log(this.state.reviewText);
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
            <Col class="container">
              <div>
                <img
                  src="http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
                  alt="Placeholder album image"
                />
              </div>
            </Col>
          </Row>
          <div class="container center-align" style={{ margin: "0 auto" }}>
            <Row style={{ margin: "0 auto" }}>
              <Stars rating={props.review.rating}/>
            </Row>
            <div>
              <textarea
                onChange={this.handleEditChange}
                name="reviewText"
                value={this.state.reviewText}
                maxlength="1500"
                style={{ resize: "none", width: "100%" }}
              />
            </div>
          </div>
          <ModalFooter>
            <Button color="secondary" onClick={this.editHandler}>
              Submit
            </Button>
            <Button
              color="secondary"
              onClick={event => {
                this.deleteHandler(this.props.review.id);
                event.preventDefault();
              }}
            >
              Delete
            </Button>
            <Button color="primary" onClick={this.toggle}>
              Close
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ReviewEditModal;
