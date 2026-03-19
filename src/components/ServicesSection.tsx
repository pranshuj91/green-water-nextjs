
"use client"
import { Truck, Package, Plane, Ship, FileCheck, Cog, Archive, Globe, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";


export type Service = {
  title: string;
  slug: string;
  description: string;
  features: string[];
  color: string;
};
export const services = [
  {
    icon: Ship,
    title: "Ocean Transport",
    description: "Comprehensive sea freight solutions with global port coverage, offering both FCL and LCL options for cost-effective shipping.",
    features: ["FCL & LCL Services", "Global Port Coverage", "Container Tracking"],
    color: "from-logistics-blue to-logistics-dark-blue",
    slug: "ocean-freight"
  },
  {
    icon: Truck,
    title: "Land Transport",
    description: "Reliable overland transportation services across continents with real-time tracking and flexible delivery options.",
    features: ["Cross-border Services", "Last-mile Delivery", "Temperature Control"],
    color: "from-logistics-green to-logistics-dark-green",
    slug: "land-transport"
  },
  {
    icon: Plane,  
    title: "Air Transport",
    description: "Fast and secure air cargo services for time-sensitive shipments with priority handling and express delivery.",
    features: ["Express Delivery", "Priority Handling", "Temperature Sensitive"],
    color: "from-logistics-blue to-logistics-dark-blue",
    slug: "air-freight"
  },
  {
    icon: Package,
    title: "Freight & Logistics",
    description: "End-to-end freight management with integrated logistics solutions, inventory control, and supply chain optimization.",
    features: ["Supply Chain Management", "Inventory Control", "Distribution Services"],
    color: "from-logistics-green to-logistics-dark-green",
    "slug": ""
  },
  {
    icon: Cog,
    title: "Custom Services",
    description: "Tailored logistics solutions designed to meet your specific business requirements and industry challenges.",
    features: ["Bespoke Solutions", "Industry Expertise", "Scalable Services"],
    color: "from-logistics-blue to-logistics-dark-blue",
    slug: "/"
  },
  {
    icon: Archive,
    title: "Project Cargo",
    description: "Specialized handling of oversized, heavy-lift, and complex project cargo with expert planning and execution.",
    features: ["Heavy Lift Cargo", "Route Planning", "Special Equipment"],
    color: "from-logistics-green to-logistics-dark-green",
    slug: ""
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert customs brokerage services ensuring smooth clearance with compliance management and documentation support.",
    features: ["Documentation Support", "Compliance Management", "Fast Processing"],
    color: "from-logistics-blue to-logistics-dark-blue",
    slug: "#customs-clearance"
  },
  {
    icon: Globe,
    title: "Warehousing",
    description: "Modern warehousing facilities with advanced inventory management, pick & pack services, and distribution centers.",
    features: ["Inventory Management", "Pick & Pack", "Distribution Centers"],
    color: "from-logistics-green to-logistics-dark-green",
    slug: "warehousing"
  }
];





const ServicesSection = () => {
 const router = useRouter();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements - Hidden as requested */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-logistics-blue"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-logistics-green"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-logistics-light-blue"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-blue/10 text-logistics-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            Complete Logistics Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="text-logistics-blue">Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Comprehensive logistics solutions designed to meet your specific business requirements across all transportation modes and supply chain needs
          </p>
        </div>
        
        {/* Desktop version - unchanged */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service:any, index) => (
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
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature:any, featureIndex:any) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-logistics-blue"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="relative">

                <Link href={`/services/${service.slug}`}>
                <Button 
                  variant="link" 
                  className="text-logistics-blue p-0 hover:text-logistics-dark-blue font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more →
                </Button>
                </Link>
              </CardFooter>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-logistics-blue to-logistics-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Mobile version - collapsible with updated styling */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
              <Card className="bg-white border-0 shadow-lg overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md`}>
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 text-left">
                        {service.title}
                      </CardTitle>
                    </div>
                    <ChevronDown 
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`} 
                    />
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="px-4 pb-4">
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-logistics-blue"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={`/services/${service.slug}`}>
                      <Button 
                        variant="link" 
                        className="text-logistics-blue p-0 hover:text-logistics-dark-blue font-semibold"
                      >
                        Learn more →
                      </Button>
                    </Link>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our logistics experts are ready to design a tailored solution that perfectly fits your business needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-logistics-blue hover:bg-logistics-dark-blue text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  router.push('/');
                  setTimeout(() => {
                    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Get Custom Quote
              </Button>
              <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-logistics-blue text-logistics-blue hover:bg-logistics-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Speak with Expert
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ServicesSection;
