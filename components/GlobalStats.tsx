'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Users, ShieldCheck, Globe2 } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: "128",
    label: "Active Ports",
    icon: <Ship size={40} className="text-[#4ade80]" />,
    description: "International maritime connectivity across major trade routes.",
    delay: 0
  },
  {
    id: 2,
    value: "250+",
    label: "Global Partners",
    icon: <Users size={40} className="text-[#d4af37]" />,
    description: "Strong strategic alliances with global industrial leaders.",
    delay: 0.2
  },
  {
    id: 3,
    value: "Premium",
    label: "Export Grade",
    icon: <ShieldCheck size={40} className="text-[#4ade80]" />,
    description: "Adhering to the highest international quality standards.",
    delay: 0.4
  },
  {
    id: 4,
    value: "6 Cont.",
    label: "Presence",
    icon: <Globe2 size={40} className="text-[#d4af37]" />,
    description: "Operational footprint spanning across six continents.",
    delay: 0.6
  }
];

const VectorIllustration = ({ id }: { id: number }) => {
  // Custom SVG animations for each stat
  if (id === 1) { // Ports - Ship & Waves
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M20 70 Q35 60 50 70 T80 70"
          fill="none"
          stroke="#4ade80"
          strokeWidth="2"
          strokeDasharray="4,4"
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.g
          animate={{ y: [0, -2, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M30 65 L70 65 L75 50 L25 50 Z" fill="#4ade80" fillOpacity="0.2" stroke="#4ade80" strokeWidth="1" />
          <rect x="45" y="40" width="10" height="10" fill="#4ade80" fillOpacity="0.4" />
        </motion.g>
      </svg>
    );
  }
  if (id === 2) { // Partners - Connected Nodes
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="5" fill="#d4af37" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <g key={i}>
            <motion.line
              x1="50" y1="50"
              x2={50 + Math.cos(angle * Math.PI / 180) * 30}
              y2={50 + Math.sin(angle * Math.PI / 180) * 30}
              stroke="#d4af37"
              strokeWidth="1"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx={50 + Math.cos(angle * Math.PI / 180) * 30}
              cy={50 + Math.sin(angle * Math.PI / 180) * 30}
              r="3"
              fill="#d4af37"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          </g>
        ))}
      </svg>
    );
  }
  if (id === 3) { // Grade - Shield / Seal
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <motion.path
          d="M50 20 L80 30 V60 Q50 85 20 60 V30 Z"
          fill="#4ade80"
          fillOpacity="0.1"
          stroke="#4ade80"
          strokeWidth="2"
          animate={{ strokeDasharray: ["0,100", "100,0"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M35 50 L45 60 L65 40"
          fill="none"
          stroke="#4ade80"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    );
  }
  if (id === 4) { // Presence - Rotating Globe
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="35" fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.3" />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <ellipse cx="50" cy="50" rx="35" ry="10" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.5" />
          <ellipse cx="50" cy="50" rx="10" ry="35" fill="none" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.5" />
          <circle cx="85" cy="50" r="4" fill="#d4af37" />
          <circle cx="15" cy="50" r="4" fill="#d4af37" />
        </motion.g>
      </svg>
    );
  }
  return null;
};

const GlobalStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px] mx-auto py-12">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: stat.delay }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-[#4ade80]/40 transition-all duration-500 overflow-hidden">
            {/* Background Illustration Shadow */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
              <VectorIllustration id={stat.id} />
            </div>

            <div className="relative z-10">
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">
                  {stat.value}
                </span>
              </div>
              
              <h4 className="text-[#d4af37] font-bold text-sm uppercase tracking-widest mb-4">
                {stat.label}
              </h4>
              
              <p className="text-white/40 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>

            {/* Hover Scanning Line */}
            <motion.div 
              className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent"
              animate={{ left: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GlobalStats;
