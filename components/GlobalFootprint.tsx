'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ExportAnimation from './ExportAnimation';
import GlobalStats from './GlobalStats';

const GlobalFootprint = () => {
  return (
    <section id="global-reach" className="bg-[#1c1b1b] py-24 md:py-32 relative overflow-hidden flex flex-col items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #4ade80 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 w-full relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#4ade80]/10 text-[#4ade80] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-3 border border-[#4ade80]/20"
          >
            GLOBAL SUPPLY CHAIN
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Connecting the <span className="text-[#d4af37]">World</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-white/50 text-base md:text-lg leading-relaxed"
          >
            From our state-of-the-art manufacturing facilities to major global ports, 
            we ensure a seamless flow of premium industrial products to our partners across 6 continents.
          </motion.p>
        </div>

        {/* The Animated Vector Export Animation Component */}
        <ExportAnimation />

        {/* Global Performance Statistics */}
        <div className="mt-12">
          <GlobalStats />
        </div>
      </div>

      {/* Cinematic Side Glows */}
      <div className="absolute top-0 left-0 w-[200px] md:w-[400px] h-full bg-gradient-to-r from-[#4ade80]/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-full bg-gradient-to-l from-[#4ade80]/10 to-transparent pointer-events-none" />
      
      {/* Background Subtle Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#d4af37]/20 rounded-full"
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </section>
  );
};

export default GlobalFootprint;
