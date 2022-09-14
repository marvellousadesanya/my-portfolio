import React from "react";

import "../styles/About.css";

function About() {
  return (
    <>
      <h3 className="about-me-header">Glad to have you here!</h3>
      <div className="general-info">
        <div className="image-container">
          <img
            src={require("../images/marv.jpg")}
            alt="my pic"
            className="about-page-img"
          ></img>
        </div>
        <div className="about-me-text-container">
          <p className="about-me-text">
            I am currently transitioning to tech after about 5 years in Digital
            Marketing. I am currently seeking to provide immense value to your
            organization and garner enough knowledge to become a great software
            engineer.
          </p>
          <p className="about-me-text">
            From my trainings especially ALX Software Engineering program,I have
            developed team collaboration skills and a host of other very
            valuable skills that have made me a better developer
          </p>
          <p className="about-me-text">
            I must say I am really really excited about this my new found
            journey albeit it's challenges.
          </p>
        </div>
      </div>

      <div className="skill-section">
        <h3>Core Skills & Competencies</h3>
        <div className="skills">
          <div className="skill">
            <div className="skill-name">JavaScript</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="80%"
                style={{ maxWidth: 80 + "%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-name">React</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="70%"
                style={{ maxWidth: 70 + "%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-name">CSS</div>
            <div className="skill-bar">
              <div
                className="skill-per"
                per="90%"
                style={{ maxWidth: 90 + "%" }}
              ></div>
            </div>
          </div>
        </div>
        <button className="cv-btn">Download CV</button>
      </div>
    </>
  );
}

export default About;
