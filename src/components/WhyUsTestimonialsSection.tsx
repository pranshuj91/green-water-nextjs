"use client"
import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
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
    role: "Supply Chain Director",
    company: "TechGlobal Inc.",
    rating: 5,
    content: "Green Water transformed our logistics operations. Their carbon-neutral approach aligns perfectly with our sustainability goals, and their delivery times are unmatched.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Pacific Exports",
    rating: 5,
    content: "The AI-powered tracking system gives us complete visibility into our shipments. We've reduced delays by 80% since switching to Green Water.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Logistics Coordinator",
    company: "Global Manufacturing",
    rating: 5,
    content: "Their dedicated account management team feels like an extension of our own company. The 24/7 support has been invaluable for our international operations.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    role: "Procurement Manager",
    company: "International Trade Co.",
    rating: 5,
    content: "Exceptional service quality and reliability. Their team goes above and beyond to ensure our shipments arrive on time, every time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Wang",
    role: "Export Director",
    company: "Global Solutions Ltd.",
    rating: 5,
    content: "Working with Green Water has streamlined our entire export process. Their expertise in international regulations is unmatched.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  }
];

const WhyUsTestimonialsSection = () => {
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
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the businesses that have transformed their logistics with Green Water.
            </p>
          </div>

          <div className="relative">
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
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm h-full flex flex-col">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-sm md:text-base">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm md:text-base">
                            {testimonial.name}
                          </div>
                          <div className="text-logistics-blue text-xs md:text-sm">
                            {testimonial.role}
                          </div>
                          <div className="text-gray-500 text-xs md:text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
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
        </div>
      </div>
    </section>
  );
};

export default WhyUsTestimonialsSection;
