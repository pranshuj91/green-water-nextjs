
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/card';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "MedTech Solutions",
    role: "Supply Chain Director",
    content: "Their air freight service saved our product launch. Time-critical medical equipment delivered on schedule with perfect handling.",
    rating: 5,
    shipment: "Medical Equipment to Germany"
  },
  {
    name: "Marcus Chen",
    company: "Electronics Corp",
    role: "Logistics Manager",
    content: "Exceptional service for our high-value electronics. Temperature control and security measures exceeded our expectations.",
    rating: 5,
    shipment: "Electronics to Singapore"
  },
  {
    name: "Emma Rodriguez",
    company: "Fashion House",
    role: "Operations Manager",
    content: "Fast fashion demands fast shipping. Their express service helps us get products to market ahead of competitors.",
    rating: 5,
    shipment: "Garments to New York"
  }
];

const AirFreightTestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-logistics-green">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Here's what businesses say about our air freight services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-logistics-green" />
              </div>
              
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-logistics-green text-logistics-green" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Shipment Info */}
                <div className="bg-logistics-green/10 text-logistics-green px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {testimonial.shipment}
                </div>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-logistics-green font-medium">{testimonial.role}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </CardContent>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-logistics-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-logistics-green mb-2">25K+</div>
              <div className="text-gray-600">Packages Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-logistics-blue mb-2">99%</div>
              <div className="text-gray-600">On-Time Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-logistics-green mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-logistics-blue mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirFreightTestimonialsSection;
