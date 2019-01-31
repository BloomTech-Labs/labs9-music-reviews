import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Container,
  FormGroup,
  CardImg,
  Label,
  Card
} from "reactstrap";
import styled from "styled-components";
import SubInfoModal from './SubInfoModal'
// import { Link } from "react-router-dom";
import { withAuthorization } from '../Session';
import Checkout from "./Checkout";
import axios from "axios";

const Payment = styled.div`
  padding: 2rem;
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
    let result = new Date(this.props.subscriptionExpiration);
    result.setDate(result.getDate() + days);
    return result.toString().split("G", 1)[0].slice(4, 15);
  }
  changeSubscriptionStatus = () => {
    let subscriptionLength = this.state.subType === 'year' ? 366 : 31;
    let expirationDate = this.addDays(subscriptionLength);
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
            maxWidth: "1000px",
            padding: "15rem 2rem 5rem 2rem",
            fontFamily: "Lato, sans-serif",
            color: "#eac67a",
            fontSize: "1.25rem"
           }}
          >
          <Row>
            <Col md="4" xs="12" style={{ marginBottom: "2rem" }}>
              <Card style={{ background: "#233237" }}>
                <ProfileInfo>
                  <Row>
                    <CardImg
                      src={require("../../Images/defaultUser.png")}
                      alt="Default profile image"
                      style={{ 
                        maxWidth: "250px",
                        maxHeight: "250px",
                        padding: "2rem",
                        margin: "0 auto",
                        background: "#233237",
                      }}
                    />
                  </Row>
                  <Row style={{ display: "flex", flexDirection: "column", padding: "1rem", textAlign: "center" }}>
                    <p>{this.props.tier}</p>
                    <p>{this.props.nickname}</p>
                  </Row>
                </ProfileInfo>
              </Card>
            </Col>

            <Col xs="12" md="8">
              <Card style={{ maxHeight: "600px", background: "#233237" }}>
                <Payment>
                  <h2 style={{ textAlign: "left", fontFamily: "Merriweather Sans, sans-serif" }}> Billing </h2>
                  <div style={{ margin: "2rem 0" }}>
                    <FormGroup check style={{ display: "flex", flexDirection: "column", padding: "0 2rem" }}>
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
                  {this.state.subType === '' ? '' 
                  : <Checkout
                      name={"Subscription"}
                      description={this.state.subType === "year" ? "1 Year Subscription" : "1 Month Subscription"}
                      amount={this.state.subType === "year" ? 9.99 : 0.99}
                      changeSubscriptionStatus={this.changeSubscriptionStatus}
                    />
                  }   
                </Payment>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


const condition = authUser => !!authUser
export default withAuthorization(condition)(Billing);
//export default Billing;
