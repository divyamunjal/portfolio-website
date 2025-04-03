import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const FeaturedProjects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "AIG Insurance Portal",
      description: "Led the migration from Angular 15 to Angular 18 for this enterprise insurance application. Implemented dynamic UI components using AUG Generator and provided dedicated production support.",
      image: "/assets/img/projects/insurance-portal.jpg", // Replace with your actual image path
      technologies: ["Angular 18", "TypeScript", "Axis Framework", "RESTful APIs"],
      links: {
        //github: "https://github.com/yourusername/insurance-portal",
        live: "https://insurance-portal-demo.com"
      }
    },
    {
      id: 2,
      title: "Digital Library Platform",
      description: "A comprehensive platform powering 70+ institutional libraries with features for search optimization, reading history, and personalized recommendations. The platform includes both web and mobile interfaces.",
      image: "/assets/img/projects/digital-library.jpg", // Replace with your actual image path
      technologies: ["Angular 16", "TypeScript"],
      links: {
        //github: "https://github.com/yourusername/digital-library",
        live: "https://duelibrary.in/refreaduser/#/home"
      }
    },
    {
      id: 3,
      title: "Track My Docs",
      description: "A modular digital signature system that integrates with third-party services. Optimized for performance with strategic caching to reduce backend calls and improve user experience.",
      image: "/assets/img/projects/document-signatures.jpg", // Replace with your actual image path
      technologies: ["AngularJS", "JavaScript", "RESTful APIs"],
      links: {
        //github: "https://github.com/yourusername/document-signatures",
        live: "https://trackmydocs.co/"
      }
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
      <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-0"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.p className="font-mono text-accent text-base mb-4" variants={itemVariants}>My Recent Work</motion.p>
          <motion.h2 className="text-3xl md:text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          <motion.p className="text-text-secondary mt-4 max-w-2xl mx-auto" variants={itemVariants}>
            Here are some of my recent projects that showcase my skills and experience in frontend development.
          </motion.p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              variants={itemVariants}
            >
              {/* Project Image - Alternating layout for even/odd projects */}
              <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group rounded-xl overflow-hidden border border-accent/10 shadow-xl">
                  {/* Using a gradient placeholder until you add actual images */}
                  <div className={`w-full h-80 bg-gradient-to-br from-accent/20 to-accent-purple/20 ${project.image ? 'hidden' : 'block'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-medium text-text-secondary opacity-50">Project Preview</span>
                    </div>
                  </div>
                  
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-bg-secondary/70 flex items-center justify-center text-text-primary hover:text-accent transition-colors duration-300"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                    
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-bg-secondary/70 flex items-center justify-center text-text-primary hover:text-accent transition-colors duration-300"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{project.title}</h3>
                
                <div className="bg-bg-secondary/30 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-accent/5 mb-6">
                  <p className="text-text-secondary">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-bg-secondary/50 px-3 py-1 rounded-full text-sm text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-bg-secondary/30 backdrop-blur-sm rounded-lg border border-accent/20 text-text-primary hover:text-accent transition-all duration-300 text-sm flex items-center gap-2"
                    >
                      <FaGithub size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                  
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-accent-gradient rounded-lg text-bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 text-sm flex items-center gap-2"
                    >
                      <FaExternalLinkAlt size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <Link 
            to="/projects" 
            className="inline-block px-8 py-3 bg-bg-secondary/30 backdrop-blur-sm rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300 font-medium cursor-pointer"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProjects;