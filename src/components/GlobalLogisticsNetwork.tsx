import React from 'react';
import { Globe, Navigation, MapPin, Flag, Ship as ShipIcon, Truck, Plane, Package } from 'lucide-react';
import { Badge } from '@/src/components/ui/badge';

// Updated network hubs with more horizontal spread
const networkHubs = [
  { 
    name: "Spain", 
    description: "Main European Hub", 
    region: "Europe", 
    coordinates: { x: 40, y: 45 }, // Moved slightly left
    flagColors: ["#AA151B", "#FFDA44", "#AA151B"], 
    isMainHub: true 
  },
  { 
    name: "USA", 
    description: "Americas Gateway", 
    region: "North America", 
    coordinates: { x: 15, y: 38 }, // Moved further left
    flagColors: ["#B31942", "#FFFFFF", "#0A3161"], 
    isMainHub: false 
  },
  { 
    name: "India", 
    description: "South Asian Hub", 
    region: "South Asia", 
    coordinates: { x: 75, y: 52 }, // Moved slightly right
    flagColors: ["#FF9933", "#FFFFFF", "#138808"], 
    isMainHub: false 
  },
  { 
    name: "China", 
    description: "East Asia Gateway", 
    region: "East Asia", 
    coordinates: { x: 85, y: 35 }, // Moved further right
    flagColors: ["#DE2910"], 
    isMainHub: false 
  },
  { 
    name: "Singapore", 
    description: "Southeast Asia Hub", 
    region: "Southeast Asia", 
    coordinates: { x: 80, y: 62 }, // Moved slightly right
    flagColors: ["#ED2939", "#FFFFFF"], 
    isMainHub: false 
  },
  { 
    name: "UAE", 
    description: "Middle East Hub", 
    region: "Middle East", 
    coordinates: { x: 65, y: 48 }, // Moved slightly right
    flagColors: ["#00732F", "#FFFFFF", "#000000", "#FF0000"], 
    isMainHub: false 
  }
];

// Single unified industry category
const industryCategory = {
  name: "Global Cargo",
  icon: Package,
  color: "#00BFFF",
  coordinates: { x: 50, y: 35 },
  isFocused: true
};

const GlobalLogisticsNetwork = () => {
  return (
    <section id="global-network" className="py-20 relative overflow-hidden">
      {/* Professional maritime ocean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F] via-[#002855] to-[#004080] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-white text-white">Global Presence</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Our Global Logistics Network
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-logistics-blue to-logistics-light-blue mx-auto mb-6"></div>
          <p className="text-gray-100 max-w-3xl mx-auto text-lg leading-relaxed">
            Connecting Spain to the world with strategic logistics routes spanning across continents - 
            from the Americas to Asia, Middle East to Southeast Asia, ensuring seamless global cargo movement
          </p>
        </div>

        {/* Key Routes from Spain */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🇪🇸 ➔ 🇺🇸</div>
              <h3 className="text-white font-semibold text-sm">Spain to USA</h3>
              <p className="text-gray-300 text-xs">Atlantic Route</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🇪🇸 ➔ 🇮🇳</div>
              <h3 className="text-white font-semibold text-sm">Spain to India</h3>
              <p className="text-gray-300 text-xs">Mediterranean Route</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🇪🇸 ➔ 🇸🇬</div>
              <h3 className="text-white font-semibold text-sm">Spain to Southeast Asia</h3>
              <p className="text-gray-300 text-xs">Asian Corridor</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🇪🇸 ➔ 🇦🇪</div>
              <h3 className="text-white font-semibold text-sm">Spain to Middle East</h3>
              <p className="text-gray-300 text-xs">Gulf Route</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🇪🇸 ➔ 🇨🇳</div>
              <h3 className="text-white font-semibold text-sm">Spain to China</h3>
              <p className="text-gray-300 text-xs">Silk Road</p>
            </div>
          </div>
        </div>
        
        <div className="relative mt-12">
          {/* Clean world map visualization with geographic outlines */}
          <div className="w-full aspect-[2/1] relative rounded-xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Deep ocean background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#002855] to-[#004080]"></div>
            
            {/* World map geographic outline background */}
            <WorldMapOutline />
            
            {/* Enhanced Logistics Routes from Spain */}
            <LogisticsRoutes />
            
            {/* Single unified industry category icon */}
            <IndustryIcon 
              category={industryCategory}
              delay="0s"
            />
            
            {/* Country flag markers with better spacing */}
            {networkHubs.map((hub) => (
              <div 
                key={hub.name}
                className="absolute group"
                style={{ 
                  top: `${hub.coordinates.y}%`, 
                  left: `${hub.coordinates.x}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative">
                  {/* Enhanced main hub glow effect for Spain */}
                  {hub.isMainHub && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-[#00BFFF]/40 animate-ping scale-150"></div>
                      <div className="absolute inset-0 rounded-full bg-[#00BFFF]/20 animate-pulse scale-200"></div>
                    </>
                  )}
                  
                  {/* Flag pin with country label */}
                  <div className={`relative ${hub.isMainHub ? 'z-20' : 'z-10'}`}>
                    {/* Pin design */}
                    <div className="flex flex-col items-center">
                      {/* Flag circle */}
                      <div className={`relative rounded-full border-2 ${hub.isMainHub ? 'w-14 h-14 border-[#00BFFF] ring-4 ring-[#00BFFF]/50 shadow-2xl' : 'w-8 h-8 border-white shadow-lg'} overflow-hidden bg-white`}>
                        <FlagDesign hub={hub} />
                      </div>
                      
                      {/* Pin stem */}
                      <div className={`w-0.5 ${hub.isMainHub ? 'h-8 bg-[#00BFFF] shadow-lg' : 'h-4 bg-white'}`}></div>
                      
                      {/* Country label */}
                      <div className={`mt-2 px-3 py-1 rounded-full ${hub.isMainHub ? 'bg-[#00BFFF] text-white ring-2 ring-[#00BFFF]/50 font-bold text-sm' : 'bg-white/90 text-gray-800 text-xs font-medium'} shadow-xl whitespace-nowrap backdrop-blur-sm`}>
                        <div className="text-center">
                          <div>{hub.name}</div>
                          {hub.isMainHub && (
                            <div className="text-xs text-white/90">Main Hub</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
                      <div className="font-medium">{hub.description}</div>
                      <div className="text-gray-300 text-xs">{hub.region}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Enhanced animated transport vehicles */}
            <div className="relative h-full">
              {/* Flight to USA */}
              <MovingTransport 
                startX={40} startY={45} endX={15} endY={38}
                type="plane" cargo="Spain → USA" delay="0s"
                trajectory="atlantic-flight"
              />
              
              {/* Ship to India */}
              <MovingTransport 
                startX={40} startY={45} endX={75} endY={52}
                type="ship" cargo="Spain → India" delay="8s"
                trajectory="mediterranean-india"
              />
              
              {/* Flight to Singapore */}
              <MovingTransport 
                startX={40} startY={45} endX={80} endY={62}
                type="plane" cargo="Spain → Southeast Asia" delay="16s"
                trajectory="southeast-asia"
              />
              
              {/* Truck to Middle East */}
              <MovingTransport 
                startX={40} startY={45} endX={65} endY={48}
                type="truck" cargo="Spain → Middle East" delay="24s"
                trajectory="middle-east"
              />
              
              {/* Ship to China */}
              <MovingTransport 
                startX={40} startY={45} endX={85} endY={35}
                type="ship" cargo="Spain → China" delay="32s"
                trajectory="china-route"
              />
            </div>
          </div>
        </div>
        
        {/* Enhanced feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/95 p-6 rounded-lg shadow-xl border-t-4 border-t-[#00BFFF] backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center mr-4">
                <Globe className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Global Reach</h3>
            </div>
            <p className="text-gray-600">
              Strategic logistics routes from Spain to 6 major global regions, connecting Europe to the Americas, Asia, and Middle East with seamless cargo flow.
            </p>
          </div>
          
          <div className="bg-white/95 p-6 rounded-lg shadow-xl border-t-4 border-t-logistics-green backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-logistics-green/10 flex items-center justify-center mr-4">
                <Navigation className="h-6 w-6 text-logistics-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Strategic Routes</h3>
            </div>
            <p className="text-gray-600">
              Optimized shipping corridors from Spain including Atlantic routes to USA, Mediterranean pathways to India, and efficient connections to Southeast Asia.
            </p>
          </div>
          
          <div className="bg-white/95 p-6 rounded-lg shadow-xl border-t-4 border-t-[#00BFFF] backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center mr-4">
                <MapPin className="h-6 w-6 text-[#00BFFF]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hub Network</h3>
            </div>
            <p className="text-gray-600">
              Spain serves as our main European hub, with dedicated routes to USA, India, China, Singapore, and UAE ensuring global logistics coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// World Map Outline Component - Single layer geographic background
const WorldMapOutline = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-1" viewBox="0 0 100 50">
      <defs>
        <style>
          {`
            .continent {
              fill: none;
              stroke: rgba(255, 255, 255, 0.2);
              stroke-width: 0.2;
              opacity: 0.6;
            }
          `}
        </style>
      </defs>
      
      {/* North America */}
      <path 
        className="continent"
        d="M8,20 Q12,18 16,19 Q20,18 24,20 Q28,21 30,24 Q32,27 31,30 Q30,33 28,35 Q25,37 22,37 Q19,37 16,36 Q13,35 11,33 Q9,31 8,28 Q7,25 8,22 Z"
      />
      
      {/* South America */}
      <path 
        className="continent"
        d="M20,35 Q22,36 24,38 Q26,40 26,42 Q26,44 25,46 Q24,48 22,48 Q20,48 18,47 Q16,46 15,44 Q14,42 15,40 Q16,38 18,36 Q19,35 20,35 Z"
      />
      
      {/* Europe */}
      <path 
        className="continent"
        d="M44,18 Q46,17 48,18 Q50,19 52,21 Q53,23 52,25 Q51,27 49,28 Q47,29 45,28 Q43,27 42,25 Q41,23 42,21 Q43,19 44,18 Z"
      />
      
      {/* Africa */}
      <path 
        className="continent"
        d="M46,25 Q48,26 50,28 Q52,30 52,32 Q52,34 51,36 Q50,38 48,39 Q46,40 44,39 Q42,38 41,36 Q40,34 41,32 Q42,30 44,28 Q45,26 46,25 Z"
      />
      
      {/* Asia */}
      <path 
        className="continent"
        d="M52,15 Q58,14 64,16 Q70,18 76,22 Q82,26 85,30 Q87,34 86,38 Q85,42 82,44 Q78,46 74,46 Q70,46 66,44 Q62,42 59,39 Q56,36 55,32 Q54,28 55,24 Q56,20 58,17 Q60,15 52,15 Z"
      />
      
      {/* Australia */}
      <path 
        className="continent"
        d="M75,40 Q78,39 81,41 Q84,43 85,45 Q86,47 84,48 Q82,49 80,48 Q78,47 76,46 Q74,45 74,43 Q74,41 75,40 Z"
      />
      
      {/* India subcontinent */}
      <path 
        className="continent"
        d="M62,28 Q64,29 66,31 Q68,33 67,35 Q66,37 64,37 Q62,37 60,36 Q58,35 58,33 Q58,31 59,29 Q60,28 62,28 Z"
      />
    </svg>
  );
};

// Industry Icon Component - now single unified category
const IndustryIcon = ({ 
  category, 
  delay 
}: { 
  category: typeof industryCategory; 
  delay: string; 
}) => {
  const Icon = category.icon;
  
  return (
    <div 
      className="absolute group z-30"
      style={{ 
        top: `${category.coordinates.y}%`, 
        left: `${category.coordinates.x}%`,
        transform: 'translate(-50%, -50%)',
        animationDelay: delay
      }}
    >
      <div className="relative">
        {/* Focused glow effect */}
        {category.isFocused && (
          <div 
            className="absolute inset-0 rounded-full animate-pulse scale-150"
            style={{ backgroundColor: `${category.color}30` }}
          ></div>
        )}
        
        {/* Icon container with floating animation */}
        <div 
          className="relative rounded-full p-3 shadow-xl border-2 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 bg-white/95 border-blue-400 ring-2 ring-blue-400/50 animate-bounce"
          style={{
            animation: 'bounce 2s infinite, pulse 2s infinite'
          }}
        >
          <Icon 
            className="h-6 w-6 animate-pulse"
            style={{ color: category.color }}
          />
        </div>
        
        {/* Category label */}
        <div 
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-lg backdrop-blur-sm bg-blue-500 text-white ring-1 ring-blue-400/50"
        >
          {category.name}
        </div>
        
        {/* Hover tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
            <div className="font-medium">{category.name}</div>
            <div className="text-gray-300 text-xs">All Cargo Types</div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-10px); }
          }
          
          @keyframes fade {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

// Flag design component for each country including UAE
const FlagDesign = ({ hub }: { hub: typeof networkHubs[0] }) => {
  const { name, flagColors } = hub;
  
  switch (name) {
    case 'Spain':
      return (
        <div className="w-full h-full relative">
          <div className="absolute top-0 w-full h-1/3 bg-red-600"></div>
          <div className="absolute top-1/3 w-full h-1/3 bg-yellow-400"></div>
          <div className="absolute top-2/3 w-full h-1/3 bg-red-600"></div>
        </div>
      );
    
    case 'USA':
      return (
        <div className="w-full h-full relative bg-red-600">
          <div className="absolute top-0 left-0 w-2/5 h-3/5 bg-blue-800"></div>
          <div className="absolute top-0 w-full h-1/7 bg-white"></div>
          <div className="absolute top-2/7 w-full h-1/7 bg-white"></div>
          <div className="absolute top-4/7 w-full h-1/7 bg-white"></div>
          <div className="absolute top-6/7 w-full h-1/7 bg-white"></div>
        </div>
      );
    
    case 'China':
      return (
        <div className="w-full h-full relative bg-red-600">
          <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400 rounded-sm"></div>
          <div className="absolute top-1 left-3 w-1 h-1 bg-yellow-400 rounded-sm"></div>
          <div className="absolute top-2 left-3 w-1 h-1 bg-yellow-400 rounded-sm"></div>
          <div className="absolute top-3 left-3 w-1 h-1 bg-yellow-400 rounded-sm"></div>
          <div className="absolute top-4 left-2 w-1 h-1 bg-yellow-400 rounded-sm"></div>
        </div>
      );
    
    case 'India':
      return (
        <div className="w-full h-full relative">
          <div className="absolute top-0 w-full h-1/3 bg-orange-500"></div>
          <div className="absolute top-1/3 w-full h-1/3 bg-white flex items-center justify-center">
            <div className="w-3 h-3 border border-blue-800 rounded-full"></div>
          </div>
          <div className="absolute top-2/3 w-full h-1/3 bg-green-600"></div>
        </div>
      );
    
    case 'Singapore':
      return (
        <div className="w-full h-full relative">
          <div className="absolute top-0 w-full h-1/2 bg-red-600"></div>
          <div className="absolute top-1/2 w-full h-1/2 bg-white"></div>
        </div>
      );
    
    case 'UAE':
      return (
        <div className="w-full h-full relative">
          <div className="absolute top-0 w-full h-1/3 bg-green-600"></div>
          <div className="absolute top-1/3 w-full h-1/3 bg-white"></div>
          <div className="absolute top-2/3 w-full h-1/3 bg-black"></div>
          <div className="absolute left-0 top-0 w-1/4 h-full bg-red-600"></div>
        </div>
      );
    
    default:
      return <div className="w-full h-full bg-gray-300"></div>;
  }
};

// Enhanced Logistics Routes Component with all Spain routes highlighted
const LogisticsRoutes = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
      {/* Spain to USA - Atlantic route (enhanced) */}
      <path
        d="M 40% 45% Q 25% 33% 15% 38%"
        stroke="#00BFFF"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
        strokeDasharray="8,4"
        className="animate-pulse"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-24"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Spain to India - Mediterranean route (enhanced) */}
      <path
        d="M 40% 45% Q 52% 51% 63% 50% Q 70% 51% 75% 52%"
        stroke="#FFD700"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
        strokeDasharray="7,4"
        className="animate-pulse"
        style={{ animationDelay: '1s' }}
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-22"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Spain to Singapore - Southeast Asia route (enhanced) */}
      <path
        d="M 40% 45% Q 55% 55% 70% 58% Q 75% 60% 80% 62%"
        stroke="#00FF7F"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
        strokeDasharray="8,4"
        className="animate-pulse"
        style={{ animationDelay: '2s' }}
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-24"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Spain to UAE - Middle East route (new) */}
      <path
        d="M 40% 45% Q 48% 46% 55% 47% Q 60% 47% 65% 48%"
        stroke="#FF6347"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
        strokeDasharray="6,3"
        className="animate-pulse"
        style={{ animationDelay: '2.5s' }}
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-18"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Spain to China - northern Eurasian route (enhanced) */}
      <path
        d="M 40% 45% Q 55% 33% 70% 32% Q 77% 33% 85% 35%"
        stroke="#FF69B4"
        strokeWidth="3"
        fill="none"
        opacity="0.7"
        strokeDasharray="10,5"
        className="animate-pulse"
        style={{ animationDelay: '3s' }}
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-30"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Enhanced glowing route indicators at Spain hub */}
      <circle
        cx="40%"
        cy="45%"
        r="10"
        fill="none"
        stroke="#00BFFF"
        strokeWidth="2"
        opacity="0.6"
        className="animate-ping"
      />
      <circle
        cx="40%"
        cy="45%"
        r="15"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1"
        opacity="0.4"
        className="animate-ping"
        style={{ animationDelay: '1s' }}
      />
      <circle
        cx="40%"
        cy="45%"
        r="20"
        fill="none"
        stroke="#FFD700"
        strokeWidth="0.5"
        opacity="0.3"
        className="animate-ping"
        style={{ animationDelay: '2s' }}
      />
    </svg>
  );
};

// Enhanced Moving Transport with actual movement animation
const MovingTransport = ({
  startX, startY, endX, endY, type, cargo, delay, trajectory
}: {
  startX: number; startY: number; endX: number; endY: number;
  type: 'ship' | 'plane' | 'truck'; cargo: string; delay: string;
  trajectory: string;
}) => {
  const getTransportIcon = () => {
    switch(type) {
      case 'ship':
        return <ShipIcon className="h-5 w-5 text-blue-600" />;
      case 'plane':
        return <Plane className="h-4 w-4 text-sky-500" />;
      case 'truck':
        return <Truck className="h-4 w-4 text-green-600" />;
    }
  };

  const getTransportColor = () => {
    switch(type) {
      case 'ship': return '#1e40af';
      case 'plane': return '#0ea5e9';
      case 'truck': return '#059669';
    }
  };

  const getDuration = () => {
    switch(type) {
      case 'plane': return '18s';
      case 'ship': return '35s';
      case 'truck': return '50s';
    }
  };

  const animationName = `move-${trajectory}`;

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            0% {
              left: ${startX}%;
              top: ${startY}%;
            }
            100% {
              left: ${endX}%;
              top: ${endY}%;
            }
          }
        `}
      </style>
      <div
        className="absolute"
        style={{
          animation: `${animationName} ${getDuration()} linear infinite`,
          animationDelay: delay,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          {/* Transport vehicle with shadow */}
          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-white/50">
            {getTransportIcon()}
          </div>
          
          {/* Cargo label */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span 
              className="text-white text-xs px-2 py-1 rounded-full shadow-lg font-medium border border-white/30"
              style={{ 
                backgroundColor: getTransportColor(),
                transform: 'rotate(0deg)'
              }}
            >
              {cargo}
            </span>
          </div>
          
          {/* Movement trail effect */}
          <div className="absolute inset-0 rounded-full animate-ping opacity-10" 
               style={{ backgroundColor: getTransportColor() }}></div>
        </div>
      </div>
    </>
  );
};

export default GlobalLogisticsNetwork;
