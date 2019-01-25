
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import SignOut from '../Signout/SignOut';
import {
  Navbar,
  Nav,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  NavLink,
  Form,
  Col,
  Row,
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

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  // onChage = (event) => {
  //   this.setState({
  //     query: event.target.value
  //   })
  // }
  // keyPress = (event) => {
  //   event.preventDefault();

  //   let data = this.state.query;
  //   this.props.updateSearch(data);

  //   console.log('Enter is clicked', data);
  //   this.props.history.push('/search');
    
  //   this.setState({
  //     query: ''
  //   })
  // }

  render() {
    return (
        <div className="flex-sm-column">

        <Navbar color="dark" dark expand="md" sticky="top" toggleable="sm" style={{ display: "flex" }}>
          <Col>
            {/* <NavbarBrand sm="12" className="mr-auto" style={{ background: "white", color: "lightblue", fontSize: "4rem", fontWeight: "700", padding: "0.5rem" }}>
              <Route path="/:path" component={Breadcrumbs} />
            </NavbarBrand> */}
            <Link to="/" style={{ textDecoration: "none",color: "lightblue", fontSize: "4rem", fontWeight: "700", padding: "0.5rem" }}>SONGBIRD</Link>
          </Col>
          <Nav
            navbar
            style={{ display: "flex", justifyContent: "space-around", alignContent: "center" }}
          >

          <Row style={{ display: "flex", justifyContent: "space-between", margin: "0 0 0 3.5rem" }}>
                {/* <Form onSubmit = {this.keyPress}>
                  <Input
                    type="search"
                    name="search"
                    value = {this.state.query}
                    onChange = {this.onChage}
                    placeholder="Enter an Album, Artist or Track"
                    style={{
                      margin: "0 10px 0 0",
                      padding: "5px",
                      height: "30px",
                      backgroundColor: "#495057",
                      color: "#fff"
                    }}
                  /> 
                  </Form>*/}
                <div style={{ display: 'flex', justifyContent: "center" }}>
                  <PlansModal />
                </div>
   
                  <Link to="/user/settings">
                    <img
                      src={require("../../Images/RecordThumb.png")}
                      alt="Default profile image"
                      style={{ margin: "0 auto", maxWidth: "75px", maxHeight: "75px", padding: "1rem" }}
                    />
                  </Link>
       
                  <Dropdown nav isOpen={this.state.isOpen} toggle={this.toggle}>
                    <div className="flex-sm-row" style={{ display: "flex", padding: "1rem", justifyContent: "center", maxWidth: "100px" }}>
                      <DropdownToggle nav>
                        <Icon large>menu</Icon>
                      </DropdownToggle>

                      <DropdownMenu right>
                        {this.props.loggedIn === true ? (
                          <Fragment>
                            <Link to="/home" style={{ textDecoration: 'none', textAlign: "center" }}>
                              <DropdownItem>Home</DropdownItem>
                            </Link>
                            <Link to={`/user/reviews/${this.props.userID}`} style={{ textDecoration: 'none', textAlign: "center" }}>
                              <DropdownItem>My reviews</DropdownItem>
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
                    </div>
            
                  </Dropdown>
            </Row>
            
          </Nav>
        </Navbar>

        </div>
      
    );
  }
}

// Navigation.proptypes = {
//   updateSearch: PropTypes.func
// }

export default withRouter(Navigation);