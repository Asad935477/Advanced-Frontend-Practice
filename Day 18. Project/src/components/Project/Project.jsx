import React from "react";
import { Link } from "react-router-dom";

const Project = ({ projectImg, projectTitle, projectCategory }) => {
  return (
    <div className="project">
      <Link to="/work/sample-project">
        <div className="project-img">
          <img src={projectImg} alt="" />
        </div>
        <div className="project-title">
          <p>{projectTitle}</p>
        </div>
        <div className="project-category">
          <p>{projectCategory}</p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
