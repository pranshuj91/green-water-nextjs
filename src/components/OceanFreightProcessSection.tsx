"use client"
import React from 'react';
import { FileText, Package, Ship, MapPin, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
const processSteps = [
  {
    icon: FileText,
    title: "Quote & Booking",
    description: "Get instant quotes online or speak with our experts. Book your shipment with flexible payment terms.",
    step: "01"
  },
  {
    icon: Package,
    title: "Cargo Pickup",
    description: "We arrange cargo pickup from your location or you can deliver to our designated consolidation centers.",
    step: "02"
  },
  {
    icon: Ship,
    title: "Ocean Transit",
    description: "Your cargo sets sail with real-time tracking, regular updates, and proactive communication throughout the journey.",
    step: "03"
  },
  {
    icon: MapPin,
    title: "Customs Clearance",
    description: "Our customs experts handle all documentation and clearance procedures at destination ports.",
    step: "04"
  },
  {
    icon: CheckCircle,
    title: "Final Delivery",
    description: "Cargo is delivered to your specified destination with proof of delivery and final documentation.",
    step: "05"
  }
];

const OceanFreightProcessSection = () => {
  const router = useRouter()
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-logistics-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-logistics-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-blue/20 text-logistics-blue px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Ship className="w-4 h-4" />
            Shipping Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How Ocean Freight <span className="text-logistics-blue">Works</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Our streamlined 5-step process ensures your cargo reaches its destination safely, efficiently, and on time
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-logistics-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-logistics-blue to-logistics-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-logistics-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (hidden on last item and mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-logistics-blue to-logistics-green"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-logistics-green border-t-2 border-b-2 border-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-logistics-blue to-logistics-green rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Ship Your Cargo?
              </h3>
              <p className="text-white/90 mb-6">
                Get started with a free quote and experience our seamless ocean freight process
              </p>
              <button onClick={()=>router.push("/contact")} className="bg-white text-logistics-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Start Your Shipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanFreightProcessSection;
