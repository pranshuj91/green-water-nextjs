
import React from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const AboutMissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-logistics-blue/10 border-2 border-logistics-blue/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-logistics-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-logistics-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize global logistics by delivering sustainable, efficient, and reliable transportation solutions that connect businesses worldwide while protecting our planet for future generations.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-logistics-green/10 border-2 border-logistics-green/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-logistics-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-logistics-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the world's leading green logistics provider, setting the standard for environmental responsibility and operational excellence in the shipping industry.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-logistics-blue/10 border-2 border-logistics-blue/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-logistics-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-logistics-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering businesses to reach new markets while minimizing their environmental footprint through innovative, sustainable logistics solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
