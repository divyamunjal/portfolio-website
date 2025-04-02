import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import AboutSummary from '../components/AboutSummary';
import ExperienceHighlights from '../components/ExperienceHighlights';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <SkillsSection />
      <ExperienceHighlights />
    </>
  );
};

export default Home;