import React from 'react';
import { Modal, NavItem } from 'react-materialize';

class SignUpModal extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };
  render() {
    return (
      <Modal header="Sign Up" trigger={<NavItem>Sign Up</NavItem>}>
        <div>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            placeholder="Enter username"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            placeholder="Enter password"
          />
        </div>
      </Modal>
    );
  }
}
export default SignUpModal;
