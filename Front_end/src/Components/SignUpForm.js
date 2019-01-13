import React from 'react';
import axios from 'axios';
import {Button} from 'react-materialize';
import {withRouter} from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
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
        .doCreateUserWithEmailAndPassword (
          this.state.email,
          this.state.password
        )
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
    return this.state.name && this.state.email && this.state.password;
  };
  redirect = () => {
    this.props.history.push ('/login');
  };
  render () {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
          placeholder="Name"
        />
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
          Sign Up
        </Button>
        <Button waves="light" onClick={this.redirect}>
          Already have an account?
        </Button>
      </div>
    );
  }
}
export default withRouter (SignUpForm);
