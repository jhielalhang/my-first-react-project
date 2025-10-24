import React from "react";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>You can reach me via email or Facebook.</p>

      <div className="social-contact">
        {/* Email contact */}
        <a
          href="mailto:carataojela@gmail.com"
          className="btn email-btn"
        >
          <FaEnvelope /> Contact via Email
        </a>

        {/* Facebook contact */}
        <a
          href="https://web.facebook.com/jhielalhang"
          target="_blank"
          rel="noopener noreferrer"
          className="btn facebook-btn"
        >
          <FaFacebook /> Contact via Facebook
        </a>
      </div>
    </div>
  );
};

export default Contact;
