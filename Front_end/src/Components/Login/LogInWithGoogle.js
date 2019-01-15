import React from 'react';
import {withRouter} from 'react-router-dom';

class LogInWithGoogle extends React.Component {
  constructor (props) {
    super (props);
    this.state = {error: null};
  }
  onSubmit = e => {
    this.props.firebase
      .doSignInWithGoogle ()
      .then (socialAuthUser => {
        console.log (socialAuthUser);
        this.props.history.push ('/');
      })
      .catch (error => {
        this.setState ({error});
      });
    e.preventDefault ();
  };

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Google Sign In</button>
      </form>
    );
  }
}
export default withRouter (LogInWithGoogle);
