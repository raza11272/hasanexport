'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExportAnimation = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-[1400px] mx-auto py-12 px-6">
      
      {/* Scene 1: Industrial Excellence & Production */}
      <div className="relative aspect-video bg-white/5 backdrop-blur-sm rounded-[40px] border border-white/10 overflow-hidden group">
        <svg viewBox="0 0 800 450" className="w-full h-full">
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#f5e0a3" />
            </linearGradient>
            <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0b4619" />
              <stop offset="100%" stopColor="#4ade80" />
            </linearGradient>
          </defs>

          {/* Central Factory Hub */}
          <motion.path 
            d="M350 300 L450 300 L450 200 L420 170 L380 170 L350 200 Z" 
            fill="none" 
            stroke="#4ade80" 
            strokeWidth="3"
            animate={{ strokeDasharray: ["0,400", "400,0"] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* 4 Production Lines (Representing the 4 concerns) */}
          {[
            { id: 1, x: 200, y: 150, type: 'jute' },
            { id: 2, x: 200, y: 300, type: 'yarn' },
            { id: 3, x: 600, y: 150, type: 'paper1' },
            { id: 4, x: 600, y: 300, type: 'paper2' }
          ].map((line, i) => (
            <g key={line.id}>
              {/* Product Icons (Vector Illustrations) */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.5 }}
              >
                {line.type === 'jute' && (
                  <path d="M185 135 H215 V165 H185 Z M185 135 L215 165 M215 135 L185 165" stroke="#4ade80" strokeWidth="2" fill="none" />
                )}
                {line.type === 'yarn' && (
                  <path d="M190 300 Q200 280 210 300 T230 300" stroke="#4ade80" strokeWidth="2" fill="none" />
                )}
                {line.type === 'paper1' && (
                  <rect x="585" y="135" width="30" height="30" rx="2" stroke="#d4af37" strokeWidth="2" fill="none" />
                )}
                {line.type === 'paper2' && (
                  <rect x="585" y="285" width="30" height="30" rx="15" stroke="#d4af37" strokeWidth="2" fill="none" />
                )}
              </motion.g>

              {/* Decorative Ring */}
              <motion.circle 
                cx={line.x} cy={line.y} r="45" 
                fill="none" stroke={i < 2 ? "#4ade80" : "#d4af37"} strokeWidth="1" 
                strokeOpacity="0.2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
              {/* Conveyor Path to Hub */}
              <motion.path
                d={`M ${line.x} ${line.y} L 400 250`}
                stroke={i < 2 ? "#4ade80" : "#d4af37"}
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              {/* Moving Packages */}
              <motion.rect
                width="15" height="15"
                fill={i < 2 ? "#4ade80" : "#d4af37"}
                animate={{ 
                  x: [line.x - 7.5, 400 - 7.5], 
                  y: [line.y - 7.5, 250 - 7.5],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
              />
            </g>
          ))}
          
          {/* Animated Cogwheels in the center */}
          <motion.g 
            animate={{ rotate: 360 }} 
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ originX: "400px", originY: "250px" }}
          >
            <circle cx="400" cy="250" r="40" fill="none" stroke="#4ade80" strokeWidth="2" strokeDasharray="10,10" />
            <circle cx="400" cy="250" r="20" fill="none" stroke="#d4af37" strokeWidth="1" />
          </motion.g>
        </svg>
        
        {/* Subtle Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/5 via-transparent to-[#d4af37]/5 pointer-events-none" />
      </div>

      {/* Scene 2: Global Export & Logistics */}
      <div className="relative aspect-video bg-white/5 backdrop-blur-sm rounded-[40px] border border-white/10 overflow-hidden group">
        <svg viewBox="0 0 800 450" className="w-full h-full">
          {/* World Map Backdrop (Abstract Nodes) */}
          {[...Array(20)].map((_, i) => (
            <circle 
              key={i} 
              cx={100 + Math.random() * 600} 
              cy={100 + Math.random() * 250} 
              r="2" 
              fill="#ffffff" 
              opacity="0.1" 
            />
          ))}

          {/* Central Point (Bangladesh) */}
          <circle cx="400" cy="225" r="8" fill="#4ade80" />
          <motion.circle 
            cx="400" cy="225" r="15" 
            fill="none" stroke="#4ade80" strokeWidth="1"
            animate={{ scale: [1, 2], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Export Routes */}
          {[
            { x: 100, y: 150, type: 'ship' },
            { x: 700, y: 100, type: 'plane' },
            { x: 150, y: 350, type: 'ship' },
            { x: 650, y: 350, type: 'plane' },
            { x: 400, y: 50, type: 'plane' }
          ].map((route, i) => (
            <g key={i}>
              <motion.path
                d={`M 400 225 Q ${(400 + route.x) / 2} ${(225 + route.y) / 2 - 50} ${route.x} ${route.y}`}
                fill="none"
                stroke="#d4af37"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
              
              {/* Moving Vehicle Icon (Simplified) */}
              <motion.circle
                r="4"
                fill="#d4af37"
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  motionPath: `path('M 400 225 Q ${(400 + route.x) / 2} ${(225 + route.y) / 2 - 50} ${route.x} ${route.y}')`
                }}
              />
            </g>
          ))}

          {/* Radar Waves */}
          <motion.circle 
            cx="400" cy="225" r="200" 
            fill="none" stroke="#4ade80" strokeWidth="0.5" strokeOpacity="0.1"
            animate={{ scale: [0.8, 1.2], opacity: [0.1, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </svg>

        {/* Scanline Effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ade80]/10 to-transparent h-20 w-full"
          animate={{ top: ['-20%', '120%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default ExportAnimation;
