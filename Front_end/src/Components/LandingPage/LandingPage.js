import React from "react";
import "./LandingPage.css";
import {Button, Container, Row } from "reactstrap";
import Search from "../Search/Search";

const LandingPage = () => {
  return (
    <Container fluid style={{ margin: "0 auto" }}>
      {/* <Row align="center"
            style={{ maxHeight: "400px", maxWidth: "1600px", margin: "0 auto", position: "relative", top: "13rem" }}
      >
        <img
          src={require("../../Images/SongbirdLogo1.png")}
          alt="Songbird logo"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        />
      </Row> */}
      <h3 style={{ color: "white", position: "relative", textAlign: "center", padding: "13rem 3rem 0 3rem" }}>
        There are a million songs out there. <br />
        Let your opinions on them take flight...
      </h3>
      <div align="center" style={{ position: "relative", padding: "1rem" }}>
        <a href="/login">
          <button style={{ padding: "1rem 3rem", borderRadius: "0.5rem", border: "none", background: "#dc9f2e", color: "white", fontWeight: "650" }}>
            Start Your 14-day Free Trial Now!
          </button>
        </a>
      </div>

      <div style={{ position: "relative" }}>
        <Search />
     
        {/* <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search music"
          style={{
            margin: "50px auto",
            padding: "5px",
            height: "30px",
            maxWidth: "800px",
            backgroundColor: "#495057",
            color: "#fff",
            width: "50%"
          }}
        /> */}
      </div>
    </Container>
  );
};
export default LandingPage;
