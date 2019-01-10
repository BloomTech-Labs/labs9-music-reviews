import React, { Component } from "react";
import styled from "styled-components";
import NewReviewModalCard from "./NewReviewModalCard";
import EditReviewModalCard from "./EditReviewModalCard";
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
  Col,
  Row,
  Card,
  CardTitle
} from "react-materialize";

const BreadcrumbDiv = styled.div`
  text-align: left;
`;

const ReviewList = props => {
  return (
    <div>
      <BreadcrumbDiv>
        {/* Breadcrumb*/}
        <Breadcrumb>
          <MenuItem>
            <a href="/">Home</a>
          </MenuItem>
          <MenuItem>My Reviews</MenuItem>
        </Breadcrumb>
      </BreadcrumbDiv>

      {/* If no reviews on account display prompt for new review otherwise display all reviews on account */}

      <div>
        <div>
          {/* <SideNav fixed="false">
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
          </SideNav> */}
        </div>
        <div>
          {1 === 0 ? (
            <div>
              <NewReviewModalCard />
            </div>
          ) : (
            <div>
              {/* Review Card Map */}
              <Row>
                <EditReviewModalCard />
                <NewReviewModalCard />
              </Row>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
