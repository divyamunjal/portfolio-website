import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SocialLinks from './components/SocialLinks'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <SocialLinks />
    </div>
  )
}

export default App