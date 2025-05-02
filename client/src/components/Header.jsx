import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><a href="#main-section" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;