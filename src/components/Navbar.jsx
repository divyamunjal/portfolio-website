import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-6 md:px-8 md:py-6 bg-bg-primary/90 backdrop-blur-md fixed w-full z-50">
      <a href="#" className="font-bold text-2xl text-text-primary flex items-center gap-2">
        <div className="w-9 h-9 bg-accent-gradient rounded-lg flex items-center justify-center font-extrabold text-bg-primary">D</div>
        <span>Divya</span>
      </a>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#experience" className="nav-link">Experience</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
        <li>
          <button className="px-5 py-2 bg-transparent border border-accent rounded text-accent font-medium transition-all duration-300 hover:bg-accent/10">
            Resume
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-accent text-2xl focus:outline-none p-2 rounded-lg border border-accent/30 bg-bg-secondary/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent/10 hover:border-accent/50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 top-[72px] bg-bg-primary/95 backdrop-blur-md z-40 flex flex-col justify-start items-center pt-12 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20 z-[-1]"></div>
        <div className="absolute top-[5%] right-[10%] w-[40%] h-[30%] bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[20%] bg-accent-purple/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 to-bg-secondary/80 z-[-2]"></div>
        <ul className="flex flex-col items-center gap-8 w-full px-8 py-4 max-w-md mx-auto rounded-lg bg-bg-secondary/60 backdrop-blur-md border border-accent/10 shadow-lg shadow-accent/5">
            <li className="w-full border-b border-bg-secondary/50 pb-4">
              <a 
                href="#about" 
                className="nav-link text-xl block text-center relative overflow-hidden group font-medium text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 text-shadow">About</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
            <li className="w-full border-b border-bg-secondary/50 pb-4">
              <a 
                href="#experience" 
                className="nav-link text-xl block text-center relative overflow-hidden group font-medium text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 text-shadow">Experience</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
            <li className="w-full border-b border-bg-secondary/50 pb-4">
              <a 
                href="#projects" 
                className="nav-link text-xl block text-center relative overflow-hidden group font-medium text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 text-shadow">Projects</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
            <li className="w-full border-b border-bg-secondary/50 pb-4">
              <a 
                href="#contact" 
                className="nav-link text-xl block text-center relative overflow-hidden group font-medium text-text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 text-shadow">Contact</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
            <li className="w-full mt-4">
              <button 
                className="w-full py-3 bg-bg-primary/70 border border-accent rounded-md text-accent font-medium transition-all duration-300 hover:bg-accent/10 hover:shadow-md hover:shadow-accent/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar