import React from 'react'
import CodeWindow from './CodeWindow'

const HeroSection = () => {
  return (
    <section className="flex min-h-screen px-6 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        {/* Animated background blobs */}
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-accent/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-accent-purple/15 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full grid-pattern z-[-1]"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1200px] w-full mx-auto pt-[100px]">
        <div className="flex-1 max-w-[600px] lg:mr-8">
          <p className="font-mono text-accent text-base mb-6 opacity-0 animate-fade-in-1">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 bg-accent-gradient bg-clip-text text-transparent opacity-0 animate-fade-in-2">Divya Munjal</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-text-secondary leading-tight mb-6 opacity-0 animate-fade-in-3">I build exceptional digital experiences</h2>
          <p className="text-lg text-text-secondary mb-8 opacity-0 animate-fade-in-4">
            I'm a front-end developer with <span className="text-accent font-medium">6.5 years of experience</span> specializing in Angular and React Native frameworks. Currently at <span className="text-accent font-medium">Refread Solutions</span>, building accessible and high-performance applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-block px-6 py-3 bg-accent-gradient rounded text-bg-primary font-semibold cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 text-center opacity-0 animate-fade-in-5"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-transparent border border-accent rounded text-accent font-semibold cursor-pointer transition-all duration-300 hover:bg-accent/10 text-center opacity-0 animate-fade-in-6"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="flex-1 max-w-[500px] flex justify-center items-center mt-12 lg:mt-0 opacity-0 animate-fade-in-7">
          <CodeWindow />
        </div>
      </div>
    </section>
  )
}

export default HeroSection