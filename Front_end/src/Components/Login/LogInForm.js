import React from 'react';
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card
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
    return (
      <Container fluid style={{ position: "relative", top: "15rem" }}>
      <Card style={{ border: "2px solid orange", maxWidth: "800px", margin: "0 auto", padding: "5rem 0" }}>
        <h2>Log In</h2>
        <Form style={{ margin: "0 auto", padding: "-10rem"}}>
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
          <div className="regLogin">
            <Button
              color="warning"
              style={{ margin: "1rem"}}
              onClick={this.onSubmitHandler}
            >
              Sign In
            </Button>
            <span
              className="forgotPassword"
              style={{ margin: "1rem" }}
              onClick={() => this.props.history.push('/forgot_password')}
            >
              Forgot Password?
            </span>
          </div>
          <Button color="warning" style={{ margin: "1rem" }} onClick={this.redirect}>
            Don't have an account?
          </Button>
          </Form>
        </Card>
      </Container>
    );
  }
}
export default withRouter(LogInForm);
