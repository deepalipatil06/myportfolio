// import React, { useState } from 'react';
// const Header = ({ activeNav }) => {
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const headerStyles = {
//     width: '100%',
//     height: '80px',
//     padding: '20px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     zIndex: 100,
//     backgroundColor: '#080808',
//     transition: 'all 0.3s ease'
//   };
//   const containerStyles = {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   };
//   const logoStyles = {
//     fontSize: '28px',
//     fontWeight: 600,
//     color: '#FF004F'
//   };
//   const navStyles = {
//     display: showMenu ? 'flex' : 'none',
//     position: showMenu ? 'fixed' : 'static',
//     top: 0,
//     right: 0,
//     height: showMenu ? '100vh' : 'auto',
//     width: showMenu ? '200px' : 'auto',
//     backgroundColor: showMenu ? '#FF004F' : 'transparent',
//     padding: showMenu ? '50px 0' : 0,
//     flexDirection: showMenu ? 'column' : 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     transition: 'all 0.3s ease',
//     '@media (min-width: 768px)': {
//       display: 'flex',
//       position: 'static',
//       height: 'auto',
//       width: 'auto',
//       backgroundColor: 'transparent',
//       padding: 0,
//       flexDirection: 'row'
//     }
//   };
//   const navListStyles = {
//     listStyle: 'none',
//     display: 'flex',
//     flexDirection: showMenu ? 'column' : 'row',
//     gap: '30px',
//     margin: 0,
//     padding: 0
//   };
//   const navLinkStyles = {
//     textDecoration: 'none',
//     color: '#fff',
//     fontSize: '18px',
//     fontWeight: 500,
//     transition: 'all 0.3s ease'
//   };
//   const activeLinkStyles = {
//     ...navLinkStyles,
//     color: '#FF004F'
//   };
//   const menuIconStyles = {
//     display: 'block',
//     cursor: 'pointer',
//     '@media (min-width: 768px)': {
//       display: 'none'
//     }
//   };
//   const menuLineStyles = {
//     width: '25px',
//     height: '3px',
//     backgroundColor: '#fff',
//     margin: '5px 0',
//     transition: 'all 0.3s ease'
//   };
//   const closeMenuStyles = {
//     position: 'absolute',
//     top: '25px',
//     right: '25px',
//     fontSize: '30px',
//     cursor: 'pointer',
//     color: '#fff',
//     display: showMenu ? 'block' : 'none'
//   };
//   return (
//     <header id="header" style={headerStyles}>
//       <div style={containerStyles}>
//         <div className="logo">
//           <h1 style={logoStyles}>Portfolio</h1>
//         </div>
//         <nav style={navStyles}>
//           <ul style={navListStyles}>
//             <li><a href="#hero" style={activeNav === '#hero' ? activeLinkStyles : navLinkStyles}>Home</a></li>
//             <li><a href="#about" style={activeNav === '#about' ? activeLinkStyles : navLinkStyles}>About</a></li>
//             <li><a href="#services" style={activeNav === '#services' ? activeLinkStyles : navLinkStyles}>Services</a></li>
//             <li><a href="#portfolio" style={activeNav === '#portfolio' ? activeLinkStyles : navLinkStyles}>Portfolio</a></li>
//             <li><a href="#contact" style={activeNav === '#contact' ? activeLinkStyles : navLinkStyles}>Contact</a></li>
//           </ul>
//           <div style={closeMenuStyles} onClick={toggleMenu}>
//             &times;
//           </div>
//         </nav>
//         <div style={menuIconStyles} onClick={toggleMenu}>
//           <div style={menuLineStyles}></div>
//           <div style={menuLineStyles}></div>
//           <div style={menuLineStyles}></div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;


// import React from 'react';

// const Header = ({ activeNav }) => {
//   const navItems = [
//     { id: '#hero', label: 'Home' },
//     { id: '#about', label: 'About Me' },
//     { id: '#services', label: 'Services' },
//     { id: '#portfolio', label: 'Portfolio' },
//     { id: '#contact', label: 'Contact' }
//   ];

//   const underlineImage = (
//     <img
//       src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
//       alt=""
//       style={{ marginTop: '6px', height: '12px' }}
//     />
//   );

//   return (
//     <header style={styles.header}>
//       <div style={styles.container}>
//         {/* Logo */}
//         <div style={styles.logo}>
//           <span style={styles.logoWhite}>Ale</span>
//           <span style={styles.logoPink}>X</span>
//           <span style={styles.logoDot}>.</span>
//         </div>

//         {/* Nav Links */}
//         <nav>
//           <ul style={styles.navList}>
//             {navItems.map((item) => (
//               <li key={item.id} style={styles.navItem}>
//                 <a
//                   href={item.id}
//                   style={
//                     activeNav === item.id
//                       ? { ...styles.navLink, ...styles.activeNavLink }
//                       : styles.navLink
//                   }
//                 >
//                   {item.label}
//                   {activeNav === item.id && (
//                     // <span style={styles.activeUnderline}></span>
//                     underlineImage
//                   )}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* CTA Button */}
//         <a href="#contact" style={styles.connectBtn}>
//           Connect With Me
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

// // ---------- Styles ----------
// const styles = {
//   header: {
//     width: '100%',
//     padding: '20px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     backgroundColor: '#131211', // dark background
//     zIndex: 100,
//   },
//   container: {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   logo: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logoWhite: {
//     color: '#fff',
//   },
//   logoPink: {
//     color: '#fff',
//     marginLeft: '2px',
//     position: 'relative',
//   },
//   logoDot: {
//     width: '10px',
//     height: '10px',
//     backgroundColor: '#d13ce4',
//     borderRadius: '50%',
//     display: 'inline-block',
//     marginLeft: '4px',
//   },
//   navList: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '40px',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     position: 'relative',
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 500,
//     position: 'relative',
//     padding: '4px 0',
//   },
//   activeNavLink: {
//     color: '#fff',
//   },
//   activeUnderline: {
//     position: 'absolute',
//     left: '0',
//     bottom: '-10px',
//     width: '100%',
//     height: '6px',
//     background:
//       "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 50 10\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 Q25 -5 50 10\" fill=\"%23d13ce4\"/></svg>') no-repeat",
//     backgroundSize: 'contain',
//   },
//   connectBtn: {
//     padding: '12px 24px',
//     background:
//       'linear-gradient(90deg, #b026e0 0%, #d13ce4 50%, #f2733e 100%)',
//     color: '#fff',
//     fontWeight: 500,
//     borderRadius: '40px',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'all 0.3s ease',
//   },
// };


//*************************************
// import React, { useState, useEffect } from 'react';

// const Header = ({ activeNav }) => {
//   const navItems = [
//     { id: '#hero', label: 'Home' },
//     { id: '#about', label: 'About Me' },
//     { id: '#services', label: 'Services' },
//     { id: '#portfolio', label: 'Portfolio' },
//     { id: '#contact', label: 'Contact' }
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [prevActive, setPrevActive] = useState(null);

//   useEffect(() => {
//     if (activeNav !== prevActive) {
//       setPrevActive(activeNav);
//     }
//   }, [activeNav]);

//   const underlineImage = (
//     <img
//       src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
//       alt=""
//       style={{ marginTop: '6px', height: '12px' }}
//     />
//   );

//   const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   return (
//     <header style={styles.header}>
//       <div style={styles.container}>
//         {/* Logo */}
//         <div style={styles.logo}>
//           <span style={styles.logoWhite}>Ale</span>
//           <span style={styles.logoPink}>X</span>
//           <span style={styles.logoDot}></span>
//         </div>

//         {/* Hamburger */}
//         <div style={styles.hamburger} onClick={toggleMenu}>
//           <div style={styles.bar}></div>
//           <div style={styles.bar}></div>
//           <div style={styles.bar}></div>
//         </div>

//         {/* Nav Links */}
//         <nav style={{ ...styles.nav, ...(isMobileMenuOpen ? styles.navMobileOpen : {}) }}>
//           <ul style={{ ...styles.navList, ...(isMobileMenuOpen ? styles.navListMobile : {}) }}>
//             {navItems.map((item, index) => {
//               const isActive = activeNav === item.id;
//               const isPrevious = prevActive === item.id;

//               return (
//                 <li key={item.id} style={styles.navItem}>
//                   <a
//                     href={item.id}
//                     style={{
//                       ...styles.navLink,
//                       ...(isActive ? styles.activeNavLink : {}),
//                       ...(isActive ? { transform: 'translateY(-2px)' } : {})
//                     }}
//                   >
//                     {item.label}
//                     {(isActive || isPrevious) && underlineImage}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* CTA Button */}
//         <a href="#contact" style={styles.connectBtn}>
//           Connect With Me
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from 'react';

// const Header = ({ activeNav }) => {
//   const navItems = [
//     { id: '#hero', label: 'Home' },
//     { id: '#about', label: 'About Me' },
//     { id: '#services', label: 'Services' },
//     { id: '#portfolio', label: 'Portfolio' },
//     { id: '#contact', label: 'Contact' }
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [prevActive, setPrevActive] = useState(null);

//   useEffect(() => {
//     if (activeNav !== prevActive) {
//       setPrevActive(activeNav);
//     }
//   }, [activeNav]);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const underlineImage = (
//     <img
//       src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
//       alt=""
//       style={{
//         position: 'absolute',
//         bottom: '-4px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         height: '10px',
//         pointerEvents: 'none',
//       }}
//     />
//   );

//   return (
//     <header style={styles.header}>
//       <div style={styles.container}>
//         {/* Logo */}
//         <div style={styles.logo}>
//           <span style={styles.logoWhite}>Ale</span>
//           <span style={styles.logoPink}>X</span>
//           <span style={styles.logoDot}></span>
//         </div>

//         {/* Hamburger */}
//         <div style={styles.hamburger} onClick={toggleMenu}>
//           <div style={styles.bar}></div>
//           <div style={styles.bar}></div>
//           <div style={styles.bar}></div>
//         </div>

//         {/* Nav */}
//         <nav style={{ ...styles.nav, ...(isMobileMenuOpen ? styles.navOpen : {}) }}>
//           <ul style={styles.navList}>
//             {navItems.map((item) => {
//               const isActive = activeNav === item.id;
//               const isPrev = prevActive === item.id;
//               return (
//                 <li key={item.id} style={styles.navItem}>
//                   <a href={item.id} style={styles.navLink}>
//                     <div style={{ position: 'relative', display: 'inline-block', transform: isActive ? 'translateY(-2px)' : 'none', transition: 'transform 0.3s ease' }}>
//                       {item.label}
//                       {(isActive || isPrev) && underlineImage}
//                     </div>
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* CTA Button */}
//         <a href="#contact" style={styles.connectBtn}>Connect With Me</a>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from 'react';

