import React from 'react';
import axios from 'axios';
import { Button, Input, Row, Container } from 'reactstrap';
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
  changeNickName = () => {
    if ( this.state.newNickname.length < 4){
      alert('New nickname must be at least 3 characters long.');
    } else {
      axios.put(`https://labs9-car-reviews.herokuapp.com/users/${this.state.userID}/change_nickname`, {
          nickname: this.state.newNickname
        })
        .then( res => { console.log(res) })
        .error( err => { console.log(err) })
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
      return <h2>Something went wrong.</h2>;
    } else if (this.state.loaded === true && this.state.loading === false) {
      return (
        <Container fluid style={{ maxWidth: "1600px" }}>
          <h1>Account Settings</h1>
          <p>User ID: {this.state.userID}</p>
          <p>Firebase UID: {this.state.firebaseUID}</p>
          <p>Nickname: {this.state.nickname}</p>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Input 
              style={{ maxWidth: "400px"}}
              name="newNickname"
              value={this.state.newNickname}
              placeholder="Please enter new nickname" 
              onChange={this.handleChange}  
            />
            <Button onClick={this.changeNickName}>Change Nickname</Button>
          </Row>
          <p>Email address: {this.state.email}</p>
          <p>{this.state.paidStatus === false || this.state.paidStatus === 0 ? 'Tier: Free' : 'Tier: Paid'}</p>
          <p>
            {this.state.subscriptionExpiration == null ? "You are not subscribed at the moment."
            : `Your subscription will expire on: ${this.state.subscriptionExpiration}`
            }
          </p>
        </Container>
      );
    }
  }
}
export default SettingsContent;
