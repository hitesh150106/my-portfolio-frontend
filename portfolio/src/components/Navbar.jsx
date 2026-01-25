// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-4 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link to='/' className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             Hitesh &nbsp;
//             <span className='sm:block hidden'> | Bidawatka</span>
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(nav.title)}>
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(!toggle)}/>

//           <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${ active === nav.title ? "text-white" : "text-secondary"}`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}>
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed top-4 left-6 right-6 z-50 py-3 sm:py-4 flex items-center justify-between">
      
      {/* Logo - Top Left Fixed */}
      <Link to="/" className="flex items-center gap-2 flex-shrink-0"
        onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-xl sm:text-2xl font-bold">H</span>
        </div>
        <div className="hidden sm:flex flex-col ml-2">
          <p className="text-white text-lg font-bold">Hitesh</p>
          <p className="text-gray-300 text-sm font-medium">Bidawatka</p>
        </div>
      </Link>

      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((Link) => (
          <li key={Link.id} className={`${active === Link.title ? "text-white" : "text-gray-400"} hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(Link.title)}>
             <a href={`#${Link.id}`}>{Link.title}</a>
          </li>))}
      </ul>

      {/* Mobile menu button - Rightmost */}
      <div className="sm:hidden ml-auto">
        <img src={toggle ? close : menu} alt="menu" className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"onClick={() => setToggle(!toggle)}/>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`sm:hidden absolute top-20 right-6 z-50 ${toggle ? 'flex' : 'hidden'} p-6 bg-primary/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 min-w-[200px]`}>
        <ul className="list-none flex flex-col gap-3">
          {navLinks.map((nav) => (
            <li key={nav.id}
              className={`${active === nav.id ? "text-white bg-purple-500/30" : "text-gray-300 hover:text-white hover:bg-gray-800/50"} font-medium cursor-pointer text-base py-3 px-4 rounded-xl transition-all duration-200`}
              onClick={() => {
                setToggle(false)
                setActive(nav.id)
              }}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 100);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 50,
//       height: '80px',
//       display: 'flex',
//       alignItems: 'center',
//       padding: '0 2rem',
//       background: scrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
//       backdropFilter: 'blur(10px)'
//     }}>
//       <div style={{ 
//         width: '100%', 
//         maxWidth: '1400px', 
//         margin: '0 auto',
//         display: 'flex', 
//         alignItems: 'center', 
//         justifyContent: 'space-between' 
//       }}>
        
//         {/* LOGO */}
//         <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} 
//           onClick={() => setActive("")}>
//           <img src={logo} alt="logo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
//           <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>
//             Adrian<span style={{ display: window.innerWidth >= 640 ? 'inline' : 'none' }}> | JS Mastery</span>
//           </div>
//         </Link>

//         {/* DESKTOP LINKS */}
//         <div style={{ 
//           display: window.innerWidth >= 768 ? 'flex' : 'none',
//           gap: '3rem',
//           alignItems: 'center'
//         }}>
//           {navLinks.map((nav) => (
//             <a
//               key={nav.id}
//               href={`#${nav.id}`}
//               style={{
//                 color: active === nav.title ? 'white' : '#94a3b8',
//                 fontSize: '18px',
//                 fontWeight: '500',
//                 cursor: 'pointer',
//                 textDecoration: 'none',
//                 paddingBottom: '0.5rem',
//                 borderBottom: active === nav.title ? '2px solid #915EFF' : 'none'
//               }}
//               onClick={() => setActive(nav.title)}
//             >
//               {nav.title}
//             </a>
//           ))}
//         </div>

//         {/* MOBILE MENU */}
//         <div style={{ display: window.innerWidth < 768 ? 'flex' : 'none', alignItems: 'center' }}>
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             style={{ width: '32px', height: '32px', cursor: 'pointer' }}
//             onClick={() => setToggle(!toggle)}
//           />
//           {toggle && (
//             <div style={{
//               position: 'absolute',
//               top: '90px',
//               right: '2rem',
//               background: 'rgba(0,0,0,0.9)',
//               backdropFilter: 'blur(10px)',
//               padding: '1.5rem',
//               borderRadius: '12px',
//               minWidth: '160px',
//               boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)'
//             }}>
//               {navLinks.map((nav) => (
//                 <a
//                   key={nav.id}
//                   href={`#${nav.id}`}
//                   style={{
//                     display: 'block',
//                     color: active === nav.title ? 'white' : '#94a3b8',
//                     fontSize: '16px',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     textDecoration: 'none',
//                     padding: '0.75rem 0',
//                     marginBottom: '0.5rem'
//                   }}
//                   onClick={() => {
//                     setToggle(false);
//                     setActive(nav.title);
//                   }}
//                 >
//                   {nav.title}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
 