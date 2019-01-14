import React from 'react';
import axios from 'axios';
import { Button } from 'react-materialize';
import styled from 'styled-components';

const SettingsPageForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  text-align: left;
  margin-left: 10%;
  margin-top: 30px;
  padding: 2%;
  box-sizing: border-box;

  @media (max-width: 599px) {
    margin: 0 auto;
    margin-top: 20px;
    padding: 5%;
  }
`;
class SettingsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      oldPassword: '',
      newPassword: '',
    };
  }
  componentDidMount() {
    this.setState({
      //get username and password from localStorage and set state variables to those variable values
      //should prob be refactored once auth0 is integrated
      username: localStorage.getItem('username'),
    });
  }
  onChangeHandler = (e) => {
    //onChangeHandler for controlled inputs
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = () => {
    //need to add ability to change email
    if (
      this.state.oldPassword === localStorage.getItem('password') &&
      this.state.newPassword
    ) {
      //basic validation check for email, email should be tested server side too
      const user = {
        username: this.state.username,
        oldPassword: this.state.oldPassword,
        newPassword: this.state.newPassword,
      };
      axios
        .post(
          'https://labs9-car-reviews.herokuapp.com/user/change_password',
          user
        )
        .then((res) => {
          localStorage.setItem('username', this.state.username); //should be more secure than this,auth0?
          localStorage.setItem(
            'password',
            this.state.newPassword || this.state.oldPassword
          ); //should be more secure than this,auth0?
          this.props.history.push('/reviews');
        })
        .catch((err) => alert(err));
    } else {
      alert('Both passwords must be valid.');
    }
  };
  render() {
    return (
      <div>
        <SettingsPageForm>
          Username: <p>{this.state.username}</p>
          Old Password:{' '}
          <input
            type="password"
            name="oldPassword"
            value={this.state.oldPassword}
            onChange={this.onChangeHandler}
            placeholder="enter password"
          />
          New Password:{' '}
          <input
            type="password"
            name="newPassword"
            value={this.state.newPassword}
            onChange={this.onChangeHandler}
            placeholder="enter password"
          />
          <Button waves="light" onClick={this.onSubmitHandler}>
            Save
          </Button>
        </SettingsPageForm>
      </div>
    );
  }
}
export default SettingsPage;
