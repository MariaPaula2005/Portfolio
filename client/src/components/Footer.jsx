import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3 className="footer-name">Maria Paula Mora</h3>
          <p className="footer-description">
            Software developer based in Calgary who enjoys building websites and applications that are responsive, accessible, and easy to use.
          </p>
        </div>

        <div className="footer-social">
          <h3 className="social-title">Connect With Me</h3>
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/maria-paula-mora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaLinkedin className="social-icon" /> LinkedIn
            </a>
            <a 
              href="https://github.com/MariaPaula2005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button"
            >
              <FaGithub className="social-icon" /> GitHub
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Maria Paula Mora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;