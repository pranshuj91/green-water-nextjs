
import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import OceanFreightHeroSection from '@/src/components/OceanFreightHeroSection';
import OceanFreightFeaturesSection from '@/src/components/OceanFreightFeaturesSection';
import OceanFreightWhyChooseUsSection from '@/src/components/OceanFreightWhyChooseUsSection';
import OceanFreightProcessSection from '@/src/components/OceanFreightProcessSection';
import OceanFreightTestimonialsSection from '@/src/components/OceanFreightTestimonialsSection';

const OceanFreight = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <OceanFreightHeroSection />
      <OceanFreightFeaturesSection />
      <OceanFreightWhyChooseUsSection />
      <OceanFreightProcessSection />
      <OceanFreightTestimonialsSection />
      <Footer />
    </div>
  );
};

export default OceanFreight;
