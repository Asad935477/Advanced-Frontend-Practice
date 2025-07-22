import React from "react";
import "./Thinking.css";
import Footer from "../../components/Footer/Footer";
import transition from "../../transition";

import Thought from "../../components/Thought/Thought";

import thinkings from "../../data/thinkings.json";

const Thinking = () => {
  return (
    <div className="thinking">
      <div className="divider d-light"></div>
      <div className="container">
        <h1 className="section-title">Contemplating Essentials</h1>
        <div className="whitespace-300"></div>
        <p>Odense & Esbjerg</p>
      </div>
      <div className="divider d-light"></div>
      <div className="container">
        <section className="contact-info">
          <div className="contact-info-col">
            <h2 className="section-h2">
              Fundamental design acknowledges individuals, enterprises, the
              environment, and our collective destiny. Pursuing the fundamental
              underscores every aspect of our approach and deliverables. While
              it isn't an exact discipline, certain elements determine what we
              view as fundamental in brand and product experiences.
              <br />
              <br />
              <br />
              <br />
            </h2>
          </div>
          <div className="contact-info-col"></div>
        </section>
      </div>

      {thinkings.thinkings.map((thinking) => (
        <>
          <div className="divider d-light"></div>
          <div className="container">
            <Thought
              key={thinking.index}
              title={thinking.title}
              bodyCopy1={thinking.bodyCopy1}
              bodyCopy2={thinking.bodyCopy2}
              bodyCopy3={thinking.bodyCopy3}
              index={thinking.index}
            />
          </div>
        </>
      ))}

      <div className="divider d-light"></div>
      <Footer />
    </div>
  );
};

export default transition(Thinking);
