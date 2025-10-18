import React from "react";
import "./Pages.css";

function About() {
  return (
    <section
      className="page-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1>About Me</h1>

        <div className="sub-section">
          <h3>Gallery</h3>
          <p>A showcase of my projects and creativity.</p>
        </div>

        <div className="sub-section">
          <h3>Me / Myself</h3>
          <p>Short intro about who I am and my passion.</p>
        </div>

        <div className="sub-section">
          <h3>Others</h3>
          <p>Other interests, hobbies, or additional info.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
