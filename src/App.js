// import React, { useState, useEffect } from 'react';
// import Header from './Components/Header';
// import Hero from './Components/Hero';
// import About from './Components/About';
// import Services from './Components/Services';
// import Portfolio from './Components/Portfolio';
// import Contact from './Components/Contact';
// import Footer from './Components/Footer';
// function App() {
//   const [activeNav, setActiveNav] = useState('#hero');
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       const scrollPosition = window.scrollY + 300;
//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const sectionId = `#${section.id}`;
//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           setActiveNav(sectionId);
//         }
//       });
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   const appStyles = {
//     fontFamily: "'Poppins', sans-serif",
//     margin: 0,
//     padding: 0,
//     boxSizing: 'border-box',
//     backgroundColor: '#080808',
//     color: '#fff'
//   };
//   return (
//     <div style={appStyles}>
//       <Header activeNav={activeNav} />
//       <main>
//         <Hero />
//         <About />
//         <Services />
//         <Portfolio />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }
// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from './Components/MainApp';
import ProjectDetail from './Components/ProjectDetails'; // Create this file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
