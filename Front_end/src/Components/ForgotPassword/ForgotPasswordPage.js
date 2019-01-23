import React from 'react';
import { FirebaseContext } from '../Firebase';
import ForgotPasswordForm from './ForgotPasswordForm.js';

class ForgotPasswordPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Music Reviews</h1>
        <FirebaseContext.Consumer>
          {(firebase) => <ForgotPasswordForm firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default ForgotPasswordPage;
