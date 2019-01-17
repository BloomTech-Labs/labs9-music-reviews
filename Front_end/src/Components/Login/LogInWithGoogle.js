import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class LogInWithGoogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = (e) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        this.props.firebase.auth.onAuthStateChanged((user) => {
          if (user) {
            user
              .getIdToken()
              .then((userIdToken) => {
                axios
                  .post('http://localhost:9000/user/create', {
                    token: userIdToken,
                  })
                  .then((res) => this.props.history.push('/'))
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          }
        });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Google Sign In</button>
      </form>
    );
  }
}
export default withRouter(LogInWithGoogle);
