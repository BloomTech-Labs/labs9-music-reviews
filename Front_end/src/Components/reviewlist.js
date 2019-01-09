import React from "react";
import styled from "styled-components";
import {
  Button,
  Modal,
  Breadcrumb,
  MenuItem,
  Navbar,
  NavItem,
  Dropdown,
  SideNav,
  SideNavItem,
  Icon
} from "react-materialize";

const ReviewList = props => {
  return (
    <div>
      {/* Breadcrumb Nav */}
      <Breadcrumb>
        <MenuItem>
          <a href="/">Home</a>
        </MenuItem>
        <MenuItem>My Reviews</MenuItem>
      </Breadcrumb>
      <Navbar right>
        <NavItem href="/">Sign Out</NavItem>
      </Navbar>
      <div>
          <SideNav>
            <SideNavItem
              userView
              user={{
                background: "img/image.jpg",
                image: "img/image.jpg",
                name: "Name Surname",
                email: "gmailk@gmail.com"
              }}
            />
            <SideNavItem icon="search">Search</SideNavItem>
            <SideNavItem icon="rate_review">My Reviews</SideNavItem>
            <SideNavItem icon="attach_money">Billing</SideNavItem>
            <SideNavItem icon="settings">Settings</SideNavItem>
            <SideNavItem divider />
            <SideNavItem icon="cancel">Sign Out</SideNavItem>
          </SideNav>
      </div>
      {/* If no reviews on account display prompt for new review otherwise display all reviews on account */}
      {/* {props.reviews.length === 0 ? ( */}
      <div>
        <h4>Add a new review.</h4>
        <Button floating large className="red" waves="light" icon="add" />
      </div>
      {/* ) : ( */}
      <div>
        <Modal
          header="Year Make Model Trim"
          trigger={<Button>MODAL</Button>}
          width="250 px"
        >
          <p>Review by: @name</p>
          <img
            src="https://mygoto.io/assets/web/images/placeholder-img.jpg"
            alt=""
          />
          <p>Stars</p>
          <Dropdown trigger={<Button>Select One</Button>}>
            <NavItem>Owned</NavItem>
            <NavItem>Rented</NavItem>
            <NavItem>Driven</NavItem>
          </Dropdown>
          <textarea
            type="textarea"
            placeholder="Type Review"
            //   onChange={props.handleReviewChange}
            //   value={props.reviews.review}
            name="review"
          />
        </Modal>
        Reviews are here!
      </div>
      {/* )} */}
    </div>
  );
};

export default ReviewList;
