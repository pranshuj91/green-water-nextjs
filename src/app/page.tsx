
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
import LogisticsCapabilitiesSection from '../components/LogisticsCapabilitiesSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import BlogsSection from '../components/BlogsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <LogisticsCapabilitiesSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <BlogsSection noPaddingBottom={true} />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
