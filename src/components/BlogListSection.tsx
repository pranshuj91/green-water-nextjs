
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Global Supply Chain Management",
    excerpt: "Exploring how technology and sustainability are reshaping logistics operations worldwide. From AI-powered route optimization to blockchain-based tracking systems, discover the innovations driving the industry forward.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    category: "Industry Insights",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Logistics: Reducing Carbon Footprint",
    excerpt: "Strategies and technologies that help logistics companies achieve their environmental goals while maintaining operational efficiency.",
    author: "Michael Chen",
    date: "December 12, 2024",
    category: "Sustainability",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Digital Transformation in Freight Management",
    excerpt: "How AI and IoT are revolutionizing the way we track and manage cargo shipments across global supply chains.",
    author: "Emma Rodriguez",
    date: "December 10, 2024",
    category: "Technology",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Ocean Freight Trends for 2025",
    excerpt: "Key developments in maritime shipping that will shape the industry in the coming year.",
    author: "David Park",
    date: "December 8, 2024",
    category: "Industry Insights",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Warehouse Automation: ROI and Implementation",
    excerpt: "A comprehensive guide to implementing automated systems in your warehouse operations.",
    author: "Lisa Wang",
    date: "December 5, 2024",
    category: "Technology",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Cross-Border Trade Compliance Updates",
    excerpt: "Latest regulations and requirements for international shipping in key markets worldwide.",
    author: "Robert Kim",
    date: "December 3, 2024",
    category: "Supply Chain",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=300&fit=crop"
  }
];

const BlogListSection = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="bg-logistics-blue/10 text-logistics-blue px-3 py-1 rounded-full text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-logistics-blue transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-logistics-blue hover:text-logistics-dark-blue">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid - Show all 6 articles in 3 columns */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="bg-logistics-blue/10 text-logistics-blue px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg hover:text-logistics-blue transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-logistics-blue hover:text-logistics-dark-blue">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button className="bg-logistics-blue hover:bg-logistics-dark-blue">
            Load More Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogListSection;
