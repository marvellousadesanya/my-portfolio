import React from "react";
import "../styles/Portfolio.css";
import Project from "./project.jsx";

function Portfolio() {
  return (
    <>
      {/* <div className="portfolio-header-section">
        <h2 className="portfolio-heading">Featured Works</h2>
        <button id="github-btn">
          <a href="https://github.com/marvellousadesanya">View my Github</a>
        </button>
      </div>
      <div className="portfolios">
        <div className="portfolio">
          <div className="text-section">
            <h3>Social media links</h3>
            <p>
              I recently built this very simple project for a company I work
              for. The page features all social media handles of the company
              with a simple illustration to showcase my CSS animation skills.
            </p>
            <p className="view-btn">
              <a href="https://links.ramosoflagosrealty.com/">Live View</a>
            </p>
            <div className="stack">
              <p>Stack:</p>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
          <div className="portfolio-image-container">
            <img className="portfolio-image" src=""></img>
          </div>
        </div>
        <div className="portfolio">
          <div className="text-section">
            <h3>To Do List</h3>
            <p>
              This was built during my early days of learning JavaScript
              programming.
            </p>
            <p className="view-btn">
              <a href="https://631f1d8f66338919d24224a4--thunderous-dodol-658353.netlify.app/">
                Live View
              </a>
            </p>
            <div className="stack">
              <p>Stack:</p>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
          <div id="portfolio-image-container2">
            <img></img>
          </div>
        </div>
        <div className="portfolio">
          <div className="text-section">
            <h3>This website</h3>
            <p>Quite cheeky, right?</p>
            <p></p>
            <div className="stack">
              <p>Stack:</p>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-react"></i>
            </div>
          </div>
          <div>
            <img></img>
          </div>
        </div>
      </div>
      <footer>
        <p>Portfolio page inspired by Grapple Designs</p>
      </footer> */}
      <div className="projects-done">
        <h2>My Projects</h2>
        <p>Check my portfolio for a list of projects</p>
      </div>

      <div className="new-portfolio-container">
        <div>
          <Project
            title="Math Game"
            description="Simple Game I developed when learning JS"
            image="math-game.jpg"
            src="https://ecstatic-swanson-099b7a.netlify.app"
          />
        </div>
        <div>
          <Project
            title="To do list web app"
            description="A simple webpage to input todo list tasks"
            image="to-do-list.jpg"
            src="https://thunderous-dodol-658353.netlify.app"
          />
        </div>
        <div>
          <Project
            title="Social links app"
            description="It holds all company's social media links."
            image="sociallinks.jpg"
            src="links.ramosoflagosrealty.com"
          />
        </div>
        {/*<div>
          <Project
            title="To Do List"
            description="Simple Game I developed when learning JS"
            image="social-links.jpg"
            src=""
          />
        </div>
        <div>
          <Project title="Title" description="Hey" image="social-links.jpg" />
        </div>
        <div>
          <Project
            title="Math Game"
            description="Simple Game I developed when learning JS"
            image="social-links.jpg"
          />
        </div> */}
      </div>
      <div className="portfolio-btn-div">
        <a href="https://github.com/marvellousadesanya">
          <button className="github-view">View Github</button>
        </a>
      </div>
    </>
  );
}

export default Portfolio;
