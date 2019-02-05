import React from 'react'
import styled from 'styled-components'

const SignOutAnchor = styled.a`
  cursor: pointer;
  color: #984B43 !important;
`

const SignOut = (props) => (
  <SignOutAnchor onClick={() => {
    props.firebase.doSignOut();
  }}>
    <SignOutAnchor onClick={props.signout}>
      Sign Out
    </SignOutAnchor>
  </SignOutAnchor>
)

export default SignOut
