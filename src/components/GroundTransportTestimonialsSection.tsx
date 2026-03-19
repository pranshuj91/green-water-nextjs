
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Their land transport service saved our product launch when our regular carrier had delays. The team mobilized quickly and delivered our time-sensitive shipment perfectly on schedule.",
    name: "Sarah Johnson",
    position: "Logistics Manager",
    company: "TechVision Industries",
    stars: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250"
  },
  {
    quote: "We've been using their cross-country land transport for over three years now. The consistency and reliability have allowed us to optimize our inventory levels and reduce costs significantly.",
    name: "Michael Rodriguez",
    position: "Supply Chain Director",
    company: "Global Manufacturing Co.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250&h=250"
  },
  {
    quote: "Their specialized transport solutions for our sensitive medical equipment has been flawless. Temperature control, careful handling, and on-time delivery - everything we need for our critical shipments.",
    name: "Dr. Emily Chen",
    position: "Operations Head",
    company: "MediCore Solutions",
    stars: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250&h=250"
  }
];

const GroundTransportTestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients <span className="text-logistics-green">Say</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Hear directly from businesses that rely on our land transport solutions every day.
          </p>
        </div>

        {/* Testimonials in Unique Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative">
          {/* Background Elements */}
          <Quote className="absolute -top-10 -left-10 text-gray-100 w-20 h-20 transform -rotate-12" />
          <Quote className="absolute -bottom-10 -right-10 text-gray-100 w-20 h-20 transform rotate-12" />
          
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-xl p-8 relative z-10 border border-gray-100 hover:border-logistics-green/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-logistics-green rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Quote Text */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-logistics-green"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              
              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-logistics-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </div>
        
        {/* Stats Counter */}
        <div className="mt-20 bg-logistics-dark-green rounded-3xl p-10 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/map-background.svg')] opacity-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 counter">200+</div>
              <div className="text-logistics-light-green text-sm uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 counter">25,000+</div>
              <div className="text-logistics-light-green text-sm uppercase tracking-wider">Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 counter">500,000+</div>
              <div className="text-logistics-light-green text-sm uppercase tracking-wider">Miles Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 counter">99%</div>
              <div className="text-logistics-light-green text-sm uppercase tracking-wider">On-Time Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundTransportTestimonialsSection;
