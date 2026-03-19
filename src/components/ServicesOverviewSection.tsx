
import React from 'react';
import { Ship, Truck, Plane, Package, FileCheck, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective sea freight solutions with global coverage and flexible scheduling options.",
    color: "from-logistics-blue to-logistics-dark-blue"
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and secure air cargo services for time-sensitive shipments worldwide.",
    color: "from-logistics-green to-logistics-dark-green"
  },
  {
    icon: Truck,
    title: "Ground Transport",
    description: "Reliable overland transportation with real-time tracking and flexible delivery.",
    color: "from-logistics-blue to-logistics-dark-blue"
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Modern storage facilities with advanced inventory management systems.",
    color: "from-logistics-green to-logistics-dark-green"
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert customs brokerage ensuring smooth clearance and compliance.",
    color: "from-logistics-blue to-logistics-dark-blue"
  },
  {
    icon: Globe,
    title: "Supply Chain Management",
    description: "End-to-end supply chain optimization and management solutions.",
    color: "from-logistics-green to-logistics-dark-green"
  }
];

const ServicesOverviewSection = () => {
  return (
    <section id='services-section' className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-logistics-blue"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-logistics-green"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-blue/10 text-logistics-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            Service Portfolio
          </div>
          <h2 className="text-[30px] md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What We <span className="text-logistics-blue">Offer</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive logistics services tailored to meet your unique business needs across all modes of transportation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative">
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-logistics-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* <Button 
                  variant="link" 
                  className="text-logistics-blue p-0 hover:text-logistics-dark-blue font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more →
                </Button> */}
              </CardContent>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-logistics-blue to-logistics-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
