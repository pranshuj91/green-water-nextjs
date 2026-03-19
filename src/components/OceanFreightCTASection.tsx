
import React from 'react';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const OceanFreightCTASection = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-gradient-to-br from-logistics-blue via-logistics-dark-blue to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-logistics-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-logistics-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Ship with <span className="text-logistics-green">Confidence?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their ocean freight needs. Get your free quote today and experience the difference.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              className="bg-logistics-green hover:bg-logistics-dark-green text-white px-10 py-6 text-xl font-semibold shadow-2xl hover:shadow-logistics-green/25 transition-all duration-300 group"
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get Free Ocean Freight Quote
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-white  hover:bg-white hover:text-logistics-blue px-10 py-6 text-xl font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-logistics-green mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Call Us Now</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400 mt-1">Available 24/7</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Mail className="w-8 h-8 text-logistics-green mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email Quote</h3>
              <p className="text-gray-300">quotes@greenwaterfreight.com</p>
              <p className="text-sm text-gray-400 mt-1">Response within 2 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-logistics-green mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Quick Response</h3>
              <p className="text-gray-300">30-minute quote turnaround</p>
              <p className="text-sm text-gray-400 mt-1">For standard shipments</p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Start Your Ocean Freight Journey Today?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-logistics-green mb-2">Free</div>
                <div className="text-gray-300 text-sm">Quote & Consultation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-logistics-green mb-2">No</div>
                <div className="text-gray-300 text-sm">Hidden Fees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-logistics-green mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-logistics-green mb-2">Same</div>
                <div className="text-gray-300 text-sm">Day Response</div>
              </div>
            </div>
          </div>

          {/* Urgency Element */}
          <div className="mt-8 text-center">
            <p className="text-logistics-green font-semibold">
              🔥 Limited Time: Free cargo insurance for new customers this month!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanFreightCTASection;
