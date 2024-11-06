/* eslint-disable no-unused-vars */
import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Import React Spring
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSearch, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  // Animation for the service cards
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 300,
    config: { tension: 200, friction: 20 },
  });

  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Services Section Header */}
        <h2 className="text-5xl font-bold text-center text-blue-800 mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Web Development Card */}
          <animated.div style={cardAnimation} className="p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faCode} className="text-blue-700 text-4xl mr-4" />
              <h3 className="text-3xl font-semibold text-blue-700">Web Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We build responsive and scalable websites with the latest technology to enhance your online presence.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
              Learn More &rarr;
            </a>
          </animated.div>
          
          {/* SEO Optimization Card */}
          <animated.div style={cardAnimation} className="p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faSearch} className="text-green-700 text-4xl mr-4" />
              <h3 className="text-3xl font-semibold text-green-700">SEO Optimization</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our SEO services help you rank higher in search engines, driving more traffic and visibility.
            </p>
            <a href="#" className="text-green-500 hover:text-green-600 font-semibold">
              Learn More &rarr;
            </a>
          </animated.div>
          
          {/* App Development Card */}
          <animated.div style={cardAnimation} className="p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faMobileAlt} className="text-yellow-700 text-4xl mr-4" />
              <h3 className="text-3xl font-semibold text-yellow-700">App Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We create intuitive, high-performing mobile applications customized for your business needs.
            </p>
            <a href="#" className="text-yellow-500 hover:text-yellow-600 font-semibold">
              Learn More &rarr;
            </a>
          </animated.div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