// const Header = ({ activeNav }) => {
//   const navItems = [
//     { id: '#hero', label: 'Home' },
//     { id: '#about', label: 'About Me' },
//     { id: '#services', label: 'Services' },
//     { id: '#portfolio', label: 'Portfolio' },
//     { id: '#contact', label: 'Contact' }
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [prevActive, setPrevActive] = useState(null);

//   useEffect(() => {
//     if (activeNav !== prevActive) {
//       setPrevActive(activeNav);
//     }
//   }, [activeNav]);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(prev => !prev);
//   };

//   const underlineImage = (
//     <img
//       src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
//       alt=""
//       style={{
//         position: 'absolute',
//         bottom: '-4px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         height: '10px',
//         pointerEvents: 'none',
//       }}
//     />
//   );

//   return (
//     <header style={styles.header}>
//       <div style={styles.container}>
//         {/* Logo */}
//         <div style={styles.logo}>
//           <span style={styles.logoWhite}>Ale</span>
//           <span style={styles.logoPink}>X</span>
//           <span style={styles.logoDot}></span>
//         </div>

//         {/* Hamburger */}
//         <div className="hamburger" style={{ ...styles.hamburger, display: 'none' }} onClick={toggleMenu}>
//           <div style={styles.bar}></div>
//           <div style={styles.bar}></div>
//           <div style={styles.bar}></div>
//         </div>

