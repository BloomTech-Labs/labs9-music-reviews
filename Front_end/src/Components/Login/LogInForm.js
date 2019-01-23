import React from 'react';
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
import { FirebaseContext } from '../Firebase';
import LogInWithGoogle from './LogInWithGoogle';
import './Login.css';

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
          this.props.changeLogInState();
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
    console.log(this.state.error)
    return (
      <Container>
        <h2 className="mt-3 mb-3">Log In</h2>
        <Form>
          <FirebaseContext.Consumer>
            {(firebase) => <LogInWithGoogle firebase={firebase} changeLogInState={this.props.changeLogInState} />}
          </FirebaseContext.Consumer>
          <Col>
            <FormGroup>
              <Label>Email</Label>
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
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
                placeholder="Password"
              />
            </FormGroup>
          </Col>
          <div className="regLogin mb-3">
            <Button
              color="primary"
              className="mr-3"
              onClick={this.onSubmitHandler}
            >
              Sign In
            </Button>
            <span
              className="forgotPassword"
              onClick={() => this.props.history.push('/forgot_password')}
            >
              Forgot account?
            </span>
          </div>
          <Button color="primary" className="mb-3 mr-3" onClick={this.redirect}>
            Don't have an account?
          </Button>
        </Form>
      </Container>
    );
  }
}
export default withRouter(LogInForm);
