import React, { useState } from 'react';
import { Menu, X, Home, User, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          background-color: #1a1a1a;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-links a:hover {
          background-color: #333;
          color: #4a9eff;
        }

        .nav-icon {
          display: none;
        }

        .menu-icon {
          display: none;
          cursor: pointer;
          color: #fff;
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            right: -300px;
            top: 70px;
            flex-direction: column;
            background-color: #1a1a1a;
            width: 200px;
            text-align: left;
            transition: right 0.3s ease;
            padding: 1rem;
            box-shadow: -5px 10px 27px rgba(0, 0, 0, 0.5);
            border-radius: 8px 0 0 8px;
            gap: 0.5rem;
          }

          .nav-links.active {
            right: 0;
          }

          .nav-links li {
            margin: 0;
            width: 100%;
          }

          .nav-links a {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 0.95rem;
            border-radius: 6px;
          }

          .nav-icon {
            display: block;
          }

          .menu-icon {
            display: block;
          }
        }
      `}</style>
      
      <div className="navbar-container">
        <div className="logo">Jela's Portfolio</div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              <Home className="nav-icon" size={18} />
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              <User className="nav-icon" size={18} />
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              <Mail className="nav-icon" size={18} />
              Contact
            </a>
          </li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;