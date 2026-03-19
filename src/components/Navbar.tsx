"use client"
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import Link from "next/link"

const services = [
  { name: 'Ocean Freight', href: '/services/ocean-freight' },
  { name: 'Air Freight', href: '/services/air-freight' },
  { name: 'Land Transport', href: '/services/land-transport' },
  { name: 'Warehousing', href: '/services/warehousing' },
  // { name: 'Customs Clearance', href: '/services#customs-clearance' },
  // { name: 'Supply Chain Management', href: '/services#supply-chain' },
];

const resources = [
  {
    name: "Blog",
    href: "/resources/blog",
    description: "Latest insights and industry news",
  },
  {
    name: "FAQs",
    href: "/resources/faqs",
    description: "Frequently asked questions",
  },
];

const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-gray-900 dark:bg-gray-950 shadow-md transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/lovable-uploads/1ab0bf67-2269-4eea-a62e-212500a9373b.png"
              alt="Green Water Freight & Forwarding"
              className="h-16 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium text-gray-200 hover:text-logistics-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-200 hover:text-logistics-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/why-us"
              className="font-medium text-gray-200 hover:text-logistics-blue transition-colors"
            >
              Why Us
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium text-gray-200 hover:text-logistics-blue transition-colors flex items-center gap-1">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
                {services.map((service, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={service.href}
                      className="text-gray-700 dark:text-gray-200 hover:text-logistics-blue hover:bg-gray-50 dark:hover:bg-gray-700 px-4 py-2 text-sm"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium text-gray-200 hover:text-logistics-blue transition-colors flex items-center gap-1">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg w-96">
                <div className="grid grid-cols-2 gap-1 p-2">
                  {resources.map((resource, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Link
                        href={resource.href}
                        className="text-gray-700 dark:text-gray-200 hover:text-logistics-blue hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-3 text-sm block"
                      >
                        <div className="flex space-x-3">
                          <div className="font-medium">{resource.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {resource.description}
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className="font-medium text-gray-200 hover:text-logistics-blue transition-colors"
            >
              Contact
            </Link>

            <Link href="/contact">
              <Button variant="quote" size="lg" className="relative group">
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-logistics-blue focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-950 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-gray-200 hover:text-logistics-blue transition-colors py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium text-gray-200 hover:text-logistics-blue transition-colors py-2"
              >
                About
              </Link>
              <Link
                href="/why-us"
                className="font-medium text-gray-200 hover:text-logistics-blue transition-colors py-2"
              >
                Why Us
              </Link>
              <Link
                href="/services"
                className="font-medium text-gray-200 hover:text-logistics-blue transition-colors py-2"
              >
                Services
              </Link>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="font-medium text-gray-300 hover:text-logistics-blue transition-colors py-1 pl-4 text-sm"
                >
                  {service.name}
                </Link>
              ))}
              <div className="font-medium text-gray-200 py-2">Resources</div>
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.href}
                  className="font-medium text-gray-300 hover:text-logistics-blue transition-colors py-1 pl-4 text-sm"
                >
                  {resource.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="font-medium text-gray-200 hover:text-logistics-blue transition-colors py-2"
              >
                Contact
              </Link>
              <Link href="/contact">
                <Button
                  variant="quote"
                  size="lg"
                  className="w-full relative group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get a Quote
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
