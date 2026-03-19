"use client"
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

const BlogHeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pt-8">
            Logistics Insights & 
            <span className="text-logistics-blue block mt-2">Industry News</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay informed with the latest trends, insights, and developments in global logistics and supply chain management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-logistics-blue focus:border-transparent placeholder-gray-400"
              />
            </div>
            <Button className="bg-logistics-blue hover:bg-logistics-dark-blue px-6 py-3">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
