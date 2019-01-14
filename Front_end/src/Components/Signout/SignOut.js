import React from 'react';
import {SideNavItem} from 'react-materialize';

const SignOut = props => (
  <SideNavItem icon="cancel" onClick={() => props.firebase.doSignOut ()}>
    Sign Out
  </SideNavItem>
);

export default SignOut;
