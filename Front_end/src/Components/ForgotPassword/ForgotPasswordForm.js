import React from 'react';
import {withRouter} from 'react-router-dom';

class ForgotPasswordForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
    };
  }
  onChangeHandler = e => {
    this.setState ({[e.target.name]: e.target.value});
  };
  redirect = () => {
    this.props.history ('/login');
  };
  resetPassword = () => {
    this.props.firebase
      .doPasswordReset (this.state.email)
      .then (res => this.props.history.push ('/login'))
      .catch (err => console.log (err));
  };
  render () {
    return (
      <div>
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="you@yours.com"
          onChange={this.onChangeHandler}
        />
        <button onClick={this.resetPassword}>Reset Password</button>
        <span className="cancelReset" onClick={this.redirect}>Cancel</span>
      </div>
    );
  }
}
export default withRouter (ForgotPasswordForm);
