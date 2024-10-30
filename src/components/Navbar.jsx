import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import logo from '../assets/nulink.png';

const Navbar = () => {
  // Spring animation for navbar slide-down
  const slideDown = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0%)' },
    config: { tension: 200, friction: 15 },
  });

  // Spring animation for logo hover scale
  const [logoHover, setLogoHover] = React.useState(false);
  const logoAnimation = useSpring({
    transform: logoHover ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <animated.nav style={slideDown} className="bg-gradient-to-r from-blue-500 to-teal-500 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section with hover animation */}
        <animated.a
          href="/"
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          style={logoAnimation}
        >
          <img src={logo} alt="NuBitLink Logo" className="h-20 w-auto" />
        </animated.a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="/"
            className="relative text-white hover:text-yellow-300 font-semibold text-lg"
          >
            Home
            <span className="block h-0.5 bg-yellow-300 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/services"
            className="relative text-white hover:text-yellow-300 font-semibold text-lg"
          >
            Services
            <span className="block h-0.5 bg-yellow-300 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/about-us"
            className="relative text-white hover:text-yellow-300 font-semibold text-lg"
          >
            About Us
            <span className="block h-0.5 bg-yellow-300 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/contact"
            className="relative text-white hover:text-yellow-300 font-semibold text-lg"
          >
            Contact
            <span className="block h-0.5 bg-yellow-300 absolute left-0 bottom-0 w-0 hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </animated.nav>
  );
};

export default Navbar;