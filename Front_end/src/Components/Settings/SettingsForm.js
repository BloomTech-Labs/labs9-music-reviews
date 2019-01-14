import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from 'react-materialize';

class SettingsForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      email: '',
      isVerified: '',
      currentPassword: '',
      newPassword1: '',
      newPassword2: '',
    };
  }
  componentDidMount () {
    this.props.firebase.auth.onAuthStateChanged (user => {
      if (user) {
        this.setState ();
      } else {
        console.log ('Hello world.');
      }
    });
  }
  redirect = () => {
    this.props.history.push ('/');
  };
  render () {
    if (this.state.email === '') {
      return <div />;
    } else {
      return (
        <div>
          <p>Email Address</p>
        </div>
      );
    }
  }
}
export default SettingsForm;
