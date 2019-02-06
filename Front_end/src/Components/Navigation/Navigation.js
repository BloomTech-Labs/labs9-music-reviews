import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SignOut from '../Signout/SignOut';
import styled from 'styled-components'
import {
  Navbar,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Col,
} from 'reactstrap';
import { FirebaseContext } from "../Firebase/index.js";
import './Navigation.css';

const SmallScreen = styled.div`
  display: none;
  @media (max-width: 991px){
    display: inline-block;
  }
`

const BigScreen = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: auto;
  @media (max-width: 992px){
    display: none;
  }
`
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
          <Navbar fixed='top' dark expand="lg" toggleable="sm" style={{ display: "flex", alignItems: "center", background: "rgba(152, 75, 67, 0.95)"}}>
            <Col xs='12' md="4">
              <Link to="/" style={{ textDecoration: "none",color: "#eac67a", fontSize: "3rem", fontWeight: "700" }}>
                <img src={require("../../Images/OTR Logo X.png")} alt="ON THE RECORD" style={{ maxWidth: "500px", margin: "auto", width: "100%", height: "100%" }}/>
              </Link>
            </Col>

            {/* start Col */}
            <Col xs='12' md='8' style={{ display: "flex", height: "100%", verticalAlign: "middle" }}>
                <Col xs="1" lg="7"></Col>

                <Col xs="11" lg="5" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                  {/* shows regular sized menu and hamburger menu hides on mobile */}
                  <Link to="/search" style={{ textAlign: "center", margin: "auto" }}>
                    <Button style={{ background: "#eac67a", color: "#984b43", fontWeight: "650", position: "relative", left: "0"  }}>SEARCH</Button>
                  </Link>
                  <BigScreen>
                    {this.props.loggedIn === true ? (
                    <Fragment>
                      <Link to="/home" style={{ textDecoration: 'none', textAlign: "center", margin: "auto"  }}>
                        <DropdownItem className="big-menu-item" style={{color: '#eac67a'}}><b>Home</b></DropdownItem>
                      </Link>

                      <Link to={`/user/reviews/${this.props.userID}`} style={{ textDecoration: 'none', textAlign: "center", margin: "auto" }}>
                        <DropdownItem className="big-menu-item" style={{color: '#eac67a'}}><b>My Reviews</b></DropdownItem>
                      </Link>

                      <Link to="/user/settings" style={{ textDecoration: 'none', textAlign: "center", margin: "auto"  }}>
                        <DropdownItem className="big-menu-item" style={{color: '#eac67a'}}><b>Settings</b></DropdownItem>
                      </Link>

                      <DropdownItem divider />

                      <NavLink to="/" style={{ textDecoration: 'none', textAlign: "center", paddingRight: '0', paddingLeft: '0', margin: "auto" }}>
                        <DropdownItem className="big-menu-item" style={{ color: "#eac67a" }}>
                            <FirebaseContext.Consumer>
                              {firebase => (<SignOut firebase={firebase} signout={this.props.signout}/>)}
                            </FirebaseContext.Consumer>
                        </DropdownItem>
                      </NavLink>
                    </Fragment> ) : (
                      <Fragment>
                        <Link to="/signup" style={{ textDecoration: 'none', textAlign: "center" }}>
                          <DropdownItem className="big-menu-item" style={{color: '#eac67a'}}><b>Sign Up</b></DropdownItem>
                        </Link>

                        <Link to="/login" style={{ textDecoration: 'none', textAlign: "center" }}>
                            <DropdownItem className="big-menu-item" style={{color: '#eac67a'}}><b>Log In</b></DropdownItem>
                        </Link>
                      </Fragment>
                            )}
                  </BigScreen>

                  {/* shows hamburger menu and hides regular sized menu on mobile */}
                  <SmallScreen> 
                    <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                      <DropdownToggle nav>
                        <i className="fa fa-bars icon" aria-hidden="true"></i>
                      </DropdownToggle>
                      <DropdownMenu right style={{ background: "#eac67a", color: "#984b43"}}>
                        {this.props.loggedIn === true ? (
                          <Fragment>
                            <Link to="/home" style={{ textDecoration: 'none', textAlign: "center", background:'#984b43'}}>
                              <DropdownItem className="menu-item" style={{color: '#984B43'}}><b>Home</b></DropdownItem>
                            </Link>

                            <Link to={`/user/reviews/${this.props.userID}`} style={{ textDecoration: 'none', textAlign: "center"}}>
                              <DropdownItem className="menu-item" style={{color: '#984B43'}}><b>My Reviews</b></DropdownItem>
                            </Link>

                            <Link to="/user/settings" style={{ textDecoration: 'none', textAlign: "center" }}>
                              <DropdownItem className="menu-item" style={{color: '#984B43'}}><b>Settings</b></DropdownItem>
                            </Link>
                              <DropdownItem divider />

                            <NavLink to="/" style={{ textDecoration: 'none', textAlign: "center", margin: "0", padding: "0" }}>
                              <DropdownItem className="menu-item" style={{ color: "#984b43" }}>
                                <FirebaseContext.Consumer>
                                  {firebase => (<SignOut firebase={firebase} signout={this.props.signout}/>)}
                                </FirebaseContext.Consumer>
                              </DropdownItem>
                            </NavLink>
                          </Fragment>) : (
                            <Fragment>
                              <Link to="/signup" style={{ textDecoration: 'none', textAlign: "center" }}>
                                <DropdownItem className="menu-item" style={{color: '#eac67a'}}><b>Sign Up</b></DropdownItem>
                              </Link>
                              <Link to="/login" style={{ textDecoration: 'none', textAlign: "center" }}>
                                <DropdownItem className="menu-item" style={{color: '#eac67a'}}><b>Log In</b></DropdownItem>
                              </Link>
                            </Fragment>
                            )}
                          </DropdownMenu>
                    </Dropdown>
                  </SmallScreen>
                
                </Col>
            </Col>
          </Navbar> 
        </div>
    );
  }
}

export default withRouter(Navigation);