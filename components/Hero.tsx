'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const GET_HERO_DATA = gql`
  query GetHeroData {
    landingPage {
      hero_slides {
        industry_name
        description
        subtitle
        bg_image_url
        bg_image {
          url
        }
        logo_image_url
        logo_image {
          url
        }
      }
    }
  }
`;

const Hero = () => {
  const { data } = useQuery<any>(GET_HERO_DATA, { errorPolicy: 'all' });
  const [slideIndex, setSlideIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const activeSlides = data?.landingPage?.hero_slides?.map((slide: any) => ({
    title: slide.industry_name,
    description: slide.description,
    subtitle: slide.subtitle || "THE GOLDEN FIBER OF BANGLADESH",
    bgImage: slide.bg_image?.url
      ? (slide.bg_image.url.startsWith('http') ? slide.bg_image.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${slide.bg_image.url}`)
      : slide.bg_image_url,
    logoImage: slide.logo_image?.url
      ? (slide.logo_image.url.startsWith('http') ? slide.logo_image.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${slide.logo_image.url}`)
      : slide.logo_image_url
  })) || [];

  useEffect(() => {
    if (activeSlides.length === 0) return;

    const currentFullText = activeSlides[slideIndex].title;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        const nextText = currentFullText.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        // Pause when fully typed
        if (nextText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000); // 2 seconds reading pause
        }
      } else {
        // Rapid backspacing deleting phase
        const nextText = currentFullText.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        // Cycle to next slide when fully deleted
        if (nextText === "") {
          setIsDeleting(false);
          setSlideIndex((prev) => (prev + 1) % activeSlides.length);
        }
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, slideIndex, activeSlides]);

  if (activeSlides.length === 0) {
    return (
      <section className="h-screen w-full bg-[#121111] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#fed65b] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <span className="text-white/60 text-xs font-mono uppercase tracking-widest">Loading Portal...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#121111]">
      
      {/* Cinematic Zoom Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.10 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{
              opacity: { duration: 1.6, ease: "easeInOut" },
              scale: { duration: 14.0, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {activeSlides[slideIndex].bgImage ? (
              <img 
                src={activeSlides[slideIndex].bgImage} 
                alt={activeSlides[slideIndex].title} 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            ) : (
              <div className="w-full h-full bg-[#064015]" />
            )}
          </motion.div>
        </AnimatePresence>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-black/65 bg-gradient-to-b from-black/55 via-transparent to-black/90 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-20 md:pt-0 flex flex-col items-center justify-center">
        
        {/* Logo Image above title */}
        {activeSlides[slideIndex].logoImage && (
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="mt-16 md:mt-24 mb-8 bg-white/95 px-5 py-2.5 rounded-2xl inline-flex items-center justify-center shadow-lg backdrop-blur-md border border-white/20 hover:scale-102 transition-transform duration-300"
            >
              <img 
                src={activeSlides[slideIndex].logoImage} 
                alt="Concern Logo" 
                className="h-14 md:h-20 object-contain w-auto"
              />
            </motion.div>
          </AnimatePresence>
        )}

        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[9px] md:text-xs font-bold tracking-[0.45em] text-[#fed65b] uppercase mb-4 md:mb-6 block select-none"
        >
          {activeSlides[slideIndex].subtitle}
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif  text-2xl text-white leading-tight mb-6 md:mb-8 font-bold uppercase select-none flex flex-col items-center justify-center gap-2"
        >
          <span>CONCERNS OF HASAN GROUP</span>
          <span className="text-[#fed65b] italic font-normal text-glow min-h-[48px] md:min-h-[75px] flex items-center justify-center flex-wrap px-4 text-3xl md:text-6xl mt-2">
            {displayedText}
            {/* Blinking Cursor */}
            <span 
              className="w-[3px] md:w-[5px] h-[28px] md:h-[50px] bg-[#fed65b] ml-2 inline-block animate-blink shrink-0 shadow-lg shadow-[#fed65b]/50" 
              style={{ verticalAlign: 'middle' }}
            />
          </span>
        </motion.h1>

        {/* Dynamic Slide Description with crossfade */}
        <div className="min-h-[60px] md:min-h-[90px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.p 
              key={slideIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white/80 text-xs md:text-lg max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 font-sans font-light select-none"
            >
              {activeSlides[slideIndex].description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
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


    </section>
  );
};

export default Hero;
