import React from 'react';
import profile from './assets/profile_img1.png'

const underlineImage =
  "data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

const About = () => {
  const aboutStyles = {
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
    color: '#fff',
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
  const aboutContentStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  const aboutImageStyles = {
    flex: '1',
    minWidth: '300px',
    marginRight: '30px',
    // marginBottom: '30px',
  };
  // const imageStyles = {
  //   //width: '60%',
  //   maxWidth: '500px',
  //   borderRadius: '15px',
  // };
  // const imageStyles = {
  //   width: '100%',
  //   maxWidth: '600px',
  //   height: 'auto',
  //   borderRadius: '15px', // Makes the image circular
  //   objectFit: 'cover',   // Ensures the image covers the container without distortion
  //   display: 'block',
  //   margin: '0 auto',
  //   boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', // Adds a subtle shadow for depth
  // };

  const imageStyles = {
    width: '100%',
    maxWidth: '400px',
    height: '600px', // Adjust for vertical look
    objectFit: 'cover',
    borderRadius: '15px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    //transform: 'rotate(-2deg)',
    //transition: 'all 0.3s ease',
  };


  const aboutTextStyles = {
    flex: '1',
    // minWidth: '300px',
  };
  const paragraphStyles = {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#fff',
    marginBottom: '30px'
  };
  const aboutStatsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '40px'
  };
  const statStyles = {
    minWidth: '120px',
    marginBottom: '20px'
  };
  const statNumberStyles = {
    fontSize: '40px',
    fontWeight: 700,
    color: '#FF004F',
    marginBottom: '5px',
    background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };
  const statTitleStyles = {
    fontSize: '14px',
    color: '#fff',
    lineHeight: 1.4
  };
  const buttonStyles = {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: '#FF004F',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };
  const underlineImg = {
    height: '60px',
    position: 'absolute',
    bottom: '2px',
    right: '420px'
  }

  const skillsContainer = {
    marginTop: '40px',
    marginBottom: '40px'
  };

  const skillBarContainer = {
    flex: 1,
    height: '10px',
    backgroundColor: '#333',
    borderRadius: '5px',
    overflow: 'hidden',
    marginLeft: '20px',
  };

  const skillRow = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  };

  const skillLabel = {
    fontSize: '16px',
    color: '#fff',
    width: '120px', // fixed width for alignment
  };

  const skillBar = (width) => ({
    height: '100%',
    width: width,
    background: 'linear-gradient(90deg, #b026e0 0%, #d13ce4 50%, #f2733e 100%)',
    borderRadius: '5px',
  });

  return (
    <section id="about" style={aboutStyles}>
      <div style={containerStyles}>
        <div style={sectionTitleStyles}>
          {/* <p style={subTitleStyles}>My Introduction</p> */}
          <h1 style={titleStyles}>
            About me
            {/* <div style={titleAfterStyles}></div> */}
          </h1>
          <img
            src={underlineImage}
            alt=""
            style={underlineImg}
          />
        </div>
        <div style={aboutContentStyles}>
          <div style={aboutImageStyles}>
            <img src={profile} alt="Profile" style={imageStyles} />
          </div>
          <div style={aboutTextStyles}>
            <p style={paragraphStyles}>
              I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
            </p>
            <p style={paragraphStyles}>
              My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project
            </p>
            <div style={aboutStatsStyles}>
              <div style={statStyles}>
                <h3 style={statNumberStyles}>3+</h3>
                <p style={statTitleStyles}>Years<br />experience</p>
              </div>
              <div style={statStyles}>
                <h3 style={statNumberStyles}>5+</h3>
                <p style={statTitleStyles}>Projects<br />Completed</p>
              </div>
              <div style={statStyles}>
                <h3 style={statNumberStyles}>5+</h3>
                <p style={statTitleStyles}>Happy<br />clients</p>
              </div>
            </div>
            <div style={skillsContainer}>
              <div style={skillRow}>
                <p style={skillLabel}>React Native</p>
                <div style={skillBarContainer}>
                  <div style={skillBar('50%')}></div>
                </div>
              </div>
              <div style={skillRow}>
                <p style={skillLabel}>React JS</p>
                <div style={skillBarContainer}>
                  <div style={skillBar('70%')}></div>
                </div>
              </div>
              <div style={skillRow}>
                <p style={skillLabel}>JavaScript</p>
                <div style={skillBarContainer}>
                  <div style={skillBar('60%')}></div>
                </div>
              </div>
              <div style={skillRow}>
                <p style={skillLabel}>HTML & CSS</p>
                <div style={skillBarContainer}>
                  <div style={skillBar('50%')}></div>
                </div>
              </div>
            </div>
            {/* <a href="#" style={buttonStyles}>Download CV</a> */}
            <a href="#contact" className="connect-btn">My Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;