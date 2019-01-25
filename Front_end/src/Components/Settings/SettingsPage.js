import React from 'react';
import { FirebaseContext } from '../Firebase';
import SettingsContent from './SettingsContent';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  height: 100vh;
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
        <FirebaseContext.Consumer>
          {(firebase) => <SettingsContent firebase={firebase} />}
        </FirebaseContext.Consumer>
      </SettingsContainer>
    );
  }
}
export default SettingsPage;
