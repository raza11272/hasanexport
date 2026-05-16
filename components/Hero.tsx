'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://hasan-mills.techsolutionfactory.com/assets/hero-video2-CW4XnXsL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 md:pt-0">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[9px] md:text-sm font-bold tracking-[0.4em] text-[#fed65b] uppercase mb-4 md:mb-6 block"
        >
          THE GOLDEN FIBER OF BANGLADESH
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-8xl text-white leading-tight mb-6 md:mb-8"
        >
          A World-Class <br />
          <span className="text-[#fed65b] italic">Jute Heritage</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-xs md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12"
        >
          Embracing sustainable excellence through generations. Where the earth's 
          green gift transforms into the world's golden premium fiber.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
        >
          <button className="px-10 py-3.5 md:py-4 bg-[#fed65b] text-[#002e0b] font-bold rounded-sm hover:scale-105 transition-transform uppercase tracking-widest text-[11px] md:text-sm shadow-2xl">
            Discover Our Legacy
          </button>
          <button className="px-10 py-3.5 md:py-4 border border-white text-white font-bold rounded-sm hover:bg-white hover:text-[#002e0b] transition-all uppercase tracking-widest text-[11px] md:text-sm">
            Our Products
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </motion.div>

      {/* Carousel Indicators (Static as per image) */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
        <div className="w-12 h-[2px] bg-[#d4af37]" />
        <div className="w-12 h-[2px] bg-white/30" />
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a 
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-2xl transition-transform"
      >
        <MessageCircle size={32} fill="currentColor" className="text-white" />
      </motion.a>
    </section>
  );
};

export default Hero;
