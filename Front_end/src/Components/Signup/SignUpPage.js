import React from 'react';
import SignUpForm from './SignUpForm';
import { FirebaseContext } from '../Firebase';
import './Signup.css';

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Music Reviews</h1>
        <FirebaseContext.Consumer>
          {(firebase) => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default SignUpPage;
