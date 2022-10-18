import React from "react";
import "../styles/Portfolio.css";

function Project({ title, description, image, src }) {
  return (
    <>
      <div className="containing-project-div">
        <div className="project-div">
          <img
            src={require(`../images/${image}`)}
            alt=""
            className="project-image"
          />
          <div className="layer">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a href={src}>
              <button className="project-btn">View</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
