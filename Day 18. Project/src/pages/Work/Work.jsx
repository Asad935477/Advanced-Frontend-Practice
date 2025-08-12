import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import transition from "../../transition";

import Project from "../../components/Project/Project";

// content
import projects from "../../data/projects.json";

// helper function
const renderProjects = (start, end) => {
  return projects.projects
    .slice(start, end)
    .map((project, index) => (
      <Project
        key={index}
        projectImg={project.img}
        projectTitle={project.title}
        projectCategory={project.category}
      />
    ));
};

const Work = () => {
  return (
    <div className="work-page">
      <div className="divider"></div>
      <div className="container">
        <div className="work-section">
          <div className="work-section-header">
            <div className="section-header-title">
              <h1 className="section-title">Work</h1>
            </div>
            <div className="section-header-copy">
              <p>2016-2023</p>
              <p>
                <Link to="/" id="a-underline">
                  Back
                </Link>
              </p>
              <p>({projects.projects.length})</p>
            </div>
          </div>

          <div className="projects">
            <div className="row">
              <div className="col sm">{renderProjects(0, 2)}</div>
              {renderProjects(2, 3)}
            </div>
            <div className="row">
              <div className="col">{renderProjects(3, 4)}</div>
              {renderProjects(4, 5)}
            </div>
            <div className="row">
              {renderProjects(5, 6)}
              <div className="col sm">{renderProjects(6, 8)}</div>
            </div>
            <div className="row">
              <div className="col">{renderProjects(8, 9)}</div>
              {renderProjects(9, 10)}
            </div>
            <div className="row">
              <div className="col sm">{renderProjects(10, 12)}</div>
              {renderProjects(12, 13)}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <Footer />
    </div>
  );
};

export default transition(Work);
