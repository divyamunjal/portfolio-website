// src/pages/ProjectsPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A fully functional e-commerce application built with React Native. Features include product browsing, cart management, secure checkout, and user profiles.",
      image: "/projects/ecommerce-app.jpg", // Replace with your actual image path
      technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
      category: "mobile",
      links: {
        github: "https://github.com/yourusername/ecommerce-app",
        live: "https://yourappstore.com/app"
      },
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and contact form functionality.",
      image: "/projects/portfolio.jpg", // Replace with your actual image path
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      category: "web",
      links: {
        github: "https://github.com/yourusername/portfolio",
        live: "https://your-portfolio.com"
      },
      featured: true
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A comprehensive task management application with drag-and-drop functionality, user assignments, due dates, and progress tracking.",
      image: "/projects/task-manager.jpg", // Replace with your actual image path
      technologies: ["Angular", "TypeScript", "Firebase", "SCSS"],
      category: "web",
      links: {
        github: "https://github.com/yourusername/task-manager",
        live: "https://task-manager-demo.com"
      },
      featured: true
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A mobile application that provides real-time weather forecasts, radar maps, and severe weather alerts based on user location.",
      image: "/projects/weather-app.jpg", // Replace with your actual image path
      technologies: ["React Native", "OpenWeather API", "Geolocation"],
      category: "mobile",
      links: {
        github: "https://github.com/yourusername/weather-app",
        live: "https://yourappstore.com/weather-app"
      },
      featured: false
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "An interactive dashboard for tracking investments, expenses, and financial goals with data visualization and predictive analytics.",
      image: "/projects/finance-dashboard.jpg", // Replace with your actual image path
      technologies: ["Vue.js", "D3.js", "Node.js", "Express"],
      category: "web",
      links: {
        github: "https://github.com/yourusername/finance-dashboard",
        live: "https://finance-dashboard-demo.com"
      },
      featured: false
    },
    {
      id: 6,
      title: "Recipe Finder App",
      description: "A mobile application that helps users discover recipes based on ingredients they have, dietary restrictions, and cuisine preferences.",
      image: "/projects/recipe-app.jpg", // Replace with your actual image path
      technologies: ["React Native", "Redux", "Recipe API"],
      category: "mobile",
      links: {
        github: "https://github.com/yourusername/recipe-finder",
        live: "https://yourappstore.com/recipe-finder"
      },
      featured: false
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 px-6 md:px-8 min-h-screen bg-bg-primary pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Background elements */}
        <div className="fixed top-0 left-0 w-full h-full grid-pattern opacity-30 z-[-1]"></div>
        <div className="fixed top-[30%] right-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="fixed bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-[-1]"></div>
        
        <div className="text-center mb-12">
          <p className="font-mono text-accent text-base mb-4 opacity-0 animate-fade-in-1">My Work</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-accent-gradient bg-clip-text text-transparent opacity-0 animate-fade-in-2">Projects</h1>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto opacity-0 animate-fade-in-3">
            A showcase of my projects, ranging from web applications to mobile apps. These projects reflect my skills and experience in frontend development.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fade-in-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-accent text-bg-primary font-medium' 
                : 'bg-bg-secondary/50 text-text-secondary hover:bg-bg-secondary'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('featured')}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              filter === 'featured' 
                ? 'bg-accent text-bg-primary font-medium' 
                : 'bg-bg-secondary/50 text-text-secondary hover:bg-bg-secondary'
            }`}
          >
            Featured
          </button>
          <button 
            onClick={() => setFilter('web')}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              filter === 'web' 
                ? 'bg-accent text-bg-primary font-medium' 
                : 'bg-bg-secondary/50 text-text-secondary hover:bg-bg-secondary'
            }`}
          >
            Web
          </button>
          <button 
            onClick={() => setFilter('mobile')}
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              filter === 'mobile' 
                ? 'bg-accent text-bg-primary font-medium' 
                : 'bg-bg-secondary/50 text-text-secondary hover:bg-bg-secondary'
            }`}
          >
            Mobile
          </button>
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/20 group"
              variants={itemVariants}
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                {/* Using a placeholder div with gradient background until you add actual images */}
                <div className={`absolute inset-0 bg-gradient-to-r from-accent/30 to-accent-purple/30 ${project.image ? 'hidden' : 'block'}`}></div>
                
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-bg-secondary/70 flex items-center justify-center text-text-primary hover:text-accent transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-bg-secondary/70 flex items-center justify-center text-text-primary hover:text-accent transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-2 left-2 bg-accent/90 text-xs text-bg-primary py-1 px-2 rounded">
                    Featured
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2 bg-bg-secondary/70 backdrop-blur-sm text-xs text-text-primary py-1 px-2 rounded">
                  {project.category === 'web' ? 'Web App' : 'Mobile App'}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-bg-secondary/50 text-accent px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-16 text-center bg-bg-secondary/30 backdrop-blur-sm rounded-xl p-8 border border-accent/5 shadow-lg">
          <h2 className="text-2xl font-bold text-text-primary mb-4">Interested in working together?</h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects and opportunities. If you have a project in mind, feel free to reach out.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-accent-gradient rounded-lg text-bg-primary font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;