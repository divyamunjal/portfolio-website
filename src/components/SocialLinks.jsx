import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <>
      {/* Social links */}
      <div className="hidden md:flex fixed left-8 bottom-0 flex-col items-center gap-4 z-10">
        <a href="#" className="social-icon">
          <FaGithub size={22} />
        </a>
        <a href="#" className="social-icon">
          <FaLinkedinIn size={22} />
        </a>
        <div className="w-px h-24 bg-text-secondary"></div>
      </div>

      {/* Email link */}
      <div className="hidden md:flex fixed right-8 bottom-0 flex-col items-center gap-4 z-10">
        <a 
          href="mailto:dmunj5@gmail.com" 
          className="font-mono text-sm text-text-secondary [writing-mode:vertical-rl] tracking-wider transition-all duration-300 hover:text-accent hover:transform hover:-translate-y-0.5"
        >
          dmunj5@gmail.com
        </a>
        <div className="w-px h-24 bg-text-secondary"></div>
      </div>
    </>
  )
}

export default SocialLinks