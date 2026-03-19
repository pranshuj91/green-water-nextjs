
import React from 'react';
import { Leaf, Shield, Clock, Globe } from 'lucide-react';

const AboutDifferenceSection = () => {
  const differences = [
    {
      icon: Leaf,
      title: "Carbon Neutral Shipping",
      description: "First logistics company to achieve carbon neutrality across all operations through renewable energy and offset programs."
    },
    {
      icon: Shield,
      title: "AI-Powered Security",
      description: "Advanced tracking and security systems that provide real-time cargo monitoring and predictive risk assessment."
    },
    {
      icon: Clock,
      title: "Guaranteed Delivery",
      description: "99.8% on-time delivery rate backed by our industry-leading logistics optimization technology."
    },
    {
      icon: Globe,
      title: "Global Partnership Network",
      description: "Exclusive partnerships with local carriers in 50+ countries ensuring seamless door-to-door service."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-15 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Why Choose <span className="text-logistics-blue">Green Water</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              We're not just another logistics company. Here's what sets us apart in the industry.
            </p>
          </div>

          {/* Differences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {differences.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-logistics-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-logistics-blue/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-logistics-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center gap-2 text-logistics-green mt-4">
                      <div className="w-6 md:w-8 h-0.5 bg-logistics-green"></div>
                      <span className="text-xs md:text-sm font-medium">Advantage</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDifferenceSection;
