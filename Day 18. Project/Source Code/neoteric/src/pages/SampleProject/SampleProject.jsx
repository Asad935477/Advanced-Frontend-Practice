import React from "react";
import "./SampleProject.css";
import { Link } from "react-router-dom";
import transition from "../../transition";

import Masonry from "react-masonry-css";
import Footer from "../../components/Footer/Footer";

// images
import ProjectImageMain from "../../assets/project-images/img1.jpg";
import ProjectImage1 from "../../assets/project-images/img2.jpg";
import ProjectImage2 from "../../assets/project-images/img3.jpg";
import ProjectImage3 from "../../assets/project-images/img4.jpg";
import ProjectImage4 from "../../assets/project-images/img5.jpg";
import ProjectImage5 from "../../assets/project-images/img6.jpg";
import ProjectImage6 from "../../assets/project-images/img7.jpg";
import ProjectImage7 from "../../assets/project-images/img8.jpg";
import ProjectImage8 from "../../assets/project-images/img9.jpg";
import ProjectImage9 from "../../assets/project-images/img10.jpg";
import ProjectImage10 from "../../assets/project-images/img11.jpg";
import ProjectImage11 from "../../assets/project-images/img1.jpg";
import ProjectImage12 from "../../assets/project-images/img2.jpg";

import Project from "../../components/Project/Project";

// content
import projects from "../../data/projects.json";

// masonary grid breakpoints
const SampleProject = () => {
  const myBreakpointsAndCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  var items = [
    { id: 1, image: ProjectImage1 },
    { id: 2, image: ProjectImage2 },
    { id: 3, image: ProjectImage3 },
    { id: 4, image: ProjectImage4 },
    { id: 5, image: ProjectImage5 },
    { id: 5, image: ProjectImage6 },
    { id: 5, image: ProjectImage7 },
    { id: 5, image: ProjectImage8 },
    { id: 5, image: ProjectImage9 },
    { id: 5, image: ProjectImage10 },
    { id: 5, image: ProjectImage11 },
    { id: 5, image: ProjectImage12 },
  ];

  items = items.map(function (item) {
    return (
      <div key={item.id}>
        <img src={item.image} alt="" />
      </div>
    );
  });

  return (
    <div className="sample-project">
      <div className="divider"></div>
      <div className="container">
        <div className="project-head">
          <div className="project-head-col">
            <h1 className="section-title">Eunoia Aesthetics</h1>
          </div>
          <div className="project-head-col">
            <p>Project</p>
            <p className="project-copy-sec">Client: Spotify</p>
            <p className="project-copy-sec">Project: Creative Direction</p>
            <p className="project-copy-sec">Year: 2021</p>
            <br />
            <br />
            <p className="project-copy-sec">Digital Venture</p>
            <p className="project-copy-sec">User Interface Design</p>
            <p className="project-copy-sec">Branding</p>
            <p className="project-copy-sec">Modern Platform</p>
          </div>
        </div>

        <div className="project-sub-head">
          <div className="back-link">
            <Link to="/work" id="a-underline">
              Back to work
            </Link>
          </div>
          <div className="project-credits">
            <p>Credits</p>
            <p className="project-copy-sec">Google NOSP</p>
          </div>
        </div>

        <div className="project-image">
          <img src={ProjectImageMain} alt="" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info project-dummy">
          <div className="contact-info-col">
            <h2 className="section-h2">
              Neoteric<sup>&copy;</sup> is a Danish-based design studio that
              operates on a global scale, crafting iconic brands and immersive
              digital journeys with an emphasis on the fundamental essence.
            </h2>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>
                Neoteric Studios, nestled in the bustling heart of Copenhagen,
                stands as a testament to the city's legacy of avant-garde design
                and pioneering innovation.
              </p>
              <br />
              <p>
                While firmly rooted in Danish design principles, Neoteric
                Studios has always cast its eyes towards the horizon. Their
                portfolio boasts collaborations with brands from Tokyo to New
                York, yet each project carries a hint of that quintessential
                Danish minimalism.
              </p>

              <br />
              <p>
                Neoteric Studios has always been at the vanguard of digital
                evolution. Recognizing the paradigm shift towards digital
                experiences early on, they invested in curating a team of
                digital magicians.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="contact-info-sub-col">
              <p>
                Good work takes time, commitment and close collaboration. We
                value long-lasting relationships where trust, openness and
                progress become the driver for the process.
              </p>

              <br />
              <p>
                The studio was born in 2016 with an ambition to create order in
                the increasingly more complex convergence between business and
                design. Based in Denmark we work with ambitious corporations,
                startups and individuals all over the world.
              </p>

              <br />
              <p>
                At the core of Neoteric's philosophy lies a profound respect for
                essentialism. Amidst the noise of the modern world, they seek
                the fundamental, the elemental.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="project-grid">
          <Masonry
            breakpointCols={myBreakpointsAndCols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items}
          </Masonry>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="work-section-header">
          <div className="section-header-title">
            <h1 className="section-title">Work</h1>
          </div>
          <div className="section-header-copy">
            <p>2016-2023</p>
            <p>
              <Link to="/work" id="a-underline">
                View All
              </Link>
            </p>
            <p>({projects.projects.length})</p>
          </div>
        </div>

        <div className="projects">
          <div className="row">
            <div className="col sm">
              {projects.projects.slice(4, 6).map((project, index) => (
                <Project
                  key={index}
                  projectImg={project.img}
                  projectTitle={project.title}
                  projectCategory={project.category}
                />
              ))}
            </div>
            {projects.projects.slice(6, 7).map((project, index) => (
              <Project
                key={index}
                projectImg={project.img}
                projectTitle={project.title}
                projectCategory={project.category}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default transition(SampleProject);
