"use client"
import React from 'react';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

const WhyUsCTASection = () => {
  return (
    <section className="py-20 bg-logistics-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Green Water Difference?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of businesses worldwide who have transformed their logistics operations 
            with our innovative, sustainable, and reliable solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact">
              <Button className="bg-logistics-green hover:bg-logistics-dark-green text-white px-8 py-3">
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" className="border-white  hover:bg-white hover:text-logistics-blue px-8 py-3">
                Schedule a Consultation
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us Now</h3>
              <p className="text-blue-100">1-800-GREEN-WATER</p>
              <p className="text-blue-200 text-sm">Available 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">hello@greenwater.com</p>
              <p className="text-blue-200 text-sm">Quick response guaranteed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-blue-100">Chat with an expert</p>
              <p className="text-blue-200 text-sm">Instant support online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsCTASection;
