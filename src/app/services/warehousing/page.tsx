

import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import WarehousingHeroSection from '@/src/components/WarehousingHeroSection';
import WarehousingFeaturesSection from '@/src/components/WarehousingFeaturesSection';
import WarehousingCapabilitiesSection from '@/src/components/WarehousingCapabilitiesSection';
import WarehousingBenefitsSection from '@/src/components/WarehousingBenefitsSection';
import WarehousingCTASection from '@/src/components/WarehousingCTASection';

const Warehousing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WarehousingHeroSection />
      <WarehousingFeaturesSection />
      <WarehousingCapabilitiesSection />
      <WarehousingBenefitsSection />
      <WarehousingCTASection />
      <Footer />
    </div>
  );
};

export default Warehousing;
