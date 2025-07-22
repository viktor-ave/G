import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left side - Logo + Name */}
        <div className="navbar-brand">
          <img 
            src="/favicon.png"
            alt="Gitau Logo" 
            className="navbar-logo" 
          />
          <span className="navbar-name">Gitau</span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Middle - Navigation Links */}
        <div className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="nav-link"
            activeClass="active"
            onClick={() => setMobileMenuOpen(false)}
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
            onClick={() => setMobileMenuOpen(false)}
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
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
        </div>

        {/* Right side - CTA Button */}
        <button className={`navbar-cta ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            offset={-80}
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Call
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;