"use client"
import React from 'react';
import { Clock, Users, Award, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const reasons = [
  {
    icon: Clock,
    title: "Speed & Reliability",
    description: "Industry-leading transit times with 99.5% on-time performance and real-time tracking throughout the journey.",
    stats: "1-5 days worldwide"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated air freight specialists with decades of experience in handling time-critical and complex shipments.",
    stats: "24/7 support"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning air freight services recognized by leading industry associations for excellence and innovation.",
    stats: "ISO certified"
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Competitive rates with flexible pricing options and volume discounts to optimize your shipping costs.",
    stats: "Save up to 30%"
  }
];

const AirFreightWhyChooseUsSection = () => {
  const router = useRouter()
  return (
    <section id='transit-times' className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-logistics-green">Our Air Freight</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Experience the difference with our premium air freight services backed by industry expertise and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center">
              {/* Icon */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-logistics-green to-logistics-dark-green rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-logistics-green transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {reason.description}
              </p>
              
              {/* Stats */}
              <div className="inline-flex items-center gap-2 bg-logistics-green/10 text-logistics-green px-4 py-2 rounded-full text-sm font-semibold">
                {reason.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Premium Air Freight?
            </h3>
            <p className="text-gray-600 mb-6">
              Get instant quotes and book your air freight shipment with our award-winning team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-logistics-green hover:bg-logistics-dark-green text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                onClick={() => {
                  router.push('/');
                  setTimeout(() => {
                    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Get Quote Now
              </button>
              <Link href="tel:+34 631701140">
              <button className="border-2 border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Call
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirFreightWhyChooseUsSection;
