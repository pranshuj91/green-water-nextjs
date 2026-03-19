"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Rocket, Globe2, Leaf, Award, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/src/components/ui/collapsible';
import { useRouter } from 'next/navigation';
const AboutTimelineSection = () => {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0);
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      year: "2002",
      title: "Foundation",
      description: "Green Water was founded with a vision to revolutionize sustainable logistics. Starting with a small team of passionate professionals, we set out to challenge the traditional logistics industry by proving that environmental responsibility and business excellence could go hand in hand.",
      icon: Rocket,
      image: "/lovable-uploads/ship-containers.webp"
    },
    {
      year: "2016",
      title: "Green Initiative",
      description: "Launched our comprehensive sustainability program, reducing carbon emissions significantly. We invested heavily in green technology, electric vehicles, and renewable energy sources for our warehouses. This initiative positioned us as leaders in sustainable logistics.",
      icon: Leaf,
      image: "/lovable-uploads/truck.jpg"
    },
    {
      year: "2019",
      title: "Industry Recognition",
      description: "Received the European Logistics Excellence Award for innovation and sustainability. Our commitment to environmental stewardship and operational excellence was recognized by industry peers and environmental organizations worldwide.",
      icon: Award,
      image: "/lovable-uploads/airplane-cargo.jpg"
    },
    {
      year: "2024",
      title: "Global Network",
      description: "Established partnerships in 50+ countries, becoming a truly global logistics provider. Our network now spans across six continents, enabling seamless international trade while maintaining our commitment to sustainability and excellence.",
      icon: Globe2,
      image: "/lovable-uploads/1ab0bf67-2269-4eea-a62e-212500a9373b.png"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if we're in the timeline section
      if (scrollY + windowHeight > containerTop && scrollY < containerTop + containerHeight) {
        sectionRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementMiddle = elementTop + rect.height / 2;
            
            // Check if this section is in the middle of the viewport
            if (scrollY + windowHeight / 2 >= elementTop && scrollY + windowHeight / 2 <= elementTop + rect.height) {
              setActiveIndex(index);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-8 md:py-16 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-logistics-blue/10 text-logistics-blue px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
              Our Timeline
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Journey of{' '}
              <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
          </div>

          {/* Mobile Layout - Collapsible */}
          <div className="block lg:hidden space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <Collapsible 
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                    <CollapsibleTrigger className="w-full p-4 flex items-start justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col items-start gap-3 flex-1">
                        <div className="text-logistics-blue text-base font-medium">
                          {event.year}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-logistics-blue rounded-full flex items-center justify-center">
                            {React.createElement(event.icon, { className: "h-5 w-5 text-white" })}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 text-left">{event.title}</h3>
                        </div>
                      </div>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 data-[state=open]:rotate-180 mt-2" />
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                      <div className="p-4 pt-0">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-48 object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                        
                        <div className="flex items-center gap-2 text-logistics-green">
                          <div className="w-6 h-0.5 bg-logistics-green"></div>
                          <span className="text-sm font-medium">Milestone Achieved</span>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
                
                {/* Connecting gradient line between accordions */}
                {index < timelineEvents.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-logistics-blue to-logistics-green opacity-60"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop & Tablet Layout - Two Column */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 xl:gap-8 relative">
            {/* Sticky Image Column */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={timelineEvents[activeIndex].image} 
                  alt={timelineEvents[activeIndex].title}
                  className="w-full h-80 xl:h-96 object-cover object-center transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-logistics-blue rounded-full flex items-center justify-center transition-all duration-500">
                      {React.createElement(timelineEvents[activeIndex].icon, { className: "h-6 w-6 text-white" })}
                    </div>
                    <div className="bg-logistics-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500">
                      {timelineEvents[activeIndex].year}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Text Column */}
            <div className="space-y-6 xl:space-y-8">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  ref={(el) => {sectionRefs.current[index] = el;}}
                  className={`transition-all duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div className="space-y-4 xl:space-y-6 py-4 xl:py-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-logistics-blue/10 rounded-full flex items-center justify-center">
                        <event.icon className="h-6 w-6 text-logistics-blue" />
                      </div>
                      <div className="bg-logistics-blue/10 text-logistics-blue px-4 py-2 rounded-lg text-sm font-medium">
                        {event.year}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl xl:text-3xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{event.description}</p>
                    
                    <div className="flex items-center gap-2 text-logistics-green">
                      <div className="w-8 h-0.5 bg-logistics-green"></div>
                      <span className="text-sm font-medium">Milestone Achieved</span>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < timelineEvents.length - 1 && (
                    <div className="flex justify-center mt-4 xl:mt-6">
                      <div className="w-0.5 h-6 xl:h-8 bg-gradient-to-b from-logistics-blue to-logistics-green opacity-30"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-logistics-blue to-logistics-green rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Continue Our Journey Together</h3>
              <p className="text-base md:text-lg opacity-90 mb-4 md:mb-6 max-w-2xl mx-auto">
                Join us as we write the next chapter in sustainable logistics innovation.
              </p>
              <button onClick={()=>router.push("/contact")} className="bg-white text-logistics-blue px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimelineSection;
