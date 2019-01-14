import React from 'react';
import axios from 'axios';
import {FirebaseContext} from '../Firebase';
import SettingsForm from './SettingsForm';

class SettingsPage extends React.Component {
  render () {
    return (
      <div>
        <h1>Account Settings</h1>
        <FirebaseContext.Consumer>
          {firebase => <SettingsForm firebase={firebase} />}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
export default SettingsPage;
