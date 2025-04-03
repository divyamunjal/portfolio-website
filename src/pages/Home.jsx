import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import AboutSummary from '../components/AboutSummary';
import ExperienceHighlights from '../components/ExperienceHighlights';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <AboutSummary /> */}
      <FeaturedProjects />
      <SkillsSection />
      <ExperienceHighlights />
      <Testimonials />
    </>
  );
};

export default Home;