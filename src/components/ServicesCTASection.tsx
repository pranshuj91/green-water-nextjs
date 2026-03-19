"use client"
import React from "react";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ServicesCTASection = () => {
  const router = useRouter();
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#F0F8FF" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-logistics-blue animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-logistics-green animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get <span className="text-logistics-blue">Started?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Let our logistics experts design a custom solution that perfectly
            fits your business needs and requirements
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-logistics-blue hover:bg-logistics-dark-blue text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
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

            {/* <Button
              variant="outline"
              className="hidden sm:flex border-2 border-logistics-green text-logistics-green hover:bg-logistics-green hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Consultation
            </Button> */}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-logistics-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our logistics experts
              </p>
              <Link href="tel:+34631701140">
                <Button
                  variant="link"
                  className="text-logistics-blue font-semibold"
                >
                  +34 631701140
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-logistics-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Get detailed quotes and information
              </p>
              <Link href="mailto:services@greenwater.com">
                <Button
                  variant="link"
                  className="text-logistics-green font-semibold"
                >
                  services@greenwater.com
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-logistics-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Live Chat
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team instantly
              </p>
              <Link href="/contact">
                <Button
                  variant="link"
                  className="text-logistics-blue font-semibold"
                >
                  Start Chat
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info - Hidden on mobile */}
        <div className="mt-16 text-center hidden sm:block">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-[30px] md:text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h3>
            <div className="flex justify-center items-center gap-8 md:grid md:grid-cols-3 md:gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-3xl lg:text-4xl font-bold text-logistics-blue mb-1 md:mb-2">
                  24/7
                </div>
                <p className="text-gray-600 text-xs md:text-base">
                  Customer Support
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-3xl lg:text-4xl font-bold text-logistics-green mb-1 md:mb-2">
                  50+
                </div>
                <p className="text-gray-600 text-xs md:text-base">
                  Global Destinations
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-3xl lg:text-4xl font-bold text-logistics-blue mb-1 md:mb-2">
                  99%
                </div>
                <p className="text-gray-600 text-xs md:text-base">
                  On-Time Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
