import React from 'react';
import axios from 'axios';

class SettingsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      paidStatus: false,
      reviewCount: 0,
      subscriptionExpiration: null,
      username: '',
      loading: false,
      loaded: false,
    };
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((user) => {
      const email = user.email;
      const index = email.indexOf('@');
      axios
        .get(`http://localhost:9000/user/get/${email.slice(0, index)}`)
        .then((res) =>
          this.setState({
            email: res.data.emailAddress,
            paidStatus: res.data.paidMembership,
            reviewCount: res.data.reviewCount,
            reviewCount: res.data.reviewCount,
            subscriptionExpiration: res.data.subscriptionExpiration,
            username: res.data.userName,
          })
        )
        .catch((err) => console.log(err));
    });
  }
  render() {
    return <div />;
  }
}
export default SettingsContent;
