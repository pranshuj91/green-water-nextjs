"use client"
import React from 'react';
import { Leaf, Shield, Zap, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
const AboutValuesSection = () => {
  const router = useRouter()
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Environmental responsibility drives our innovation in green logistics solutions.",
      color: "logistics-green"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Trust earned through consistent delivery and unwavering commitment to promises.",
      color: "logistics-blue"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and forward-thinking solutions.",
      color: "logistics-green"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Every decision is made with our clients' best interests and satisfaction in mind.",
      color: "logistics-blue"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Core <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principles that guide every decision, partnership, and mile we help your cargo travel.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-4 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                {/* Mobile Layout: Icon and Title Side by Side */}
                <div className="flex items-center gap-3 md:block mb-4 md:mb-6">
                  <div className={`w-8 h-8 md:w-12 md:h-12 bg-${value.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <value.icon className={`h-4 w-4 md:h-6 md:w-6 text-${value.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 md:hidden">{value.title}</h3>
                </div>
                
                {/* Desktop/Tablet Title (hidden on mobile) */}
                <h3 className="hidden md:block text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-logistics-blue to-logistics-green rounded-xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Experience Excellence?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let us show you how our commitment to excellence can transform your logistics experience.
            </p>
            <button onClick={()=>router.push("/contact")} className="bg-white text-logistics-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
