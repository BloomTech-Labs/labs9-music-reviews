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
  Collapse,
  NavItem, 
  UncontrolledDropdown, 
  NavbarBrand, 
  NavbarToggler,
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
        <Navbar fixed='top' dark expand="lg" toggleable="sm" style={{ display: "flex", alignItems: "center",background: "rgba(152, 75, 67, 0.95)"}}>
        <Col md="4" xs='12' style={{border: '5px red solid'}}>
        <Link to="/" style={{ textDecoration: "none",color: "#eac67a", fontSize: "3rem", fontWeight: "700" }}>
              <img src={require("../../Images/OTR Logo X.png")} alt="ON THE RECORD" style={{ width: "350px" }}/>   
        </Link>
          </Col>
          
          <Col xs='12' md='8' style={{ display: "flex", border:'5px blue solid'}}>
          
          <Col xs="12" md='4' style={{ margin: "0 auto", boarder: '5px green solid'}}>
            <Link to="/search">
               <Button style={{ background: "#eac67a", color: "#984b43", fontWeight: "650" }}>SEARCH</Button>
            </Link>
          </Col>

          <Col className="big" md="8" xs="12" style={{border:'5px teal solid'}}>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                </DropdownToggle>
                <DropdownMenu right style={{ background: "#eac67a", color: "#a0006c"}}>
                {this.props.loggedIn === true ? (
                                         <Fragment>
                          
                                         <Link to="/home" style={{ textDecoration: 'none', textAlign: "center", background:'#a0006c'}}>
                                           <DropdownItem style={{color: '#984B43'}}><b>Home</b></DropdownItem>
                                         </Link>
                                       
                                         <Link to={`/user/reviews/${this.props.userID}`} style={{ textDecoration: 'none', textAlign: "center"}}>
                                           <DropdownItem style={{color: '#984B43'}}><b>My Reviews</b></DropdownItem>
                                         </Link>
                                       
                                         <Link to="/user/billing" style={{ textDecoration: 'none', textAlign: "center" }}>
                                           <DropdownItem style={{color: '#984B43'}}><b>Billing</b></DropdownItem>
                                         </Link>
                                       
                                         <Link to="/user/settings"style={{ textDecoration: 'none', textAlign: "center" }}>
                                           <DropdownItem style={{color: '#984B43'}}><b>Settings</b></DropdownItem>
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
                                       
                                       </Fragment>) : (
                                         <Fragment>
                                         <Link to="/signup" style={{ textDecoration: 'none' }}>
                                           <DropdownItem><b>Sign Up</b></DropdownItem>
                                         </Link>
                                         <Link to="/login" style={{ textDecoration: 'none' }}>
                                           <DropdownItem><b>Log In</b></DropdownItem>
                                         </Link>
                                       </Fragment>
                               )}
                </DropdownMenu>
</UncontrolledDropdown>
          
          </Collapse> 
        </Col>

            </Col>
        </Navbar> 
</div>
      
    );
  }
}

export default withRouter(Navigation);