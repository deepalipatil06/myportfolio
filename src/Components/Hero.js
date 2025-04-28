// import React from 'react';
// import profile from './assets/profile_img2.png'

// const Hero = () => {
//   const heroStyles = {
//     width: '100%',
//     height: '100vh',
//     backgroundColor: '#080808',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     paddingTop: '100px',
//     display: 'flex',
//     alignItems: 'center'
//   };
//   const containerStyles = {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto'
//   };
//   const heroContentStyles = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexWrap: 'wrap'
//   };
//   const heroTextStyles = {
//     flex: 1,
//     minWidth: '300px',
//     paddingRight: '30px'
//   };
//   const smallHeadingStyles = {
//     fontSize: '20px',
//     fontWeight: 600,
//     color: '#fff',
//     marginBottom: '15px'
//   };
//   const largeHeadingStyles = {
//     fontSize: '60px',
//     fontWeight: 700,
//     color: '#fff',
//     marginBottom: '10px',
//     lineHeight: 1.2
//   };
//   const subtitleStyles = {
//     fontSize: '30px',
//     fontWeight: 600,
//     color: '#fff',
//     marginBottom: '20px'
//   };
//   const paragraphStyles = {
//     fontSize: '16px',
//     lineHeight: 1.6,
//     color: '#fff',
//     marginBottom: '30px',
//     maxWidth: '500px'
//   };
//   const heroButtonsStyles = {
//     display: 'flex',
//     gap: '20px',
//     marginBottom: '40px'
//   };
//   const primaryBtnStyles = {
//     display: 'inline-block',
//     padding: '12px 30px',
//     backgroundColor: '#FF004F',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 600,
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     transition: 'all 0.3s ease'
//   };
//   const secondaryBtnStyles = {
//     display: 'inline-block',
//     padding: '12px 30px',
//     backgroundColor: 'transparent',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 600,
//     border: '1px solid #fff',
//     borderRadius: '40px',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     transition: 'all 0.3s ease'
//   };
//   const socialIconsStyles = {
//     display: 'flex',
//     gap: '20px'
//   };
//   const iconStyles = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '40px',
//     height: '40px',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: '50%',
//     color: '#fff',
//     fontSize: '20px',
//     textDecoration: 'none',
//     transition: 'all 0.3s ease'
//   };
//   const heroImageStyles = {
//     flex: 1,
//     minWidth: '300px',
//     textAlign: 'right'
//   };
//   const imageStyles = {
//     // width: '60%',
//     // maxWidth: '400px',
//     // borderRadius: '15px'

//     width: '100%',
//     maxWidth: '400px',
//     height: '400px', // Adjust for vertical look
//     objectFit: 'cover',
//     borderRadius: '50%',
//     boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
//   };
//   const connectBtn = {
//     padding: '12px 24px',
//     background: 'linear-gradient(90deg, #b026e0 0%, #d13ce4 50%, #f2733e 100%)',
//     color: '#fff',
//     fontWeight: '500',
//     borderRadius: '40px',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'all 0.3s ease'
//   }

//   return (
//     <section id="hero" style={heroStyles}>
//       <div style={containerStyles}>
//         <div style={heroContentStyles}>
//           <div style={heroTextStyles}>
//             <h3 style={smallHeadingStyles}>Hello, I'm</h3>
//             {/* <h1 style={largeHeadingStyles}>Deepali Patil</h1> */}
//             <h1 style={{
//               ...largeHeadingStyles,
//               background: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               display: 'inline-block'
//             }}>
//               Deepali Patil
//             </h1>

//             <h2 style={subtitleStyles}>Frontend Developer(RN & React Js)</h2>
//             <p style={paragraphStyles}>
//               "I’m a Front-End Developer specializing in React Native & React.js. I build clean, responsive, and high-performance user interfaces for mobile and web — turning ideas into seamless digital experiences."
//             </p>
//             <div style={heroButtonsStyles}>
//               {/* <a href="#contact" style={primaryBtnStyles}>Contact Me</a> */}
//               <a href="#contact" className="connect-btn">
//                 Connect With Me
//               </a>
//               <a href="#portfolio" style={secondaryBtnStyles}>View My Work</a>
//             </div>
//             <div style={socialIconsStyles}>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//               <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
//                 <i className="fab fa-github"></i>
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyles}>
//                 <i className="fab fa-twitter"></i>
//               </a>
//             </div>
//           </div>
//           <div style={heroImageStyles}>
//             <img src={profile} alt="Developer" style={imageStyles} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Hero;



import React from 'react';
import './Hero.css';
import profile from './assets/profile_img2.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="small-heading">Hello, I'm</h3>
            <h1 className="large-heading">Deepali Patil</h1>
            <h2 className="subtitle">Frontend Developer (RN & React JS)</h2>
            <p className="description">
            "I’m a Front-End Developer specializing in React Native & React.js. I build clean, responsive, and high-performance user interfaces for mobile and web — turning ideas into seamless digital experiences."
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="connect-btn">Connect With Me</a>
              <a href="#portfolio" className="secondary-btn">View My Work</a>
            </div>
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          <div className="hero-image">
            <img src={profile} alt="Developer" className='image-style' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
