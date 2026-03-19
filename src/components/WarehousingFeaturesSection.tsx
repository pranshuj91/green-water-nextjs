
import React from 'react';
import { Package, Truck, BarChart, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory tracking with automated reorder points and stock level optimization.",
    metric: "99.8% accuracy"
  },
  {
    icon: Truck,
    title: "Order Fulfillment",
    description: "Streamlined picking, packing, and shipping processes with same-day processing.",
    metric: "< 2 hour processing"
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Comprehensive dashboards with inventory insights and performance metrics.",
    metric: "Real-time data"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "24/7 surveillance, access controls, and industry compliance certifications.",
    metric: "100% secure"
  },
  {
    icon: Zap,
    title: "Technology Integration",
    description: "Seamless integration with your ERP, e-commerce platforms, and business systems.",
    metric: "API ready"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Experienced warehouse managers and customer service teams available 24/7.",
    metric: "24/7 support"
  }
];

const WarehousingFeaturesSection = () => {
  return (
    <section id='facilities' className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Warehousing <span className="text-logistics-blue">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our modern warehouse facilities combine advanced technology with expert logistics management 
            to provide comprehensive storage and distribution solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-logistics-blue/10 rounded-xl flex items-center justify-center group-hover:bg-logistics-blue/20 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-logistics-blue" />
                </div>
                <div className="absolute -top-2 -right-2 bg-logistics-green text-white text-xs px-2 py-1 rounded-full font-medium">
                  {feature.metric}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarehousingFeaturesSection;
