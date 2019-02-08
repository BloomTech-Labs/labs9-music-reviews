import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const LandingPage = () => {
  return (
    <Container fluid style={{ margin: "0 auto", fontFamily: "Lato" }}>
      <Row>
        <Col className = 'justify-content-center' style = {{textAlign: 'center', paddingTop: '10rem'}}>
          <img className="img-fluid" src={require("../../Images/OTR Logo Letters.png")} alt="ON THE RECORD" />
        </Col>
      </Row>

      <h3 style={{ 
          padding: "2rem 0 2rem 0",
          textAlign: "center",
          color: "#984b43",
        }}
      >
        There are millions of tracks out there... <br />
        Share your thoughts and put them On The Record.
      </h3>

      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/signup">
        <Button style={{
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#eac67a", color: "#984b43", fontWeight: "650", fontSize: "1.5rem" }}>
            Start Your 60-day Free Trial Now!
          </Button>
        </Link>
      </Row>

      <Row className = 'mt-5'>
          <Search maxHeight={"30rem"}/>
      </Row>
    </Container>
  );
};
export default LandingPage;
