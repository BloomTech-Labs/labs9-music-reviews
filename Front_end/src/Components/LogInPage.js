import React from 'react';
import {FirebaseContext} from './Firebase';
import LogInForm from './LogInForm';

class LogInPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Log In</h1>
        <FirebaseContext.Consumer>
          {firebase => <LogInForm firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default LogInPage;
