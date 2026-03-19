"use client"
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

const AboutHeroSection = () => {
  return (
    <section className="relative  bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-logistics-blue/5 blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 rounded-full bg-logistics-green/3 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
            About{' '}
            <span className="bg-gradient-to-r from-logistics-green to-logistics-blue bg-clip-text text-transparent">Green Water</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Pioneering sustainable logistics with innovation and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button onClick={()=>document.querySelector("#our-story")?.scrollIntoView({behavior:'smooth'})}
              size="lg" 
              className="w-full sm:w-auto bg-logistics-blue hover:bg-logistics-dark-blue text-lg px-8 py-4"
            >
              Our Story
            </Button>
            {/* <Button onClick={()=>document.querySelector("#out-team")?.scrollIntoView({behavior:'smooth'})}
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white text-lg px-8 py-4"
            >
              Meet Our Team
            </Button> */}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Discover Our Journey</span>
              <ArrowDown className="w-6 h-6 animate-bounce text-logistics-blue" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
