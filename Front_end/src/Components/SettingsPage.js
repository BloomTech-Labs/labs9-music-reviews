import React from 'react';
import axios from 'axios';
import { Button } from 'react-materialize';

class SettingsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  componentDidMount() {
    this.setState({
      //get username and password from localStorage and set state variables to those variable values
      //should prob be refactored once auth0 is integrated
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password'),
    });
  }
  onChangeHandler = (e) => {
    //onChangeHandler for controlled inputs
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = () => {
    const validator = /\S+@\S+/; //regex to check valid email
    if (validator.test(this.state.username.toLowerCase())) {
      //basic validation check for email, email should be tested server side too
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
      axios
        .post(
          'https://labs9-car-reviews.herokuapp.com/user/change_user_settings',
          user
        )
        .then((res) => {
          localStorage.setItem('username', this.state.username); //should be more secure than this,auth0?
          localStorage.setItem('password', this.state.password); //should be more secure than this,auth0?
          this.props.history.push('/reviews');
        })
        .catch((err) => alert(err));
    } else {
      alert('You must enter a valid email.');
    }
  };
  render() {
    return (
      <form>
        <input
          type="email"
          name="username"
          value={this.state.username}
          onChange={this.onChangeHandler}
          placeholder="user@example.com"
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onChangeHandler}
          placeholder="username@example.com"
        />
        <Button waves="light" onClick={this.onSubmitHandler}>
          Save
        </Button>
      </form>
    );
  }
}
export default SettingsPage;
