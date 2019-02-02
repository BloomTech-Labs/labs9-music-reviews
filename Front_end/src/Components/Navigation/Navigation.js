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
import { FirebaseContext } from "../Firebase/index.js";
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

        <Navbar fixed="top" dark expand="lg" toggleable="sm" 
          style={{ 
            display: "flex", 
            alignItems: "center",
            background: "rgba(152, 75, 67, 0.95)"
          }}
        >
          <Col lg="9" md="8" sm="6" xs="12">
            {/* <NavbarBrand sm="12" className="mr-auto" style={{ background: "white", color: "lightblue", fontSize: "4rem", fontWeight: "700", padding: "0.5rem" }}>
              <Route path="/:path" component={Breadcrumbs} />
            </NavbarBrand> */}
            <Link to="/" style={{ textDecoration: "none",color: "#eac67a", fontSize: "3rem", fontWeight: "700" }}>
              <img src={require("../../Images/OTR Logo X.png")} alt="ON THE RECORD" style={{ width: "350px" }}/>   
            </Link>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" style={{ padding: "0.5rem" }}>
            <Nav
              navbar
              style={{ display: "flex", justifyContent: "space-between", margin: "0", padding: "0" }}
            >
            <Row style={{ 
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                minWidth: "325px",
                margin: "0 auto",
              }}
            >
                  <Col xs="4" style={{ margin: "0 auto" }}>
                    <Link to="/search">
                      <Button style={{ background: "#eac67a", color: "#984b43", fontWeight: "650" }}>
                        SEARCH
                      </Button>
                    </Link>
                  </Col>

                  <Col xs="4" style={{ margin: "0 auto", paddingLeft: "3rem" }}>
                    <Dropdown nav isOpen={this.state.isOpen} toggle={this.toggle}>
                    
                      <DropdownToggle nav>
                        <i className="fas fa-bars fa-2x"></i>
                      </DropdownToggle>

                      <DropdownMenu right style={{ background: "#eac67a", color: "#a0006c"}}>
                        {this.props.loggedIn === true ? (
                          
                          <Fragment>
                          
                            <Link to="/home" style={{ textDecoration: 'none', textAlign: "center", background:'#a0006c'}}>
                              <DropdownItem>Home</DropdownItem>
                            </Link>
                          
                            <Link to={`/user/reviews/${this.props.userID}`} style={{ textDecoration: 'none', textAlign: "center"}}>
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

export default withRouter(Navigation);