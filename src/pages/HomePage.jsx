import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const HomePage = () => {
  return (
    <div>
      <Hero 
        title="Sownmark: Your Partner in Digital Growth"
        subtitle="Master Digital Marketing. Find Top Talent. Drive Online Success."
        ctaText="Explore Courses"
        ctaLink="/digital-marketing"
        secondaryCtaText="Get a Free Consultation"
        secondaryCtaLink="/contact"
      />
      
      <Services />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;