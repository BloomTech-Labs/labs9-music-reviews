import React from "react";
import "./SplashPage.css";
import { Input, Button } from "reactstrap";
import Navigation from "../Navigation/Navigation";

const SplashPage = () => {
  return (
    <div className="splashpage">
      <Navigation />
      <div align="center" style={{ margin: "50px 0" }}>
        <img
          src={require("../../Images/SongbirdLogo1.png")}
          alt="Songbird logo"
          width="75%"
        />
      </div>
      <h2 style={{ color: "white", margin: "25px 0" }}>
        There are a million songs out there. <br />Let your opinions on them take flight...
      </h2>
      <div align="center">
        <a href="/login"><Button color="secondary" size="lg">
          Start Reading Reviews Now!
        </Button></a>
      </div>
      <div>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search music"
          style={{
            margin: "50px auto",
            padding: "5px",
            height: "30px",
            backgroundColor: "#495057",
            color: "#fff",
            width: "50%"
          }}
        />
      </div>
    </div>
  );
};

export default SplashPage;
