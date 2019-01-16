import React from 'react';
import axios from 'axios';

class SettingsContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((user) => {
      const email = user.email;
      const index = email.indexOf('@');
      axios
        .get(`http://localhost:9000/user/get/${email.slice(0, index)}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
  }
  render() {
    return <div />;
  }
}
export default SettingsContent;
