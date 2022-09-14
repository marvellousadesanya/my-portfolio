import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <>
      <header>
        <div className="header-text">
          {/* <img id="Bg-img" src={require("./Bg-img.png")} alt="Bg img" /> */}
          <h1>Hi! I'm Marv</h1>
          <h2>Frontend Dev</h2>
          <p>Here's why you should have me in your team</p>
          <a href="/about">
            <button className="main-btn">About Me</button>
          </a>
        </div>
        <div className="Pic-container">
          <img
            className="main-pic"
            src={require("../images/marv2.png")}
            alt="My pic"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
