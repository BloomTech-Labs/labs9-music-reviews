import React from "react";
import styled from "styled-components";
import Stars from "./Stars";
import { Button, Modal, NavItem, Dropdown, Col, Card } from "react-materialize";

const EditReviewModalCard = props => {
  return (
    <div>
      <Col>
        {/* Create new review modal */}
        <Modal
          header="Year Make Model Trim"
          fixedFooter
          style={{ width: "35%" }}
          trigger={
            <Card class="col s12" title="Year Make Model Trim">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src="https://mygoto.io/assets/web/images/placeholder-img.jpg" />
                Updated Time
              </div>
            </Card>
          }
          actions={
            <div>
              <Button modal="close" waves="light" className="red darken-2">
                Close
              </Button>
            </div>
          }
        >
          <p>Review by: @name</p>
          <div class="center-align">
            <img
              src="https://mygoto.io/assets/web/images/placeholder-img.jpg"
              height="70%"
              width="70%"
            />
          </div>
          <div
            class="center-align"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Stars />
            <Dropdown trigger={<Button>Select One</Button>}>
              <NavItem>Owned</NavItem>
              <NavItem>Rented</NavItem>
              <NavItem>Driven</NavItem>
            </Dropdown>
          </div>
          <textarea
            type="textarea"
            placeholder="Type Review"
            //   onChange={props.handleReviewChange}
            //   value={props.reviews.review}
            name="review"
            style={{ height: "150px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Button modal="close">Submit</Button>
            <Button>Delete</Button>
          </div>
        </Modal>
      </Col>
    </div>
  );
};

export default EditReviewModalCard;
