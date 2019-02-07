import React from 'react';
import { FirebaseContext } from '../Firebase';
import styled from 'styled-components';
import SettingsContent from './SettingsContent';
import { withAuthorization } from '../../Components/Session';

const SettingsContainer = styled.div`
  padding-top: 8rem;
  div {
    text-align: center;
    p {
      padding-top: 10px;
    }
  }
`;

class SettingsPage extends React.Component {
  render() {
    return (
      <SettingsContainer>
        <h1 style={{ margin: "0 auto", textAlign: "center", color: "#984b43", fontFamily: "Merriweather Sans", fontWeight: "700" }}>
          Account Settings
        </h1>
        <FirebaseContext.Consumer>
          {(firebase) => <SettingsContent 
            firebase={firebase} 
            subscriptionExpiration={this.props.subscriptionExpiration}
            userID={this.props.userID}
            nickname={this.props.nickname}
          />}
        </FirebaseContext.Consumer>
      </SettingsContainer>
    );
  }
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(SettingsPage);
//export default SettingsPage;
