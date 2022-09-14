import React from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio-header-section">
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
      </footer>
    </>
  );
}

export default Portfolio;
