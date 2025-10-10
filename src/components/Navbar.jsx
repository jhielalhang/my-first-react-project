import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Jela's Resort</h1>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#register" className="register-btn">Register</a>
    </nav>
  );
}

export default Navbar;
