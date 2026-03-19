"use client"
import React from 'react';
import { Warehouse, ArrowRight, Shield, Clock, BarChart3 } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useRouter } from 'next/navigation';
const WarehousingHeroSection = () => {
  const router = useRouter()
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden pt-[120px] pb-[100px]">
      {/* Clean Geometric Background - Hidden on mobile */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-logistics-blue"></div>
        <div className="absolute bottom-32 left-16 w-64 h-64 rounded-full bg-logistics-green"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rotate-45 bg-gradient-to-br from-logistics-light-blue to-logistics-light-green opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* SEO-Optimized Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Warehouse className="w-4 h-4" />
            Professional Warehousing & Distribution Services
          </div>

          {/* SEO-Optimized Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Smart <span className="text-logistics-blue">Warehousing</span><br />
            <span className="text-logistics-green">Solutions</span>
          </h1>

          {/* SEO-Rich Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Advanced warehouse management and distribution services designed to optimize your supply chain, reduce costs, and accelerate delivery times across North America.
          </p>

          {/* SEO Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            From inventory management to order fulfillment, our state-of-the-art facilities and technology-driven approach ensure your products are stored securely and shipped efficiently to meet your customers' demands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              className="bg-logistics-blue hover:bg-logistics-dark-blue text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get Warehousing Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={()=>document.querySelector("#facilities")?.scrollIntoView({behavior:"smooth"})}
              variant="outline" 
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Tour Our Facilities
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-logistics-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-logistics-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Storage</h3>
              <p className="text-gray-600">24/7 security monitoring and climate-controlled environments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-logistics-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-logistics-green" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Fulfillment</h3>
              <p className="text-gray-600">Same-day order processing and next-day shipping options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-logistics-light-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-logistics-light-blue" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">Advanced inventory tracking and performance reporting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehousingHeroSection;
