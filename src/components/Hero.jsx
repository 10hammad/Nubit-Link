/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Particles from 'react-tsparticles';
import backgroundImage from '../assets/background.jpg';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sidebar animation
  const sidebarSpring = useSpring({
    transform: menuOpen ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: menuOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });

  // Background image animation
  const backgroundSpring = useSpring({
    from: { opacity: 0, transform: 'scale(1)' },
    to: { opacity: 1, transform: 'scale(1.05)' },
    config: { duration: 1000 },
  });

  // Animation for the main content
  const textSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 800 },
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
      {/* Animated Background Image */}
      <animated.div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...backgroundSpring,
        }}
        className="absolute inset-0 bg-cover bg-center"
      ></animated.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent opacity-80 z-10"></div>

      {/* Sidebar with React Spring animation */}
      <animated.div
        style={sidebarSpring}
        className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-80 text-white z-50"
      >
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="block">About Us</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block">Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>
        </nav>
      </animated.div>

      {/* Main Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-30">
        <animated.h1 style={textSpring} className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="text-teal-300">Digital</span> Solutions
        </animated.h1>
        <animated.p style={textSpring} className="text-lg md:text-xl mb-8">
          Bringing your <span className="text-teal-300">ideas</span> to life with precision.
        </animated.p>
        <a href="#get-started" className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-8 rounded-full text-lg font-semibold mb-4">
          Get Started
        </a>
        <a href="#learn-more" className="text-teal-300 underline">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
