import React from "react";
import styled from "styled-components";
import Stars from "./Stars";
import { Button, Modal, NavItem, Dropdown, Col, Card } from "react-materialize";

const NewReviewModalCard = props => {
  return (
    <div>
      <Col>
        {/* New Review Card */}
        <Modal
          header="Year Make Model Trim"
          fixedFooter
          style={{ width: "35%" }}
          trigger={
            <Card title="Add a new review">
              {/* Create new review modal */}
              <div class="center-align">
                <Button
                  floating
                  large
                  className="red"
                  waves="light"
                  icon="add"
                />
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
          <div>
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
          <Button modal="close">Submit</Button>
        </Modal>
      </Col>
    </div>
  );
};

export default NewReviewModalCard;
