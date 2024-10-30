/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Particles from 'react-tsparticles';
import backgroundImage from '../assets/background.jpg';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Title and subtitle animations
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 200,
    config: { tension: 250, friction: 20 },
  });
  const subtitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 400,
    config: { tension: 250, friction: 20 },
  });

  // Button hover animations
  const [buttonHover, setButtonHover] = useState(false);
  const buttonSpring = useSpring({
    opacity: buttonHover ? 1 : 0.9,
    transform: buttonHover ? 'scale(1.1) rotate(3deg)' : 'scale(1) rotate(0deg)',
    config: { tension: 300, friction: 15 },
  });

  // Background zoom effect
  const backgroundSpring = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    config: { tension: 20, friction: 40 },
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 pointer-events-none"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            line_linked: { enable: true, opacity: 0.3 },
          },
        }}
      />

      {/* Animated Background Image for subtle zoom effect */}
      <animated.div
        style={{
          ...backgroundSpring,
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="absolute inset-0 bg-cover bg-center"
      ></animated.div>

      {/* Dark gradient overlay for improved text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>

      {/* Responsive Menu Button */}
      <div className="absolute top-4 right-4 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          {/* Menu Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black bg-opacity-80 p-4 flex flex-col items-center space-y-4 text-white md:hidden">
          <a href="#home" className="hover:text-teal-400" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-teal-400" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#services" className="hover:text-teal-400" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" className="hover:text-teal-400" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        {/* Animated Title */}
        <animated.h1 style={titleSpring} className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-teal-300">Nubit</span> Solutions
        </animated.h1>

        {/* Animated Subtitle */}
        <animated.p style={subtitleSpring} className="text-lg md:text-xl mb-8">
          Bringing your <span className="text-teal-300">ideas</span> to life with precision.
        </animated.p>

        {/* Animated Primary Button with rotation on hover */}
        <animated.a
          href="#get-started"
          style={buttonSpring}
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-transform duration-300"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Get Started
        </animated.a>

        {/* Animated Secondary Button with rotation on hover */}
        <animated.a
          href="#learn-more"
          style={buttonSpring}
          className="mt-4 inline-block text-teal-300 hover:text-teal-400 text-lg transition duration-300"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Learn More
        </animated.a>
      </div>
    </section>
  );
};

export default Hero;
