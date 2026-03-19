"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqData = [
    {
      question: "What logistics services do you offer?",
      answer: "We provide comprehensive logistics solutions including freight transportation, warehousing, supply chain management, customs clearance, and specialized cargo handling. Our services cover air, sea, and land transportation across global routes."
    },
    // {
    //   question: "How do you ensure the safety of my cargo?",
    //   answer: "We implement multi-layer security protocols including GPS tracking, secure packaging, insurance coverage, and real-time monitoring. Our facilities are equipped with advanced security systems and our staff undergoes regular training on cargo handling procedures."
    // },
    {
      question: "What are your shipping timeframes?",
      answer: "Delivery times vary based on destination, shipping method, and cargo type. Express services typically take 1-3 days, standard shipping 5-10 days, and economy options 10-20 days. We provide accurate estimates during the quote process."
    },
    {
      question: "Do you handle international customs clearance?",
      answer: "Yes, we have expert customs brokers who handle all documentation, duties, and regulatory compliance for international shipments. We ensure smooth customs clearance to avoid delays and additional costs."
    },
    {
      question: "How can I track my shipment?",
      answer: "We provide real-time tracking through our online portal and mobile app. You'll receive tracking numbers and regular updates via email or SMS. Our customer service team is also available 24/7 to provide status updates."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including automotive, electronics, pharmaceuticals, retail, manufacturing, and e-commerce. Our specialized teams understand industry-specific requirements and regulations."
    },
    {
      question: "What are your payment terms?",
      answer: "We offer flexible payment terms including credit accounts for established businesses, prepaid options, and various payment methods including bank transfers, credit cards, and digital payment platforms. Terms are typically Net 30 for approved credit accounts."
    },
    // {
    //   question: "Do you provide insurance for shipments?",
    //   answer: "Yes, we offer comprehensive cargo insurance options to protect your shipments against loss, damage, or theft during transit. Insurance coverage can be tailored to your specific cargo value and risk requirements."
    // },
    {
      question: "Can you handle oversized or special cargo?",
      answer: "Absolutely! We specialize in handling oversized, heavy, and special cargo including machinery, vehicles, hazardous materials, and temperature-controlled goods. Our team will assess your specific requirements and provide customized solutions."
    },
    {
      question: "What documentation do I need for international shipping?",
      answer: "Required documentation varies by destination and cargo type but typically includes commercial invoice, packing list, bill of lading, and any necessary permits or certificates. Our team will guide you through all documentation requirements."
    }
  ];

  // Show only 5 FAQs on mobile, all on desktop/tablet
  const displayedFAQs =
  typeof window !== "undefined" && window.innerWidth < 768
    ? faqData.slice(0, 5)
    : faqData;

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="pb-20 pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Common Questions & Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our logistics services and processes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {displayedFAQs.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-xl md:text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-logistics-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-logistics-blue flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-logistics-blue hover:bg-logistics-dark-blue text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Support
              </a>
              <a 
                href="tel:+34631701140" 
                className="border border-logistics-blue text-logistics-blue hover:bg-logistics-blue hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Call Us: +34 631 701 140
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
