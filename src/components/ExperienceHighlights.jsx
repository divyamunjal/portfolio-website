import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngular, FaReact, FaCode } from 'react-icons/fa';

const ExperienceHighlights = () => {
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

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "Capgemini",
      role: "Senior Consultant",
      period: "Oct 2024 - Present",
      description: "Working on the AIG Insurance project, leading the migration from Angular 15 to Angular 18. Developing and maintaining enterprise applications with a focus on performance and accessibility.",
      icon: <FaAngular className="text-[#DD0031] text-2xl" />,
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      id: 2,
      company: "Refread Solutions Pvt. Ltd.",
      role: "Frontend Developer",
      period: "2020 - 2024",
      description: "Led the development of a digital library platform serving 70+ institutions, including DRDO and IAF. Migrated the platform from AngularJS to Angular 16 and developed complementary React Native mobile apps.",
      icon: <FaAngular className="text-[#DD0031] text-2xl" />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      company: "Regalbit Solutions Pvt. Ltd",
      role: "Software Engineer",
      period: "2017 - 2020",
      description: "Specialized in AngularJS development, creating a modular Digital Document Signatures system that was integrated into multiple third-party services. Optimized applications for performance.",
      icon: <FaAngular className="text-[#DD0031] text-2xl" />,
      color: "from-yellow-500/20 to-amber-500/20"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 z-0"></div>
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-0"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <motion.p className="font-mono text-accent text-base mb-4" variants={itemVariants}>Where I've Worked</motion.p>
          <motion.h2 className="text-3xl md:text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent" variants={itemVariants}>
            Experience Highlights
          </motion.h2>
        </div>
        
        {/* Experience cards - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              className="bg-bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/20"
              variants={itemVariants}
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-bg-secondary/50 p-3 rounded-lg">
                    {exp.icon}
                  </div>
                  <span className="text-text-secondary text-sm px-3 py-1 bg-bg-secondary/40 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                <h4 className="text-accent mb-3">{exp.company}</h4>
                
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div className="mt-10 text-center" variants={itemVariants}>
        <Link 
            to="/experience" 
            className="inline-block px-6 py-3 bg-bg-secondary/30 backdrop-blur-sm rounded-lg border border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300 font-medium cursor-pointer"
          >
            View My Full Experience
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceHighlights;