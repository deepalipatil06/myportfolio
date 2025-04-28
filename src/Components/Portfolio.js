import React, { useState, useRef } from 'react';
import { underlineImage } from './assets/images';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(0);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const portfolioItems = [
    {
      id: 1,
      title: 'Social Media App',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80',
      link: '#',
      desc: `ShopEase is your all-in-one e-commerce solution, designed to deliver a seamless and personalized shopping experience. Whether you're browsing the latest fashion trends, hunting for the best tech gadgets, or stocking up on essentials, ShopEase brings your favorite brands and products right to your fingertips.`
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      link: '#',
      desc: `ShopEase is your all-in-one e-commerce solution, designed to deliver a seamless and personalized shopping experience. Whether you're browsing the latest fashion trends, hunting for the best tech gadgets, or stocking up on essentials, ShopEase brings your favorite brands and products right to your fingertips.`
    },
    {
      id: 3,
      title: 'Laundry Service App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80',
      link: '#',
      desc: `ShopEase is your all-in-one e-commerce solution, designed to deliver a seamless and personalized shopping experience. Whether you're browsing the latest fashion trends, hunting for the best tech gadgets, or stocking up on essentials, ShopEase brings your favorite brands and products right to your fingertips.`
    },
    {
      id: 4,
      title: 'Al Leagal Adviser App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      link: '#',
      desc: `ShopEase is your all-in-one e-commerce solution, designed to deliver a seamless and personalized shopping experience. Whether you're browsing the latest fashion trends, hunting for the best tech gadgets, or stocking up on essentials, ShopEase brings your favorite brands and products right to your fingertips.`
    },
    {
      id: 5,
      title: 'Kwelio Pills Reminder App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80',
      link: '#',
      desc: `ShopEase is your all-in-one e-commerce solution, designed to deliver a seamless and personalized shopping experience. Whether you're browsing the latest fashion trends, hunting for the best tech gadgets, or stocking up on essentials, ShopEase brings your favorite brands and products right to your fingertips.`
    },
    {
      id: 6,
      title: 'Fashion Website',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      link: '#',
      desc: `ShopEase is your all-in-one e-commerce solution, designed to deliver a seamless and personalized shopping experience. Whether you're browsing the latest fashion trends, hunting for the best tech gadgets, or stocking up on essentials, ShopEase brings your favorite brands and products right to your fingertips.`
    }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  // const filteredItems = activeFilter === 'all'
  //   ? portfolioItems
  //   : portfolioItems.filter(item => item.category === activeFilter);

  const filteredItems = portfolioItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const portfolioStyles = {
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
  const workListContainerStyles = {
    textAlign: 'center'
  };
  const filterButtonsStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  };
  const filterButtonStyle = {
    padding: '8px 20px',
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    background: 'black'
  };
  const activeFilterButtonStyle = {
    ...filterButtonStyle,
    // backgroundColor: '#FF004F'
    background: 'linear-gradient(270deg, #DF8908 20%, #B415FF 100%)'
  };
  const workListStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '30px',
    marginBottom: '40px'
  };
  const workStyles = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px'
  };
  const workImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '10px',
    transition: 'transform 0.5s'
  };
  const layerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.5s'
  };
  const layerHeadingStyles = {
    fontSize: '22px',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#fff'
  };
  const layerParagraphStyles = {
    fontSize: '14px',
    color: '#fff',
    marginBottom: '20px'
  };
  const layerLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#FF004F',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none'
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
    borderRadius: '30px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  };
  const underlineImg = {
    height: '60px',
    position: 'absolute',
    bottom: '2px',
    right: '450px'
  }
  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999,
    },
    dialog: {
      background: '#fff',
      padding: '2rem',
      borderRadius: '16px',
      maxWidth: '600px',
      width: '90%',
      position: 'relative',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      animation: 'fadeInScale 0.3s ease', // Optional - works if keyframes defined globally
    },
    image: {
      width: '100%',
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    closeBtn: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#333',
    },
    proDesc: {
      color: 'black'
    }
  };

  // Custom hover state management for work items
  const handleMouseEnter = (e) => {
    const layer = e.currentTarget.querySelector('.layer');
    const img = e.currentTarget.querySelector('img');
    if (layer) layer.style.opacity = 1;
    if (img) img.style.transform = 'scale(1.1)';
  };
  const handleMouseLeave = (e) => {
    const layer = e.currentTarget.querySelector('.layer');
    const img = e.currentTarget.querySelector('img');
    if (layer) layer.style.opacity = 0;
    if (img) img.style.transform = 'scale(1)';
  };

  // const handleOpen = (project) => {
  //   scrollRef.current = window.scrollY;
  //   setSelectedProject(project);

  //   // Freeze background scroll
  //   document.body.style.position = 'fixed';
  //   document.body.style.top = `-${scrollRef.current}px`;
  //   document.body.style.left = '0';
  //   document.body.style.right = '0';
  // };

  // const handleOpen = (item) => {
  //   window.open(`/project/${item.id}`, "_blank");
  // };

  const handleOpen = (id) => {
    navigate(`/project/${id}`);
  };

  const handleClose = () => {
    setSelectedProject(null);

    // Unfreeze scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';

    // Restore scroll
    window.scrollTo({ top: scrollRef.current, behavior: 'instant' });
  };

  return (
    <section id="portfolio" style={portfolioStyles}>
      <div style={containerStyles}>
        <div style={sectionTitleStyles}>
          {/* <p style={subTitleStyles}>My Recent Work</p> */}
          <h1 style={titleStyles}>
            Projects
            {/* <div style={titleAfterStyles}></div> */}
          </h1>
          <img
            src={underlineImage}
            alt=""
            style={underlineImg}
          />
        </div>
        <div style={workListContainerStyles}>
          <div style={filterButtonsStyles}>
            <button
              style={activeFilter === 'all' ? activeFilterButtonStyle : filterButtonStyle}
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
            <button
              style={activeFilter === 'web' ? activeFilterButtonStyle : filterButtonStyle}
              onClick={() => handleFilterClick('web')}
            >
              Web
            </button>
            <button
              style={activeFilter === 'app' ? activeFilterButtonStyle : filterButtonStyle}
              onClick={() => handleFilterClick('app')}
            >
              App
            </button>
            <button
              style={activeFilter === 'design' ? activeFilterButtonStyle : filterButtonStyle}
              onClick={() => handleFilterClick('design')}
            >
              Design
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', position: 'relative' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Projects..."
              style={{
                padding: '10px 40px 10px 20px',
                borderRadius: '30px',
                border: '2px solid #fff',
                background: 'black',
                color: 'white',
                fontSize: '16px',
                width: '80%',
                outline: 'none'
              }}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="Search Icon"
              style={{
                position: 'absolute',
                right: 'calc(25% - 140px)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                pointerEvents: 'none',
                filter: 'invert(1)', // makes the image white if it's black
              }}
            />
          </div>

          <div style={workListStyles}>
            {filteredItems.map(item => (
              <div
                key={item.id}
                style={workStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleOpen(item)}
              >
                <img src={item.image} alt={item.title} style={workImageStyles} />
                <div className="layer" style={layerStyles}>
                  <h3 style={layerHeadingStyles}>{item.title}</h3>
                  <p style={layerParagraphStyles}>Project description goes here. Click to view details.</p>
                  <a href={item.link} style={layerLinkStyles}>
                    <i className="fa-solid fa-external-link"></i>
                  </a>
                </div>
              </div>
            ))}
            {/* {selectedProject && (
              <div style={styles.overlay} onClick={handleClose}>
                <div style={styles.dialog} onClick={(e) => e.stopPropagation()}>
                  <button style={styles.closeBtn} onClick={handleClose}>✕</button>
                  <div>
                    <p style={styles.proDesc}>
                    Tip calculator shows a combination of math with javascript to enable users to calculate tip based on bill amount and also enables employees to divide the amount equally evenly instantly.This is a detailed view of the project with additional information about the development process, challenges faced, and solutions implemented.
                    </p>
                  </div>
                  <img src={selectedProject.image} alt={selectedProject.title} style={styles.image} />
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.details}</p>
                </div>
              </div>
            )}  */}
            {selectedProject && (
              <div style={styles.overlay} onClick={handleClose}>
                <div
                  style={{
                    ...styles.dialog,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    maxWidth: '800px',
                    fontFamily: 'sans-serif',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button style={styles.closeBtn} onClick={handleClose}>✕</button>

                  {/* Project Image */}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: '100%',
                      borderRadius: '12px',
                      objectFit: 'cover',
                      maxHeight: '240px',
                    }}
                  />

                  {/* Title */}
                  <h2 style={{ fontSize: '24px', marginBottom: '0', color: 'black' }}>{selectedProject.title}</h2>
                  {/* <div style={{display: 'flex', alignItems: 'flex-start'}}>
                  <p style={{ fontSize: '15px', marginBottom: '0', color: 'black', alignSelf: 'flex-start' }}>{selectedProject.desc}</p>
                  </div> */}
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%' }}>
                    <p style={{ fontSize: '15px', color: 'black', margin: '0', textAlign: 'left' }}>
                      {selectedProject.desc}
                    </p>
                  </div>

                  {/* Key Features */}
                  <h4 style={{
                    marginTop: 0, color: '#007BFF', display: 'flex',
                    alignItems: 'flex-start',
                  }}>Key Features</h4>
                  {/* <ul style={{ paddingLeft: '20px', marginTop: 0, display: 'contents' }}>
                    <li style={{ marginBottom: '8px', color: 'black' }}>Responsive design across all devices</li>
                    <li style={{ marginBottom: '8px', color: 'black' }}>Intuitive user interface with modern aesthetics</li>
                    <li style={{ marginBottom: '8px', color: 'black' }}>Optimized performance and fast loading times</li>
                    <li style={{ marginBottom: '8px', color: 'black' }}>Seamless API integration for dynamic content</li>
                  </ul> */}
                  {/* <ul
                    style={{
                      listStyleType: 'disc',
                      padding: 0,
                      margin: 0,
                      color: '#000',
                      listStylePosition: 'inside', // Key change here
                      fontSize: '16px',
                      lineHeight: '1.6',
                      alignItems: 'flex-start'
                    }}
                  >
                    <li style={{ marginBottom: '6px' }}>Responsive design across all devices</li>
                    <li style={{ marginBottom: '6px' }}>Intuitive user interface with modern aesthetics</li>
                    <li style={{ marginBottom: '6px' }}>Optimized performance and fast loading times</li>
                    <li style={{ marginBottom: '6px' }}>Seamless API integration for dynamic content</li>
                  </ul> */}
                  <ul style={{ padding: 0, margin: 0 }}>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start', // this aligns the dot and text at the top
                        marginBottom: '6px',
                      }}
                    >
                      <span style={{ marginRight: '8px', color: 'black' }}>•</span>
                      <span style={{ color: 'black' }}>Responsive design across all devices</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '6px',
                      }}
                    >
                      <span style={{ marginRight: '8px', color: 'black' }}>•</span>
                      <span style={{ color: 'black' }}>Intuitive user interface with modern aesthetics</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '6px',
                      }}
                    >
                      <span style={{ marginRight: '8px', color: 'black' }}>•</span>
                      <span style={{ color: 'black' }}>Optimized performance and fast loading times</span>
                    </li>
                    <li
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '6px',
                      }}
                    >
                      <span style={{ marginRight: '8px', color: 'black' }}>•</span>
                      <span style={{ color: 'black' }}>Seamless API integration for dynamic content</span>
                    </li>
                  </ul>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <a
                      href={selectedProject.demoLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '12px',
                        background: '#007BFF',
                        color: '#fff',
                        borderRadius: '8px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.codeLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '12px',
                        background: '#00B894',
                        color: '#fff',
                        borderRadius: '8px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                      }}
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
          <button style={buttonStyles}>See More</button>
        </div>

      </div>
    </section>
  );
};
export default Portfolio;