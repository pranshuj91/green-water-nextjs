
import React from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import BlogHeroSection from '@/src/components/BlogHeroSection';
import BlogListSection from '@/src/components/BlogListSection';
import BlogCategoriesSection from '@/src/components/BlogCategoriesSection';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogHeroSection />
      <BlogCategoriesSection />
      <BlogListSection />
      <Footer />
    </div>
  );
};

export default Blog;
