"use client"
import { MapPin, Clock, Shield, Award, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
const features = [
  {
    icon: MapPin,
    title: "Global Reach",
    description: "Our extensive network spans 150+ countries, ensuring your goods reach any destination worldwide.",
    highlight: "150+ Countries"
  },
  {
    icon: Shield,
    title: "Secure Transport",
    description: "Advanced security protocols and real-time monitoring protect your cargo throughout the journey.",
    highlight: "99.9% Secure"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Our commitment to punctuality ensures your shipments arrive exactly when promised.",
    highlight: "98% Success"
  },
  {
    icon: Award,
    title: "Industry Excellence",
    description: "Award-winning service backed by decades of expertise in logistics solutions.",
    highlight: "25+ Awards"
  }
];

const benefits = [
  { icon: TrendingUp, text: "Cost-Effective Solutions" },
  { icon: Users, text: "24/7 Customer Support" },
  { icon: Shield, text: "Fully Insured Cargo" },
  { icon: CheckCircle, text: "Real-Time Tracking" }
];

const FeaturesSection = () => {
   const router = useRouter();
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted
            <span className="text-logistics-blue block mt-2">Logistics Partner</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining industry expertise with cutting-edge technology for unparalleled logistics services that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Green Water
              </h3>
              
              <p className="text-gray-600 mb-8">
                Our commitment to excellence drives everything we do. From consultation to delivery, 
                we ensure your logistics needs are met with precision and care.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-logistics-blue/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-logistics-blue" />
                    </div>
                    <h4 className="text-gray-900 font-semibold">
                      {benefit.text}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>router.push("/services")} className="bg-logistics-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-logistics-dark-blue transition-colors">
                Explore Solutions
              </button>
              <button 
                className="bg-white text-logistics-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200"
                onClick={() => {
                  router.push('/');
                  setTimeout(() => {
                    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Get Free Quote
              </button>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-logistics-blue flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Badge */}
                <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {feature.highlight}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
