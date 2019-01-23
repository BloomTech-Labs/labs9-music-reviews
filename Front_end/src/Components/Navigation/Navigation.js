import React, { Component, Fragment } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';
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
import PlansModal from './PlansModal'

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
        {this.props.loggedIn === true ? null : <PlansModal />}        
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
                  <DropdownItem> 
                    <Link to="/home">Home</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={`/user/reviews/${this.props.userID}`}>My Reviews</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/user/billing">Billing</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/user/settings">Settings</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/">
                      <FirebaseContext.Consumer>
                        {(firebase) => <SignOut firebase={firebase} signout={this.props.signout} />}
                      </FirebaseContext.Consumer>
                    </Link>
                  </DropdownItem>
                </Fragment> : 
                <Fragment>
                  <DropdownItem>
                    <Link to="/signup">Sign Up</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/login">Log In</Link>
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
