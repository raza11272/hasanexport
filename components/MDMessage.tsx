'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MDMessage = () => {
  return (
    <section id="legacy" className="relative py-24 md:py-32 bg-[#fcf9f8] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute bottom-10 left-10 select-none pointer-events-none">
        <h2 className="text-[120px] md:text-[240px] font-serif font-bold text-[#0b4619]/[0.03] leading-none uppercase tracking-tighter">
          Vision
        </h2>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Photo with Spring Dropping Animation (Triggers every single scroll) */}
          <motion.div 
            initial={{ opacity: 0, y: -180 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 13, mass: 1 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Gold Frame Layer */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#d4af37]/40 rounded-sm z-0" />
            
            <div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#e5e7eb] shadow-2xl">
              <img 
                src="/img/profilepic.jpeg" 
                alt="A.T.M Shafiqul Hasan"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b]/20 to-transparent" />
            </div>

            {/* Subtle Label (Mobile Only) */}
            <div className="mt-4 md:hidden text-center">
              <h4 className="font-serif text-xl font-bold text-[#002e0b]">A.T.M Shafiqul Hasan</h4>
              <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">Managing Director</p>
            </div>
          </motion.div>

          {/* Right Side: Content (Triggers every single scroll) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* MD Label Prefix (Slides in from Right on every scroll) */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 70, damping: 15 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-[#d4af37]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#d4af37] uppercase">
                MESSAGE FROM THE MD
              </span>
            </motion.div>

            {/* Quote Header (Slides up on every scroll) */}
            <motion.h2 
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 50, damping: 14, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-[#002e0b] leading-tight mb-8"
            >
              <span className="font-script normal-case tracking-normal font-normal text-4xl md:text-6xl text-[#002e0b]">"Weaving the past into</span> <br />
              <span className="text-[#d4af37] font-script normal-case tracking-normal pl-2 font-normal text-5xl md:text-7xl block mt-2">a sustainable future."</span>
            </motion.h2>

            {/* Body Paragraphs (Slides in on every scroll) */}
            <div className="space-y-6 text-[#41493f] text-base md:text-lg leading-relaxed max-w-2xl">
              <motion.p
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                For decades, Hasan Jute Mills Ltd. has stood as a bastion of quality, 
                preserving the rich heritage of the Golden Fiber. Our commitment transcends 
                mere manufacturing; it is an enduring promise to the earth, our weavers, 
                and our global partners.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                In an era demanding environmental consciousness, we champion jute not just 
                as a traditional commodity, but as the world's premier premium, eco-friendly 
                alternative. Excellence is woven securely into every thread that departs our facilities.
              </motion.p>
            </div>

            {/* Footer Name and Title (Pops up on every scroll) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[#0b4619]/10"
            >
              <h4 className="font-serif text-3xl md:text-4xl font-bold text-[#002e0b] mb-2 tracking-tight">
                A.T.M Shafiqul Hasan
              </h4>
              <p className="text-xs font-bold text-[#d4af37] uppercase tracking-[0.25em]">
                MANAGING DIRECTOR
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MDMessage;
