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
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import Navigation from "../Navigation/Navigation";

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
        <Navigation />
        <Container>
          <Row>
            <Col className="col s2">
              <ProfileInfo>
                <img
                  src="https://wakarukana.com/UserPictures/default.png"
                  alt="Default profile image"
                />
                <p>Status</p>
                <p>Username</p>
                <p>Reviews: 1</p>
              </ProfileInfo>
            </Col>

            <Col className="valign-wrapper s10">
              <Payment>
                <h2 style={{ textAlign: "left" }}> Billing </h2>
                {/* <Card title="Payment Info" className="large" style={{ padding: "3rem 10rem 3rem 0", textAlign: "left" }}>
                                <Input placeholder="Credit Card #" /><br />
                                <Input placeholder="Expiration Date" /><br />
                                <Input placeholder="CVV" />
                            </Card> */}
                {/* <Button waves='light' large={true}>Buy Now</Button> */}
                <div style={{ margin: "2rem 0" }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="yearSub" /> 1 Year Subscription = $9.99
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="radio" name="monthSub" /> 1 Month Subscription = $9.99
                    </Label>
                  </FormGroup>
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
