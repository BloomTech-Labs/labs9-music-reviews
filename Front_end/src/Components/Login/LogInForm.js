import React from 'react';
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Row
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
          window.location.href="https://labs9carreviews.netlify.com/home"
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
      <Container fluid style={{ position: "relative", top: "10rem" }}>
        <Row className='justify-content-center'>
          <Col xl={6} lg={6} md={6} sm={6}>
          <h2 style ={{ color: "#eac67a", textShadow: "-1px -1px 0 #984B43, 1px -1px 0 #984B43, -1px 1px 0 #984B43, 1px 1px 0 #984B43"}}>Log In</h2>
                <Form className = 'pt-5 pb-5 align-items-center' style={{ border: "2px solid #eac67a", borderRadius: '1rem', backgroundColor: 'rgba(35, 50, 55, 1)' }}>
                  <FirebaseContext.Consumer>
                    {(firebase) => <LogInWithGoogle firebase={firebase} changeLogInState={this.props.changeLogInState} />}
                  </FirebaseContext.Consumer>
                  <Col sm={10}>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        style = {{backgroundColor: '#eac67a', color: '#984b43'}}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        placeholder="Email Address"
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={10}>
                    <FormGroup >
                      <Label>Password</Label>
                      <Input
                        style = {{backgroundColor: '#eac67a', color: '#984b43'}}
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        placeholder="Password"
                      />
                    </FormGroup>
                  </Col>
                  <Row className = 'mb-3 mt-3'>
                    <Col>
                      <Button
                        style={{backgroundColor: '#eac67a', color: '#984b43', fontWeight: '650'}}
                        onClick={this.onSubmitHandler}
                        className='mr-3 butt'
                      >
                        Sign In
                      </Button>
                      <Button
                        style={{backgroundColor: '#eac67a', color: '#984b43', fontWeight: '650'}}
                        onClick={this.redirect}
                        className = 'butt'
                        >
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                    <Row>
                    <Button 
                      color= 'link'
                      style = {{color: '#eac67a', fontWeight: '200'}}
                      onClick={() => this.props.history.push('/forgot_password')}
                    >
                      Forgot Password?
                    </Button>
                  </Row>
                </Form>
            </Col>
          </Row>
        </Container>
    );
  }
}
export default withRouter(LogInForm);
