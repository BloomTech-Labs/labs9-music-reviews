import React from 'react';
import {FirebaseContext} from '../Firebase';
import ForgotPasswordForm from './ForgotPasswordForm.js';

class ForgotPasswordPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Reset your password.</h1>
        <p>Email Address</p>
        <FirebaseContext.Consumer>
          {firebase => <ForgotPasswordForm firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default ForgotPasswordPage;
