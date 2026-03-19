"use client"
import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import FAQSection from '@/src/components/FAQSection';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 pt-8">
              Frequently Asked
              <span className="text-logistics-blue block mt-2">Questions</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Find answers to the most common questions about our logistics services, 
              shipping processes, and how we can help your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default FAQ;
