  import React from 'react';
import { FirebaseContext } from '../Firebase';
import LogInForm from './LogInForm';

class LogInPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Music Reviews</h1>
        <FirebaseContext.Consumer>
          {(firebase) => <LogInForm firebase={firebase} changeLogInState={this.props.changeLogInState} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default LogInPage;
