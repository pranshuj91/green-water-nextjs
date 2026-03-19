
import React from 'react';
import { Users, Linkedin, Mail, MapPin } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/src/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/src/components/ui/avatar';

const AboutTeamSection = () => {
  const teamMembers = [
    {
      name: "Carlos Rodriguez",
      position: "Chief Executive Officer",
      location: "Madrid, Spain",
      bio: "Visionary leader with 20+ years in logistics, driving Green Water's sustainable innovation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "carlos@greenwater.com"
    },
    {
      name: "Marina Silva",
      position: "Chief Technology Officer",
      location: "Barcelona, Spain",
      bio: "Tech innovator specializing in AI-powered logistics solutions and digital transformation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "marina@greenwater.com"
    },
    {
      name: "David Chen",
      position: "Head of Operations",
      location: "Valencia, Spain",
      bio: "Operations expert ensuring seamless global logistics with focus on efficiency.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "david@greenwater.com"
    },
    {
      name: "Sofia Andersson",
      position: "Sustainability Director",
      location: "Madrid, Spain",
      bio: "Environmental scientist leading Green Water's green initiatives and programs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sofia@greenwater.com"
    }
  ];

  return (
    <section id='out-team' className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-logistics-blue/10 text-logistics-blue px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Users className="h-3 w-3 sm:h-4 sm:w-4" />
              Our Leadership Team
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet the <span className="bg-gradient-to-r from-logistics-blue to-logistics-green bg-clip-text text-transparent">Visionaries</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our team of industry experts united by a passion for transforming logistics.
            </p>
          </div>

          {/* Team Grid - Desktop and Tablet */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Social Icons - Visible on hover for larger screens */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a 
                          href={member.linkedin}
                          className="bg-white/90 p-2 rounded-lg hover:bg-logistics-blue hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a 
                          href={`mailto:${member.email}`}
                          className="bg-white/90 p-2 rounded-lg hover:bg-logistics-blue hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5 lg:p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-logistics-blue font-semibold text-sm sm:text-base mb-2">{member.position}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-logistics-green" />
                        {member.location}
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent className="w-80 p-0 overflow-hidden" side="top" align="center">
                  <div className="relative">
                    {/* Header with image */}
                    <div className="relative h-20 bg-gradient-to-r from-logistics-blue to-logistics-green">
                      <div className="absolute -bottom-8 left-6">
                        <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback className="bg-logistics-blue text-white font-semibold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="pt-10 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-logistics-blue font-semibold mb-2">{member.position}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <MapPin className="h-4 w-4 text-logistics-green" />
                        {member.location}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                      
                      {/* Social Links */}
                      <div className="flex gap-3 pt-2 border-t border-gray-100">
                        <a 
                          href={member.linkedin}
                          className="flex items-center gap-2 text-logistics-blue hover:text-logistics-dark-blue transition-colors text-sm"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-logistics-blue hover:text-logistics-dark-blue transition-colors text-sm"
                        >
                          <Mail className="h-4 w-4" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Team Horizontal Scroll - Mobile Only */}
          <div className="sm:hidden overflow-x-auto">
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {teamMembers.map((member, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm w-64 flex-shrink-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                        <p className="text-logistics-blue font-semibold text-sm mb-2">{member.position}</p>
                        <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                          <MapPin className="h-3 w-3 text-logistics-green" />
                          {member.location}
                        </div>
                        
                        {/* Social Links - Visible on mobile */}
                        <div className="flex gap-3">
                          <a 
                            href={member.linkedin}
                            className="bg-logistics-blue/10 p-2 rounded-lg hover:bg-logistics-blue hover:text-white transition-colors"
                          >
                            <Linkedin className="h-4 w-4 text-logistics-blue" />
                          </a>
                          <a 
                            href={`mailto:${member.email}`}
                            className="bg-logistics-blue/10 p-2 rounded-lg hover:bg-logistics-blue hover:text-white transition-colors"
                          >
                            <Mail className="h-4 w-4 text-logistics-blue" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  
                  {/* Minimal hover card for mobile */}
                  <HoverCardContent className="w-72 p-4" side="top" align="center">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-logistics-blue font-semibold mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
