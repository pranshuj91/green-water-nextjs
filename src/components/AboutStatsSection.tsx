
import React from 'react';
import { TrendingUp, Target, Award, Zap, Globe, Users, Leaf, Clock } from 'lucide-react';


const AboutStatsSection = () => {
  const currentYear = new Date().getFullYear()
  const foundatationYear = 2022
  const finalYear = currentYear-foundatationYear
  const stats = [
    {
      icon: TrendingUp,
      number: `${finalYear}+`,
      label: "Years of Excellence",
      description: "Delivering consistent growth and innovation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Global reach with local expertise",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Clients",
      description: "Trusted by businesses worldwide",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      number: "99.8%",
      label: "On-Time Delivery",
      description: "Reliability you can count on",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Leaf,
      number: "40%",
      label: "Carbon Reduction",
      description: "Leading sustainability efforts",
      color: "from-green-600 to-lime-500"
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Customer Support",
      description: "Always here when you need us",
      color: "from-yellow-500 to-orange-400"
    },
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards",
      description: "Recognized for excellence",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Clock,
      number: "2M+",
      label: "Shipments Delivered",
      description: "Proven track record of success",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/2 h-96 bg-gradient-to-r from-logistics-blue/3 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-1/2 h-96 bg-gradient-to-l from-logistics-green/3 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-logistics-blue/5 to-logistics-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-logistics-blue/10 text-logistics-blue px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-5 w-5" />
              Our Impact in Numbers
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
              Measuring{' '}
              <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">
                Our Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Numbers that tell the story of our commitment, growth, and the trust 
              our clients place in us every day.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ 
                  animation: `fadeInScale 0.8s ease-out ${index * 0.1}s both` 
                }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 group-hover:text-logistics-blue transition-colors">
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-bold text-gray-700 mb-3">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gray-200/50 transition-all duration-300"></div>
                  
                  {/* Floating Decoration */}
                  <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-150`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Highlights */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Achievements That{' '}
                  <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">
                    Define Us
                  </span>
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Every number represents a milestone in our journey toward excellence. 
                  These achievements reflect not just our growth, but our unwavering 
                  commitment to our clients and the environment.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-logistics-blue to-logistics-green rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Industry Leadership</h4>
                    <p className="text-gray-600">Recognized as a pioneer in sustainable logistics solutions across Europe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-logistics-green to-logistics-blue rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Customer Satisfaction</h4>
                    <p className="text-gray-600">Consistently rated among the top logistics providers for service quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 bg-gradient-to-r from-logistics-blue to-logistics-green rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Environmental Impact</h4>
                    <p className="text-gray-600">Leading carbon reduction efforts in the logistics industry.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-logistics-blue/10 to-logistics-green/10 rounded-3xl p-8 backdrop-blur-sm border border-white/50">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Growth Trajectory</h4>
                  <p className="text-gray-600">Our consistent growth over the years</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">2020</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-logistics-blue to-logistics-green w-3/4 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-bold">75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">2022</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-logistics-blue to-logistics-green w-4/5 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-bold">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">2024</span>
                    <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-logistics-blue to-logistics-green w-full rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-bold">100%</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-logistics-blue to-logistics-green rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-logistics-green to-logistics-blue rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutStatsSection;
