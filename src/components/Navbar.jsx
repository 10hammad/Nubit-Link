/* eslint-disable no-unused-vars */
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import logo from '../assets/nulink.png'; // Ensure this path is correct
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const slideDown = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0%)' },
    config: { tension: 200, friction: 15 },
  });
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const [logoHover, setLogoHover] = useState(false);
  const logoAnimation = useSpring({
    transform: logoHover ? 'scale(1.1)' : 'scale(1)',
  });

  const toggleContactDropdown = () => {
    setContactDropdownOpen((prev) => !prev);
  };

  return (
    <animated.nav style={slideDown} className="bg-gradient-to-r from-[#1E3A8A] to-[#0f4c75] shadow-md sticky top-0 z-50">
      <div className={menuOpen ? "h-60" : "container h-16 md:h-20 min-w-full sticky top-0 z-50 mx-auto flex items-center justify-between p-4"}>
        
        {/* Logo Section with hover animation */}
        <animated.a
          href="/"
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          style={logoAnimation}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="NuBitLink Logo"
            className="h-20 w-auto object-contain filter invert"
            style={{ filter: 'invert(100%) brightness(200%)' }} // Ensures logo is brightened and white
          />
        </animated.a>

        {/* Mobile Hamburger Icon */}
        <button
          className={!menuOpen ? "flex md:hidden focus:outline-none" : "text-black hidden md:hidden focus:outline-none"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="relative text-white hover:text-yellow-400 font-semibold text-lg">
            Home
            <span className="block h-0.5 bg-yellow-400 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/services" className="relative text-white hover:text-yellow-400 font-semibold text-lg">
            Services
            <span className="block h-0.5 bg-yellow-400 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Contact Dropdown */}
          <div className="relative">
            <button
              onClick={toggleContactDropdown}
              className="relative text-white hover:text-yellow-400 font-semibold text-lg focus:outline-none"
            >
              Contact
              <span className="block h-0.5 bg-yellow-400 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
            </button>
            {contactDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-xl z-50 border border-gray-300 py-2">
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1E3A8A] transition-all duration-150"
                  onClick={() => setContactDropdownOpen(false)}
                >
                  Contact Form
                </Link>
                <Link
                  to="/career-form"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#1E3A8A] transition-all duration-150"
                  onClick={() => setContactDropdownOpen(false)}
                >
                  Career Form
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/about-us" className="relative text-white hover:text-yellow-400 font-semibold text-lg">
            About Us
            <span className="block h-0.5 bg-yellow-400 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="inset-0 h-full w-full bg-gradient-to-r from-[#1E3A8A] to-[#0f4c75] text-white absolute flex flex-col gap-2 items-start justify-center px-8 flex-wrap md:hidden">
            
            {/* Close Icon and Home Link */}
            <span className="flex justify-between w-full">
              <span>
                <Link to="/" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-white hover:text-yellow-400">Home</Link>
              </span>
              <span>
                <RxCross2 size={30} color="white" onClick={() => setMenuOpen(false)} />
              </span>
            </span>

            <Link to="/services" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-white hover:text-yellow-400">Services</Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-white hover:text-yellow-400">About Us</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-white hover:text-yellow-400">Contact</Link>
            <Link to="/career-form" onClick={() => setMenuOpen(false)} className="text-xl font-bold text-white hover:text-yellow-400">Career</Link>
          </div>
        )}
      </div>
    </animated.nav>
  );
};

export default Navbar;
