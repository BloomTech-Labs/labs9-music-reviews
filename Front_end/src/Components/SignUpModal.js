import React from 'react';
import { Modal, NavItem } from 'react-materialize';
const SignUpModal = () => (
  <Modal
    className="signup"
    header="Modal Header"
    trigger={<NavItem>Sign Up</NavItem>}
  />
);
export default SignUpModal;
