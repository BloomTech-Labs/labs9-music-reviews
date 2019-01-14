import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SignOut from '../Signout/SignOut';
import {
  NavItem,
  Navbar,
  SideNav,
  SideNavItem,
  Icon,
  Button,
} from 'react-materialize';
import {FirebaseContext} from './Firebase/index.js';

class Navigation extends Component {
  constructor () {
    super ();
    this.state = {
      isLoggedIn: false,
    };
  }
  render () {
    const LoggedIn = (
      <Navbar className="blue" right>
        <SideNav
          trigger={
            <Button
              style={{background: 'inherit', hover: 'none', border: 'none'}}
            >
              <Icon large>menu</Icon>
            </Button>
          }
          options={{closeOnClick: true}}
        >
          <SideNavItem
            userView
            user={{
              background: 'img/image.jpg',
              image: 'img/image.jpg',
              name: 'Name Surname',
              email: 'gmailk@gmail.com',
            }}
          />
          <SideNavItem icon="search">Search</SideNavItem>
          <SideNavItem icon="rate_review">My Reviews</SideNavItem>
          <SideNavItem icon="attach_money">Billing</SideNavItem>
          <SideNavItem icon="settings">Settings</SideNavItem>
          <SideNavItem divider />
          <FirebaseContext.Consumer>
            {firebase => <SignOut firebase={firebase} />}
          </FirebaseContext.Consumer>
        </SideNav>
      </Navbar>
    );

    const LoggedOut = (
      <Navbar right className="blue">
        <NavItem onClick={() => this.props.history.push ('/signup')}>
          Sign Up
        </NavItem>
        <NavItem onClick={() => this.props.history.push ('/login')}>
          Log In
        </NavItem>
      </Navbar>
    );

    const {isLoggedIn} = this.state;

    return isLoggedIn ? LoggedIn : LoggedOut;
  }
}

export default withRouter (Navigation);
