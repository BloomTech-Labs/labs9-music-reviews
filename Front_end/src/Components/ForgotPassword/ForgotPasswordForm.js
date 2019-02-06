import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import './ForgotPassword.css';

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  redirect = () => {
    this.props.history.push('/login');
  };
  resetPassword = () => {
    this.props.firebase
      .doPasswordReset(this.state.email)
      .then((res) => this.props.history.push('/login'))
      .catch((err) => err.message)
  };
  render() {
    return (
      <Container fluid style={{ position: "relative", top: "10rem", color: "#984b43", fontFamily: "Lato" }}>
        <h2 className="mt-3 mb-3" style={{ fontFamily: "Merriweather Sans", fontWeight: "650" }}>Reset Password</h2>
        <Form style={{ background: "#233237", maxWidth: "600px", height: "250px", borderRadius: "1rem" }}>
          <Col>
            <FormGroup>
              <Label className="mt-2" style={{ fontSize: "1.5rem", color: "#eac67a", padding: "1rem", fontWeight: "650" }}>Email</Label>
              <Input
                className="mb-3"
                type="email"
                name="email"
                value={this.state.email}
                placeholder="you@yours.com"
                onChange={this.onChangeHandler}
              />
              <div className="reset-container" />
              <div style={{ textAlign: "center", padding: "1rem" }}>
                <Button
                  className="mr-3"
                  style={{ background: "#eac67a", color: "#984b43", padding: "1rem 2rem", fontWeight: "650" }}
                  onClick={this.resetPassword}
                >
                  Reset Password
                </Button>
                <span className="cancelReset" onClick={this.redirect} style={{ color: "#eac67a" }}>
                  Cancel
                </span>
              </div>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}
export default withRouter(ForgotPasswordForm);
