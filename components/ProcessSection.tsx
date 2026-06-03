'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const GET_LANDING_PROCESS = gql`
  query GetLandingProcess {
    landingPage {
      our_process {
        id
        phase
        title
        description
        side
      }
    }
  }
`;

const TimelineItem = ({ item, index }: { item: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div 
      ref={ref}
      className={`relative mb-32 md:mb-48 flex justify-between items-center w-full ${
        item.side === 'left' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Empty space for the other side */}
      <div className="hidden md:block w-[45%]" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: item.side === 'right' ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.side === 'right' ? 50 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`w-full md:w-[45%] ${item.side === 'right' ? 'text-left' : 'text-right'}`}
      >
        <div className="mb-2">
          <h3 className="text-[#d4af37] font-serif text-2xl md:text-3xl font-bold mb-1">
            {item.title}
          </h3>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#41493f]/40 uppercase">
            {item.phase}
          </span>
        </div>
        <p className="text-[#41493f] text-sm md:text-lg max-w-sm leading-relaxed inline-block">
          {item.description}
        </p>
      </motion.div>

      {/* Center Dot (Mobile/Tablet and Desktop) */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="w-4 h-4 rounded-full bg-[#d4af37] border-4 border-[#fcf9f8] shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10"
        />
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const { data } = useQuery<any>(GET_LANDING_PROCESS, { errorPolicy: 'all' });
  const phases = data?.landingPage?.our_process?.length ? data.landingPage.our_process : [];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={containerRef} className="py-24 md:py-40 bg-[#fcf9f8] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#d4af37] uppercase mb-4 block"
          >
            OUR PROCESS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-bold text-[#002e0b]"
          >
            <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Journey to the</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Golden Fiber</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Background Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#0b4619]/10" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#d4af37] z-0"
          />

          {/* Timeline Items */}
          <div className="relative z-10">
            {phases.map((item: any, index: number) => (
              <TimelineItem key={item.id || index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-24 w-96 h-96 bg-[#0b4619]/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Floating Particle (AI Feel) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#d4af37] rounded-full pointer-events-none"
          animate={{
            y: [0, -500],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            left: `${20 + Math.random() * 60}%`,
            bottom: "0%"
          }}
        />
      ))}
    </section>
  );
};

export default ProcessSection;
