
import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import AirFreightHeroSection from '@/src/components/AirFreightHeroSection';
import AirFreightFeaturesSection from '@/src/components/AirFreightFeaturesSection';
import AirFreightWhyChooseUsSection from '@/src/components/AirFreightWhyChooseUsSection';
import AirFreightProcessSection from '@/src/components/AirFreightProcessSection';
import AirFreightTestimonialsSection from '@/src/components/AirFreightTestimonialsSection';
import AirFreightCTASection from '@/src/components/AirFreightCTASection';

const AirFreight = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AirFreightHeroSection />
      <AirFreightFeaturesSection />
      <AirFreightWhyChooseUsSection />
      <AirFreightProcessSection />
      <AirFreightTestimonialsSection />
      <AirFreightCTASection />
      <Footer />
    </div>
  );
};

export default AirFreight;
