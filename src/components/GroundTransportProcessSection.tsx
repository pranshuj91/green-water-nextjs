
import React from 'react';
import { Truck, PenTool, Package, MapPin, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: PenTool,
    title: "1. Request Quote",
    description: "Share your transportation requirements through our easy-to-use online form or speak directly with our logistics experts.",
    color: "bg-logistics-green"
  },
  {
    icon: Package,
    title: "2. Cargo Details",
    description: "Provide specifics about your shipment including dimensions, weight, special handling requirements, and documentation.",
    color: "bg-logistics-light-green"
  },
  {
    icon: MapPin,
    title: "3. Route Planning",
    description: "Our team develops an optimized route plan considering distance, traffic patterns, weather, and delivery windows.",
    color: "bg-logistics-blue"
  },
  {
    icon: Truck,
    title: "4. Vehicle Assignment",
    description: "We match your cargo with the ideal vehicle from our diverse fleet based on your specific requirements.",
    color: "bg-logistics-dark-blue"
  },
  {
    icon: Clock,
    title: "5. Shipment Tracking",
    description: "Monitor your shipment in real-time through our tracking portal with automated updates at key milestones.",
    color: "bg-logistics-dark-green"
  },
  {
    icon: CheckCircle,
    title: "6. Delivery Confirmation",
    description: "Receive proof of delivery with digital signature capture and final documentation for your records.",
    color: "bg-green-500"
  }
];

const GroundTransportProcessSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Element - Road Map Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,300 Q200,100 400,300 T750,300" stroke="#000" strokeWidth="6" fill="none" />
            <path d="M50,350 Q200,550 400,350 T750,350" stroke="#000" strokeWidth="6" fill="none" />
            <path d="M50,325 L750,325" stroke="#000" strokeWidth="2" strokeDasharray="10,10" fill="none" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-green/10 text-logistics-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Truck className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Journey of Your <span className="text-logistics-green">Shipment</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From request to delivery, our streamlined process ensures your land transportation needs 
            are handled with precision and care at every step.
          </p>
        </div>

        {/* Interactive Timeline Process */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connected Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Node */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${step.color} z-10 hidden md:block`}></div>
              
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Empty Space for Alignment */}
                <div className="md:w-1/2"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-logistics-green/50 transition-all duration-300 hover:shadow-logistics-green/10 group">
                    {/* Icon */}
                    <div className={`w-14 h-14 ${step.color} rounded-lg flex items-center justify-center mb-4 ${index % 2 === 0 ? 'ml-auto' : ''} group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-logistics-green transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroundTransportProcessSection;
