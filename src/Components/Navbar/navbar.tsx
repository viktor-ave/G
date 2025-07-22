import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';


const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left side - Logo + Name */}
        <div className="navbar-brand">
           <img 
            src="/favicon.png" // Direct path from public folder
            alt="Gitau Logo" 
            className="navbar-logo" 
          />
          <span className="navbar-name">Gitau</span>
        </div>

        {/* Middle - Navigation Links */}
        <div className="navbar-links">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            activeClass="active"
          >
            Home
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            activeClass="active"
            offset={-80}
          >
            About
          </Link>
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            activeClass="active"
            offset={-80}
          >
            Services
          </Link>
        </div>

        {/* Right side - CTA Button */}
        <button className="navbar-cta">
          <Link
          to="contact"
          smooth={true}
          duration={500}
          activeClass="active"
          offset={-80}
          >
          Book a Call
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;