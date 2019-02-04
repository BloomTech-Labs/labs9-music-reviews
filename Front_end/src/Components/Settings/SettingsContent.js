import React from 'react';
import axios from 'axios';
import { Row, Col, Container, Card, CardImg } from 'reactstrap';
// import styled from 'styled-components';

class SettingsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      firebaseUID: "",
      email: '',
      paidStatus: false,
      subscriptionExpiration: null,
      nickname: "",
      newNickname: "",
      loading: false,
      loaded: false,
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  changeNickname = () => {
    if ( this.state.newNickname.length < 4){
      alert('New nickname must be at least 3 characters long.');
    } else {
      axios.put(`https://labs9-car-reviews.herokuapp.com/users/${this.state.userID}/change_nickname`, {
          nickname: this.state.newNickname
        })
        .then( res => console.log(res) )
        .error( err => console.log(err) )
    }
  }
  componentDidMount() {
    this.setState({ loading: true }, () =>
      //when component mounts
      //check to see if there is a user that has been authenticated
      this.props.firebase.auth.onAuthStateChanged((user) => {
        // if there has been make a call to our own database to find user
        if (user) {
          //if successful set state with details of the user
          const email = user.email;
          axios
            .get(`${process.env.REACT_APP_BACKEND_URL}users/get/${email}`)
            .then((res) => {
              this.setState({
                userID: res.data.userID,
                firebaseUID: res.data.firebaseUID,
                email: res.data.emailAddress,
                paidStatus: res.data.paidMembership,
                subscriptionExpiration: res.data.subscriptionExpiration,
                nickname: res.data.nickname,
                loaded: true,
                loading: false,
              });
            })
            .catch((err) => this.setState({ loaded: false, loading: false }));
          //else no data has been loaded but database should still have user since authentication check passed
        } else {
          this.setState({ loaded: false, loading: false });
          //no user so data has been loaded since there was none to be found.
        }
      })
    );
  }
  render() {
    if (this.state.loading === true && this.state.loaded === false) {
      return <div />;
    } else if (this.state.loading === false && this.state.loaded === false) {
      return <h2>You are not logged in.</h2>;
    } else if (this.state.loaded === true && this.state.loading === false) {
      return (
        <Container fluid style={{ maxWidth: "1600px", color: "#eac67a", fontFamily: "Lato", fontSize: "1.2rem", textAlign: "left" }}>
          <Card style={{ maxWidth: "1000px", margin: "8rem auto", padding: "3rem", border: "2px solid #eac67a", background: "#233237"  }}>
            <Row style={{ margin: "0 auto", textAlign: "left"  }}>
              <h1 style={{ fontFamily: "Merriweather Sans" }}>
                Account Settings
              </h1>
            </Row>
            <Row>
              <Col xs="12" md="4" style={{ margin: "0 auto", textAlign: "left"  }}>
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
                <p>User ID: {this.state.userID}</p>
                <p style={{ fontWeight: "650", color: "#984b43" }}>{this.state.nickname}</p>
                <p>Email address: {this.state.email}</p>  
              </Col>
              <Col xs="12" md="8" style={{ margin: "auto", textAlign: "left"  }}>
                {/* <Input 
                  style={{ maxWidth: "400px" }}
                  name="newNickname"
                  value={this.state.newNickname}
                  placeholder="Please enter new nickname" 
                  onChange={this.handleChange}  
                />
                <button style={{ 
                    background: "#eac67a",
                    color: "#984b43",
                    fontWeight: "650",
                    padding: "0.5rem 1rem",
                    border: "none",
                    width: "200px",
                    borderRadius: "0.5rem"
                  }} 
                  onClick={this.changeNickname}>
                    Change Nickname
                </button> */}
            
                <p>Tier: Paid</p>
                <p>
                  {this.props.subscriptionExpiration == null ? "You are not subscribed at the moment."
                  : `Your subscription will expire on: ${this.props.subscriptionExpiration.slice(4,15)}`
                  }
                </p>
              </Col>
            </Row>
        
          </Card>
        </Container>
      );
    }
  }
}
export default SettingsContent;
