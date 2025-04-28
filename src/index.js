// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Add Font Awesome for icons
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);
// Add Google Fonts (Poppins)
const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
document.head.appendChild(googleFontsLink);
// CSS Reset
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body, html {
    background-color: #080808;
    color: #fff;
    scroll-behavior: smooth;
  }
  section {
    padding-top: 80px;
    min-height: 100vh;
  }
  img {
    max-width: 100%;
  }
  /* Responsive adjustments */
  @media (max-width: 768px) {
    nav ul {
      display: none;
    }
    .hamburger {
    display: flex !important;
    }
    .menu-icon {
      display: block;
    }
    .hero-content, .about-content, .contact-container {
      flex-direction: column-reverse;
    }
    .hero-image, .about-image {
      margin-top: 40px;
      text-align: center;
    }
  }
`;
document.head.appendChild(style);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);