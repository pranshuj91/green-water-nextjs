
import React from 'react';
import { Ship, Plane, Truck, Package, FileCheck, Globe, CheckCircle } from 'lucide-react';

const detailedServices = [
  {
    icon: Ship,
    title: "Ocean Freight Solutions",
    description: "Comprehensive sea freight services connecting global markets with efficiency and reliability.",
    features: [
      "Full Container Load (FCL) and Less Container Load (LCL)",
      "Door-to-door and port-to-port services",
      "Real-time shipment tracking and monitoring",
      "Customs clearance and documentation",
      "Specialized cargo handling (hazardous, oversized)",
      "Competitive rates with flexible payment terms"
    ],
    color: "logistics-blue"
  },
  {
    icon: Plane,
    title: "Air Freight Services",
    description: "Fast and secure air cargo solutions for time-critical shipments worldwide.",
    features: [
      "Express and standard air freight options",
      "Temperature-controlled shipments",
      "Consolidated and direct flights",
      "Dangerous goods certification",
      "Charter services for oversized cargo",
      "Priority handling and expedited clearance"
    ],
    color: "logistics-green"
  },
  {
    icon: Truck,
    title: "Ground Transportation",
    description: "Reliable overland transport solutions with comprehensive coverage and flexible options.",
    features: [
      "Full truckload (FTL) and less-than-truckload (LTL)",
      "Cross-border transportation services",
      "Last-mile delivery solutions",
      "Temperature-controlled vehicles",
      "Real-time GPS tracking",
      "Expedited and scheduled deliveries"
    ],
    color: "logistics-blue"
  },
  {
    icon: Package,
    title: "Warehousing & Distribution",
    description: "Modern storage and distribution facilities with advanced inventory management.",
    features: [
      "Climate-controlled warehouse facilities",
      "Advanced inventory management systems",
      "Pick, pack, and fulfillment services",
      "Cross-docking and transloading",
      "Quality control and inspection",
      "Distribution center management"
    ],
    color: "logistics-green"
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert customs brokerage services ensuring smooth clearance with compliance management.",
    features: [
      "Complete customs documentation handling",
      "Duty and tax calculations",
      "Regulatory compliance management",
      "Trade advisory services",
      "Expedited clearance processes",
      "Multi-country customs expertise"
    ],
    color: "logistics-blue"
  },
  {
    icon: Globe,
    title: "Supply Chain Management",
    description: "End-to-end supply chain optimization and management solutions for seamless operations.",
    features: [
      "Supply chain strategy and design",
      "Vendor and supplier management",
      "Demand planning and forecasting",
      "Risk management and mitigation",
      "Performance monitoring and analytics",
      "Technology integration solutions"
    ],
    color: "logistics-green"
  }
];

const ServicesDetailSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service <span className="text-logistics-blue">Details</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our comprehensive range of logistics services designed to optimize your supply chain
          </p>
        </div>

        <div className="space-y-16">
          {detailedServices.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 text-${service.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="flex-1 max-w-md">
                <div className={`relative bg-gradient-to-br from-${service.color}/10 to-${service.color}/5 rounded-3xl p-12 shadow-lg`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/20 to-transparent rounded-3xl`}></div>
                  <service.icon className={`w-32 h-32 text-${service.color} mx-auto relative z-10`} />
                  <div className={`absolute top-8 right-8 w-16 h-16 bg-${service.color}/20 rounded-full animate-pulse`}></div>
                  <div className={`absolute bottom-8 left-8 w-12 h-12 bg-${service.color}/30 rounded-full animate-pulse delay-1000`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
