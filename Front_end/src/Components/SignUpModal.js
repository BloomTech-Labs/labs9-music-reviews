//component is a modal that contains a form in which a user can sign up

import React from 'react';
import { Modal, NavItem, Button } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SignUpModal extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  onChangeHandler = (e) => {
    //onChangeHandler for controlled inputs
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = () => {
    const newUser = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post('https://labs9-car-reviews.herokuapp.com/user/signup', newUser)
      .then((res) => this.props.history.push('/reviews'))
      .catch((err) => alert(err));
  };
  render() {
    return (
      <Modal header="Sign Up" trigger={<NavItem>Sign Up</NavItem>}>
        <div>
          <input
            type="email"
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            placeholder="Enter email address"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            placeholder="Enter password"
          />
          <Button waves="light" onClick={this.onSubmitHandler}>
            Sign Up
          </Button>
        </div>
      </Modal>
    );
  }
}
export default withRouter(SignUpModal);
