import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import transition from "../../transition";

import TeamImg1 from "../../assets/team/team1.jpg";
import TeamImg2 from "../../assets/team/team2.jpg";

import Project from "../../components/Project/Project";

//content
import projects from "../../data/projects.json";

const Contact = () => {
  return (
    <div className="contact">
      <div className="divider"></div>

      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <div className="whitespace-300"></div>
        <p>Odense & Viborg</p>
      </div>

      <div className="divider"></div>

      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h2 className="section-h2">
              We forge strong partnerships with brands and teams, sculpting
              their prospective ventures via design. From audacious conceptual
              journeys to meticulous execution of thoughtful design, we invite
              you to connect to explore possibilities or delve deeper into our
              studio's philosophy on crafting fundamentals.
            </h2>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>Neoteric A/S</p>
              <p>Skt. Lukas Vej 4D</p>
              <p>DK-1624</p>
              <p>Copenhagen</p>

              <br />

              <p>Jens Olufsens Gade 11C</p>
              <p>DK-8260</p>
              <p>Aarhus</p>

              <br />

              <p>+45 5246 8426</p>
              <p>hello@neoteric.dk</p>

              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <p>CHX 868234</p>
            </div>
            <div className="contact-info-sub-col">
              <a href="#">Instagram</a> <br />
              <a href="#">LinkedIn</a> <br />
              <a href="#">Twitter</a>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>

      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">All Inquiries</h1>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>Business</p>
              <p className="sec-contact">
                New business inquiries and collaborations. Please write to
                hi@neoteric.dk
              </p>

              <br />
              <p>Public Relations</p>
              <p className="sec-contact">
                Requests for interviews, materials, and talks. Please write to
                press@neoteric.dk
              </p>

              <br />
              <p>Careers</p>
              <p className="sec-contact">
                We're currently not accepting interns or hiring.
              </p>

              <br />
              <br />
              <br />

              <br />
              <br />
              <br />
              <p>CVR—37503878</p>
            </div>
            <div className="contact-info-sub-col"></div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">Founding Partners</h1>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>
                Neoteric® is established and directed by Danish designers Morten
                Skov Hansen and Emil Rasmussen, with branches in Copenhagen and
                Viborg.
              </p>
              <br />
              <p>
                From audacious conceptual journeys to meticulous execution of
                thoughtful design, we invite you to connect to explore
                possibilities or delve deeper into our studio's philosophy on
                crafting fundamentals.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="team">
          <div className="team-col"></div>
          <div className="team-col">
            <div className="dev">
              <div className="dev-img">
                <img src={TeamImg1} alt="" />
              </div>
              <div className="dev-name">
                <p>Martin Jens Lassen</p>
              </div>
              <div className="dev-pos">
                <p>Founder & Design Director</p>
                <p>martin@neoteric.com</p>
              </div>
              <div className="dev-contact">
                <p>+45 87439 374</p>
                <p>LinkedIn</p>
              </div>
            </div>
            <div className="dev">
              <div className="dev-img">
                <img src={TeamImg2} alt="" />
              </div>
              <div className="dev-name">
                <p>Sorten Skov Hansen</p>
              </div>
              <div className="dev-pos">
                <p>Founder & Creative Lead</p>
                <p>sorten@neoteric.com</p>
              </div>
              <div className="dev-contact">
                <p>+23 9843 7834</p>
                <p>LinkedIn</p>
              </div>
            </div>
          </div>
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
              <Link to="/" id="a-underline">
                View All
              </Link>
            </p>
            <p>({projects.projects.length})</p>
          </div>
        </div>

        <div className="projects">
          <div className="row">
            <div className="col sm">
              {projects.projects.slice(0, 2).map((project, index) => (
                <Project
                  key={index}
                  projectImg={project.img}
                  projectTitle={project.title}
                  projectCategory={project.category}
                />
              ))}
            </div>
            {projects.projects.slice(2, 3).map((project, index) => (
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

export default transition(Contact);
