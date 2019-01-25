import React from "react";
import "./LandingPage.css";
import {Button, Container } from "reactstrap";
import Search from "../Search/Search";

const LandingPage = () => {
  return (
    <Container fluid className="landingpage">
      <div align="center" style={{ maxHeight: "350px", position: "relative", top: "10rem" }}>
        <img
          src={require("../../Images/SongbirdLogo1.png")}
          alt="Songbird logo"
          width="75%"
        />
      </div>
      {/* animated music notes
      <div className="music-notes">
        <div className="note-1">
          &#9835; &#9833;
        </div>
        <div className="note-2">
          &#9833;
        </div>
        <div className="note-3">
          &#9839; &#9834;
        </div>
        <div className="note-4">
          &#9834;
        </div>
      </div> */}
      <h2 style={{ color: "white", position: "relative", top: "15rem" }}>
        There are a million songs out there. <br />
        Let your opinions on them take flight...
      </h2>
      <div align="center" style={{ position: "relative", top: "17rem", padding: "1rem" }}>
        <a href="/login">
          <Button color="secondary" size="lg">
            Start Reading Reviews Now!
          </Button>
        </a>
      </div>
      <div style={{ position: "relative", top: "19rem", padding: "2rem" }}>
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
      {/* animated music notes
      <div className="music-notes">
        <div className="note-1">
          &#9835; &#9833;
        </div>
        <div className="note-2">
          &#9833;
        </div>
        <div className="note-3">
          &#9839; &#9834;
        </div>
        <div className="note-4">
          &#9834;
        </div>
      </div> */}
    </Container>
  );
};
export default LandingPage;
