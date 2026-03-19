"use client"
import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Globe, Award, Package, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    number: 99.8,
    suffix: "%",
    label: "On-Time Delivery"
  },
  {
    icon: Users,
    number: 200,
    suffix: "+",
    label: "Happy Clients"
  },
  {
    icon: Globe,
    number: 65,
    suffix: "+",
    label: "Countries Served"
  },
  {
    icon: Package,
    number: 25000,
    suffix: "+",
    label: "Shipments Delivered"
  },
  {
    icon: Clock,
    number: 24,
    suffix: "/7",
    label: "Customer Support"
  },
  {
    icon: Award,
    number: 20,
    suffix: "+",
    label: "Industry Awards"
  }
];

const CountingNumber = ({ end, suffix, duration = 2000 }:{end:any, suffix:any, duration :any}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startTime = Date.now();
          const startValue = 0;
          
          const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = startValue + (end - startValue) * easeOutQuart;
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, hasStarted]);

  const formatNumber = (num:any) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return Math.floor(num).toString();
  };

  return (
    <span ref={elementRef}>
      {end >= 1000 ? formatNumber(count) : Math.floor(count)}{suffix}
    </span>
  );
};

const WhyUsStatsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Numbers That Speak Volumes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record of excellence is measured in real results and satisfied customers across the globe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 md:p-6 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-logistics-blue/10 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <stat.icon className="h-4 w-4 md:h-5 md:w-5 text-logistics-blue" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">
                      <CountingNumber 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2000 + index * 200}
                      />
                    </div>
                    
                    <div className="text-xs md:text-sm font-semibold text-logistics-blue">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsStatsSection;
