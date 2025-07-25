import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import DemoSection from '../components/DemoSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContactSection />
      <DemoSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;