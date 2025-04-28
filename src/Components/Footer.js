import React from 'react';
const Footer = () => {
  const footerStyles = {
    width: '100%',
    padding: '30px 0',
    backgroundColor: '#080808',
    color: '#fff',
    textAlign: 'center',
    borderTop: '1px solid #333'
  };
  const containerStyles = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto'
  };
  const logoStyles = {
    fontSize: '30px',
    fontWeight: 600,
    color: '#FF004F',
    marginBottom: '15px'
  };
  const navListStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    listStyle: 'none',
    margin: '20px 0',
    padding: 0
  };
  const navLinkStyles = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    transition: 'all 0.3s ease'
  };
  const socialIconsStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px'
  };
  const iconStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };
  const copyrightStyles = {
    fontSize: '14px',
    color: '#ABABAB'
  };
  const highlightStyles = {
    color: '#FF004F'
  };
  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <h1 style={logoStyles}>Portfolio</h1>
        <ul style={navListStyles}>
          <li><a href="#hero" style={navLinkStyles}>Home</a></li>
          <li><a href="#about" style={navLinkStyles}>About</a></li>
          <li><a href="#services" style={navLinkStyles}>Services</a></li>
          <li><a href="#portfolio" style={navLinkStyles}>Portfolio</a></li>
          <li><a href="#contact" style={navLinkStyles}>Contact</a></li>
        </ul>
        <div style={socialIconsStyles}>
          <a href="#" style={iconStyles}>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" style={iconStyles}>
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" style={iconStyles}>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" style={iconStyles}>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <p style={copyrightStyles}>
          © 2025 Portfolio. All rights reserved. Made with <span style={highlightStyles}>:heart:</span> by John Smith
        </p>
      </div>
    </footer>
  );
};
export default Footer;