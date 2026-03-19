"use client"
import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";

const WarehousingCTASection = () => {
  const router = useRouter();
  return (
    <section className="py-24 bg-gradient-to-r from-logistics-blue via-logistics-light-blue to-logistics-green animated-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your{" "}
            <span className="text-white">Warehousing</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get a customized warehousing solution tailored to your business
            needs. Our experts are ready to help you streamline your operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              className="bg-white text-logistics-blue hover:bg-white/90 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Link to="tel+34632972588">
              <Button
                variant="outline"
                className="border-2 border-white text-black hover:bg-white hover:text-logistics-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </Link> */}
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Phone className="w-5 h-5 text-white" />
              <span className="font-medium">Call: +34 631701140</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Mail className="w-5 h-5 text-white" />
              <span className="font-medium">
                Email: warehousing@greenwater.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehousingCTASection;
