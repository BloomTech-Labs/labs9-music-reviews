import React from 'react';
import SignUpForm from './SignUpForm';
import { FirebaseContext } from '../Firebase';
//import './Signup.css';

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <FirebaseContext.Consumer>
          {(firebase) => <SignUpForm firebase={firebase} changeLogInState={this.props.changeLogInState} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default SignUpPage;
