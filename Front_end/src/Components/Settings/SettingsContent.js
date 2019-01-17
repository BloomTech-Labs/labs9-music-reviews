import React from 'react';
import axios from 'axios';

class SettingsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      paidStatus: false,
      subscriptionExpiration: null,
      loading: false,
      loaded: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: true }, () =>
      //when component mounts
      //check to see if there is a user that has been authenticated
      this.props.firebase.auth.onAuthStateChanged((user) => {
        // if there has been make a call to our own database to find user
        if (user) {
          //if successful set state with details of the user
          const email = user.email;
          axios
            .get(`http://localhost:9000/user/get/${email}`)
            .then((res) => {
              this.setState({
                email: res.data.emailAddress,
                paidStatus: res.data.paidMembership,
                subscriptionExpiration: res.data.subscriptionExpiration,
                loaded: true,
                loading: false,
              });
            })
            .catch((err) => this.setState({ loaded: false, loading: false }));
          //else no data has been loaded but database should still have user since authentication check passed
        } else {
          this.setState({ loaded: false, loading: false });
          //no user so data has been loaded since there was none to be found.
        }
      })
    );
  }
  render() {
    if (this.state.loading === true && this.state.loaded === false) {
      return <div />;
    } else if (this.state.loading === false && this.state.loaded === false) {
      return <div>Something went wrong.</div>;
    } else if (this.state.loaded === true && this.state.loading === false) {
      return (
        <div>
          <p>Email address: {this.state.email}</p>
          <p>{this.state.paidStatus == false ? 'tier: free' : 'tier: paid'}</p>
          <p>
            {this.state.subscriptionExpiration == null ? (
              ''
            ) : (
              this.state.subscriptionExpiration
            )}
          </p>
        </div>
      );
    }
  }
}
export default SettingsContent;
