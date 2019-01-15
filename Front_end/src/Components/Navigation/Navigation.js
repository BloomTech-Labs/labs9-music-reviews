import React, {Component} from 'react';
import {withRouter, Route} from 'react-router-dom';
import SignOut from '../Signout/SignOut';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input} from 'reactstrap';
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

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
        <Navbar color="dark" dark expand="md" style = {{height: '100px', }}>
            <Nav className="ml-auto" navbar style = {{alignContent: 'center', alignItems: 'center'}}>
            <Route path="/:path" component={Breadcrumbs} />
              <Input
                type="search"
                name="search"
                id="search"
                placeholder="Search music"
                style = {{width: '500px', margin: '0 10px 0 0', padding: '5px', height: '30px', backgroundColor: '#495057', color: '#fff'}}
              />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <Icon>menu</Icon>
                </DropdownToggle>
                <DropdownMenu right style = {{width: '250px'}}>
                  <DropdownItem>
                    My Profile
                  </DropdownItem>
                  <DropdownItem>
                    My Reviews
                  </DropdownItem>
                  <DropdownItem>
                    Saved Reviews
                  </DropdownItem>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Logout
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
