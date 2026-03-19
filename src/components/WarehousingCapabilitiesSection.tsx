"use client"
import React from 'react';
import { Building, Thermometer, Package2, Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';
const capabilities = [
  {
    icon: Building,
    title: "1.2M+ sq ft",
    subtitle: "Warehouse Space",
    description: "Multiple strategically located facilities across North America with scalable storage solutions."
  },
  {
    icon: Thermometer,
    title: "Climate Controlled",
    subtitle: "Environment Management",
    description: "Temperature and humidity controlled environments for sensitive goods and pharmaceuticals."
  },
  {
    icon: Package2,
    title: "500K+ units",
    subtitle: "Daily Processing",
    description: "High-volume order processing capability with automated sorting and packaging systems."
  },
  {
    icon: Truck,
    title: "50+ locations",
    subtitle: "Distribution Centers",
    description: "Nationwide network ensuring fast delivery times and reduced shipping costs."
  }
];

const WarehousingCapabilitiesSection = () => {
  const router = useRouter()
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-logistics-green">Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            State-of-the-art warehousing facilities designed for efficiency, security, and scalability.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-logistics-blue to-logistics-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{capability.title}</h3>
              <p className="text-logistics-blue font-semibold mb-3">{capability.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div onClick={()=>router.push("/contact")} className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-logistics-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-logistics-dark-blue transition-all duration-300 cursor-pointer">
            Schedule Facility Tour
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehousingCapabilitiesSection;
