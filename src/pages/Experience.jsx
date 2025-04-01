// src/pages/ExperiencePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaMobile } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Consultant",
      company: "Capgemini",
      period: "Oct 2024 - Present",
      description:
        "Working as a dedicated frontend resource on the AIG Insurance project, focusing on application modernization, feature development, and production support. Led the successful migration from Angular 15 to Angular 18, resulting in improved performance and enhanced user experience.",
      achievements: [
        "Successfully migrated a complex enterprise application from Angular 15 to Angular 18, implementing new features and ensuring backward compatibility",
        "Worked extensively with the Axis framework to develop and maintain reusable components, improving development efficiency and consistency across the application",
        "Utilized AUG Generator to build dynamic UI components from JSON configurations, streamlining the development process and reducing time-to-market",
        "Served as a dedicated resource for production support, quickly diagnosing and resolving critical issues to maintain system reliability with minimal downtime",
        "Collaborated with cross-functional teams to implement new features and enhancements based on business requirements and user feedback",
      ],
      technologies: [
        "Angular 18",
        "TypeScript",
        "Axis Framework",
        "AUG Generator",
        "RxJS",
        "RESTful APIs",
        "SCSS",
      ],
      color: "from-blue-500/20 to-indigo-500/20",
      //icon: "Angular",
      icon: <FaAngular className="text-accent" />,
    },
    {
      id: 2,
      role: "Senior Frontend Developer",
      company: "Refread Solutions",
      period: "2023 - 2024",
      description:
        "Led the successful migration of a digital library platform from AngularJS to Angular 16, powering over 70+ institutional libraries including prestigious organizations such as DRDO, Indian Air Force, Delhi University, RGPV, Thapar University, and AMU. Focused on modernizing the platform while enhancing functionality, performance, and user experience through a single codebase architecture that accommodates institution-specific customizations.",
      achievements: [
        "Spearheaded the complete migration from legacy AngularJS to Angular 16, resulting in improved performance, maintainability, and modern development practices",
        "Designed and implemented multiple theme options for homepages, allowing each library to have a distinct visual identity",
        "Developed a comprehensive new admin panel with enhanced controls and management capabilities for library administrators",
        "Created advanced analytics modules generating detailed reports on user activities, search criteria, and session activities for data-driven decision making",
      ],
      technologies: [
        "Angular 16",
        "TypeScript",
        "RxJS",
        "NgRx",
        "OAuth Integration",
        "RESTful APIs",
        "Responsive Design",
        "SCSS/CSS",
        "Data Visualization",
      ],
      color: "from-blue-500/20 to-indigo-500/20",
      icon: <FaAngular className="text-accent" />,
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Refread Solutions",
      period: "2020 - 2023",
      description:
        "Led the development of a scalable digital library platform using a single codebase architecture that powers over 70+ institutional libraries, including prestigious organizations such as DRDO, Indian Air Force, Delhi University, RGPV, Thapar University, and Aligarh Muslim University. Focused on creating customizable, feature-rich solutions tailored to each library's unique requirements.",
      achievements: [
        "Architected and implemented a single codebase solution that scales across 70+ different libraries while allowing for institution-specific customizations",
        "Developed advanced search optimization features resulting in 60% faster query results and improved user satisfaction",
        "Designed and implemented a reading history system with personalized recommendations based on user behavior",
        "Created a new arrivals module with notification capabilities to increase user engagement and collection awareness",
        "Integrated Microsoft, Google, and Instagram authentication systems for seamless user access across platforms",
        "Built a comprehensive book collection management module with cataloging, tracking, and analytics features",
        "Modularized the search functionality into a standalone component that could be embedded in other applications",
        "Developed a customization framework allowing each library to maintain unique branding, features, and user experiences",
      ],
      technologies: [
        "AngularJS",
        "JavaScript",
        "OAuth Integration",
        "RESTful APIs",
        "Responsive Design",
      ],
      color: "from-blue-500/20 to-indigo-500/20",
      icon: <FaAngular className="text-accent" />,
    },
    {
      id: 4,
      role: "Junior Web Developer",
      company: "Digital Solutions Ltd",
      period: "2017 - 2019",
      description:
        "Started my career building interactive web applications and e-commerce sites. Worked on frontend and backend development, focusing on creating seamless user experiences.",
      achievements: [
        "Developed and maintained e-commerce websites using React, increasing conversion rates by 25%",
        "Collaborated with UX designers to implement responsive designs and improve user experience",
        "Assisted in migrating legacy applications to modern tech stacks",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Node.js",
      ],
      color: "from-cyan-500/20 to-teal-500/20",
      icon: <FaAngular className="text-[#61DAFB]" />,
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-24 px-6 md:px-8 min-h-screen bg-bg-primary pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Background elements */}
        <div className="fixed top-0 left-0 w-full h-full grid-pattern opacity-30 z-[-1]"></div>
        <div className="fixed top-[30%] right-[-5%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="fixed bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-accent-purple/10 rounded-full blur-3xl z-[-1]"></div>
        
        <div className="text-center mb-16">
          <p className="font-mono text-accent text-base mb-4 opacity-0 animate-fade-in-1">My Professional Journey</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-accent-gradient bg-clip-text text-transparent opacity-0 animate-fade-in-2">Work Experience</h1>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto opacity-0 animate-fade-in-3">
            Over the past 7.5 years, I've worked with various technologies and frameworks to create
            exceptional user experiences. Here's a look at my professional journey.
          </p>
        </div>
        
        <motion.div 
          className="space-y-12 lg:space-y-16 relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-[60px] bottom-10 w-0.5 bg-accent-gradient rounded-full hidden md:block opacity-30"></div>
          
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              className="relative"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-[60px] w-4 h-4 rounded-full bg-accent-gradient hidden md:block transform -translate-x-1/2"></div>
              
              <div className="md:ml-16 bg-bg-secondary/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-accent/5">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-4 items-start">
                    <div className="w-14 h-14 rounded-lg bg-accent/5 flex items-center justify-center text-2xl">
                      {exp.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div>
                          <h2 className="text-2xl font-bold text-text-primary">{exp.role}</h2>
                          <h3 className="text-lg text-accent">{exp.company}</h3>
                        </div>
                        <span className="bg-bg-secondary/50 text-text-secondary px-4 py-1 rounded-full text-sm">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="mt-4 text-text-secondary">
                        {exp.description}
                      </p>
                      
                      <div className="mt-6">
                        <h4 className="text-text-primary font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-text-secondary">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-text-primary font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="bg-bg-secondary/50 text-accent px-3 py-1 rounded-md text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-accent/5 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-text-primary">Education & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-secondary/30 p-6 rounded-lg border border-accent/5">
              <h3 className="text-xl font-bold text-text-primary">Bachelor of Science in Computer Science</h3>
              <p className="text-accent">University of Technology</p>
              <p className="text-text-secondary mt-2">2013 - 2017</p>
              <p className="mt-4 text-text-secondary">
                Focused on web technologies, algorithms, and software engineering principles.
                Graduated with honors.
              </p>
            </div>
            
            <div className="bg-bg-secondary/30 p-6 rounded-lg border border-accent/5">
              <h3 className="text-xl font-bold text-text-primary">Certified Angular Developer</h3>
              <p className="text-accent">Google Certification Program</p>
              <p className="text-text-secondary mt-2">2020</p>
              <p className="mt-4 text-text-secondary">
                Advanced certification in Angular development, focusing on performance optimization
                and best practices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;