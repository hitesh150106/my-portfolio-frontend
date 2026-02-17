import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#050816]`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#915EFF] rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-xl sm:text-2xl font-bold">H</span>
        </div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Hitesh &nbsp;
            <span className='lg:block hidden'> | Bidawatka</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="ml-auto">
            <a 
              href="/resume/Hitesh_Bidawatka_Resume.pdf" download="HiteshBidawatkaResume" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#915EFF] font-bold text-white rounded-xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Download Resume
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li>
                <a 
                  href="/resume/Hitesh_Bidawatka_Resume.pdf"
                  download
                  className="block text-center p-3 bg-[#915EFF] font-bold text-white rounded-xl hover:scale-105 transition-all duration-200"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;