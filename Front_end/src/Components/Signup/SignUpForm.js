import React from 'react';
import axios from 'axios';

import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmpassword: '',
      invalidUser: false
    };
  }
  onChangeHandler = (e) => {
    //onChangeHandler for controlled inputs
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = () => {
    const validUser = this.isValid();
    if (validUser) {
      this.setState({invalidUser: false})
      this.props.firebase
        .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((authUser) => {
          const index = this.state.email.indexOf('@');
          const name = this.state.email.slice(0, index);
          this.props.firebase.doSendVerificationViaEmail(name);
          this.props.firebase.auth
            .onAuthStateChanged((user) => {
              if (user) {
                user.getIdToken().then((idToken) => {
                  axios
                    .post(
                      `${process.env.REACT_APP_BACKEND_URL}users/create`,
                      {
                        token: idToken,
                      }
                    )
                    .then((res) => {
                      this.props.changeLoginState()
                      this.props.history.push('/')
                    })
                    .catch((err) => console.log(err));
                });
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          this.setState({ error });
        });
    } else {
      this.setState({invalidUser: true});
    }
  };
  isValid = () => {
    return this.state.email && this.state.password && (this.state.password === this.state.confirmpassword);
  };
  redirect = () => {
    this.props.history.push('/login');
  };
  render() {
    return (
      <Container>
        <h2 className="mt-3 mb-3">Sign Up</h2>
        <Form>
          <Col>
            <FormGroup>
              <Label className="mt-3 mb-3">Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
                placeholder="Email Address"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="mt-3 mb-3">Password</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
                placeholder="Password"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="mt-3 mb-3">Confirm Password</Label>
              <Input
                type="password"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.onChangeHandler}
                placeholder="Confirm Password"
              />
            </FormGroup>
          </Col>
          <div className="btn-container">
            <Button
              color="primary"
              className="mr-2 mt-2 mb-3"
              onClick={this.onSubmitHandler}
            >
              Sign Up
            </Button>
            <Button
              color="primary"
              className="ml-2 mt-2 mb-3"
              onClick={this.redirect}
            >
              Have an account?
            </Button>
          </div>
        </Form>
        {this.state.invalidUser === true ? <p style={{color: 'red', fontStyle: 'italic', margin: '10px auto', textAlign:'center'}}>Invalid email, password, or passwords do not match.</p> : null }
      </Container>
    );
  }
}
export default withRouter(SignUpForm);
