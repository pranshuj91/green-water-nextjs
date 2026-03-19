"use client"
import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { useToast } from '@/src/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Quote Request Sent",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title relative inline-block">
            Contact Us
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-logistics-blue to-logistics-green"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Get in touch with our team for a free quote or to learn more about our services
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Request a Quote</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required</label>
                <Select value={formData.service} onValueChange={handleSelectChange}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freight">Freight Transport</SelectItem>
                    <SelectItem value="warehousing">Warehousing</SelectItem>
                    <SelectItem value="supply-chain">Supply Chain Management</SelectItem>
                    <SelectItem value="customs">Customs Clearance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your requirements"
                rows={4}
                className="w-full"
              />
            </div>
            
            <Button type="submit" className="btn-primary w-full md:w-auto">
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
