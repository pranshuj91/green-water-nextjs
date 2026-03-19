"use client"

import { Button } from "../components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/1ab0bf67-2269-4eea-a62e-212500a9373b.png"
                  alt="Green Water Freight & Forwarding"
                  className="h-12 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-gray-300 leading-relaxed">
                  Providing reliable logistics solutions to businesses worldwide. We ensure your goods reach their
                  destination safely and on time.
                </p>
              </div>

              {/* Social media */}
              <div className="flex space-x-3">
                {[
                  {
                    icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                    label: "Facebook",
                  },
                  {
                    icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                    label: "Twitter",
                  },
                  {
                    icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
                    label: "Instagram",
                  },
                  {
                    icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-logistics-blue transition-colors"
                    aria-label={social.label}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={social.icon}></path>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-logistics-blue">Our Information</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-logistics-blue mr-3 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Address</h5>
                    <div className="space-y-3">
                      <p className="text-gray-300 text-sm">
                        <b>Greenwater Freight and Forwarding S.L.</b>
                        <br />
                        Pallars street, number 193,
                        <br />
                        Barcelona 08005, Spain
                        <br />
                        +34 632890975
                      </p>
                      <p className="text-gray-300 text-sm">
                        <b>Greenwater Freight and Forwarding B.V.</b>
                        <br />
                        Posthoornstraat 11, 3011WD
                        <br />
                        Rotterdam, Netherlands
                        <br />
                        +31 103077155
                      </p>
                      <p className="text-gray-300 text-sm">
                        <b>Greenwater Freight and Forwarding L.L.C</b>
                        <br />
                        Dock 72 at the Brooklyn Navy Yard,
                        <br />
                        1 Dock 72 Way,
                        <br />
                        Brooklyn, NY 11205, United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <Phone className="h-5 w-5 text-logistics-green mr-3 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Phone</h5>
                    <p className="text-gray-300 text-sm"></p>
                    <p className="text-gray-300 text-sm"></p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-logistics-blue mr-3 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Email</h5>
                    <p className="text-gray-300 text-sm">sales@greenwaterff.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Freight Services - Hidden on mobile */}
            <div className="hidden md:block">
              <h4 className="text-lg font-bold mb-4 text-logistics-green">Freight Services</h4>
              <ul className="space-y-2">
                {[
                  { label: "Ocean Freight", slug: "ocean-freight" },
                  { label: "Air Freight", slug: "air-freight" },
                  { label: "Land Transport", slug: "land-transport" },
                  // { label: "Rail Freight", slug: "rail-freight" },
                  { label: "Express Delivery", slug: "air-freight" },
                  { label: "Heavy Cargo", slug: "ocean-freight" },
                ].map(({ label, slug }, index) => (
                  <li key={index}>
                    <Link
                      href={`/services/${slug}`}
                      className="text-gray-300 hover:text-logistics-green transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logistics Solutions - Hidden on mobile */}
            <div className="hidden md:block">
              <h4 className="text-lg font-bold mb-4 text-logistics-blue">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About Us", href: "/about" },
                  {
                    name: "Why Choose Us",
                    href: "/why-us",
                  },
                  { name: "Services", href: "/services" },
                  { name: "Blog", href: "/resources/blog" },
                  { name: "Faq", href: "/resources/faqs" },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-logistics-blue transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Green Water Freight & Forwarding. | Design by{" "}
                <Link href="https://gaincafe.com/" target="_blank" className="hover:text-white transition-colors">
                  Gaincafe
                </Link>
                . | All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