//         {/* Nav */}
//         <nav className={`nav ${isMobileMenuOpen ? 'navOpen' : ''}`} style={{ ...styles.nav, ...(isMobileMenuOpen ? styles.navOpen : {}) }}>
//           <ul style={{ ...styles.navList, ...(isMobileMenuOpen ? styles.navListMobile : {}) }}>
//             {navItems.map((item) => {
//               const isActive = activeNav === item.id;
//               const isPrev = prevActive === item.id;
//               return (
//                 <li key={item.id} style={styles.navItem}>
//                   <a href={item.id} style={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
//                     <div style={{
//                       position: 'relative',
//                       display: 'inline-block',
//                       transform: isActive ? 'translateY(-2px)' : 'none',
//                       transition: 'transform 0.3s ease'
//                     }}>
//                       {item.label}
//                       {(isActive || isPrev) && underlineImage}
//                     </div>
//                   </a>
//                 </li>
//               );
//             })}
//             {isMobileMenuOpen && (
//               <li style={styles.navItem}>
//                 <a href="#contact" style={styles.connectBtn} onClick={() => setIsMobileMenuOpen(false)}>Connect With Me</a>
//               </li>
//             )}
//           </ul>
//         </nav>

//         {/* CTA Button Desktop */}
//         <a href="#contact" style={{ ...styles.connectBtn, display: 'none' }} className="connect-desktop">Connect With Me</a>
//       </div>
//     </header>
//   );
// };

