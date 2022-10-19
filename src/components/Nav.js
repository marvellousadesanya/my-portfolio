import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

// const toggleButton = document.querySelector("#icon")[0];
// const navBarLinks = document.querySelector(".nav-links")[0];

// const showButton = () => {
//   navBarLinks.classList.toggle("active");
// };

function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav>
        <div id="home-btn">
          <Link to="/">
            <a href="/">Home</a>
          </Link>
        </div>
        <img
          src={require("../images/icon-menu.png")}
          alt="Light mode"
          id="icon"
          onClick={() => setIsMobile(!isMobile)}
        ></img>
        <div className={isMobile ? "expanded" : "nav-links"}>
          <ul className="navi">
            <Link to="/about">
              <li id="item1">About Me</li>
            </Link>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/contact">
              <li>Contact Me</li>
            </Link>
            <i
              className="fa-solid fa-xmark"
              onClick={() => setIsMobile(!isMobile)}
            ></i>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
