
import React from 'react';
import { TrendingDown, Clock, Shield, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Operational Costs",
    description: "Lower your overhead with our shared warehousing model. No need for long-term leases or capital investments in facilities and equipment.",
    percentage: "30-50%",
    metric: "cost reduction"
  },
  {
    icon: Clock,
    title: "Faster Time to Market",
    description: "Strategic locations near major transportation hubs enable faster delivery times and improved customer satisfaction.",
    percentage: "2-3 days",
    metric: "faster delivery"
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Professional insurance coverage, security systems, and compliance with industry regulations protect your inventory.",
    percentage: "100%",
    metric: "coverage"
  },
  {
    icon: BarChart,
    title: "Scalable Operations",
    description: "Easily scale your storage and fulfillment capacity up or down based on seasonal demands and business growth.",
    percentage: "24/7",
    metric: "scalability"
  }
];

const WarehousingBenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our <span className="text-logistics-green">Warehousing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us to transform your supply chain operations and gain competitive advantages in today's marketplace.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-logistics-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-logistics-blue/20 transition-colors duration-300">
                  <benefit.icon className="h-8 w-8 text-logistics-blue" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <span className="bg-logistics-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {benefit.percentage}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-2">{benefit.description}</p>
                <p className="text-sm text-logistics-blue font-medium">{benefit.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarehousingBenefitsSection;
