// Components/MainApp.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function MainApp() {
  const [activeNav, setActiveNav] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = `#${section.id}`;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveNav(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appStyles = {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#080808',
    color: '#fff'
  };

  return (
    <div style={appStyles}>
      <Header activeNav={activeNav} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;
