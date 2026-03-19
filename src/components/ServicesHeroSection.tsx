"use client"
import React from 'react';
import { Ship, Truck, Plane, Package, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useRouter } from 'next/navigation';

const ServicesHeroSection = () => {
  const router = useRouter()
  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center pt-32 pb-16 md:pb-20 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-logistics-blue animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-logistics-green animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-logistics-light-blue animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-logistics-light-green animate-pulse delay-700"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-gray-700"></div>
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Ship className="absolute top-20 left-20 w-6 h-6 md:w-8 md:h-8 text-logistics-blue opacity-20 animate-bounce" style={{ animationDelay: '0s' }} />
        <Truck className="absolute top-40 right-32 w-5 h-5 md:w-6 md:h-6 text-logistics-green opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
        <Plane className="absolute bottom-32 left-16 w-6 h-6 md:w-7 md:h-7 text-logistics-light-blue opacity-20 animate-bounce" style={{ animationDelay: '2s' }} />
        <Package className="absolute bottom-20 right-20 w-5 h-5 md:w-6 md:h-6 text-logistics-light-green opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }} />
        <Globe className="absolute top-1/2 left-1/4 w-6 h-6 md:w-8 md:h-8 text-logistics-blue opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-logistics-blue/20 text-logistics-blue px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 backdrop-blur-sm border border-logistics-blue/30">
            <Package className="w-3 h-3 md:w-4 md:h-4" />
            Complete Logistics Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">Services</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
            Comprehensive logistics solutions designed to move your business forward with precision, reliability, and innovation
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            From ocean freight to last-mile delivery, we provide end-to-end logistics services that connect your business to global markets while maintaining the highest standards of efficiency and sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
            <Button onClick={()=>document.querySelector("#services-section")?.scrollIntoView({behavior:'smooth'})} className="w-full sm:w-auto bg-logistics-blue hover:bg-logistics-dark-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300"
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get Custom Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-logistics-blue mb-1 md:mb-2">50+</div>
              <div className="text-gray-400 text-xs md:text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-logistics-green mb-1 md:mb-2">25K+</div>
              <div className="text-gray-400 text-xs md:text-sm">Shipments Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-logistics-blue mb-1 md:mb-2">24/7</div>
              <div className="text-gray-400 text-xs md:text-sm">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-logistics-green mb-1 md:mb-2">99%</div>
              <div className="text-gray-400 text-xs md:text-sm">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ServicesHeroSection;
