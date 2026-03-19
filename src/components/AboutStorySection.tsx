import React from "react";
import { Compass, Target, Award } from "lucide-react";

const AboutStorySection = () => {
  const currentYear = new Date().getFullYear();
  const foundatationYear = 2022;
  const newYear = currentYear - foundatationYear;
  return (
    <section id="our-story" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-logistics-blue/10 text-logistics-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Compass className="h-4 w-4" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Story Behind{" "}
              <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">
                Green Water
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to revolutionize global logistics while
              protecting our planet.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-logistics-blue/10 rounded-lg">
                  <Target className="h-6 w-6 text-logistics-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Our Foundation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded in 2022 with a simple yet powerful vision: to create
                    a logistics company that doesn't compromise between
                    efficiency and environmental responsibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-logistics-green/10 rounded-lg">
                  <Award className="h-6 w-6 text-logistics-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Industry Recognition
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our dedication has been recognized with multiple industry
                    awards for sustainability, innovation, and customer service
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-logistics-blue mb-2">
                    {newYear}+
                  </div>
                  <div className="text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-logistics-green mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-logistics-blue mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-logistics-green mb-2">
                    99%
                  </div>
                  <div className="text-gray-600">On-Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
