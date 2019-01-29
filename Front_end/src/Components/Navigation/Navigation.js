
import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SignOut from '../Signout/SignOut';
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Col,
  Row,
} from 'reactstrap';
import { Icon } from 'react-materialize';
import PlansModal from './PlansModal'
import { FirebaseContext } from "../Firebase/index.js";
import Breadcrumbs from "./Breadcrumbs";
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      query: ''
    };
  }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
        <div className="flex-xs-column">

        <Navbar fixed="top" dark expand="lg" toggleable="sm" style={{ display: "flex", background: "rgba(152, 75, 67, 0.85)", padding: "0.5rem" }}>
          <Col md="9" sm="12">
            {/* <NavbarBrand sm="12" className="mr-auto" style={{ background: "white", color: "lightblue", fontSize: "4rem", fontWeight: "700", padding: "0.5rem" }}>
              <Route path="/:path" component={Breadcrumbs} />
            </NavbarBrand> */}
            <Link to="/" style={{ textDecoration: "none",color: "#eac67a", fontSize: "3rem", fontWeight: "700" }}>
              <img src={require("../../Images/OTR Logo X.png")} alt="ON THE RECORD" style={{ width: "375px" }}/>   
            </Link>
          </Col>
          <Col md="3" sm="12">
            <Nav
              navbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
            <Row style={{ display: "flex", justifyContent: "space-around", alignItems: "center", minWidth: "325px" }}>
                  <Col xs="3">
                   <Link to="/search">
                    <Button style={{ background: "#eac67a", color: "#984b43", fontWeight: "650" }}>Search</Button>
                    </Link>
                  </Col>
                 
                  <Col xs="3">
                    <PlansModal />
                  </Col>

                  <Col xs="3">
                    <Dropdown nav isOpen={this.state.isOpen} toggle={this.toggle}>
                      <DropdownToggle nav>
                        <Icon large>menu</Icon>
                      </DropdownToggle>

                      <DropdownMenu right style={{ background: "#eac67a", color: "#a0006c" }}>
                        {this.props.loggedIn === true ? (
                          <Fragment>
                            <Link to="/home" style={{ textDecoration: 'none', textAlign: "center" }}>
                              <DropdownItem>Home</DropdownItem>
                            </Link>
                            <Link to={`/user/reviews/${this.props.userID}`} style={{ textDecoration: 'none', textAlign: "center" }}>
                              <DropdownItem>My Reviews</DropdownItem>
                            </Link>
                            <Link to="/user/billing" style={{ textDecoration: 'none', textAlign: "center" }}>
                              <DropdownItem>Billing</DropdownItem>
                            </Link>
                            <Link to="/user/settings"style={{ textDecoration: 'none', textAlign: "center" }}>
                              <DropdownItem>Settings</DropdownItem>
                            </Link>
                            <DropdownItem divider />
                            <NavLink to="/" style={{ textDecoration: 'none', textAlign: "center" }}>
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
                    </Dropdown>
                  
                </Col>
              </Row>
            </Nav>

          </Col>

        </Navbar>

        </div>
      
    );
  }
}

// Navigation.proptypes = {
//   updateSearch: PropTypes.func
// }

export default withRouter(Navigation);