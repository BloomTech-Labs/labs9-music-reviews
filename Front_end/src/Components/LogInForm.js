import React from 'react';
import axios from 'axios';
import {Button} from 'react-materialize';
import {withRouter} from 'react-router-dom';

class LogInForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onChangeHandler = e => {
    //onChangeHandler for controlled inputs
    this.setState ({[e.target.name]: e.target.value});
  };
  onSubmitHandler = () => {
    const validUser = this.isValid ();
    if (validUser) {
      this.props.firebase
        .doSignInWithEmailAndPassword (this.state.email, this.state.password)
        .then (authUser => {
          console.log (authUser);
          this.props.history.push ('/');
        })
        .catch (error => {
          this.setState ({error});
        });
    }
  };
  isValid = () => {
    return this.state.email && this.state.password;
  };
  redirect = () => {
    this.props.history.push ('/signup');
  };
  render () {
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
        <Button waves="light" onClick={this.redirect}>
          Don't have an account?
        </Button>
      </div>
    );
  }
}
export default withRouter (LogInForm);
