"use client"
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

const StatsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    freightType: '',
    portOfLoading: '',
    portOfDestination: '',
    productType: '',
    incoterms: '',
    comments: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, freightType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    
    toast({
      title: "Quote Request Sent",
      description: "We'll get back to you within 24 hours with your quote.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      freightType: '',
      portOfLoading: '',
      portOfDestination: '',
      productType: '',
      incoterms: '',
      comments: ''
    });
  };

  return (
    <section id="stats" className="py-20 bg-gradient-to-r from-logistics-blue to-logistics-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Quote</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            Get a personalized quote for your logistics needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-xl p-8 space-y-6 shadow-2xl border border-white/20">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-800 font-medium">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-logistics-blue focus:ring-logistics-blue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-800 font-medium">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-logistics-blue focus:ring-logistics-blue"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-800 font-medium">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-logistics-blue focus:ring-logistics-blue"
              />
            </div>

            {/* Freight Type */}
            <div className="space-y-3">
              <Label className="text-gray-800 font-medium">Which Freight Type you like to use? *</Label>
              <RadioGroup value={formData.freightType} onValueChange={handleRadioChange} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="air" id="air" className="border-gray-400 text-logistics-blue" />
                  <Label htmlFor="air" className="text-gray-800">Air Freight</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ocean" id="ocean" className="border-gray-400 text-logistics-blue" />
                  <Label htmlFor="ocean" className="text-gray-800">Ocean Freight</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="land" id="land" className="border-gray-400 text-logistics-blue" />
                  <Label htmlFor="land" className="text-gray-800">Land Freight</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rail" id="rail" className="border-gray-400 text-logistics-blue" />
                  <Label htmlFor="rail" className="text-gray-800">Rail Freight</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Ports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="portOfLoading" className="text-gray-800 font-medium">Port of Loading *</Label>
                <Input
                  id="portOfLoading"
                  name="portOfLoading"
                  value={formData.portOfLoading}
                  onChange={handleChange}
                  placeholder="Port of Loading"
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-logistics-blue focus:ring-logistics-blue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portOfDestination" className="text-gray-800 font-medium">Port of Destination *</Label>
                <Input
                  id="portOfDestination"
                  name="portOfDestination"
                  value={formData.portOfDestination}
                  onChange={handleChange}
                  placeholder="Port of Destination"
                  required
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-logistics-blue focus:ring-logistics-blue"
                />
              </div>
            </div>

            {/* Product Type and Incoterms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-gray-800 font-medium">Select Product Type? *</Label>
                <Select value={formData.productType} onValueChange={handleSelectChange('productType')}>
                  <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-logistics-blue focus:ring-logistics-blue">
                    <SelectValue placeholder="Select Product Type" className="text-gray-500" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="40ft-dry">20 FLAT STANDARD</SelectItem>
                    <SelectItem value="20ft-dry">20 DRY STANDARD</SelectItem>
                    <SelectItem value="refur">20 REEFER STANDARD</SelectItem>
                    <SelectItem value="special">40 DRY STANDARD</SelectItem>
                    <SelectItem value="special">40 FLAT STANDARD</SelectItem>
                    <SelectItem value="special">40 REEFER STANDARD</SelectItem>
                    <SelectItem value="special">40 DRY HIGH</SelectItem>
                    <SelectItem value="special">40 REEFER HIGH</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-800 font-medium">Select Incoterms Details? *</Label>
                <Select value={formData.incoterms} onValueChange={handleSelectChange('incoterms')}>
                  <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-logistics-blue focus:ring-logistics-blue">
                    <SelectValue placeholder="Select Incoterms" className="text-gray-500" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="cif">EX WORKS</SelectItem>
                    <SelectItem value="fob">FAS</SelectItem>
                    <SelectItem value="fas">FOB</SelectItem>
                    <SelectItem value="fas">CIF</SelectItem>
                    <SelectItem value="fas">GIGO</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label htmlFor="comments" className="text-gray-800 font-medium">Comments or Questions</Label>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Any additional information or questions..."
                rows={4}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-logistics-blue focus:ring-logistics-blue"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                type="submit" 
                className="bg-logistics-blue text-white hover:bg-logistics-dark-blue px-8 py-3 font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Submit Quote Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
