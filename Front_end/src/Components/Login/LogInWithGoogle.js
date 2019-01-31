import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button, Col } from 'reactstrap';

class LogInWithGoogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = (e) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        this.props.firebase.auth.onAuthStateChanged((user) => {
          if (user) {
            user
              .getIdToken()
              .then((userIdToken) => {
                axios
                  .post(`${process.env.REACT_APP_BACKEND_URL}users/create`, {
                    token: userIdToken,
                  })
                  .then((res) => console.log("Login Successful"))
                  .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            }
          });
          this.props.changeLogInState();
          this.props.history.push('/home');
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <Col align='center'>
        {/* <Button style={{backgroundColor: '#eac67a', color: '#984b43', fontWeight: '650'}} onClick={this.onSubmit}>
          Google Log In
        </Button> */}
        <img src={require("../../Images/GoogleWhite.png")} alt="Log In with Google" onClick={this.onSubmit} 
            style={{ color: '#eac67a', fontWeight: '650', maxWidth: "15rem", padding: "1rem" }}
        />
      </Col>
    );
  }
}
export default withRouter(LogInWithGoogle);
