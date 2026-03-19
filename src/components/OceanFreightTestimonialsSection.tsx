"use client"
import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import type { CarouselApi } from "@/src/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Global Electronics Inc.",
    role: "Supply Chain Director",
    content: "Green Water's ocean freight service has been a game-changer for our business. Their reliability and cost-effectiveness have helped us reduce shipping costs by 40% while maintaining excellent delivery times.",
    rating: 5,
    shipments: "200+ shipments"
  },
  {
    name: "Michael Chen",
    company: "Pacific Trading Co.",
    role: "Logistics Manager",
    content: "Outstanding service from quote to delivery. Their real-time tracking system and proactive communication kept us informed every step of the way. Highly recommend for any ocean freight needs.",
    rating: 5,
    shipments: "150+ shipments"
  },
  {
    name: "Emma Rodriguez",
    company: "International Textiles Ltd.",
    role: "Operations Manager",
    content: "Professional, reliable, and cost-effective. Green Water handled our complex multi-port shipments flawlessly. Their expertise in customs clearance saved us significant time and hassle.",
    rating: 5,
    shipments: "200+ shipments"
  }
];

const OceanFreightTestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set initial current slide
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll functionality
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Go back to first slide
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-logistics-blue"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-logistics-green"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-logistics-green/10 text-logistics-green px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            What Our <span className="text-logistics-blue">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about our ocean freight services
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="group relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-logistics-blue/5 to-logistics-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-6 md:p-8 relative h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-logistics-blue/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-logistics-blue group-hover:text-white transition-all duration-300">
                        <Quote className="h-5 w-5 md:h-6 md:w-6 text-logistics-blue group-hover:text-white" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-700 mb-6 leading-relaxed italic text-sm md:text-base flex-grow">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="border-t border-gray-100 pt-4 md:pt-6 mt-auto">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">{testimonial.name}</h4>
                            <p className="text-xs md:text-sm text-gray-600 mb-1">{testimonial.role}</p>
                            <p className="text-xs md:text-sm font-semibold text-logistics-blue">{testimonial.company}</p>
                          </div>
                          <div className="text-right ml-2">
                            <div className="text-xs md:text-sm font-semibold text-logistics-green bg-logistics-green/10 px-2 md:px-3 py-1 rounded-full">
                              {testimonial.shipments}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-logistics-blue to-logistics-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-12" />
          </Carousel>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === current ? 'bg-logistics-blue' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 md:mt-16">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-logistics-blue mb-1 md:mb-2">200+</div>
                <div className="text-gray-600 text-xs md:text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-logistics-green mb-1 md:mb-2">4.9/5</div>
                <div className="text-gray-600 text-xs md:text-sm">Client Rating</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-logistics-blue mb-1 md:mb-2">25K+</div>
                <div className="text-gray-600 text-xs md:text-sm">Successful Shipments</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-logistics-green mb-1 md:mb-2">99%</div>
                <div className="text-gray-600 text-xs md:text-sm">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanFreightTestimonialsSection;
