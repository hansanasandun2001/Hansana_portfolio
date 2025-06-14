// src/pages/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BloodUnity",
      description: "Blood Unity web site",
      technologies: ["PHP", "CSS", "HTML", "JAVA SCRIPT", "MySQL"],
      github: "https://github.com/hansanasandun2001/BloodUnity.git",
      live: "https://your-ecommerce-demo.com",
      image: "/Bloodunity.png"
    },
    {
      id: 2,
      title: "RESEARCH_CONFERENCE",
      description: "Research Conference Web Site",
      technologies: ["PHP", "CSS", "HTML", "JAVA SCRIPT"],
      github: "https://github.com/hansanasandun2001/RESEARCH_CONFERENCE.git",
      live: "https://your-task-manager.com",
      image: "Research.png"
    },
    {
      id: 3,
      title: "Calculator App",
      description: "A simple and elegant calculator app built using Flutter. This application performs basic arithmetic operations like addition, subtraction, multiplication, and division",
      technologies: ["Dart", "JAVA"],
      github: "https://github.com/hansanasandun2001/Calculator.git",
      image: "/Calculator.png"
    },
     {
      id: 4,
      title: "Todo App",
      description: "A simple, clean todo list application built with Flutter that helps you manage your daily tasks.",
      technologies: ["Dart","C++",'CMake',"HTML","CSS","Swift","C"],
      github: "https://github.com/hansanasandun2001/todo.git",
      live: "https://your-weather-app.com",
      image: "/Todo.png"
    }, {
      id: 5,
      title: "Scientific Calculator",
      description: "A fully functional scientific calculator built with Flutter, featuring both basic and advanced mathematical operations with a clean, responsive UI.",
      technologies: ["Dart", "JAVA"],
      github: "https://github.com/hansanasandun2001/scientific_calculator.git",
      live: "https://your-weather-app.com",
      image: "/sc.png"
    },
     {
      id: 6,
      title: "JobFinder",
      description: "A job search application that connects job seekers with potential employers, featuring job listings, application tracking, and user profiles. (gruop project)",
      technologies: ["Typescript"],
      github: "https://github.com/KJRMalshan/test.git",
      live: "https://your-weather-app.com",
      image: "/JobFinder.png"
    }

  
   
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:bg-gray-800 pt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="text-center">
                    
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded inline-block"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
