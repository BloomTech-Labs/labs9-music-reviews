import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Container,
  FormGroup,
  Label
} from "reactstrap";
import styled from "styled-components";
import SubInfoModal from './SubInfoModal'
// import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const Payment = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;

const ProfileInfo = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  overflow-x: hidden;
  height: 100%;
  padding-top: 20px;
`;

class Billing extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col s2">
              <ProfileInfo>
                <img
                  src={require("../../Images/RecordThumb.png")}
                  alt="Default profile image"
                  style={{ maxWidth: "200px" }}
                />
                <p>Status</p>
                <p>Username</p>
                <p>Reviews: 1</p>
              </ProfileInfo>
            </Col>

            <Col className="valign-wrapper s10">
              <Payment>
                <h2 style={{ textAlign: "left" }}> Billing </h2>
                <div style={{ margin: "2rem 0" }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="yearSub" /> 1 Year Subscription $9.99
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="radio" name="monthSub" /> 1 Month Subscription $0.99
                    </Label>
                  </FormGroup>
                  <SubInfoModal />
                </div>
                <Checkout
                  name={"Testing"}
                  description={"Running a test"}
                  amount={1}
                />
                <p style={{ color: "lightgray" }}>
                  *Subscriptions are automatically renewed unless specified. To
                  edit subscription preferences, please navigate to ""
                </p>
              </Payment>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Billing;