// export default Header;


// ---------- Styles ----------
// const styles = {
//   header: {
//     width: '100%',
//     padding: '20px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     backgroundColor: '#131211',
//     zIndex: 100,
//   },
//   container: {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//   },
//   logo: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//     zIndex: 101,
//   },
//   logoWhite: { color: '#fff' },
//   logoPink: { color: '#fff', marginLeft: '2px', position: 'relative' },
//   logoDot: {
//     width: '10px',
//     height: '10px',
//     backgroundColor: '#d13ce4',
//     borderRadius: '50%',
//     display: 'inline-block',
//     marginLeft: '4px',
//   },
//   nav: {
//     display: 'flex',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   navList: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '40px',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     position: 'relative',
//     transition: 'transform 0.3s ease',
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 500,
//     position: 'relative',
//     padding: '4px 0',
//     display: 'inline-block',
//     transition: 'transform 0.3s ease',
//   },
//   activeNavLink: {
//     color: '#fff',
//   },
//   connectBtn: {
//     padding: '12px 24px',
//     background: 'linear-gradient(90deg, #b026e0 0%, #d13ce4 50%, #f2733e 100%)',
//     color: '#fff',
//     fontWeight: 500,
//     borderRadius: '40px',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'all 0.3s ease',
//     zIndex: 101,
//   },
//   // Hamburger
//   hamburger: {
//     display: 'none',
//     flexDirection: 'column',
//     cursor: 'pointer',
//     zIndex: 101,
//   },
//   bar: {
//     height: '3px',
//     width: '25px',
//     backgroundColor: '#fff',
//     margin: '4px 0',
//     borderRadius: '2px',
//   },
//   // Responsive Styles
//   navListMobile: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '20px',
//     marginTop: '20px',
//   },
//   navMobileOpen: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//   },
// };

// const styles = {
//   header: {
//     width: '100%',
//     padding: '20px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     backgroundColor: '#131211',
//     zIndex: 1000,
//   },
//   container: {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//   },
//   logo: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logoWhite: { color: '#fff' },
//   logoPink: { color: '#fff', marginLeft: '2px' },
//   logoDot: {
//     width: '10px',
//     height: '10px',
//     backgroundColor: '#d13ce4',
//     borderRadius: '50%',
//     display: 'inline-block',
//     marginLeft: '4px',
//   },
//   hamburger: {
//     display: 'none',
//     flexDirection: 'column',
//     cursor: 'pointer',
//   },
//   bar: {
//     height: '3px',
//     width: '25px',
//     backgroundColor: '#fff',
//     margin: '4px 0',
//     borderRadius: '2px',
//   },
//   nav: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   navOpen: {
//     display: 'block',
//     position: 'absolute',
//     top: '80px',
//     left: 0,
//     width: '100%',
//     backgroundColor: '#131211',
//     padding: '20px 0',
//   },
//   navList: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '40px',
//     margin: 0,
//     padding: 0,
//     flexDirection: 'row',
//   },
//   navItem: {
//     position: 'relative',
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 500,
//   },
//   connectBtn: {
//     padding: '12px 24px',
//     background: 'linear-gradient(90deg, #b026e0 0%, #d13ce4 50%, #f2733e 100%)',
//     color: '#fff',
//     fontWeight: 500,
//     borderRadius: '40px',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'all 0.3s ease',
//   },
// };

