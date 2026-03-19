
import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import WhyUsHeroSection from '@/src/components/WhyUsHeroSection';
import WhyUsDifferenceSection from '@/src/components/WhyUsDifferenceSection';
import WhyUsStatsSection from '@/src/components/WhyUsStatsSection';
import WhyUsTestimonialsSection from '@/src/components/WhyUsTestimonialsSection';

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <WhyUsHeroSection />
        <WhyUsDifferenceSection />
        <WhyUsStatsSection />
        <WhyUsTestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs;
