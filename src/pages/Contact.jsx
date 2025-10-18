import React from "react";
import "./Pages.css";

function Contact() {
  return (
    <section
      className="page-section"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1581091870627-3a9eb23e7b07?auto=format&fit=crop&w=1350&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:jelacaratao@gmail.com" style={{color:'#00bcd4'}}>jelacaratao@gmail.com</a></p>
        <p>Let’s connect or collaborate!</p>
      </div>
    </section>
  );
}

export default Contact;
