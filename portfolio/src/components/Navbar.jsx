// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-black dark:text-gray-300 hover:text-blue-500 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-black dark:text-gray-300 hover:text-blue-500 transition duration-300">
              About
            </Link>
            <Link to="/projects" className="text-black dark:text-gray-300 hover:text-blue-500 transition duration-300">
              Projects
            </Link>
            <Link to="/contact" className="text-black dark:text-gray-300 hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-black dark:text-gray-300 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-black  dark:text-gray-300 hover:text-blue-500">
              About
            </Link>
            <Link to="/projects" className="block py-2 text-black  dark:text-gray-300 hover:text-blue-500">
              Projects
            </Link>
            <Link to="/contact" className="block py-2 text-black  dark:text-gray-300 hover:text-blue-500">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
