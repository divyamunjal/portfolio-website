import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaAngular, FaNodeJs, FaMobile } from 'react-icons/fa';

const AboutSummary = () => {
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

  return (
    <section className="py-20 px-6 md:px-8 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
      <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-0"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.p className="font-mono text-accent text-base mb-4" variants={itemVariants}>A Glimpse of Who I Am</motion.p>
          <motion.h2 className="text-3xl md:text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent" variants={itemVariants}>
            About Me
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content */}
          <motion.div className="lg:col-span-7 order-2 lg:order-1" variants={itemVariants}>
            <p className="text-text-secondary mb-6">
              I'm a frontend developer with <span className="text-accent font-medium">7.5 years of experience</span> specializing in building responsive, 
              high-performance web and mobile applications. Currently at <span className="text-accent font-medium">Capgemini</span>, 
              I work on enterprise-scale applications with a focus on Angular development and digital transformation.
            </p>
            
            <p className="text-text-secondary mb-6">
              My expertise spans across modern JavaScript frameworks, particularly <span className="text-accent font-medium">React Native</span> and <span className="text-accent font-medium">Angular</span>, 
              with a growing interest in <span className="text-accent font-medium">Node.js</span> for full-stack development. I'm passionate about creating 
              intuitive user interfaces that deliver exceptional experiences across all devices.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-md border border-accent/10 flex items-center gap-2">
                <FaReact className="text-[#61DAFB]" />
                <span className="text-text-secondary">React Native</span>
              </div>
              <div className="bg-bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-md border border-accent/10 flex items-center gap-2">
                <FaAngular className="text-[#DD0031]" />
                <span className="text-text-secondary">Angular</span>
              </div>
              <div className="bg-bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-md border border-accent/10 flex items-center gap-2">
                <FaNodeJs className="text-[#68A063]" />
                <span className="text-text-secondary">Node.js</span>
              </div>
              <div className="bg-bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-md border border-accent/10 flex items-center gap-2">
                <FaMobile className="text-accent" />
                <span className="text-text-secondary">Mobile Apps</span>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent-purple transition-colors duration-300 font-medium"
            >
              Read more about me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
          
          {/* Stats */}
          <motion.div className="lg:col-span-5 order-1 lg:order-2 grid grid-cols-2 gap-4" variants={itemVariants}>
            <div className="bg-bg-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-accent/10 shadow-lg">
              <h3 className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">7.5+</h3>
              <p className="text-text-secondary">Years of Experience</p>
            </div>
            
            <div className="bg-bg-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-accent/10 shadow-lg">
              <h3 className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">70+</h3>
              <p className="text-text-secondary">Digital Libraries</p>
            </div>
            
            <div className="bg-bg-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-accent/10 shadow-lg">
              <h3 className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">25+</h3>
              <p className="text-text-secondary">Projects Completed</p>
            </div>
            
            <div className="bg-bg-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-accent/10 shadow-lg">
              <h3 className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">15+</h3>
              <p className="text-text-secondary">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSummary;