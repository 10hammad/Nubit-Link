/* eslint-disable no-unused-vars */
import React from 'react';
import { useSpring, useTrail, animated } from '@react-spring/web'; // Added useTrail for multiple animations
import aboutImage from '../assets/pic1.jpeg';
import bannerImage from '../assets/pic.jpg';

const AboutUs = () => {
  // Animation for Hero Section
  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
  });

  // Animation for About Us Image (scale up on scroll)
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 400,
    config: { tension: 250, friction: 20 },
  });

  // Animation for Core Values Cards (using trail for staggered fade-in)
  const valuesData = [
    { title: 'Innovation', text: 'We constantly push the boundaries of technology to deliver cutting-edge solutions to our clients.' },
    { title: 'Collaboration', text: 'Our success comes from working closely with clients, ensuring effective solutions tailored to their needs.' },
    { title: 'Excellence', text: 'We are committed to delivering high-quality results that exceed expectations and foster long-term relationships.' },
  ];
  const trail = useTrail(valuesData.length, {
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 600,
    config: { mass: 1, tension: 180, friction: 12 },
  });

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <animated.div
          style={heroAnimation}
          className="relative bg-cover bg-center h-72 rounded-lg shadow-lg overflow-hidden mb-8"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-5xl font-extrabold tracking-wide text-shadow">
              About Us
            </h1>
          </div>
        </animated.div>

        {/* Breadcrumb Navigation */}
        <div className="py-4 flex justify-center">
          <nav className="text-gray-700 font-semibold">
            <ul className="flex space-x-2 text-blue-600">
              <li>
                <a href="/" className="hover:underline">Home</a>
              </li>
              <li>/</li>
              <li className="text-blue-700">About</li>
            </ul>
          </nav>
        </div>

        {/* About Us Content */}
        <div className="flex flex-col lg:flex-row items-center mt-8 space-y-6 lg:space-y-0 lg:space-x-12">
          <animated.div style={imageAnimation} className="lg:w-1/2 p-4">
            <img
              src={aboutImage}
              alt="Our Team"
              className="rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105"
            />
          </animated.div>
          <div className="lg:w-1/2 p-4">
            <div className="bg-blue-200 text-blue-700 font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
              Innovations
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              NubitLink W.L.L is a leading software and financial services company specializing in ERP systems, information management, hotel management, and hospital management systems.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our services encompass order management systems for hedge funds, AML solutions, accounting services, and web/app development. We cater to various industries, focusing on driving transformation.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-extrabold text-gray-800 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trail.map((animation, index) => (
              <animated.div
                key={index}
                style={animation}
                className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 hover:bg-blue-50"
              >
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {valuesData[index].title}
                </h4>
                <p className="text-gray-600">{valuesData[index].text}</p>
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
