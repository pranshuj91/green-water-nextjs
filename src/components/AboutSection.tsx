"use client"
import React, { useState } from 'react';
import { Truck, Ship, Plane, Globe, Award, Users, Leaf, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const [showFullText, setShowFullText] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-logistics-blue/20 to-logistics-green/20 blur-2xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-logistics-green/20 to-teal-300/20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-300/20 to-logistics-blue/20 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-logistics-blue/10 text-logistics-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Leaf className="h-4 w-4" />
              About Our Company
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">Green Water</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the future of sustainable logistics with innovative solutions 
              that connect businesses worldwide while protecting our planet.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-center mb-12 md:mb-20">
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mission-heading">
                  Our Mission
                </h3>
                
                {/* Mobile version with read more functionality */}
                <div className="md:hidden">
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    At Green Water, we revolutionize logistics through sustainable practices and cutting-edge technology for efficient global trade without environmental compromise.
                  </p>
                  
                  {showFullText && (
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      We combine traditional expertise with innovative green solutions for efficient delivery while minimizing environmental impact.
                    </p>
                  )}
                  
                  <button
                    onClick={() => setShowFullText(!showFullText)}
                    className="text-logistics-blue font-medium hover:text-logistics-dark-blue transition-colors"
                  >
                    {showFullText ? 'Read Less' : 'Read More'}
                  </button>
                </div>
                
                {/* Desktop/Tablet version - full text */}
                <div className="hidden md:block">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    At Green Water, we're committed to revolutionizing the logistics industry 
                    through sustainable practices and cutting-edge technology. We believe that 
                    efficient global trade shouldn't come at the expense of our environment.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Our comprehensive approach combines traditional logistics expertise with 
                    innovative green solutions, ensuring your cargo reaches its destination 
                    efficiently while minimizing environmental impact.
                  </p>
                </div>
              </div>
              
              <div className="hidden lg:grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-300">
                  <div className="p-2 bg-logistics-blue/10 rounded-lg">
                    <Globe className="h-6 w-6 text-logistics-blue" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 block">Global Network</span>
                    <span className="text-sm text-gray-500">Worldwide Coverage</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-300">
                  <div className="p-2 bg-logistics-green/10 rounded-lg">
                    <Leaf className="h-6 w-6 text-logistics-green" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 block">Eco-Friendly</span>
                    <span className="text-sm text-gray-500">Sustainable Solutions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service boxes - hidden on mobile, single column on tablet, 2x2 grid on desktop */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onClick={()=>navigate('/services/ocean-freight')} className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/30 text-center group hover:bg-white/90 hover:bg-gradient-to-br hover:from-logistics-blue/5 hover:to-logistics-blue/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="p-4 bg-logistics-blue/10 rounded-2xl mx-auto w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-logistics-blue/20 group-hover:scale-110 transition-all duration-300">
                  <Ship className="h-10 w-10 text-logistics-blue group-hover:text-logistics-dark-blue transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-logistics-blue transition-colors duration-300">Ocean Freight</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Efficient ocean shipping solutions with global reach</p>
              </div>
              <div onClick={()=>navigate("/services/air-freight")} className="bg-white/70 cursor-pointer backdrop-blur-sm p-8 rounded-3xl border border-white/30 text-center group hover:bg-white/90 hover:bg-gradient-to-br hover:from-logistics-green/5 hover:to-logistics-green/10 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 bg-logistics-green/10 rounded-2xl mx-auto w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-logistics-green/20 group-hover:scale-110 transition-all duration-300">
                  <Plane className="h-10 w-10 text-logistics-green group-hover:text-logistics-dark-green transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-logistics-green transition-colors duration-300">Air Freight</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Fast and reliable air cargo services worldwide</p>
              </div>
              <div onClick={()=>navigate("/services/ground-transport")} className="bg-white/70 cursor-pointer backdrop-blur-sm p-8 rounded-3xl border border-white/30 text-center group hover:bg-white/90 hover:bg-gradient-to-br hover:from-logistics-blue/5 hover:to-logistics-blue/10 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 bg-logistics-blue/10 rounded-2xl mx-auto w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-logistics-blue/20 group-hover:scale-110 transition-all duration-300">
                  <Truck className="h-10 w-10 text-logistics-blue group-hover:text-logistics-dark-blue transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-logistics-blue transition-colors duration-300">Land Transport</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Comprehensive ground logistics solutions</p>
              </div>
              <div onClick={()=>navigate("/services#customs-clearance")} className="bg-white/70 cursor-pointer backdrop-blur-sm p-8 rounded-3xl border border-white/30 text-center group hover:bg-white/90 hover:bg-gradient-to-br hover:from-logistics-green/5 hover:to-logistics-green/10 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 bg-logistics-green/10 rounded-2xl mx-auto w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-logistics-green/20 group-hover:scale-110 transition-all duration-300">
                  <Globe className="h-10 w-10 text-logistics-green group-hover:text-logistics-dark-green transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-logistics-green transition-colors duration-300">Other Services</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Worldwide logistics network coverage</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These numbers reflect our commitment to excellence and sustainable growth in the logistics industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="p-2 md:p-4 bg-logistics-blue/10 rounded-2xl mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 group-hover:bg-logistics-blue/20 transition-colors">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-logistics-blue" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-logistics-blue mb-2">3+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Years Experience</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">Industry Leadership</div>
              </div>
              <div className="text-center group">
                <div className="p-2 md:p-4 bg-logistics-green/10 rounded-2xl mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 group-hover:bg-logistics-green/20 transition-colors">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-logistics-green" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-logistics-green mb-2">200+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Global Partners</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">Trusted Network</div>
              </div>
              <div className="text-center group">
                <div className="p-2 md:p-4 bg-logistics-blue/10 rounded-2xl mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 group-hover:bg-logistics-blue/20 transition-colors">
                  <Ship className="h-6 w-6 md:h-8 md:w-8 text-logistics-blue" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-logistics-blue mb-2">25K+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Shipments Delivered</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">Successful Deliveries</div>
              </div>
              <div className="text-center group">
                <div className="p-2 md:p-4 bg-logistics-green/10 rounded-2xl mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 group-hover:bg-logistics-green/20 transition-colors">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-logistics-green" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-logistics-green mb-2">99%</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Customer Satisfaction</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
