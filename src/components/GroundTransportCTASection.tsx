"use client"
import React from 'react';
import { ArrowRight, Truck, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { useRouter } from 'next/navigation';
const GroundTransportCTASection = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-logistics-dark-green relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/map-background.svg')] bg-no-repeat bg-cover opacity-10"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-logistics-green/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-logistics-light-green/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="text-logistics-light-green font-semibold mb-4 uppercase tracking-wider flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Ready to Ship?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Get Your <span className="text-logistics-light-green">Land Transport</span> Quote in Minutes
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Fill out the form for an instant quote or speak with one of our land transport specialists 
                to discuss your specific requirements and customize the perfect solution.
              </p>
              
              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, text: "Quick response within 2 hours" },
                  { icon: Truck, text: "Flexible vehicle options for any cargo" },
                  { icon: MapPin, text: "Service across all 50 states" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-logistics-green/20 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-logistics-light-green" />
                    </div>
                    <span className="text-white">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Phone Contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-logistics-green flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">For urgent inquiries</p>
                  <a href="tel:1-800-SHIPNOW" className="text-white text-xl font-bold hover:text-logistics-light-green transition-colors">
                    1-800-SHIPNOW
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Quote</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(123) 456-7890" />
                  </div>
                  
                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* From */}
                  <div className="space-y-2">
                    <Label htmlFor="from">Origin Location</Label>
                    <Input id="from" placeholder="City, State, ZIP" />
                  </div>
                  
                  {/* To */}
                  <div className="space-y-2">
                    <Label htmlFor="to">Destination</Label>
                    <Input id="to" placeholder="City, State, ZIP" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cargo">Cargo Description</Label>
                  <Input id="cargo" placeholder="Brief description of your shipment" className="mt-2" />
                </div>
                
                <Button 
                  className="w-full bg-logistics-green hover:bg-logistics-dark-green text-white py-6 rounded-xl text-lg font-semibold shadow-xl hover:shadow-logistics-green/25 group transition-all duration-300"
                  onClick={() => {
                    router.push('/');
                    setTimeout(() => {
                      document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className="text-sm text-center text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroundTransportCTASection;
