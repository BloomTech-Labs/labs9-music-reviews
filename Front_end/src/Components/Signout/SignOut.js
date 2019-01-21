import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-materialize';

const SignOutAnchor = styled.a`
  cursor: pointer;
  color: #007bff !important;
`;

const SignOut = (props) => (
  <SignOutAnchor onClick={() => props.firebase.doSignOut()}>
    <Icon>cancel</Icon>Sign Out
  </SignOutAnchor>
);

export default SignOut;
