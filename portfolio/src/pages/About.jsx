// src/pages/About.js
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiFlutter } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, category: 'Frontend' },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, category: 'Frontend' },
    { name: 'React', icon: <SiReact className="text-cyan-400" />, category: 'Frontend' },
    { name: 'Flutter', icon: <SiFlutter className="text-blue-400" />, category: 'Mobile' },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900 pt-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate software developer specializing in modern web and mobile technologies, 
            with a strong focus on creating intuitive and responsive user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Professional Summary */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <FaLaptopCode className="text-blue-600" />
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm an aspiring software developer currently pursuing my diploma in Information Technology. 
                My focus lies in creating intuitive mobile applications using Flutter and developing 
                responsive web interfaces. With a strong foundation in software development principles, 
                I strive to write clean, maintainable code that delivers exceptional user experiences.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" />
                Education
              </h3>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white text-xl">
                  National Diploma in Technology
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Institute of Technology University of Moratuwa
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">2022 - 2023</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <FaCode className="text-blue-600" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{skill.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.category}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <FaBriefcase className="text-blue-600" />
                Career Goals
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Actively seeking internship opportunities where I can apply my technical expertise,
                contribute to innovative projects, and grow alongside industry professionals. 
                Committed to continuous learning and staying current with emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
