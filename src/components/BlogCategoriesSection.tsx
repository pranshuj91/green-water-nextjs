"use client"
import React, { useState } from 'react';

const categories = [
  { name: 'All', count: 24 },
  { name: 'Industry Insights', count: 8 },
  { name: 'Technology', count: 6 },
  { name: 'Sustainability', count: 4 },
  { name: 'Supply Chain', count: 6 }
];

const BlogCategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.name
                  ? 'bg-logistics-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategoriesSection;
