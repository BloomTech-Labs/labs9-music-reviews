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
import {FirebaseContext } from '../Firebase';
import LogInWithGoogle from '../Login/LogInWithGoogle';

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
                      this.props.changeLogInState();
                      this.props.history.push('/home');
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
      <Container fluid style={{ paddingTop: "12rem" }}>
      <Row className='justify-content-center'>
      <Col>
        <h2 style ={{ color: "#984B43", fontFamily:'merriweather sans'}}>Sign Up</h2>
        <Form className = 'pt-5 pb-5 align-items-center' style={{ border: "2px solid #eac67a", borderRadius: '1rem', backgroundColor: 'rgba(35, 50, 55, 1)', color: 'rgb(234, 198, 122)' }}>
          <Col sm={10}>
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
          <Col sm={10}>
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
          <Col sm={10}>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.onChangeHandler}
                placeholder="Confirm Password"
                // style = {{backgroundColor: '#eac67a', color: '#984b43'}}
              />
            </FormGroup>
          </Col>
          <div className="container d-flex flex-column mt-3" style={{textAlign: 'center'}} >
          <Col>
            <Button
              onClick={this.onSubmitHandler}
              style={{backgroundColor: '#eac67a', color: '#984b43', fontWeight: '650'}}
            >
              Sign Up
            </Button>
            </Col>
            <Col>
            <Button 
                  color= 'link'
                  style = {{color: '#eac67a', fontWeight: '200', padding: "1.5rem" }}
                  onClick={() => this.props.history.push('/login')}>
                          Have an account?
            </Button>
            </Col>
            <FirebaseContext.Consumer>
              {(firebase) => <LogInWithGoogle firebase={firebase} changeLogInState={this.props.changeLogInState} />}
            </FirebaseContext.Consumer>
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
