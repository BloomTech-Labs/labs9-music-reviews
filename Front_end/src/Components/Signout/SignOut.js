import React from 'react';
import styled from 'styled-components';

const SignOutAnchor = styled.a`
  cursor: pointer;
  color: #EAC67A !important;
`;

const SignOut = (props) => (
  <SignOutAnchor onClick={() => {
    props.firebase.doSignOut();
  }}>
    Sign Out
  </SignOutAnchor>
);

export default SignOut;
