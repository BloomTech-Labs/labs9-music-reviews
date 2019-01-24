import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

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
      <div>
        <Button
          outline
          color="info"
          onClick={this.toggle}
          style={{
            backgroundColor: "#495057",
            color: "#fff",
            fontSize: "12px",
            margin: " 0 15px"
          }}
        >
          Upgrade
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Row>
            <Col>
              <ModalBody>
                <h3>1 Year Subscription</h3>
              </ModalBody>
              <ModalBody>
                <ListGroup>
                  <ListGroupItem>Thing 1</ListGroupItem>
                  <ListGroupItem>Thing 2</ListGroupItem>
                  <ListGroupItem>Thing 3</ListGroupItem>
                  <ListGroupItem>Thing 4</ListGroupItem>
                  <ListGroupItem>Thing 5</ListGroupItem>
                  <ListGroupItem>Thing 6</ListGroupItem>
                  <ListGroupItem>Thing 7</ListGroupItem>
                  <ListGroupItem>Thing 8</ListGroupItem>
                </ListGroup>
              </ModalBody>
              <ModalBody>
                <h3>$9.99 /mo</h3>
              </ModalBody>
            </Col>
            <Col>
              <ModalBody>
                <h3>1 Month Subscription</h3>
              </ModalBody>
              <ModalBody>
                <ListGroup>
                  <ListGroupItem>Thing 1</ListGroupItem>
                  <ListGroupItem>Thing 2</ListGroupItem>
                  <ListGroupItem>Thing 3</ListGroupItem>
                  <ListGroupItem>Thing 4</ListGroupItem>
                  <ListGroupItem>Thing 5</ListGroupItem>
                  <ListGroupItem>Thing 6</ListGroupItem>
                  <ListGroupItem>Thing 7</ListGroupItem>
                  <ListGroupItem>Thing 8</ListGroupItem>
                </ListGroup>
              </ModalBody>
              <ModalBody>
                <h3>$0.99 /mo</h3>
              </ModalBody>
            </Col>
          </Row>

          <ModalFooter style={{ display: "flex", justifyContent: 'space-between'}} >
              <a href="/user/billing">
            <Button color="primary" onClick={this.toggle}>
              Upgrade
            </Button></a>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PlansModal;
