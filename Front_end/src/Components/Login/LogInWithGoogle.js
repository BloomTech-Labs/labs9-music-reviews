import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';

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
                  .post('https://labs9-car-reviews.herokuapp.com/user/create', {
                    token: userIdToken,
                  })
                  .then((res) => this.props.history.push('/'))
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          }
        });
        this.props.history.push('/home');
      })
      .catch((error) => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  render() {
    return (
      <Button color="primary" className="mt-3 mb-3" onClick={this.onSubmit}>
        Google Log In
      </Button>
    );
  }
}
export default withRouter(LogInWithGoogle);
