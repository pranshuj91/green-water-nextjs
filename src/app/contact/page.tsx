"use client"
import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Badge } from "@/src/components/ui/badge";
import { useToast } from "@/src/hooks/use-toast";
import { Mail, Phone, LocateIcon, MapPin, Clock, Send, Globe, Truck, Ship, Plane, CheckCircle } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import GoogleMap from "@/src/components/GoogleMap";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const services = [
    {
      icon: Ship,
      name: "Ocean Freight",
      gradientBorder: "from-logistics-blue to-logistics-green",
      iconColor: "text-logistics-blue",
    },
    {
      icon: Plane,
      name: "Air Freight",
      gradientBorder: "from-logistics-green to-logistics-blue",
      iconColor: "text-logistics-green",
    },
    {
      icon: Truck,
      name: "Land Transport",
      gradientBorder: "from-logistics-blue to-logistics-green",
      iconColor: "text-logistics-blue",
    },
    {
      icon: Globe,
      name: "Customs Clearance",
      gradientBorder: "from-logistics-green to-logistics-blue",
      iconColor: "text-logistics-green",
    },
  ];

  const benefits = [
    "24/7 Customer Support",
    "Real-time Tracking",
    "Competitive Pricing",
    "Expert Consultation",
    "Global Network",
    "Secure Handling",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-logistics-blue to-logistics-green text-white py-20 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Ready to streamline your logistics? Our experts are here to help you find the perfect solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${service.gradientBorder} p-0.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="bg-white text-gray-800 px-6 py-3 text-sm font-medium rounded-full flex items-center">
                    <service.icon className={`w-4 h-4 mr-2 ${service.iconColor}`} />
                    <span>{service.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-blue-100/50 border border-white/50">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12 border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-logistics-blue/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="h-12 border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-logistics-blue/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="h-12 border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-logistics-blue/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 631701140"
                      className="h-12 border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-logistics-blue/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Service Interested In
                  </label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Ocean Freight, Air Freight, Land Transport, etc."
                    className="h-12 border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-logistics-blue/30"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your logistics needs..."
                    rows={6}
                    required
                    className="border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm focus:shadow-md transition-all duration-300 focus:ring-2 focus:ring-logistics-blue/30 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-logistics-blue hover:bg-logistics-dark-blue text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-blue-100/50 border border-white/50">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Contact</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-[1.02]">
                  {/* <LocateIcon className="w-5 h-5 text-logistics-blue mt-1" /> */}
                  <MapPin className="h-5 w-5 text-logistics-blue mr-3 mt-1" />
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      <b>Greenwater Freight and Forwarding S.L.</b>
                      <br />
                      Pallars street, number 193,
                      <br />
                      Barcelona 08005, Spain,
                      <br />
                      +34 631701140
                    </p>
                    {/* <p className="font-semibold text-gray-800">Address</p> */}
                    <p className="text-gray-600">
                      <b>Greenwater Freight and Forwarding B.V.</b>
                      <br />
                      Posthoornstraat 11, 3011WD
                      <br />
                      Rotterdam, Netherlands,
                      <br />
                      +34 632972588
                    </p>
                    <p className="text-gray-600">
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
                {/* <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-gradient-to-r from-logistics-blue to-blue-400 p-3 rounded-full shadow-lg">
                    <LocateIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      <b>Greenwater Freight and Forwarding B.V.</b>
                      <br />
                      Posthoornstraat 11, 3011WD
                      <br />
                      Rotterdam, Netherlands,
                      <br />
                      +34 632972588
                    </p>
                  </div>
                </div> */}
                {/* <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-gradient-to-r from-logistics-blue to-blue-400 p-3 rounded-full shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600"></p>
                    <p className="text-gray-600"></p>
                  </div>
                </div> */}

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-gradient-to-r from-logistics-green to-green-400 p-3 rounded-full shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">sales@greenwaterff.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-gradient-to-r from-logistics-blue to-blue-400 p-3 rounded-full shadow-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-white/80 to-green-50/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl shadow-green-100/50 border border-white/50">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="bg-gradient-to-r from-logistics-green to-green-400 p-1 rounded-full">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
