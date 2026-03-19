"use client"
import React from "react";
import { Ship, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
const OceanFreightHeroSection = () => {
  const currentYear = new Date().getFullYear();
  const foundatationYear = 2022;
  const finalYear = currentYear-foundatationYear
  const router = useRouter();
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-logistics-dark-blue overflow-hidden">
      {/* Background Elements - Hidden on mobile, visible on md and up */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute top-20 left-10 w-64 h-64 bg-logistics-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-logistics-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-logistics-light-blue/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 pt-44 pb-16 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-white text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-logistics-blue/20 text-logistics-light-blue px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Ship className="w-4 h-4" />
              Ocean Freight Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sail Your Cargo to
              <span className="text-logistics-blue block">Global Markets</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Cost-effective ocean freight solutions with global port coverage,
              reliable scheduling, and expert handling for all your sea cargo
              needs.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              {[
                "Up to 60% cost savings vs air freight",
                "200+ global port destinations",
                "Real-time cargo tracking",
                "Expert customs clearance",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <CheckCircle className="w-5 h-5 text-logistics-green flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                className="bg-logistics-blue hover:bg-logistics-dark-blue text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-logistics-blue/25 transition-all duration-300 group"
                onClick={() => {
                  router.push("/");
                  setTimeout(() => {
                    document
                      .getElementById("stats")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() =>
                  document
                    .querySelector("#our-services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className="border-2 border-white  hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                View Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-700 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-logistics-blue mb-1">
                    {finalYear}+
                  </div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-logistics-green mb-1">
                    25K+
                  </div>
                  <div className="text-gray-400 text-sm">
                    Containers Shipped
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-logistics-blue mb-1">
                    99%
                  </div>
                  <div className="text-gray-400 text-sm">On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OceanFreightHeroSection;
