import React from 'react';
import styled from 'styled-components';

const SignOutAnchor = styled.a`
  cursor: pointer;
  color: #984B43 !important;
`;

const SignOut = (props) => (
  <SignOutAnchor onClick={() => {
    props.firebase.doSignOut();
    props.signout();
  }}>
    Sign Out
  </SignOutAnchor>
);

export default SignOut;
