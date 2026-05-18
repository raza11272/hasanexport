'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExportAnimation = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-8 px-4 relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute -top-12 -left-12 w-[350px] h-[350px] bg-[#4ade80]/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-[350px] h-[350px] bg-[#d4af37]/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Main Cinematic Video Player Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative aspect-video bg-black/40 backdrop-blur-md rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden group"
      >
        
        {/* Widescreen Video Embed */}
        <iframe
          src="https://www.youtube.com/embed/YDTtl68qHuc?autoplay=1&mute=1&loop=1&playlist=YDTtl68qHuc&controls=1&rel=0&modestbranding=1"
          title="Hasan Group Corporate Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover relative z-10"
        />

        {/* 1. Holographic Scanline Grid Overlay ("overlay of texture") */}
        <div 
          className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-[0.25] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px]" 
        />

        {/* 2. Fine Technical Mesh Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-20 opacity-[0.06]" 
          style={{ backgroundImage: 'radial-gradient(circle, #4ade80 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} 
        />

        {/* 3. Subtle Vignette & Frame Bezel */}
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-[32px] md:rounded-[40px] pointer-events-none z-30" />
        
        {/* Dynamic Holographic Scanline Animation */}
        <motion.div 
          className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-[#4ade80]/5 via-transparent to-transparent pointer-events-none z-20"
          animate={{ y: ['0%', '500%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

      </motion.div>

      {/* Corporate Label Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] mt-6 flex items-center justify-center gap-3"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
        HQ Corporate Presentation Broadcast • 1080P Widescreen
      </motion.p>

    </div>
  );
};

export default ExportAnimation;
