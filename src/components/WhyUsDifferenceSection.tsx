
import React from 'react';
import { Leaf, Shield, Zap, Globe, Award, Users } from 'lucide-react';

const differences = [
  {
    icon: Leaf,
    title: "Carbon Neutral Logistics",
    description: "Leading the industry with 100% carbon-neutral operations through renewable energy and comprehensive offset programs.",
    highlight: "100% Carbon Neutral"
  },
  {
    icon: Shield,
    title: "AI-Powered Security",
    description: "Advanced machine learning algorithms provide real-time cargo monitoring and predictive risk assessment.",
    highlight: "99.9% Security Rate"
  },
  {
    icon: Zap,
    title: "Fastest Delivery Times",
    description: "Industry-leading delivery speeds with optimized routes and priority handling for time-sensitive shipments.",
    highlight: "50% Faster"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Exclusive partnerships with local carriers in 65+ countries ensuring seamless door-to-door service worldwide.",
    highlight: "65+ Countries"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Multiple awards for innovation, sustainability, and customer service from leading logistics organizations.",
    highlight: "20+ Awards"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account managers and 24/7 support teams ensure your business gets the attention it deserves.",
    highlight: "24/7 Support"
  }
];

const WhyUsDifferenceSection = () => {
  return (
    <section id='learn-more' className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Green Water Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of businesses worldwide trust us with their most critical shipments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-logistics-blue/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="h-8 w-8 text-logistics-blue" />
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-logistics-green/10 text-logistics-green text-sm font-medium px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsDifferenceSection;
