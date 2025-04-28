import React from 'react';
import { underlineImage } from './assets/images';

const Services = () => {
  const servicesStyles = {
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
  const servicesListStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridGap: '40px',
    margin: '0 auto'
  };
  const serviceItemStyles = {
   // backgroundColor: '#1A1A1A',
    padding: '40px 30px',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    cursor: 'default',
    border : '1px solid white',
  };
  const serviceIconStyles = {
    fontSize: '50px',
    color: '#fff',
    marginBottom: '20px'
  };
  const serviceHeadingStyles = {
    fontSize: '30px',
    fontWeight: 600,
    color: '#fff',
    marginBottom: '15px',
    background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };
  const serviceParagraphStyles = {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#fff',
    marginBottom: '20px'
  };
  const readMoreStyles = {
    display: 'inline-block',
    fontSize: '14px',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500
  };
  const arrowRightStyles = {
    marginLeft: '5px',
    fontSize: '12px'
  };
  const underlineImg = {
    height: '60px',
    position: 'absolute',
    bottom: '2px',
    right: '450px'
  }

  return (
    <section id="services" style={servicesStyles}>
      <div style={containerStyles}>
        <div style={sectionTitleStyles}>
          {/* <p style={subTitleStyles}>What I Offer</p> */}
          <h1 style={titleStyles}>
            Services
            {/* <div style={titleAfterStyles}></div> */}
          </h1>
          <img
            src={underlineImage}
            alt=""
            style={underlineImg}
          />

        </div>
        <div style={servicesListStyles}>
          <div style={serviceItemStyles}>
            {/* <i className="fa-solid fa-code" style={serviceIconStyles}></i> */}
            <h2>01</h2>
            <h2 style={serviceHeadingStyles}>Web Design</h2>
            <p style={serviceParagraphStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat malesuada dui a posuere.
            </p>
            <a href="#" style={readMoreStyles}>
              Learn More <i className="fa-solid fa-arrow-right" style={arrowRightStyles}></i>
            </a>
          </div>
          <div style={serviceItemStyles}>
            {/* <i className="fa-solid fa-crop" style={serviceIconStyles}></i> */}
            <h2>02</h2>
            <h2 style={serviceHeadingStyles}>UI/UX Design</h2>
            <p style={serviceParagraphStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat malesuada dui a posuere.
            </p>
            <a href="#" style={readMoreStyles}>
              Learn More <i className="fa-solid fa-arrow-right" style={arrowRightStyles}></i>
            </a>
          </div>
          <div style={serviceItemStyles}>
            {/* <i className="fa-brands fa-app-store" style={serviceIconStyles}></i> */}
            <h2>03</h2>
            <h2 style={serviceHeadingStyles}>App Development</h2>
            <p style={serviceParagraphStyles}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat malesuada dui a posuere.
            </p>
            <a href="#" style={readMoreStyles}>
              Learn More <i className="fa-solid fa-arrow-right" style={arrowRightStyles}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;