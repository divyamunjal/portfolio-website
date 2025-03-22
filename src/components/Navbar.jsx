// src/components/Navbar.jsx
// -----------------------------------------
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  // Handle scrolling effects for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`flex justify-between items-center px-6 py-6 md:px-8 md:py-6 fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-bg-primary/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <Link to="/" className="font-bold text-2xl text-text-primary flex items-center gap-2">
        <div className="w-9 h-9 bg-accent-gradient rounded-lg flex items-center justify-center font-extrabold text-bg-primary">D</div>
        <span>Divya</span>
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        <li>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active-nav-link' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/experience" 
            className={`nav-link ${location.pathname === '/experience' ? 'active-nav-link' : ''}`}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active-nav-link' : ''}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active-nav-link' : ''}`}
          >
            Contact
          </Link>
        </li>
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
        className={`md:hidden fixed inset-0 top-0 bg-bg-primary/95 backdrop-blur-md flex flex-col justify-center items-center z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button 
          className="absolute top-6 right-6 text-accent text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <HiX />
        </button>
        
        {/* Mobile logo */}
        <Link to="/" className="absolute top-6 left-6 font-bold text-2xl text-text-primary flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <div className="w-9 h-9 bg-accent-gradient rounded-lg flex items-center justify-center font-extrabold text-bg-primary">D</div>
          <span>Divya</span>
        </Link>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20 z-[-1]"></div>
        <div className="absolute top-[5%] right-[10%] w-[40%] h-[30%] bg-accent/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[20%] bg-accent-purple/10 rounded-full blur-3xl z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 to-bg-secondary/80 z-[-2]"></div>
        
        {/* Navigation links */}
        <ul className="flex flex-col items-center gap-12 w-full px-8 py-12 max-w-md mx-auto rounded-lg bg-bg-secondary/80 backdrop-blur-md border border-accent/10 shadow-lg shadow-accent/5">
          <li className="w-full text-center">
            <Link 
              to="/about" 
              className="text-text-primary text-2xl font-medium block"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="w-full text-center">
            <Link 
              to="/experience" 
              className="text-text-primary text-2xl font-medium block"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li className="w-full text-center">
            <Link 
              to="/projects" 
              className="text-text-primary text-2xl font-medium block"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="w-full text-center">
            <Link 
              to="/contact" 
              className="text-text-primary text-2xl font-medium block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="w-full text-center mt-6">
            <a 
              href="#" 
              className="inline-block px-8 py-3 bg-bg-primary/70 border border-accent rounded-lg text-accent font-medium transition-all duration-300 hover:bg-accent/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;