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
          const userEmail = this.props.firebase.auth.currentUser.email;
          if (user) {
            user
              .getIdToken()
              .then((userIdToken) => {
                axios
                  .post('http://localhost:9000/user/create', {
                    idToken: userIdToken,
                    email: userEmail,
                  })
                  .then((res) => console.log(res))
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
