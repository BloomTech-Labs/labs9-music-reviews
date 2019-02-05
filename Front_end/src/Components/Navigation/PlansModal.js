import React, { Fragment } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";
import styled from "styled-components";

const Ul = styled.ul`
  font-size: 1rem;
`

class PlansModal extends React.Component {
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
      <Fragment>
        <Button
          outline
          onClick={this.toggle}
          style={{
            backgroundColor: "#eac67a",
            color: "#984b43",
            fontWeight: "650",
            fontSize: "1rem",
            maxHeight: "75px",
            maxWidth: "100px",
            border: "none",
            textDecoration: "none"
          }}
        >
          UPGRADE
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ maxWidth: "425px" }}
        >
          <Row style={{
            backgroundColor: "#233237",
            color: "#eac67a",
            fontSize: "1.2rem",
            margin: "0 auto"
          }}
          >
            <Col xs="7">
              <ModalBody>
                <h4>Subscribed Users</h4>
              </ModalBody>
              <ModalBody>
                <Ul>Read Reviews</Ul>
                <Ul>Thing 2</Ul>
                <Ul>Thing 3</Ul>
                <Ul>Thing 4</Ul>
                <Ul>Thing 5</Ul>
                <Ul>Thing 6</Ul>
                <Ul>Thing 7</Ul>
                <Ul>Thing 8</Ul>
              </ModalBody>
            </Col>
            <Col xs="5">
              <ModalBody>
                <h4>Free Users</h4>
              </ModalBody>
              <ModalBody>
                <Ul>Read Reviews</Ul>
                <Ul>Thing 2</Ul>
                <Ul>Thing 3</Ul>
                <Ul>Thing 4</Ul>
                <Ul>Thing 5</Ul>
                <Ul>Thing 6</Ul>
                <Ul style={{ textDecoration: "line-through" }}>Thing 7</Ul>
                <Ul style={{ textDecoration: "line-through" }}>Thing 8</Ul>
              </ModalBody>
            </Col>
          </Row>

          <ModalFooter style={{
            display: "flex",
            justifyContent: 'space-around',
            backgroundColor: "#233237",
            color: "#eac67a",
            border: "none",
          }}
          >
            <a href="/user/billing">
              <Button style={{
                background: "#eac67a",
                color: "#984b43",
                fontWeight: "650",
                border: "none"
              }}
                onClick={this.toggle}
              >
                UPGRADE
            </Button></a>
            <Button style={{ background: "#984b43", color: "#eac67a", border: "none", fontWeight: "650" }} onClick={this.toggle}>
              CLOSE
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default PlansModal;
