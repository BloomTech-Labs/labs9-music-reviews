
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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
  NavLink,
  Form
} from 'reactstrap';
import { Icon } from 'react-materialize';
import PlansModal from './PlansModal'
import { FirebaseContext } from "../Firebase/index.js";
import Breadcrumbs from "./Breadcrumbs";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      query: ''
    };
  }

  onChage = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  keyPress = (event) => {
    event.preventDefault();

    let data = this.state.query;
    this.props.updateSearch(data);

    console.log('Enter is clicked', data);
    this.props.history.push('/search');
    
    this.setState({
      query: ''
    })
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md" sticky="top">
        {/* <NavbarBrand className="mr-auto">
          <Route path="/:path" component={Breadcrumbs} />
        </NavbarBrand> */}
        <Nav
          className="ml-auto"
          navbar
          style={{ alignContent: "center", alignItems: "center" }}
        >
        {this.props.loggedIn === true ? null : <PlansModal />}
        <Form onSubmit = {this.keyPress}>
          <Input
            type="search"
            name="search"
            value = {this.state.query}
            onChange = {this.onChage}
            placeholder="Enter an Album, Artist or Track"
            style={{
              margin: "0 10px 0 0",
              padding: "5px",
              height: "55px",
              backgroundColor: "#495057",
              color: "#fff"
            }}
          />
          </Form>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav>
              <Icon>menu</Icon>
            </DropdownToggle>
            <DropdownMenu right>
              {this.props.loggedIn === true ? (
                <Fragment>
                  <Link to="/home" style={{ textDecoration: 'none' }}>
                    <DropdownItem>Home</DropdownItem>
                  </Link>
                  <Link to={`/user/reviews/${this.props.userID}`} style={{ textDecoration: 'none' }}>
                    <DropdownItem>My reviews</DropdownItem>
                  </Link>
                  <Link to="/user/billing" style={{ textDecoration: 'none' }}>
                    <DropdownItem>Billing</DropdownItem>
                  </Link>
                  <Link to="/user/settings"style={{ textDecoration: 'none' }}>
                    <DropdownItem>Settings</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <DropdownItem>
                      <FirebaseContext.Consumer>
                        {firebase => (
                          <SignOut
                            firebase={firebase}
                            signout={this.props.signout}
                          />
                        )}
                      </FirebaseContext.Consumer>
                    </DropdownItem>
                  </NavLink>
                </Fragment>
              ) : (
                <Fragment>
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <DropdownItem>Sign Up</DropdownItem>
                  </Link>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <DropdownItem>Log In</DropdownItem>
                  </Link>
                </Fragment>
              )}
            </DropdownMenu>
          </UncontrolledDropdown>
          <a>
            <img
              src={require("../../Images/RecordThumb.png")}
              alt="Default profile image"
              style={{ maxWidth: "30px", maxHeight: "30" }}
            />
          </a>
        </Nav>
      </Navbar>
    );
  }
}

Navigation.proptypes = {
  updateSearch: PropTypes.func
}

export default withRouter(Navigation);