import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // Smooth scroll to top when clicking links or logo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={scrollToTop}>
        Jela's Portfolio
      </div>
      <div className="nav-links">
        <Link to="/" onClick={scrollToTop}>Home</Link>
        <Link to="/about" onClick={scrollToTop}>About</Link>
        <Link to="/contact" onClick={scrollToTop}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
