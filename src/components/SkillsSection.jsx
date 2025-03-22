import React from 'react';
import { motion } from 'framer-motion';

// Import these icons from react-icons in your project
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaAngular, 
  FaNodeJs, 
  FaNpm 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiRedux, 
  SiTailwindcss, 
  SiStyledcomponents, 
  SiFirebase 
} from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
    { name: 'React Native', icon: <FaReact className="text-[#61DAFB]" />, level: 85 },
    { name: 'Angular', icon: <FaAngular className="text-[#DD0031]" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
    { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" />, level: 75 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" />, level: 85 },
    { name: 'Styled Components', icon: <SiStyledcomponents className="text-[#DB7093]" />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 70 },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" />, level: 75 },
    { name: 'NPM', icon: <FaNpm className="text-[#CB3837]" />, level: 85 },
  ];

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
    <section id="skills" className="relative min-h-screen py-20 px-6 md:px-8 flex justify-center items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-30 z-[-1]"></div>
      <div className="absolute top-[30%] left-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-[-1]"></div>
      
      <div className="max-w-6xl w-full">
        <div className="mb-16 text-center">
          <p className="font-mono text-accent text-base mb-4 opacity-0 animate-fade-in-1">What I bring to the table</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-accent-gradient bg-clip-text text-transparent opacity-0 animate-fade-in-2">My Technical Skills</h2>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto opacity-0 animate-fade-in-3">
            With 6.5 years of experience in front-end development, I've honed my skills across various technologies and frameworks. Here's a glimpse of my technical expertise.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="bg-bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-accent/5 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-bg-primary/50 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-accent-gradient h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-text-secondary text-sm">
                {skill.level >= 90 ? 'Expert' : 
                 skill.level >= 80 ? 'Advanced' : 
                 skill.level >= 70 ? 'Proficient' : 
                 'Intermediate'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;