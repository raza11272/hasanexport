'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const ExportMap = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Points on the globe (normalized -1 to 1)
  const points = [
    { id: 1, lat: 40, lng: -74, label: "North America" },
    { id: 2, lat: 52, lng: 4, label: "Europe" },
    { id: 3, lat: -23, lng: -46, label: "South America" },
    { id: 4, lat: -26, lng: 28, label: "Africa" },
    { id: 5, lat: 35, lng: 139, label: "East Asia" },
    { id: 6, lat: 1, lng: 103, label: "SE Asia" },
    { id: 7, lat: -33, lng: 151, label: "Australia" },
    { id: 8, lat: 25, lng: 55, label: "Middle East" },
  ];

  // Bangladesh (approx)
  const origin = { lat: 23, lng: 90 };

  // Convert lat/lng to 3D sphere coordinates then to 2D projection
  const getProjectedCoord = (lat: number, lng: number, rot: number) => {
    const r = 200; // Sphere radius
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + rot) * (Math.PI / 180);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.cos(phi);
    const z = r * Math.sin(phi) * Math.sin(theta);

    return { x, y, z, visible: z > 0 };
  };

  return (
    <div className="relative w-full aspect-[1/1] max-w-[500px] mx-auto bg-transparent group">
      {/* Atmosphere Glow */}
      <div className="absolute inset-0 bg-[#4ade80]/5 rounded-full blur-[60px] animate-pulse" />
      
      <svg viewBox="-300 -300 600 600" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <radialGradient id="globe-grad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
          
          <filter id="glow-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          <mask id="globe-mask">
            <circle cx="0" cy="0" r="200" fill="white" />
          </mask>
        </defs>

        {/* The Globe Sphere */}
        <circle cx="0" cy="0" r="200" fill="url(#globe-grad)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.2" />
        
        {/* Atmosphere Ring */}
        <circle cx="0" cy="0" r="202" fill="none" stroke="#4ade80" strokeWidth="0.5" strokeOpacity="0.4" />

        {/* Grid Lines (Lat/Lng) */}
        {[...Array(12)].map((_, i) => (
          <ellipse 
            key={`lat-${i}`}
            cx="0" cy="0" rx="200" ry={Math.sin(i * Math.PI / 12) * 200}
            fill="none" stroke="#4ade80" strokeWidth="0.2" strokeOpacity="0.1"
          />
        ))}

        {/* Connection Lines (Curved) */}
        {points.map((pt, i) => {
          const start = getProjectedCoord(origin.lat, origin.lng, rotation);
          const end = getProjectedCoord(pt.lat, pt.lng, rotation);

          if (!start.visible && !end.visible) return null;

          return (
            <g key={`line-${i}`}>
              <motion.path
                d={`M ${start.x} ${start.y} Q ${(start.x + end.x) / 2} ${(start.y + end.y) / 2 - 50} ${end.x} ${end.y}`}
                fill="none"
                stroke="#4ade80"
                strokeWidth="1"
                strokeOpacity={start.visible && end.visible ? 0.3 : 0.1}
                strokeDasharray="4,4"
              />
              
              {/* Traveling Plane */}
              {(start.visible && end.visible) && (
                <motion.g
                  animate={{ 
                    x: [start.x, end.x],
                    y: [start.y, end.y],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <Plane size={10} className="text-white fill-white rotate-45" />
                </motion.g>
              )}
            </g>
          );
        })}

        {/* Glow Points */}
        {points.map((pt, i) => {
          const coord = getProjectedCoord(pt.lat, pt.lng, rotation);
          if (!coord.visible) return null;

          return (
            <g key={`point-${i}`}>
              <motion.circle
                cx={coord.x}
                cy={coord.y}
                r="4"
                fill="#4ade80"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              <circle cx={coord.x} cy={coord.y} r="8" fill="#4ade80" opacity="0.2" style={{ filter: 'url(#glow-filter)' }} />
            </g>
          );
        })}

        {/* Origin (Bangladesh) */}
        {(() => {
          const coord = getProjectedCoord(origin.lat, origin.lng, rotation);
          if (!coord.visible) return null;
          return (
            <g>
              <circle cx={coord.x} cy={coord.y} r="6" fill="#fff" />
              <circle cx={coord.x} cy={coord.y} r="12" stroke="#fff" fill="none" className="animate-ping" />
            </g>
          );
        })()}

      </svg>

      {/* Floating Info Boxes - Positional logic relative to projected points */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[10%] right-[10%] bg-black/40 backdrop-blur-md border border-[#4ade80]/20 p-3 rounded-xl shadow-2xl"
        >
          <div className="text-[#4ade80] font-bold text-[10px] uppercase tracking-widest">Global Logistics</div>
          <div className="text-white text-lg font-serif">54+ Hubs Active</div>
        </motion.div>
      </div>

      {/* Scanning Effect Overlay */}
      <div className="absolute inset-0 rounded-full border border-[#4ade80]/10 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-1 bg-[#4ade80]/20 shadow-[0_0_20px_#4ade80]"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default ExportMap;
