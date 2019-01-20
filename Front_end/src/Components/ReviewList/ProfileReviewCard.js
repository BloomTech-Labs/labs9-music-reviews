import React from "react";
import ReviewEditModal from "../CardModals/ReviewEditModal";
import ViewStars from "../StarsRating/ViewStars";
import { Row, Col } from "reactstrap";

const ProfileReviewCard = props => {
  return (
    <div>
      <Row style={{ display: "flex", padding: "3rem 1rem" }}>
        {/* User info */}
        <Col md="3" style={{ margin: "auto 0" }}>
          <img
            src="http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
            alt="Placeholder album image"
          />
          <div>{props.review.albumName}</div>
          <div>Artist</div>
          {props.review.trackName ? <div>{props.review.trackName}</div> : null}
          {/* If logged in edit button shows otherwise null */}
          {props.loggedIn === true ? (
            <ReviewEditModal review={props.review}
            handleEditChange={props.handleEditChange}
            editHandler={props.editHandler}
            deleteHandler={props.deleteHandler}/>
          ) : null}
        </Col>
        <Col md="9" style={{ padding: "1rem 5rem" }}>
          <Row style={{ display: "flex" }}>
            <ViewStars
              rating={props.review.rating}
            />
            <p style={{ padding: "0 20px" }}>Date Created: {props.review.dateCreated}</p>
            <p style={{ padding: "0 20px" }}>Updated On: {props.review.dateModified}</p>
          </Row>
          <Row>
            <div align="left">
              <p>{props.review.review}</p>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileReviewCard;
