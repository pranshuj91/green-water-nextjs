"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from 'next/link';

interface BlogsSectionProps {
  noPaddingBottom?: boolean;
}

const BlogsSection = ({ noPaddingBottom = false }: BlogsSectionProps) => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Global Supply Chain Management",
      excerpt: "Exploring how technology and sustainability are reshaping logistics operations worldwide.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      category: "Industry Insights",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Logistics: Reducing Carbon Footprint",
      excerpt: "Strategies and technologies that help logistics companies achieve their environmental goals.",
      author: "Michael Chen",
      date: "December 12, 2024",
      category: "Sustainability",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Digital Transformation in Freight Management",
      excerpt: "How AI and IoT are revolutionizing the way we track and manage cargo shipments.",
      author: "Emma Rodriguez",
      date: "December 10, 2024",
      category: "Technology",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }
  ];

  const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
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
          <span>{post.readTime}</span>
        </div>
        <CardTitle className="text-xl hover:text-logistics-blue transition-colors cursor-pointer leading-tight md:leading-normal min-h-[3.5rem] md:min-h-[2.5rem]">
          {post.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-start">
          <Button variant="ghost" size="sm" className="text-logistics-blue hover:text-logistics-dark-blue">
            Read More
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className={`py-20 bg-gray-50 ${noPaddingBottom ? 'pb-0' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & News
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and developments in the logistics industry
          </p>
        </div>

        {/* Mobile Carousel - Only visible on mobile with autoplay */}
        <div className="block md:hidden mb-12">
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-2 md:pl-4 basis-[85%]">
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop/Tablet Grid - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/resources/blog">
          <Button className="bg-logistics-blue hover:bg-logistics-dark-blue">
            View All Blog Posts
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
