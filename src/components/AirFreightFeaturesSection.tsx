
import React from 'react';
import { Plane, Clock, Shield, Thermometer, Package, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

const features = [
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Next-day and express delivery options for urgent shipments with guaranteed time-definite services.",
    color: "logistics-green"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to 200+ airlines and cargo networks covering every major destination worldwide.",
    color: "logistics-blue"
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Climate-controlled solutions for pharmaceuticals, perishables, and temperature-sensitive cargo.",
    color: "logistics-green"
  },
  {
    icon: Shield,
    title: "Cargo Security",
    description: "Enhanced security protocols with full chain of custody and comprehensive insurance coverage.",
    color: "logistics-blue"
  },
  {
    icon: Package,
    title: "Specialized Handling",
    description: "Expert handling for dangerous goods, oversized cargo, and high-value shipments.",
    color: "logistics-green"
  },
  {
    icon: Plane,
    title: "Charter Services",
    description: "Dedicated charter flights for time-critical or oversized shipments that require special handling.",
    color: "logistics-blue"
  }
];

const AirFreightFeaturesSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-logistics-green"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-logistics-blue"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-green/10 text-logistics-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Plane className="w-4 h-4" />
            Air Freight Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Our <span className="text-logistics-green">Air Freight</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Fast, reliable air cargo solutions designed for time-critical shipments with global reach and specialized handling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/5 to-${feature.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 rounded-2xl bg-${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className={`text-xl font-bold text-gray-900 group-hover:text-${feature.color} transition-colors duration-300`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Hover indicator */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirFreightFeaturesSection;
