import React, {Component} from 'react';
import {withRouter, Route} from 'react-router-dom';
import SignOut from '../Signout/SignOut';
import {
  
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  NavbarBrand} from 'reactstrap';
import { Icon } from 'react-materialize';

import {FirebaseContext} from '../Firebase/index.js';
import Breadcrumbs from './Breadcrumbs';

class Navigation extends Component {
  constructor () {
    super ();
    this.state = {
      isOpen: false
    };
  }

  render () {
    return (
        <Navbar color="dark" dark expand="md" sticky = 'top'>
          <NavbarBrand className="mr-auto"><Route path="/:path" component={Breadcrumbs} /></NavbarBrand>
            <Nav className="ml-auto" navbar style = {{alignContent: 'center', alignItems: 'center'}}>
              <Input
                type="search"
                name="search"
                id="search"
                placeholder="Search music"
                style = {{margin: '0 10px 0 0', padding: '5px', height: '30px', backgroundColor: '#495057', color: '#fff'}}
              />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <Icon>menu</Icon>
                </DropdownToggle>
                <DropdownMenu right >
                <DropdownItem>
                  <a href="/">Home</a>
                  </DropdownItem>
                  <DropdownItem>
                  <a href="/reviews">My Reviews</a>
                  </DropdownItem>
                  <DropdownItem>
                  <a href="/billing">Billing</a>
                  </DropdownItem>
                  <DropdownItem>
                  <a href="/settings">Settings</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  {/* <FirebaseContext.Consumer>	
                    {firebase => <SignOut firebase={firebase} />}
                  </FirebaseContext.Consumer> */}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <a><Icon>account_box</Icon></a>
            </Nav>
        </Navbar>
    )
  }
}

export default withRouter (Navigation);
