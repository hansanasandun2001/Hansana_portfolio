// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="Profile.jpg" 
              alt="Profile" 
              className="w-80 h-120 border-4 border-black shadow-lg"
            />
          </div>
          <div className="w-8xl text-center md:text-left">
            <h1 className="text-5xl text-5xl font-bold text-gray-800 dark:text-white mb-6">
              I'm <span className="text-blue-800">Hansana Sandun</span>
            </h1>
              <p className="text-xl md:text-2xl  text-balck mb-8 max-w-xl mx-auto md:mx-0">About Me</p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
          I'm a mobile app developer and  Institute of Technology University of Moratuwa undergraduate who loves building apps and learning new tech.</p> </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link 
            to="/projects" 
            className="bg-blue-800 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-blue-800 text-blue-800 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
           Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
