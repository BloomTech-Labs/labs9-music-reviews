import React from 'react';
import axios from 'axios';
// import styled from 'styled-components';

class SettingsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: "",
      firebaseUID: "",
      email: '',
      paidStatus: false,
      subscriptionExpiration: null,
      nickname: "",
      loading: false,
      loaded: false,
    };
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
            .get(`https://labs9-car-reviews.herokuapp.com/user/get/${email}`)
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
        <div>
          <h1>Account Settings</h1>
          <p>User ID: {this.state.userID}</p>
          <p>Firebase UID: {this.state.firebaseUID}</p>
          <p>Nickname: {this.state.nickname}</p>
          <p>Email address: {this.state.email}</p>
          <p>{this.state.paidStatus == false ? 'Tier: Free' : 'Tier: Paid'}</p>
          <p>
            {this.state.subscriptionExpiration == null ? (
              ''
            ) : (
              this.state.subscriptionExpiration
            )}
          </p>
        </div>
      );
    }
  }
}
export default SettingsContent;
