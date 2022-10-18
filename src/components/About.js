import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "../styles/About.css";

function About() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("my-cv.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "my-cv.pdf";
        alink.click();
      });
    });
  };

  // For carousel
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // Function will execute on click of button

  return (
    <>
      <h3 className="about-me-header">About</h3>
      <div className="general-info">
        <div className="about-me-text-container">
          <p className="about-me-text">
            I am currently transitioning to tech after about 5 years in Digital
            Marketing. I am also seeking to provide immense value to your
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

      <div>
        <h2 className="core-principles">Core Principles</h2>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="items"
          >
            <motion.div className="item">
              <h3>Integrity</h3>
              <p>My record speaks for me, I am someone you can always trust.</p>
              <img></img>
            </motion.div>
            <motion.div className="item">
              <h3>Competence</h3>
              <p>
                As someone striving to be exceptional in this field. I am
                dedicated to delivering only the best without settling.
              </p>
              <img></img>
            </motion.div>
            <motion.div className="item">
              <h3>Discipline</h3>
              <p>
                This is a core principle that I have developed all through the
                years. A successful developer cannot do without discipline
              </p>
              <img></img>
            </motion.div>
            <motion.div className="item">
              <h3>Dedication</h3>
              <p>I am ever dedicated to my work.</p>
              <img></img>
            </motion.div>
          </motion.div>
        </motion.div>
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
        <button onClick={onButtonClick} className="cv-btn">
          Download CV
        </button>
      </div>
    </>
  );
}

export default About;
