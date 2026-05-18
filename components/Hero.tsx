'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const factories = [
    "HASAN JUTE MILLS LTD",
    "HASAN JUTE & SPINNING",
    "PULP & PAPER UNIT-1",
    "HASAN METAL INDUSTRIES"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [factoryIndex, setFactoryIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = factories[factoryIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        const nextText = currentFullText.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        // Pause when fully typed
        if (nextText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        // Rapid backspacing deleting phase
        const nextText = currentFullText.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        // Cycle to next factory when fully deleted
        if (nextText === "") {
          setIsDeleting(false);
          setFactoryIndex((prev) => (prev + 1) % factories.length);
        }
      }
    };

    // Typing speed (100ms) vs delete speed (40ms)
    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? 40 : 100
    );

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, factoryIndex]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121111]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover select-none pointer-events-none"
        >
          <source src="https://hasan-mills.techsolutionfactory.com/assets/hero-video2-CW4XnXsL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/50 via-transparent to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20 md:pt-0 flex flex-col items-center justify-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[9px] md:text-xs font-bold tracking-[0.45em] text-[#fed65b] uppercase mb-4 md:mb-6 block select-none"
        >
          THE GOLDEN FIBER OF BANGLADESH
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-6xl text-white leading-tight mb-6 md:mb-8 font-bold uppercase select-none flex flex-col items-center justify-center gap-2"
        >
          <span>Sustainable Industrial</span>
          <span className="text-[#fed65b] italic font-normal text-glow min-h-[48px] md:min-h-[75px] flex items-center justify-center flex-wrap px-4 text-3xl md:text-6xl mt-2">
            {displayedText}
            {/* Blinking Cursor */}
            <span 
              className="w-[3px] md:w-[5px] h-[28px] md:h-[50px] bg-[#fed65b] ml-2 inline-block animate-blink shrink-0 shadow-lg shadow-[#fed65b]/50" 
              style={{ verticalAlign: 'middle' }}
            />
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-xs md:text-lg max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 font-sans font-light select-none"
        >
          Pioneering premium eco-friendly packaging, high-tensile spinning yarns, and superior kraft papers. We bridge natural heritage and state-of-the-art engineering across four major concern factories.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full md:w-auto"
        >
          <Link 
            href="/#legacy"
            className="px-10 py-3.5 md:py-4 bg-[#fed65b] hover:bg-white text-[#002e0b] hover:text-[#002e0b] font-bold rounded-sm hover:scale-105 transition-all uppercase tracking-widest text-[11px] md:text-xs shadow-2xl flex items-center justify-center"
          >
            Discover Our Legacy
          </Link>
          <Link 
            href="/products"
            className="px-10 py-3.5 md:py-4 border border-white text-white font-bold rounded-sm hover:bg-white hover:text-[#002e0b] transition-all uppercase tracking-widest text-[11px] md:text-xs flex items-center justify-center backdrop-blur-sm"
          >
            Explore Catalog
          </Link>
        </motion.div>
      </div>

      {/* Custom Styles for Cursor Blink Animation and Text Glow */}
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.9s infinite;
        }
        .text-glow {
          text-shadow: 0 0 25px rgba(254, 214, 91, 0.2);
        }
      `}</style>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </motion.div>

      {/* Carousel Indicators (Static as per layout) */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
        <div className="w-12 h-[2px] bg-[#d4af37]" />
        <div className="w-12 h-[2px] bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
