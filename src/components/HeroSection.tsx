"use client"
import React from 'react';
import { ArrowRight, Plane, Ship, Truck, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import LogisticsAnimatedBackground from './LogisticsAnimatedBackground';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Animated logistics background - hidden on mobile, visible on desktop/tablet */}
      <div className="hidden md:block">
        <LogisticsAnimatedBackground />
      </div>
      
      {/* Static world map background for mobile */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-br from-gray-900 via-logistics-dark-blue to-gray-800">
        {/* World map with pulsing dots */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/map-background.svg" 
            alt="World Map" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Pulsing dots representing 4 major logistics hubs */}
        <div className="absolute inset-0">
          {/* Major logistics hubs - reduced to 4 */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-logistics-blue rounded-full animate-pulse"></div>
          <div className="absolute top-2/5 right-1/3 w-3 h-3 bg-logistics-light-blue rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-logistics-green rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-logistics-blue rounded-full animate-pulse delay-1000"></div>
        </div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-32 md:pt-40 pb-8 md:pb-16 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6" style={{ lineHeight: '1.26' }}>
            <span className="block mb-2 animated-gradient bg-clip-text text-transparent">Navigate Global</span>
            <span className="animated-gradient-reverse bg-clip-text text-transparent">Trade Waters</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Connecting your business to world markets through intelligent logistics and sustainable practices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
            <Button className="bg-white text-logistics-dark-blue hover:bg-gray-100 px-8 py-6 rounded-md font-medium text-base w-full sm:w-auto">
              Explore our Services
            </Button>
            </Link>
            <Link href="/contact">
            <Button 
              variant="quote" 
              size="xl"
              className="w-full sm:w-auto group relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Shipping Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile-only animated transport vehicles with slower speeds and curved paths */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        {/* Transport vehicles with animated curved routes - slower speeds */}
        <div className="absolute inset-0">
          {/* Trans-Pacific Cargo Ship - Top curved route */}
          <Ship className="absolute w-4 h-4 text-blue-400 opacity-80 animate-northern-arc-route" 
                style={{
                  '--start-x': '-5%',
                  '--start-y': '20%',
                  '--end-x': '105%',
                  '--end-y': '25%',
                  animationDuration: '12s'
                } as React.CSSProperties} />
          
          {/* Trans-Atlantic Flight - Polar route */}
          <Plane className="absolute w-3 h-3 text-white opacity-70 animate-polar-route" 
                 style={{
                   '--start-x': '-3%',
                   '--start-y': '30%',
                   '--end-x': '103%',
                   '--end-y': '35%',
                   animationDuration: '10s',
                   animationDelay: '2s'
                 } as React.CSSProperties} />
          
          {/* Asia-Europe Truck - Overland route */}
          <Truck className="absolute w-3 h-3 text-yellow-400 opacity-75 animate-overland-north-route" 
                 style={{
                   '--start-x': '100%',
                   '--start-y': '40%',
                   '--end-x': '-5%',
                   '--end-y': '45%',
                   animationDuration: '14s',
                   animationDelay: '4s'
                 } as React.CSSProperties} />
          
          {/* Southern Ocean Ship - Cape route */}
          <Ship className="absolute w-3 h-3 text-green-400 opacity-70 animate-southern-atlantic-route" 
                style={{
                  '--start-x': '105%',
                  '--start-y': '60%',
                  '--end-x': '-5%',
                  '--end-y': '55%',
                  animationDuration: '16s',
                  animationDelay: '1s'
                } as React.CSSProperties} />
          
          {/* Pacific Flight - Southern hemisphere route */}
          <Plane className="absolute w-4 h-4 text-blue-300 opacity-80 animate-southern-hemisphere-route" 
                 style={{
                   '--start-x': '-5%',
                   '--start-y': '50%',
                   '--end-x': '105%',
                   '--end-y': '60%',
                   animationDuration: '11s',
                   animationDelay: '6s'
                 } as React.CSSProperties} />

          {/* Mediterranean Truck - Return route */}
          <Truck className="absolute w-3 h-3 text-orange-400 opacity-75 animate-return-northern-route" 
                 style={{
                   '--start-x': '100%',
                   '--start-y': '70%',
                   '--end-x': '-5%',
                   '--end-y': '65%',
                   animationDuration: '13s',
                   animationDelay: '3s'
                 } as React.CSSProperties} />

          {/* Additional Indian Ocean Ship */}
          <Ship className="absolute w-3 h-3 text-cyan-400 opacity-70 animate-southern-indian-ocean-route" 
                style={{
                  '--start-x': '-5%',
                  '--start-y': '75%',
                  '--end-x': '105%',
                  '--end-y': '70%',
                  animationDuration: '15s',
                  animationDelay: '5s'
                } as React.CSSProperties} />
        </div>
        
        {/* Gradient overlay for smooth blending */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-800 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
