// src/pages/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Full-stack e-commerce platform with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-task-manager.com",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Weather application with location-based forecasts and data visualization",
      technologies: ["React", "Chart.js", "Weather API"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app.com",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 pt-24">
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
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 inline-block"
                    >
                      Live Demo
                    </a>
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
