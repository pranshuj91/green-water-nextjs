
import React from 'react';
import { Container, Globe, Shield, Clock, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

const features = [
  {
    icon: Container,
    title: "FCL & LCL Services",
    description: "Full Container Load for large shipments or Less Container Load for smaller cargo with competitive rates.",
    color: "logistics-blue"
  },
  {
    icon: Globe,
    title: "Global Port Network",
    description: "Access to 200+ major ports worldwide with established partnerships and local expertise.",
    color: "logistics-green"
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description: "Comprehensive cargo protection with full insurance coverage and claims support.",
    color: "logistics-blue"
  },
  {
    icon: Clock,
    title: "Reliable Transit Times",
    description: "Consistent sailing schedules with accurate ETAs and proactive delay notifications.",
    color: "logistics-green"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Rates",
    description: "Competitive ocean freight rates with transparent pricing and no hidden fees.",
    color: "logistics-blue"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account managers providing expert guidance throughout your shipment journey.",
    color: "logistics-green"
  }
];

const OceanFreightFeaturesSection = () => {
  return (
    <section id='our-services' className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-logistics-blue"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-logistics-green"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-blue/10 text-logistics-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Container className="w-4 h-4" />
            Ocean Freight Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Our <span className="text-logistics-blue">Ocean Freight</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive sea freight solutions designed to optimize your supply chain with reliability, cost-effectiveness, and global reach
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

export default OceanFreightFeaturesSection;
