import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import About from './pages/About'
import Home from './pages/Home'
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init("OokEbuqaiR5PBzm16");
  }, []);
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <SocialLinks />
      </div>
    </Router>
  )
}

export default App