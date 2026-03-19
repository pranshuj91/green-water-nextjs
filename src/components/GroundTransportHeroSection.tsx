"use client"
import React from 'react';
import { Truck, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { useRouter } from 'next/navigation';
const GroundTransportHeroSection = () => {
  const router = useRouter()
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-logistics-dark-green via-gray-900 to-black overflow-hidden">
      {/* Animated Road Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-logistics-green to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-logistics-light-green to-transparent opacity-40 animate-pulse delay-500"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-logistics-green to-transparent opacity-60 animate-pulse delay-1000"></div>
      </div>

      {/* Moving Truck Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 animate-[slide-in-right_8s_linear_infinite]">
          <Truck className="w-8 h-8 text-logistics-green opacity-80" />
        </div>
        <div className="absolute top-1/2 right-0 animate-[slide-out-right_10s_linear_infinite_reverse]">
          <Truck className="w-6 h-6 text-logistics-light-green opacity-60" />
        </div>
        <div className="absolute top-3/4 left-0 animate-[slide-in-right_12s_linear_infinite_delay-2s]">
          <Truck className="w-7 h-7 text-logistics-green opacity-70" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-44 pb-16 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-white text-center max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-logistics-green/20 text-logistics-light-green px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-logistics-green/30">
              <Truck className="w-5 h-5" />
              Land Transport Solutions
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-logistics-light-green to-logistics-green bg-clip-text text-transparent">
                Connect Every Mile
              </span>
              <br />
              <span className="text-white text-5xl md:text-7xl">
                Deliver Every Promise
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              Seamless land transportation across continents with real-time tracking, 
              flexible scheduling, and unmatched reliability for your most critical shipments.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
              {[
                { icon: MapPin, text: "Door-to-door delivery" },
                { icon: CheckCircle, text: "Same-day options" },
                { icon: Truck, text: "Specialized vehicles" },
                { icon: ArrowRight, text: "Cross-border expertise" }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-logistics-green" />
                  <span className="text-gray-300 text-sm text-center">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button onClick={()=>router.push("/contact")} className="bg-logistics-green hover:bg-logistics-dark-green text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-logistics-green/25 transition-all duration-300 group">
                Plan Your Route
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button 
                variant="outline" 
                className="border-2 border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Track Shipment
              </Button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-4xl font-bold text-logistics-green mb-2">500K+</div>
                <div className="text-gray-400 text-sm">Miles Covered Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-logistics-light-green mb-2">48H</div>
                <div className="text-gray-400 text-sm">Average Transit Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-logistics-green mb-2">98.7%</div>
                <div className="text-gray-400 text-sm">Delivery Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundTransportHeroSection;
