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
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Container fluid style={{ position: "relative", top: "10rem" }}>
        <h2 className="mt-3 mb-3">Reset Password</h2>
        <Form>
          <Col>
            <FormGroup>
              <Label className="mt-2">Email</Label>
              <Input
                className="mb-3"
                type="email"
                name="email"
                value={this.state.email}
                placeholder="you@yours.com"
                onChange={this.onChangeHandler}
              />
              <div className="reset-container" />
              <Button
                color="primary"
                className="mr-3"
                onClick={this.resetPassword}
              >
                Reset Password
              </Button>
              <span className="cancelReset" onClick={this.redirect}>
                Cancel
              </span>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}
export default withRouter(ForgotPasswordForm);
