import React from 'react';
import { FirebaseContext } from '../Firebase';
import SettingsContent from './SettingsContent';

class SettingsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Account Settings</h1>
        <FirebaseContext.Consumer>
          {(firebase) => <SettingsContent firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default SettingsPage;
