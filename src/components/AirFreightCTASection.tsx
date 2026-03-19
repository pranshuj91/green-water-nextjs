"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { ArrowRight, Plane, Clock, Shield, CloudCog } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
const AirFreightCTASection = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-gradient-to-br from-logistics-green via-logistics-dark-green to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-logistics-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ship Your Cargo by Air{" "}
            <span className="text-logistics-light-green">Today</span>
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg mb-8">
            Experience the speed and reliability of our premium air freight
            services. Get your time-critical shipments delivered fast.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              className="bg-white text-logistics-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="tel:+34 631701140">
            <Button
              variant="outline"
              className="border-2 border-white hover:bg-white hover:text-logistics-green px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              Call +34 631701140
            </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Express Delivery</h3>
            <p className="text-gray-200">
              Next-day delivery available to major destinations worldwide
            </p>
          </div>

          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
            <p className="text-gray-200">
              Monitor your shipment every step of the way with live updates
            </p>
          </div>

          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Handling</h3>
            <p className="text-gray-200">
              Advanced security protocols and comprehensive insurance coverage
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-gray-200 mb-6">
              Our air freight specialists are here to help you select the
              perfect shipping solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={()=>router.push("/contact")}
                variant="outline"
                className="border-2 border-white  hover:bg-white hover:text-logistics-green px-6 py-3 font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </Button>
              {/* <Button
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-logistics-green px-6 py-3 font-semibold transition-all duration-300"
              >
                Download Rate Guide
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirFreightCTASection;