// const styles = {
//   header: {
//     width: '100%',
//     padding: '20px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     backgroundColor: '#131211',
//     zIndex: 1000,
//   },
//   container: {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//   },
//   logo: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logoWhite: { color: '#fff' },
//   logoPink: { color: '#fff', marginLeft: '2px' },
//   logoDot: {
//     width: '10px',
//     height: '10px',
//     backgroundColor: '#d13ce4',
//     borderRadius: '50%',
//     display: 'inline-block',
//     marginLeft: '4px',
//   },
//   hamburger: {
//     flexDirection: 'column',
//     cursor: 'pointer',
//     zIndex: 101,
//   },
//   bar: {
//     height: '3px',
//     width: '25px',
//     backgroundColor: '#fff',
//     margin: '4px 0',
//     borderRadius: '2px',
//   },
//   nav: {
//     display: 'flex',
//     alignItems: 'center',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   navOpen: {
//     position: 'absolute',
//     top: '80px',
//     left: 0,
//     backgroundColor: '#131211',
//     width: '100%',
//     padding: '20px 0',
//     zIndex: 999,
//   },
//   navList: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '40px',
//     margin: 0,
//     padding: 0,
//     flexDirection: 'row',
//   },
//   navListMobile: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '20px',
//     marginTop: '20px',
//   },
//   navItem: {
//     position: 'relative',
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 500,
//   },
//   connectBtn: {
//     padding: '12px 24px',
//     background: 'linear-gradient(90deg, #b026e0 0%, #d13ce4 50%, #f2733e 100%)',
//     color: '#fff',
//     fontWeight: 500,
//     borderRadius: '40px',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'all 0.3s ease',
//   },
// };

// import React, { useState, useEffect } from 'react';

// const Header = ({ activeNav }) => {
//   const navItems = [
//     { id: '#hero', label: 'Home' },
//     { id: '#about', label: 'About Me' },
//     { id: '#services', label: 'Services' },
//     { id: '#portfolio', label: 'Portfolio' },
//     { id: '#contact', label: 'Contact' }
//   ];

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [prevActive, setPrevActive] = useState(null);

//   useEffect(() => {
//     if (activeNav !== prevActive) {
//       setPrevActive(activeNav);
//     }
//   }, [activeNav]);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(prev => !prev);
//   };

//   const underlineImage = (
//     <img
//       src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
//       alt=""
//       style={{
//         position: 'absolute',
//         bottom: '-4px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         height: '10px',
//         pointerEvents: 'none',
//       }}
//     />
//   );

//   return (
//     <>
//       <header style={styles.header}>
//         <div style={styles.container}>
//           {/* Logo */}
//           <div style={styles.logo}>
//             <span style={styles.logoWhite}>Ale</span>
//             <span style={styles.logoPink}>X</span>
//             <span style={styles.logoDot}></span>
//           </div>

//           {/* Hamburger */}
//           <div className="hamburger" style={styles.hamburger} onClick={toggleMenu}>
//             <div style={styles.bar}></div>
//             <div style={styles.bar}></div>
//             <div style={styles.bar}></div>
//           </div>

