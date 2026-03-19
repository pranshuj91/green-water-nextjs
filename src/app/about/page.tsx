
import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import AboutHeroSection from '@/src/components/AboutHeroSection';
import AboutStorySection from '@/src/components/AboutStorySection';
import AboutMissionSection from '@/src/components/AboutMissionSection';
import AboutDifferenceSection from '@/src/components/AboutDifferenceSection';
import AboutValuesSection from '@/src/components/AboutValuesSection';
import AboutTimelineSection from '@/src/components/AboutTimelineSection';
import AboutTeamSection from '@/src/components/AboutTeamSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutMissionSection />
      <AboutDifferenceSection />
      <AboutValuesSection />
      {/* <AboutTimelineSection /> */}
      {/* <AboutTeamSection /> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
