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
    };
  }
  componentDidMount () {
    this.props.firebase.auth.onAuthStateChanged (user => {
      if (user) {
        this.setState ({
          name: user.displayName,
          email: user.email,
          isVerified: user.emailVerified,
        });
      }
    });
  }
  redirect = () => {
    this.props.history.push ('/');
  };
  onChangeHandler = e => {
    this.setState ({[e.target.name]: e.target.value});
  };
  render () {
    return (
      <div>
        <p>Username</p>
        <p>{this.state.name}</p>
        <p>Email Address</p>
        {this.state.isVerified
          ? null
          : <p
              className="verifylink"
              onClick={() =>
                this.props.firebase.doSendVerificationViaEmail (
                  this.state.name
                )}
            >
              {'(not verified — click to resend)'}
            </p>}
        {this.state.email}
        <Button waves="light">Change Email</Button>
        <Button waves="light">Change Password</Button>
        <Button waves="light" onClick={this.redirect}>Back to home</Button>
      </div>
    );
  }
}
export default withRouter (SettingsForm);
