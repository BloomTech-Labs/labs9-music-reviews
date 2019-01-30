import React from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styled from "styled-components";

const Img = styled.img`
  position: relative;
  text-align: center;
  margin: auto;
  top: 8rem;
  max-width: 375px;
`;

const LandingPage = () => {
  return (
    <Container fluid style={{ margin: "0 auto", fontFamily: "Lato" }}>

      <Row>
        <Img src={require("../../Images/OTR Logo Letters.png")} alt="ON THE RECORD" />
      </Row>

      <h3 style={{ 
          position: "relative",
          padding: "7rem 0 2rem 0",
          textAlign: "center",
          color: "#eac67a",
          textShadow: "-1px -1px 0 #984b43, 1px -1px 0 #984b43, -1px 1px 0 #984b43, 1px 1px 0 #984b43"
        }}
      >
        There are a million songs out there. <br />
        Let your opinions on them be On The Record
      </h3>

      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/login" style={{ margin: "0 auto" }}>
          <button style={{ 
            margin: "0 auto",
            padding: "1rem 2rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "#eac67a", color: "#984b43", fontWeight: "650", fontSize: "1.5rem" }}>
            Start Your 60-day Free Trial Now!
          </button>
        </Link>
      </Row>

      <Row style={{ position: "relative", paddingTop: "2rem" }}>
          <Search />
      </Row>
    </Container>
  );
};
export default LandingPage;
