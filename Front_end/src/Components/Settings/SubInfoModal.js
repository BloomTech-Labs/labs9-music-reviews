import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  ListGroup,
} from "reactstrap";
import styled from 'styled-components';

const Ul = styled.ul`
  margin: 0.5rem;
  padding: 0 1rem;
`

class SubInfoModal extends React.Component {
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
      <div style={{ textAlign: "left" }}>
        <Button
          outline
          color="info"
          onClick={this.toggle}
          style={{
            maxWidth: "10rem",
            maxHeight: "5rem",
            fontSize: "1rem",
            fontWeight: "700",
            border: "none",
            padding: "1rem",
            margin: "1.5rem 0",
            background: "#eac67a",
            color: "#984b43"
          }}
        >
          Subscription Info
        </Button>
        <Modal
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ maxWidth: "600px" }}
        >
          <Row>
            <Col xs="6">
              <ModalBody style={{ textAlign: "center" }}><h3>Subscriber</h3></ModalBody>
              <ModalBody>
                <ListGroup>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Read Reviews</Ul>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Search Music</Ul>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Play Music Snippet</Ul>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Write Reviews</Ul>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Like Reviews</Ul>
                </ListGroup>
              </ModalBody>
            </Col>
            <Col xs="6">
              <ModalBody style={{ textAlign: "center" }}><h3>Free User</h3></ModalBody>
              <ModalBody>
                <ListGroup>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Read Reviews</Ul>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Search Music</Ul>
                  <Ul><i class="fas fa-check" style={{ padding: "0 1rem" }}></i>Play Music Snippet</Ul>
                  <Ul><i class="fas fa-times" style={{ padding: "0 1rem" }}></i>Write Reviews</Ul>
                  <Ul><i class="fas fa-times" style={{ padding: "0 1rem" }}></i>Like Reviews</Ul>
                </ListGroup>
              </ModalBody>
            </Col>
          </Row>

          <ModalFooter style={{ border: "1px solid #233237" }}>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SubInfoModal;
