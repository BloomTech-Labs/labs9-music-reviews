import React from 'react';
import { Button } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';
import LogInWithGoogle from './LogInWithGoogle';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onChangeHandler = (e) => {
    //onChangeHandler for controlled inputs
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = () => {
    const validUser = this.isValid();
    if (validUser) {
      this.props.firebase
        .doSignInWithEmailAndPassword(this.state.email, this.state.password)
        .then((authUser) => {
          this.props.history.push('/');
        })
        .catch((error) => {
          this.setState({ error });
        });
    }
  };
  isValid = () => {
    return this.state.email && this.state.password;
  };
  redirect = () => {
    this.props.history.push('/signup');
  };
  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onChangeHandler}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
        <Button waves="light" onClick={this.onSubmitHandler}>
          Sign In
        </Button>
        <FirebaseContext.Consumer>
          {(firebase) => <LogInWithGoogle firebase={firebase} />}
        </FirebaseContext.Consumer>
        <Button waves="light" onClick={this.redirect}>
          Don't have an account?
        </Button>
        <span
          className="forgotPassword"
          onClick={() => this.props.history.push('/forgot_password')}
        >
          Forgot account?
        </span>
      </div>
    );
  }
}
export default withRouter(LogInForm);
