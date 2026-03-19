"use client"
import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
const WhyUsHeroSection = () => {
  const currentYear = new Date().getFullYear();
  const foundatationYear = 2022;
  const finalYear = currentYear - foundatationYear;

  const router = useRouter();
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            Why Choose{" "}
            <span className="text-logistics-green">Green Water?</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            We're not just another logistics company. We're your strategic
            partner in global commerce, combining cutting-edge technology with
            sustainable practices to deliver exceptional results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              `${finalYear}+ Years of Excellence`,
              "99.8% On-Time Delivery",
              "Carbon Neutral Operations",
              "24/7 Global Support",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 md:gap-3 bg-gray-800 hover:bg-gray-700 rounded-lg py-3 md:py-4 px-4 md:px-6 transition-colors duration-300"
              >
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-logistics-green flex-shrink-0" />
                <span className="font-medium text-white text-sm md:text-base text-center">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button
              onClick={() => router.push("/contact")}
              className="bg-logistics-green hover:bg-logistics-dark-green text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              onClick={() =>
                document
                  .querySelector("#learn-more")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="outline"
              className="border-logistics-blue text-logistics-blue hover:bg-logistics-blue hover:text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsHeroSection;
