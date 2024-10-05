import React from 'react';

const Nav = ({ isMenuOpen, handleMenuToggle }) => {
  return (
    <nav>
      <div className="container">
        <div className="logo">WebDev</div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Web Dev?</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
