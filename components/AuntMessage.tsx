'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AuntMessage = () => {
  return (
    <section id="director-legacy" className="relative pt-6 pb-24 md:pt-16 md:pb-32 bg-[#fcf9f8] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute bottom-10 right-10 select-none pointer-events-none">
        <h2 className="text-[120px] md:text-[240px] font-serif font-bold text-[#0b4619]/[0.02] leading-none uppercase tracking-tighter">
          Legacy
        </h2>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Side: Content (Desktop Left, Mobile Second) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">

            {/* Prefix Label */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 70, damping: 15 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-[#d4af37]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#d4af37] uppercase">
                MESSAGE FROM THE DIRECTOR
              </span>
            </motion.div>

            {/* Quote Header */}
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

            {/* Body Paragraphs */}
            <div className="space-y-6 text-[#41493f] text-base md:text-lg leading-relaxed max-w-2xl">
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-justify"
              >
                We emphasize efficient operations, strong coordination, and consistent
                quality across all business activities. Our priority is to ensure smooth
                execution of strategies and maintain high standards in day-to-day
                management. At <strong className="font-bold text-[#002e0b]">Hasan Group</strong>,
                we work closely with all departments to improve productivity, enhance
                performance, and support sustainable business growth. Emphasis is given
                to discipline, responsibility, and practical decision-making in every
                operation. Our continuous effort is to strengthen internal systems and
                ensure long-term stability and progress.
              </motion.p>
            </div>

            {/* Footer Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[#0b4619]/10"
            >
              <h4 className="font-serif text-3xl md:text-4xl font-bold text-[#002e0b] mb-2 tracking-tight">
                Sarah Hasan
              </h4>
              <p className="text-xs font-bold text-[#d4af37] uppercase tracking-[0.25em]">
                DIRECTOR
              </p>
            </motion.div>

          </div>

          {/* Right Side: Photo with Spring Dropping Animation (Desktop Right, Mobile First) */}
          <motion.div
            initial={{ opacity: 0, y: -180 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 60, damping: 13, mass: 1 }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            {/* Decorative Gold Frame Layer */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#d4af37]/40 rounded-sm z-0" />

            <div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#e5e7eb] shadow-2xl">
              <img
                src="/img/imgaunt.jpeg"
                alt="Sarah Hasan"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b]/20 to-transparent" />
            </div>

            {/* Subtle Label (Mobile Only) */}
            <div className="mt-4 md:hidden text-center">
              <h4 className="font-serif text-xl font-bold text-[#002e0b]">Sarah Hasan</h4>
              <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-widest">Director of International Trade</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AuntMessage;
