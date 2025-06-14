// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">Hansana Sandun</h2>
            <p className="text-sm max-w-xs">
          Mobile App Developer passionate about creating engaging and user-friendly mobile experiences.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/hansana-sandun-jayarathna-09057b306/" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/hansanasandun2001" aria-label="GitHub" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.facebook.com/hansana.sadun.16" aria-label="fecebook" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © 2025 Hansana Sandun. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
