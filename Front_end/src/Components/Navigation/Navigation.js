import React, { Component, Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import SignOut from '../Signout/SignOut';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  NavbarBrand,
} from 'reactstrap';
import { Icon } from 'react-materialize';

import { FirebaseContext } from '../Firebase/index.js';
import Breadcrumbs from './Breadcrumbs';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" sticky="top">
        <NavbarBrand className="mr-auto">
          <Route path="/:path" component={Breadcrumbs} />
        </NavbarBrand>
        <Nav
          className="ml-auto"
          navbar
          style={{ alignContent: 'center', alignItems: 'center' }}
        >
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Search music"
            style={{
              margin: '0 10px 0 0',
              padding: '5px',
              height: '30px',
              backgroundColor: '#495057',
              color: '#fff',
            }}
          />
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <Icon>menu</Icon>
            </DropdownToggle>
            <DropdownMenu right>
              {this.props.loggedIn === true ? 
                <Fragment>
                  <DropdownItem href="/home"> 
                    Home
                  </DropdownItem>
                  <DropdownItem href="/reviews">
                    My Reviews
                  </DropdownItem>
                  <DropdownItem href="/billing">
                    Billing
                  </DropdownItem>
                  <DropdownItem href="/settings">
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/">
                    <FirebaseContext.Consumer>
                      {(firebase) => <SignOut firebase={firebase} />}
                    </FirebaseContext.Consumer>
                  </DropdownItem>
                </Fragment> : 
                <Fragment>
                  <DropdownItem href="/signup">
                    Sign Up
                  </DropdownItem>
                  <DropdownItem href="/login">
                    Sign In
                  </DropdownItem>
                </Fragment>
              }
            </DropdownMenu>
          </UncontrolledDropdown>
          <a>
          <img
                src={require("../../Images/RecordThumb.png")}
                alt="Default profile image"
                style={{ maxWidth: '30px', maxHeight: "30" }}
              />
          </a>
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
