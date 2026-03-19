"use client"
import React from 'react';
import { Award, Target, Globe, TrendingUp, Users, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: "Precision Delivery",
    description: "99.2% on-time delivery rate with accurate ETAs and proactive communication for peace of mind.",
    stats: "99.2% on-time",
    color: "from-logistics-green to-logistics-dark-green"
  },
  {
    icon: Globe,
    title: "Extensive Network",
    description: "Coast-to-coast coverage with strategic hubs and partnerships for seamless cross-country transport.",
    stats: "50 states covered",
    color: "from-logistics-blue to-logistics-dark-blue"
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Award-winning service recognized for excellence in safety, efficiency, and customer satisfaction.",
    stats: "ISO 9001 certified",
    color: "from-logistics-light-green to-logistics-green"
  },
  {
    icon: TrendingUp,
    title: "Cost Efficiency",
    description: "Competitive pricing with transparent rates and fuel optimization strategies to reduce your costs.",
    stats: "Save up to 25%",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced drivers and logistics professionals committed to handling your cargo with expertise.",
    stats: "500+ drivers",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick quote turnaround and rapid deployment for urgent shipments and last-minute requests.",
    stats: "2-hour response",
    color: "from-green-500 to-teal-500"
  }
];

const GroundTransportWhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-logistics-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-logistics-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose Our <span className="text-logistics-green">Land Transport</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Experience the difference with our premium land transport services backed by 
            cutting-edge technology and decades of logistics expertise.
          </p>
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{
                marginTop: index % 2 === 1 &&  (typeof window !== "undefined" && window.innerWidth >= 1024) ? '4rem' : '0'
              }}
            >
              {/* Hexagonal Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-logistics-green/50 transition-all duration-500 group-hover:scale-105">
                {/* Icon with Gradient */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                  <reason.icon className="h-10 w-10 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-logistics-green transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {reason.description}
                </p>
                
                {/* Stats Badge */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-logistics-green/20 text-logistics-light-green px-4 py-2 rounded-full text-sm font-sem
                  ibold">
                    {reason.stats}
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

export default GroundTransportWhyChooseUsSection;
