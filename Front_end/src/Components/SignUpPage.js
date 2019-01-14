import React from 'react';
import SignUpForm from './SignUpForm';
import {FirebaseContext} from './Firebase';

class SignUpPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Sign Up</h1>
        <FirebaseContext.Consumer>
          {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default SignUpPage;
