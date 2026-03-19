"use client"
import React from 'react';
import { Truck, Clock, Shield, MapPin, Zap, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
const features = [
  {
    icon: Truck,
    title: "Fleet Diversity",
    description: "From small vans to heavy-duty trucks, we have the right vehicle for every cargo type and size requirement.",
    highlight: "1000+ vehicles"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Same-day, next-day, or scheduled deliveries with time-window options to meet your specific needs.",
    highlight: "24/7 dispatch"
  },
  {
    icon: Shield,
    title: "Cargo Protection",
    description: "Full insurance coverage and secure handling protocols ensure your goods arrive safely and intact.",
    highlight: "100% insured"
  },
  {
    icon: MapPin,
    title: "Route Optimization",
    description: "AI-powered route planning minimizes transit times and costs while maximizing delivery efficiency.",
    highlight: "Smart routing"
  },
  {
    icon: Zap,
    title: "Real-Time Tracking",
    description: "GPS monitoring and instant updates keep you informed about your shipment's location and status.",
    highlight: "Live updates"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Expert logistics coordinators available around the clock to handle your questions and concerns.",
    highlight: "24/7 support"
  }
];

const GroundTransportFeaturesSection = () => {
  const router = useRouter()
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-green/10 text-logistics-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Truck className="w-4 h-4" />
            Our Capabilities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Built for <span className="text-logistics-green">Performance</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Every aspect of our land transport service is designed to deliver exceptional results, 
            from our advanced fleet to our cutting-edge technology platform.
          </p>
        </div>

        {/* Features Grid with Unique Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative ${
                index === 0 || index === 5 ? 'lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-logistics-green/20">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-logistics-green to-logistics-dark-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-logistics-light-green text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {feature.highlight}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-logistics-green transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-logistics-green/5 to-logistics-light-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div onClick={()=>router.push("/contact")} className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-logistics-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-logistics-dark-green transition-all duration-300 cursor-pointer shadow-lg hover:shadow-logistics-green/25">
            <Truck className="w-5 h-5" />
            Start Your Land Transport Journey
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundTransportFeaturesSection;
