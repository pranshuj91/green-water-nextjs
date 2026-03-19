

import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import GroundTransportHeroSection from '@/src/components/GroundTransportHeroSection';
import GroundTransportFeaturesSection from '@/src/components/GroundTransportFeaturesSection';
import GroundTransportWhyChooseUsSection from '@/src/components/GroundTransportWhyChooseUsSection';
import GroundTransportProcessSection from '@/src/components/GroundTransportProcessSection';
import GroundTransportTestimonialsSection from '@/src/components/GroundTransportTestimonialsSection';
import GroundTransportCTASection from '@/src/components/GroundTransportCTASection';

const LandTransport = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <GroundTransportHeroSection />
      <GroundTransportFeaturesSection />
      <GroundTransportWhyChooseUsSection />
      <GroundTransportProcessSection />
      <GroundTransportTestimonialsSection />
      <GroundTransportCTASection />
      <Footer />
    </div>
  );
};

export default LandTransport;
