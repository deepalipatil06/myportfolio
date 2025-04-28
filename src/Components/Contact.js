import React, { useState } from 'react';
import { underlineImage } from './assets/images';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const contactStyles = {
    width: '100%',
    padding: '80px 0',
    backgroundColor: '#080808',
    color: '#fff'
  };
  const containerStyles = {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto'
  };
  const sectionTitleStyles = {
    textAlign: 'center',
    marginBottom: '60px',
    position: 'relative'
  };
  const subTitleStyles = {
    fontSize: '16px',
    color: '#ABABAB',
    marginBottom: '5px'
  };
  const titleStyles = {
    fontSize: '60px',
    fontWeight: 600,
    color: '#fff',
    position: 'relative',
    display: 'inline-block',
    zIndex: 2
  };
  const titleAfterStyles = {
    content: '""',
    position: 'absolute',
    width: '50px',
    height: '3px',
    backgroundColor: '#FF004F',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  const contactContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  };
  const contactInfoStyles = {
    flex: '1',
    minWidth: '300px',
    marginRight: '30px',
    marginBottom: '30px'
  };
  const contactDetailsStyles = {
    marginBottom: '40px'
  };
  const contactItemStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '30px'
  };
  const contactIconStyles = {
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#FF004F',
    marginRight: '15px'
  };
  const contactTextStyles = {
    flex: 1
  };
  const contactHeadingStyles = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '5px'
  };
  const contactValueStyles = {
    fontSize: '14px',
    color: '#ABABAB'
  };
  const socialIconsStyles = {
    display: 'flex',
    gap: '20px'
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
  const contactFormStyles = {
    flex: '1',
    minWidth: '300px'
  };
  const formStyles = {
    width: '100%'
  };
  const inputStyles = {
    width: '100%',
    padding: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    marginBottom: '20px',
    outline: 'none'
  };
  const textareaStyles = {
    ...inputStyles,
    resize: 'vertical',
    minHeight: '150px'
  };
  const buttonStyles = {
    display: 'inline-block',
    padding: '12px 30px',
    // backgroundColor: '#FF004F',
    background: 'linear-gradient(270deg, #DF8908 0%, #B415FF 100%)',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };
  const underlineImg = {
    height: '60px',
    position: 'absolute',
    bottom: '2px',
    right: '410px'
  }

  return (
    <section id="contact" style={contactStyles}>
      <div style={containerStyles}>
        <div style={sectionTitleStyles}>
          {/* <p style={subTitleStyles}>Get in Touch</p> */}
          <h1 style={titleStyles}>
            Contact Me
            {/* <div style={titleAfterStyles}></div> */}
          </h1>
          <img
            src={underlineImage}
            alt=""
            style={underlineImg}
          />
        </div>
        <div style={contactContainerStyles}>
          <div style={contactInfoStyles}>
            <div style={contactDetailsStyles}>
              <div style={contactItemStyles}>
                <div style={contactIconStyles}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div style={contactTextStyles}>
                  <h3 style={contactHeadingStyles}>Call Me</h3>
                  <p style={contactValueStyles}>+123 456 7890</p>
                </div>
              </div>
              <div style={contactItemStyles}>
                <div style={contactIconStyles}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div style={contactTextStyles}>
                  <h3 style={contactHeadingStyles}>Email</h3>
                  <p style={contactValueStyles}>contact@example.com</p>
                </div>
              </div>
              <div style={contactItemStyles}>
                <div style={contactIconStyles}>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div style={contactTextStyles}>
                  <h3 style={contactHeadingStyles}>Location</h3>
                  <p style={contactValueStyles}>New York, USA</p>
                </div>
              </div>
            </div>
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
          </div>
          <div style={contactFormStyles}>
            <form style={formStyles} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={inputStyles}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                style={inputStyles}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                style={textareaStyles}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" style={buttonStyles}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;