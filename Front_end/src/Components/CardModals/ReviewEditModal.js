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
import Stars from "../StarsRating/Stars";

class ReviewEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Fragment >
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
          <div class="container center-align" style={{ margin: '0 auto'}}>
            <Row style={{ margin: '0 auto'}}>
              <Stars />
            </Row>
            <div>
              <textarea maxlength="1500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </textarea>
            </div>
          </div>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Close
            </Button>{" "}
            <Button color="secondary">Delete</Button>
            <Button color="secondary">Submit</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ReviewEditModal;
