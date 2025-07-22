import React from "react";
import "./Studio.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import transition from "../../transition";

import HeroImage from "../../assets/project-images/img2.jpg";

import Award from "../../components/Award/Award";
import Project from "../../components/Project/Project";

// content
import awards from "../../data/awards.json";
import projects from "../../data/projects.json";

const Studio = () => {
  return (
    <div className="studio">
      <div className="divider"></div>

      <div className="container">
        <h1 className="section-title">
          Established to craft <br /> fundamentals
        </h1>
        <div className="whitespace-300"></div>
        <p>Established 2018</p>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h2 className="section-h2">
              Neoteric<sup>&copy;</sup> is a creative hub rooted in Denmark,
              collaborating globally to sculpt iconic brands and immersive
              digital journeys, always honing in on the vital core.
            </h2>
          </div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p>
                Neoteric Studios, nestled in the bustling heart of Copenhagen,
                stands as a testament to the city's legacy of avant-garde design
                and pioneering innovation. The studio was the brainchild of Elsa
                and Johan, both luminaries in their own right.
              </p>

              <br />
              <p>
                What sets Neoteric Studios apart is its unyielding commitment to
                storytelling. Every project undertaken is seen as a blank
                canvas, waiting for a narrative to unfold. The team delves deep
                into the brand's ethos, history, and aspirations.
              </p>

              <br />
              <p>
                While firmly rooted in Danish design principles, Neoteric
                Studios has always cast its eyes towards the horizon. Their
                portfolio boasts collaborations with brands from Tokyo to New
                York, yet each project carries a hint of that quintessential
                Danish minimalism.
              </p>

              <p>
                Neoteric has championed the integration of technology with
                design, crafting digital realms that enchant and engage.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="contact-info-sub-col">
              <p>
                Neoteric Studios has always been at the vanguard of digital
                evolution. Recognizing the paradigm shift towards digital
                experiences early on, they invested in curating a team of
                digital magicians. From immersive AR experiences to intuitive
                UI/UX designs.
              </p>

              <br />
              <p>
                At the core of Neoteric's philosophy lies a profound respect for
                essentialism. Amidst the noise of the modern world, they seek
                the fundamental, the elemental.
              </p>

              <br />
              <p>
                Recognizing the paradigm shift towards digital experiences early
                on, they invested in curating a team of digital magicians. From
                immersive AR experiences to intuitive UI/UX designs.
              </p>
            </div>
          </div>
        </section>

        <div className="studio-img">
          <div className="studio-img-alt">
            <p>
              Co-founders Lars Eriksson & Kristian Møller. <br /> Odense, 2020.
            </p>
            <br />
            <div className="studio-main-img">
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">Methodology</h1>
          </div>
          <div className="contact-info-col">
            <p>
              At the heart of our approach lies a commitment to innovative
              design principles. Through a fusion of creativity and strategy, we
              navigate challenges with precision. From the conceptualization
              phase to the final output, our goal remains consistent: to deliver
              design solutions that not only resonate but also stand the test of
              time.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col"></div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <h2>1</h2>
            </div>
            <div className="contact-info-sub-col">
              <p>Conceptualization & Drafting</p>
              <p className="contact-info-sec">
                Turning initial ideas into tangible concepts, and sketching
                preliminary designs.
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col"></div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <h2>2</h2>
            </div>
            <div className="contact-info-sub-col">
              <p>Refinement & Iteration</p>
              <p className="contact-info-sec">
                Enhancing the concepts through feedback, making iterative
                changes for perfection.
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col"></div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <h2>3</h2>
            </div>
            <div className="contact-info-sub-col">
              <p>Finalization & Delivery</p>
              <p className="contact-info-sec">
                Sealing the design with utmost precision and ensuring it's ready
                for its intended application.
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col"></div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <h2>4</h2>
            </div>
            <div className="contact-info-sub-col">
              <p>Implementation & Feedback Loop</p>
              <p className="contact-info-sec">
                Launching the design into its intended environment and
                continuously monitoring for areas of improvement.
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">Services</h1>
          </div>
          <div className="contact-info-col">
            <p>
              At Neoteric Studios, our expertise spans a broad spectrum. From
              meticulously crafting brand identities that resonate with
              audiences to constructing digital landscapes that captivate users,
              our dedication shines through. We pride ourselves on our ability
              to merge aesthetics with functionality.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col"></div>
          <div className="contact-info-col">
            <div className="contact-info-sub-col">
              <p className="process-header">Conceptualizing</p>

              <p className="process-copy">
                Drawing from in-depth analysis and innate understanding, we
                envision, define, and depict the groundwork for the emergence of
                a brand, product, or service.
              </p>
              <br />
              <p className="process-copy">
                By combining diligent study with our innate creative spark, we
                mold, refine, and bring to life the structures that underpin a
                brand, product, or service's presence and identity.
              </p>
            </div>
            <div className="contact-info-sub-col">
              <p className="process-header">Crafting</p>
              <p className="process-copy">
                By combining diligent study with our innate creative spark, we
                mold, refine, and bring to life the structures that underpin a
                brand, product, or service's presence and identity.
              </p>
              <br />
              <p className="process-copy">
                Drawing from in-depth analysis and innate understanding, we
                envision, define, and depict the groundwork for the emergence of
                a brand, product, or service.
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
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">
              Selected <br />
              Clients
            </h1>
          </div>
          <div className="contact-info-col">
            <p>
              The studio was born in 2016 with an ambition to create order in
              the increasingly more complex convergence between business and
              design. Based in Denmark we work with ambitious corporations,
              startups and individuals all over the world.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col"></div>
          <div className="contact-info-col">
            <div className="project-names">
              <h3>Nexa</h3>
              <h3>Aura Shift</h3>
              <h3>Flux Veil</h3>
              <h3>Lurea</h3>
              <h3>Lunar Arc</h3>
              <h3>Zenix</h3>
              <h3>Ciriio</h3>
              <h3>Ether Pulse</h3>
              <h3>Flow</h3>
              <h3>Omni Wave</h3>
              <h3>Vireo</h3>
              <h3>Terra Glide</h3>
              <h3>Pluvio</h3>
              <h3>Aether Drift</h3>
              <h3>Muio</h3>
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
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">Services</h1>
          </div>
          <div className="contact-info-col">
            <p>
              At Neoteric Studios, our expertise spans a broad spectrum. From
              meticulously crafting brand identities that resonate with
              audiences to constructing digital landscapes that captivate users,
              our dedication shines through. We pride ourselves on our ability
              to merge aesthetics with functionality.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </section>
      </div>
      <div className="divider"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h1 className="section-title">
              Awards & <br />
              Recognition
            </h1>
          </div>
          <div className="contact-info-col">
            <p>
              Neoteric Studios has always been at the vanguard of digital
              evolution. Recognizing the paradigm shift towards digital
              experiences early on, they invested in curating a team of digital
              magicians. From immersive AR experiences to intuitive UI/UX
              designs.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </section>
      </div>

      <div className="divider"></div>
      <section className="awards">
        <div className="award" id="award-header">
          <div className="container">
            <div>
              <div>
                <div className="award-client">
                  <h3>Client</h3>
                </div>
                <div className="award-category">
                  <h3>Project</h3>
                </div>
              </div>
              <div className="award-year">
                <h3>Year</h3>
              </div>
            </div>
            <div className="award-name">
              <h3>Award</h3>
            </div>
          </div>
        </div>
        {awards.awards.slice(0, 10).map((award, index) => (
          <Award
            key={index}
            awardClient={award.client}
            awardCategory={award.category}
            awardYear={award.year}
            awardName={award.name}
          />
        ))}
      </section>
      <div className="whitespace-100"></div>
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

export default transition(Studio);
