
import React from 'react';
import { Award, TrendingUp, MapPin, Headphones } from 'lucide-react';

  const currentYear = new Date().getFullYear();
  const foundatationYear = 2022;
  const finalYear = currentYear-foundatationYear

const reasons = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: `${finalYear} years of ocean freight experience with deep knowledge of international shipping regulations and best practices.`,
    stats: `${finalYear}+ Years Experience`
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Successfully shipped over 25,000 containers with 99.8% on-time delivery rate and zero cargo loss incidents.",
    stats: "50K+ Containers Shipped"
  },
  {
    icon: MapPin,
    title: "Global Presence",
    description: "Strategic partnerships with major shipping lines and local agents in 50+ ports across 6 continents.",
    stats: "200+ Global Ports"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated account managers and real-time shipment monitoring.",
    stats: "24/7 Available"
  }
];

const OceanFreightWhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-32 h-32 rounded-full bg-logistics-green"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-logistics-blue"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-logistics-green/10 text-logistics-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Why Choose Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted <span className="text-logistics-blue">Ocean Freight</span> Partner
            </h2>
            
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              We don't just move cargo - we deliver peace of mind. Our comprehensive ocean freight solutions are backed by industry expertise, cutting-edge technology, and unwavering commitment to your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="group bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-logistics-blue flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <reason.icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-logistics-blue transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {reason.description}
                    </p>
                    <span className="text-logistics-green font-semibold text-xs bg-logistics-green/10 px-2 py-1 rounded-full ml-2 flex-shrink-0">
                      {reason.stats}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-logistics-blue to-logistics-green rounded-3xl p-12 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-logistics-blue mb-2">99.8%</div>
                <div className="text-gray-700 font-semibold mb-4">On-Time Delivery Rate</div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-logistics-blue to-logistics-green rounded-full" style={{ width: '99.8%' }}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-logistics-green mb-1">$2.5M+</div>
                  <div className="text-gray-700 text-sm">Cargo Value Protected</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-logistics-blue mb-1">Zero</div>
                  <div className="text-gray-700 text-sm">Cargo Loss Incidents</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-logistics-green text-white px-4 py-2 rounded-lg font-semibold animate-bounce">
              Trusted by 1000+ Companies
            </div>
            <div className="absolute -bottom-4 -left-4 bg-logistics-blue text-white px-4 py-2 rounded-lg font-semibold animate-bounce delay-500">
              ISO Certified Operations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanFreightWhyChooseUsSection;
