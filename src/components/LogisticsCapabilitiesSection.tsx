'use client'
import React from "react";
import {
  Ship as ShipIcon,
  Plane,
  Truck,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LogisticsCapabilitiesSection = () => {
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-logistics-dark-blue to-slate-800 overflow-hidden relative">
      {/* Geometric Background Animation */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-logistics-dark-blue/90 via-logistics-blue/80 to-logistics-dark-blue/90"></div>

        {/* Large geometric circles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large background circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-logistics-light-blue/20 animate-pulse"></div>

          {/* Medium overlapping circles */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-logistics-blue/30 to-transparent opacity-40 animate-slow-spin"></div>
          <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-logistics-light-blue/20 to-transparent opacity-50 animate-reverse-spin"></div>

          {/* Smaller geometric elements */}
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full border-2 border-logistics-light-blue/15 animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-logistics-green/15 to-logistics-blue/10 opacity-60 animate-slow-spin delay-500"></div>

          {/* Intersecting circles for depth */}
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full border border-logistics-light-blue/25 animate-pulse delay-700"></div>
          <div className="absolute top-2/3 right-1/2 w-[250px] h-[250px] rounded-full bg-gradient-to-bl from-logistics-blue/25 to-transparent opacity-40 animate-reverse-spin delay-1000"></div>
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
      </div>

      {/* Enhanced Globe Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <Globe className="w-[600px] h-[600px] text-white/10 animate-slow-spin" />
            {/* Globe glow effect */}
            <div className="absolute inset-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-logistics-blue/5 via-transparent to-logistics-light-blue/5 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Connection Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="grid grid-cols-16 h-full">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-white/10 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
        <div className="grid grid-rows-12 w-full absolute top-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-full border-b border-white/10 animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>

        {/* Diagonal connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ transform: "rotate(15deg)" }}
        >
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 100}
              x2="100%"
              y2={i * 100}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-logistics-light-blue/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="text-white mb-3 py-1.5 border-white/50 backdrop-blur-sm bg-white/5"
          >
            Global Network
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Logistics{" "}
            <span className="text-logistics-light-blue">Capabilities</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Seamlessly connecting continents with our comprehensive
            transportation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <LogisticsCapabilityCard
            title="Ocean Logistics"
            description="Efficient ocean freight solutions connecting major ports across continents with reliable scheduling and cargo tracking."
            icon={<ShipIcon className="h-8 w-8" />}
            color="bg-logistics-blue"
            metrics={[
              { label: "Annual Tonnage", value: "10M+" },
              { label: "Ports Served", value: "200+" },
              { label: "Vessels", value: "120" },
            ]}
            routes={[
              "Spain / Portugal / Netherlands → India",
              "Spain / Portugal / Netherlands → Southest",
              "Spain / Portugal / Netherlands → US",
            ]}
            backgroundImage="sheep.jpg"
            index={0}
          />

          <LogisticsCapabilityCard
            title="Air Logistics"
            description="Premium air freight services for time-sensitive cargo with real-time tracking and specialized handling."
            icon={<Plane className="h-8 w-8" />}
            color="bg-logistics-light-blue"
            metrics={[
              { label: "Monthly Cargo", value: "2000 KG" },
              { label: "Airports", value: "30+" },
              { label: "Monthly Flights", value: "20+" },
            ]}
            routes={[
              "Spain / Portugal / Netherlands → India ",
              "Spain / Portugal / Netherlands → China ",
              "Spain / Portugal / Netherlands → UAE ",
            ]}
            backgroundImage="airplane-cargo.jpg"
            index={1}
          />

          <LogisticsCapabilityCard
            title="Land Transport"
            description="Extensive ground transportation network offering flexibility, reliability and door-to-door delivery solutions."
            icon={<Truck className="h-8 w-8" />}
            color="bg-logistics-green"
            metrics={[
              { label: "Fleet Size", value: "100+" },
              { label: "Route Coverage", value: "20+" },
              { label: "Daily Deliveries", value: "80+" },
            ]}
            routes={[
              "Molina de Segura → Valencia",
              "Amares, Portugal → Leixoes",
              "Camarate → Lisbon",
              "La Roca Del Valles → Barcelona",
            ]}
            backgroundImage="truck.jpg"
            index={2}
          />
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() =>
              document
                .querySelector("#stats")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 text-white hover:text-logistics-light-blue transition-colors group backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:border-logistics-light-blue/50 hover:bg-white/20"
          >
            <span className="text-lg font-medium">Learn more</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Moving logistics elements */}
        <div className="absolute top-1/2 left-0 w-full pointer-events-none overflow-hidden">
          <div className="logistics-element-container">
            {[...Array(5)].map((_, i) => (
              <MovingLogisticsElement
                key={i}
                type={i % 3 === 0 ? "ship" : i % 3 === 1 ? "plane" : "truck"}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Logistics Capability Card Component with motion animations
const LogisticsCapabilityCard = ({
  title,
  description,
  icon,
  color,
  metrics,
  routes,
  backgroundImage,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  metrics: { label: string; value: string }[];
  routes: string[];
  backgroundImage: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="group"
    >
      <Card className="bg-black/40 backdrop-blur-sm border-gray-800 overflow-hidden h-full transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(135,206,235,0.3)] group-hover:-translate-y-2">
        {/* Card Header with Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
            <img
              src={`lovable-uploads/${backgroundImage}`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="absolute bottom-0 left-0 p-6 z-20">
            {/* Icon with colored background */}
            <div
              className={`${color} w-14 h-14 rounded-full flex items-center justify-center text-white mb-3 shadow-glow`}
            >
              {icon}
            </div>

            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>

        <CardContent className="p-6">
          <p className="text-gray-300 mb-6">{description}</p>

          {/* Key Metrics - Hidden on mobile, visible on md and up */}
          <div className="hidden md:grid grid-cols-3 gap-2 mb-6">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="text-center p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors min-h-[70px] flex flex-col justify-center"
              >
                <p className="text-base md:text-lg font-bold text-white leading-none mb-1">
                  {metric.value}
                </p>
                <p className="text-xs text-white/80 leading-tight">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Active Routes - Hidden on mobile, visible on md and up */}
          {/* Active Routes - Hidden on mobile, visible on md and up */}
          <div className="hidden md:block">
            <h4 className="text-sm text-white uppercase mb-3 font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Active Routes
            </h4>
            <ul className="space-y-3">
              {routes.map((route: string, idx: number) => (
                <li
                  key={idx}
                  className="bg-white/5 rounded-lg p-3 text-sm text-white"
                >
                  {/* Row 1: route text */}
                  <div className="flex items-center mb-2">
                    <span className="text-white">{route}</span>
                  </div>

                  {/* Row 2: animation with dots */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-logistics-light-blue animate-pulse" />
                    <div className="h-0.5 bg-gray-700 flex-grow relative overflow-hidden rounded">
                      <div
                        className="h-full w-6 bg-logistics-light-blue absolute left-0 animate-ship-movement"
                        style={{ animationDuration: `${8 + idx * 3}s` }}
                      />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-logistics-green" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Moving logistics element
const MovingLogisticsElement = ({
  type,
  index,
}: {
  type: "ship" | "plane" | "truck";
  index: number;
}) => {
  const speed = 60 + index * 20;
  const top = 20 + index * 15;
  const delay = index * 5;

  const getIcon = () => {
    switch (type) {
      case "ship":
        return <ShipIcon className="w-6 h-6 text-logistics-blue" />;
      case "plane":
        return <Plane className="w-6 h-6 text-logistics-light-blue" />;
      case "truck":
        return <Truck className="w-6 h-6 text-logistics-green" />;
    }
  };

  return (
    <div
      className={`absolute ${
        index % 2 === 0
          ? "animate-element-left-to-right"
          : "animate-element-right-to-left"
      }`}
      style={{
        top: `${top}%`,
        animationDuration: `${speed}s`,
        animationDelay: `${delay}s`,
        opacity: 0.6,
      }}
    >
      <div className="bg-black/30 backdrop-blur-sm p-2 rounded-full">
        {getIcon()}
      </div>
    </div>
  );
};

export default LogisticsCapabilitiesSection;
