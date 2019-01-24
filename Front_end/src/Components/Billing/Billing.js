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
import axios from "axios";

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
  constructor(props){
    super(props);
    this.state = {
      subType: ''
    }
  }
  changeSub = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  addDays = (days) => {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return result;
  }
  changeSubscriptionStatus = () => {
    let subscriptionLength = this.state.subType === 'year' ? 366 : 31;
    console.log(this.state.subType, subscriptionLength)
    let expirationDate = this.addDays(subscriptionLength);
    axios.put(`https://labs9-car-reviews.herokuapp.com/users/${this.props.userID}`, {   
      paidMembership: true,      
      subscriptionExpiration: expirationDate
    })
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) })
  }
  render() {
    console.log(this.state.subType)
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
                      <Input type="radio" name="subType" value="year" onClick={this.changeSub} />
                      1 Year Subscription $9.99
                    </Label>
                    <br/>
                    <Label check>
                      <Input type="radio" name="subType" value="month" onClick={this.changeSub} />
                      1 Month Subscription $0.99
                    </Label>
                  </FormGroup>
                  <SubInfoModal />
                </div>
                <Checkout
                  name={"Subscription"}
                  description={this.state.subType === "year" ? "1 Year Subscription" : "1 Month Subscription"}
                  amount={this.state.subType === "year" ? 9.99 : 0.99}
                  changeSubscriptionStatus={this.changeSubscriptionStatus}
                />
                {/* <p style={{ color: "lightgray" }}>
                  *Subscriptions are automatically renewed unless specified. To
                  edit subscription preferences, please navigate to ""
                </p> */}
              </Payment>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Billing;