//           {/* Desktop Nav */}
//           <nav className="desktop-nav" style={styles.nav}>
//             <ul style={styles.navList}>
//               {navItems.map(item => {
//                 const isActive = activeNav === item.id;
//                 const isPrev = prevActive === item.id;
//                 return (
//                   <li key={item.id} style={styles.navItem}>
//                     <a href={item.id} style={styles.navLink}>
//                       <div style={{
//                         position: 'relative',
//                         display: 'inline-block',
//                         transform: isActive ? 'translateY(-2px)' : 'none',
//                         transition: 'transform 0.3s ease'
//                       }}>
//                         {item.label}
//                         {(isActive || isPrev) && underlineImage}
//                       </div>
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           {/* CTA Button Desktop */}
//           <a href="#contact" style={styles.connectBtn} className="connect-desktop">Connect With Me</a>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div style={styles.mobileMenu}>
//           <button onClick={toggleMenu} style={styles.closeButton}>×</button>
//           <ul style={styles.mobileNavList}>
//             {navItems.map(item => (
//               <li key={item.id} style={styles.mobileNavItem}>
//                 <a href={item.id} style={styles.mobileNavLink} onClick={toggleMenu}>
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//             <li style={{ marginTop: '30px' }}>
//               <a href="#contact" style={styles.connectBtn} onClick={toggleMenu}>Connect With Me</a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// const styles = {
//   header: {
//     width: '100%',
//     padding: '20px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     backgroundColor: '#131211',
//     zIndex: 1000,
//   },
//   container: {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   logo: {
//     fontSize: '28px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   logoWhite: { color: '#fff' },
//   logoPink: { color: '#fff', marginLeft: '2px' },
//   logoDot: {
//     width: '10px',
//     height: '10px',
//     backgroundColor: '#d13ce4',
//     borderRadius: '50%',
//     display: 'inline-block',
//     marginLeft: '4px',
//   },
//   hamburger: {
//     display: 'flex',
//     flexDirection: 'column',
//     cursor: 'pointer',
//     zIndex: 101,
//   },
//   bar: {
//     height: '3px',
//     width: '25px',
//     backgroundColor: '#fff',
//     margin: '4px 0',
//     borderRadius: '2px',
//   },
//   nav: {
//     display: 'none',
//   },
//   navList: {
//     listStyle: 'none',
//     display: 'flex',
//     gap: '40px',
//     margin: 0,
//     padding: 0,
//   },
//   navItem: {
//     position: 'relative',
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: 500,
//   },
//   connectBtn: {
//     padding: '12px 24px',
//     background: 'linear-gradient(90deg, #b026e0 0%, #d13ce4 50%, #f2733e 100%)',
//     color: '#fff',
//     fontWeight: 500,
//     borderRadius: '40px',
//     textDecoration: 'none',
//     fontSize: '16px',
//     transition: 'all 0.3s ease',
//   },
//   mobileMenu: {
//     position: 'fixed',
//     top: 0,
//     right: 0,
//     width: '80%',
//     height: '100vh',
//     backgroundColor: '#1a1a1a',
//     zIndex: 2000,
//     padding: '30px 20px',
//     display: 'flex',
//     flexDirection: 'column',
//     animation: 'slideIn 0.3s ease forwards',
//   },
//   closeButton: {
//     background: 'none',
//     border: 'none',
//     color: '#fff',
//     fontSize: '30px',
//     alignSelf: 'flex-end',
//     cursor: 'pointer',
//     marginBottom: '30px',
//   },
//   mobileNavList: {
//     listStyle: 'none',
//     padding: 0,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//     alignItems: 'flex-start',
//   },
//   mobileNavItem: {},
//   mobileNavLink: {
//     color: '#fff',
//     textDecoration: 'none',
//     fontSize: '18px',
//     fontWeight: 500,
//   },
// };



// Media query for responsiveness
// if (typeof window !== 'undefined') {
//   const styleTag = document.createElement('style');
//   styleTag.innerHTML = `
//     @media (max-width: 768px) {
//       .header-nav {
//         display: none;
//       }
//       .header-nav.open {
//         display: flex !important;
//       }
//     }
//   `;
//   document.head.appendChild(styleTag);
// }

//*************************************

// import React, { useState, useEffect } from 'react';

