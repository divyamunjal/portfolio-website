import React from 'react';
import { motion } from 'framer-motion';
// Import the profile image
import profileImage from '../assets/img/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 px-6 md:px-8 flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-30 z-[-1]"></div>
      <div className="absolute bottom-[30%] left-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-[-1]"></div>
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="font-mono text-accent text-base mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
              Passionate about creating exceptional user experiences
            </h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                Hello! I'm Divya, a frontend developer with 6.5 years of experience specializing in building
                responsive, high-performance web and mobile applications. My journey in development started
                with a passion for creating interfaces that are both beautiful and functional.
              </p>
              
              <p>
                I specialize in modern JavaScript frameworks, particularly <span className="text-accent">Angular</span> and <span className="text-accent">React Native</span>. 
                My approach combines clean code architecture with user-centered design principles to deliver
                products that not only meet business requirements but exceed user expectations.
              </p>
              
              <p>
                Currently at <span className="text-accent">Refread Solutions</span>, I work on developing cross-platform
                mobile applications that provide seamless experiences across devices. I'm particularly passionate
                about performance optimization and accessibility, ensuring that applications I build are fast and
                usable for everyone.
              </p>
              
              <p>
                Outside of work, I enjoy contributing to open-source projects, attending tech meetups, and
                constantly expanding my knowledge through online courses and tech conferences.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-bg-secondary/50 backdrop-blur-sm p-4 rounded-lg border border-accent/10">
                <p className="text-2xl font-bold text-text-primary">6.5+</p>
                <p className="text-text-secondary">Years Experience</p>
              </div>
              
              <div className="bg-bg-secondary/50 backdrop-blur-sm p-4 rounded-lg border border-accent/10">
                <p className="text-2xl font-bold text-text-primary">25+</p>
                <p className="text-text-secondary">Projects Completed</p>
              </div>
              
              <div className="bg-bg-secondary/50 backdrop-blur-sm p-4 rounded-lg border border-accent/10">
                <p className="text-2xl font-bold text-text-primary">15+</p>
                <p className="text-text-secondary">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl shadow-accent/10">
                {/* Using the imported profile image */}
                <img src={profileImage} alt="Divya Munjal" className="w-full h-full object-cover" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent-purple/20 rounded-full blur-xl"></div>
              
              {/* Tech stack decorative elements */}
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-bg-secondary/70 backdrop-blur-sm p-3 rounded-full border border-accent/10 shadow-lg">
                <span className="text-accent text-2xl font-bold">Rx</span>
              </div>
              
              <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/2 bg-bg-secondary/70 backdrop-blur-sm p-3 rounded-full border border-accent/10 shadow-lg">
                <span className="text-accent-purple text-2xl font-bold">Ng</span>
              </div>
              
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 bg-bg-secondary/70 backdrop-blur-sm p-3 rounded-full border border-accent/10 shadow-lg">
                <span className="text-[#61DAFB] text-2xl font-bold">⚛️</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;