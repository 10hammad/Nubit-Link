/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faVimeoV, faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Expertise */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">IT Infrastructure</a></li>
              <li><a href="#" className="hover:text-gray-300">User Experience</a></li>
              <li><a href="#" className="hover:text-gray-300">Application Modernization</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Cloud Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Financial Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Public Sector</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="mb-2">Join our mailing list for updates and special offers!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address.."
                className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 p-2 rounded-r-lg hover:bg-blue-600 text-white transition">
                →
              </button>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <hr className="my-8 border-t border-gray-700" />

        {/* Quick Links and Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>If you have any questions, feel free to reach us at:</p>
            <p>Email: <a href="mailto:info@nubitsoft.com" className="hover:text-gray-300">info@nubitsoft.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="hover:text-gray-300">+1 234 567 89</a></p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-8 border-t border-gray-700" />

        {/* Social Media Icons and Powered By Section */}
        <div className="flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-gray-300" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Vimeo">
              <FontAwesomeIcon icon={faVimeoV} />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Pinterest">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </div>

          {/* Powered By Text */}
          <div className="text-gray-400 text-right">
            &copy; {new Date().getFullYear()} Powered by <span className="font-bold">NubitSoft</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
