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
  Row
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './Signup.css'

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
                        this.props.history.push('/');
                      })
                      .catch((err) => console.log(err));
                  });
              }}
            )
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
      <Container fluid style={{ position: "relative", top: "10rem" }}>
      <Row className='justify-content-center'>
      <Col xl={6} lg={6} md={6} sm={6}>
        <h2 style ={{ color: "#eac67a", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>Sign Up</h2>
        <Form className = 'pt-5 pb-5 align-items-center' style={{ border: "2px solid #eac67a", borderRadius: '1rem', backgroundColor: 'rgba(35, 50, 55, 1)' }}>
          <Col sm={10}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
                placeholder="Email Address"
                style = {{backgroundColor: '#eac67a', color: '#984b43'}}
              />
            </FormGroup>
          </Col>
          <Col sm={10}>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
                placeholder="Password"
                style = {{backgroundColor: '#eac67a', color: '#984b43'}}
              />
            </FormGroup>
          </Col>
          <Col sm={10}>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.onChangeHandler}
                placeholder="Confirm Password"
                style = {{backgroundColor: '#eac67a', color: '#984b43'}}
              />
            </FormGroup>
          </Col>
          <div className="btn-container">
            <Button
              className="mr-2 mt-2 mb-3 butt"
              onClick={this.onSubmitHandler}
              style={{backgroundColor: '#eac67a', color: '#984b43', fontWeight: '650'}}
            >
              Sign Up
            </Button>
            <Button
              className="ml-2 mt-2 mb-3 butt"
              onClick={this.redirect}
              style={{backgroundColor: '#eac67a', color: '#984b43', fontWeight: '650'}}
            >
              Sign In
            </Button>
          </div>
        </Form>
        {this.state.invalidUser === true ? <p style={{color: 'red', fontStyle: 'italic', margin: '10px auto', textAlign:'center'}}>Invalid email, password, or passwords do not match.</p> : null }
      </Col>
      </Row>
      </Container>
    );
  }
}
export default withRouter(SignUpForm);
