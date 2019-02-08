import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Container,
  FormGroup,
  Label,
} from "reactstrap";
import styled from "styled-components";
import SubInfoModal from './SubInfoModal'
import Checkout from "./Checkout";
import axios from "axios";

const Payment = styled.div`

  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  text-align: left;
  color: #984b43;
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
  addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toString().split("G", 1)[0];
  }
  changeSubscriptionStatus = () => {
    let subscriptionLength = this.state.subType === 'year' ? 366 : 31;
    let expirationDate = this.addDays(this.props.subscriptionExpiration, subscriptionLength);
    axios.put(`https://labs9-car-reviews.herokuapp.com/users/${this.props.userID}`, {   
      paidMembership: true,      
      subscriptionExpiration: expirationDate
    })
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) })
  }
  render() {
    return (
      <div>
        <Container fluid style={{
            fontFamily: "Lato, sans-serif",
            color: "#984b43",
            fontSize: "1.15rem",
            textAlign: "left",
           }}
          >
          <Row>
            <Col xs="12">
              <Payment>
                <Container style={{ textAlign: "left", fontFamily: "Merriweather Sans, sans-serif", color: "#eac67a", fontSize: "2rem", minWidth: "325px" }}> 
                  Subscribe/Renew Subscription
                </Container>
                <div style={{ margin: "2rem 0" }}>
                  <FormGroup check style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                    <Label check>
                      <Input type="radio" name="subType" value="year" onClick={this.changeSub} />
                      1 Year Subscription $9.99
                    </Label>
                    <br />
                    <Label check>
                      <Input type="radio" name="subType" value="month" onClick={this.changeSub} />
                      1 Month Subscription $0.99
                    </Label>
                  </FormGroup>
                  <SubInfoModal />
                </div>
                {this.state.subType === '' ? '' 
                : <Checkout
                    name={"Subscription"}
                    description={this.state.subType === "year" ? "1 Year Subscription" : "1 Month Subscription"}
                    amount={this.state.subType === "year" ? 9.99 : 0.99}
                    changeSubscriptionStatus={this.changeSubscriptionStatus}
                  />
                }   
              </Payment>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Billing;