// const Header = ({ activeNav }) => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleMenu = () => setShowMenu(!showMenu);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize(); // Check on mount
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const headerStyles = {
//     width: '100%',
//     height: '80px',
//     padding: '20px 0',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     zIndex: 100,
//     backgroundColor: '#080808',
//     transition: 'all 0.3s ease'
//   };

//   const containerStyles = {
//     width: '90%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   };

//   const logoStyles = {
//     fontSize: '28px',
//     fontWeight: 600,
//     color: '#FF004F'
//   };

//   const navStyles = {
//     display: isMobile ? (showMenu ? 'flex' : 'none') : 'flex',
//     position: isMobile ? 'fixed' : 'static',
//     top: 0,
//     right: 0,
//     height: isMobile ? '100vh' : 'auto',
//     width: isMobile ? '200px' : 'auto',
//     backgroundColor: isMobile ? '#FF004F' : 'transparent',
//     padding: isMobile ? '50px 0' : 0,
//     flexDirection: isMobile ? 'column' : 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     transition: 'all 0.3s ease'
//   };

//   const navListStyles = {
//     listStyle: 'none',
//     display: 'flex',
//     flexDirection: isMobile ? 'column' : 'row',
//     gap: '30px',
//     margin: 0,
//     padding: 0
//   };

//   const navItemStyles = (isActive) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
//     transition: 'transform 0.3s ease'
//   });

//   const navLinkStyles = {
//     textDecoration: 'none',
//     color: '#fff',
//     fontSize: '18px',
//     fontWeight: 500,
//     transition: 'all 0.3s ease'
//   };

//   const activeLinkStyles = {
//     ...navLinkStyles,
//     color: '#FF004F'
//   };

//   const underlineImage = (
//     <img
//       src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
//       alt=""
//       style={{ marginTop: '6px', height: '12px' }}
//     />
//   );

//   const menuIconStyles = {
//     display: isMobile ? 'block' : 'none',
//     cursor: 'pointer'
//   };

//   const menuLineStyles = {
//     width: '25px',
//     height: '3px',
//     backgroundColor: '#fff',
//     margin: '5px 0',
//     transition: 'all 0.3s ease'
//   };

//   const closeMenuStyles = {
//     position: 'absolute',
//     top: '25px',
//     right: '25px',
//     fontSize: '30px',
//     cursor: 'pointer',
//     color: '#fff',
//     display: showMenu ? 'block' : 'none'
//   };

//   const navItems = [
//     { id: '#hero', label: 'Home' },
//     { id: '#about', label: 'About' },
//     { id: '#services', label: 'Services' },
//     { id: '#portfolio', label: 'Portfolio' },
//     { id: '#contact', label: 'Contact' }
//   ];

//   return (
//     <header id="header" style={headerStyles}>
//       <div style={containerStyles}>
//         <div className="logo">
//           <h1 style={logoStyles}>Portfolio</h1>
//         </div>
//         <nav style={navStyles}>
//           <ul style={navListStyles}>
//             {navItems.map((item) => {
//               const isActive = activeNav === item.id;
//               return (
//                 <li key={item.id} style={navItemStyles(isActive)}>
//                   <a href={item.id} style={isActive ? activeLinkStyles : navLinkStyles}>
//                     {item.label}
//                   </a>
//                   {isActive && underlineImage}
//                 </li>
//               );
//             })}
//           </ul>
//           <div style={closeMenuStyles} onClick={toggleMenu}>&times;</div>
//         </nav>
//         <div style={menuIconStyles} onClick={toggleMenu}>
//           <div style={menuLineStyles}></div>
//           <div style={menuLineStyles}></div>
//           <div style={menuLineStyles}></div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


//==================================

import React, { useState } from 'react';
import './Header.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const underlineImage =
  "data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <>
      <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <span className="logo-white">Deepal</span>
            <span className="logo-pink">i</span>
            <img
              src={underlineImage}
              alt=""
              className="underline-image"
            />
          </div>

          {/* Hamburger */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>

          {/* Desktop Nav */}



          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map(item => (
                <li key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className="nav-link"
                    onClick={() => setActiveNav(item.id)}
                  >
                    <div
                      className={`nav-item-content column ${activeNav === item.id ? 'active' : ''}`}
                    // className={`nav-item-content column`}
                    >
                      <span>{item.label}</span>
                      {activeNav === item.id && (
                        <img
                          src={underlineImage}
                          alt=""
                          className="underline-img"
                        />
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect Button Desktop */}
          <a href="#contact" className="connect-btn connect-desktop">
            Connect With Me
          </a>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button className="close-button" onClick={toggleMenu}>×</button>
          <ul className="mobile-nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="nav-link mobile-nav-link"
                  onClick={() => setActiveNav(item.id)} // Do not close menu
                >
                  <div className={`nav-item-content row`}>
                    <span>{item.label}</span>
                    {activeNav === item.id && (
                      <img
                        src={underlineImage}
                        alt=""
                        className="underline-img"
                      />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

//===================================