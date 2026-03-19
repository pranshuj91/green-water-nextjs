
import React from 'react';
import { FileText, Package, Plane, Truck, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: FileText,
    title: "Quote & Booking",
    description: "Get instant quotes online or speak with our experts. Book your shipment with just a few clicks.",
    duration: "5 minutes"
  },
  {
    icon: Package,
    title: "Pickup & Preparation",
    description: "We collect your cargo and prepare all necessary documentation for international air transport.",
    duration: "Same day"
  },
  {
    icon: Plane,
    title: "Air Transport",
    description: "Your cargo flies on scheduled or charter flights with real-time tracking and monitoring.",
    duration: "1-5 days"
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Final mile delivery to your destination with proof of delivery and completion confirmation.",
    duration: "24 hours"
  }
];

const AirFreightProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-logistics-green">Air Freight Process</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Simple, streamlined process from quote to delivery with full visibility and expert support every step of the way
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-logistics-green via-logistics-blue to-logistics-green transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-logistics-green text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-logistics-green/30">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-logistics-green to-logistics-dark-green rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-logistics-green transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  <div className="inline-flex items-center gap-2 bg-logistics-green/10 text-logistics-green px-3 py-1 rounded-full text-sm font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-logistics-green/5 to-logistics-blue/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Full Visibility Throughout Your Shipment
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Track your air freight shipment in real-time with our advanced tracking system. Get automatic notifications at every milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <div className="flex items-center gap-2 text-logistics-green font-semibold">
                <CheckCircle className="w-5 h-5" />
                Real-time GPS tracking
              </div> */}
              <div className="flex items-center gap-2 text-logistics-green font-semibold">
                <CheckCircle className="w-5 h-5" />
                Automatic notifications
              </div>
              <div className="flex items-center gap-2 text-logistics-green font-semibold">
                <CheckCircle className="w-5 h-5" />
                24/7 customer support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirFreightProcessSection;
