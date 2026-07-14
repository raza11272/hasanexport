'use client';

import React from 'react';

const GlobalFootprint = () => {


  return (
    <section 
      id="global-reach" 
      className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-6 text-center bg-[#121111]"
    >
      
      {/* FULL-BLEED BACKGROUND VIDEO CONTAINER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
  <iframe
          src="https://www.youtube.com/embed/__nmtRkzs9o?autoplay=1&mute=1&loop=1&playlist=__nmtRkzs9o&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1"
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video object-cover scale-[1.35] pointer-events-none border-none select-none"
          allow="autoplay; encrypted-media"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Very Light Dark Emerald Overlay for maximum video pop */}
        <div className="absolute inset-0 bg-[#121111]/45 bg-gradient-to-b from-[#121111]/70 via-transparent to-[#121111]/80 z-10" />
        
        {/* Holographic Scanline Texture */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay opacity-[0.22] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px]" 
        />
        
        {/* Fine Tactical Mesh Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.06]" 
          style={{ backgroundImage: 'radial-gradient(circle, #4ade80 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} 
        />
      </div>

      {/* FOREGROUND HIGH-END TYPING LAYER */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-4 text-center">
        <h2 className="font-serif text-xl sm:text-3xl md:text-5xl lg:text-6xl text-[#fed65b] italic font-normal text-glow leading-tight uppercase select-none">
          Hasan Group of Industries
        </h2>
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

      {/* Volumetric Corner Light Glows */}
      <div className="absolute top-0 left-0 w-[200px] md:w-[400px] h-full bg-gradient-to-r from-[#4ade80]/5 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-full bg-gradient-to-l from-[#fed65b]/5 to-transparent pointer-events-none z-10" />

    </section>
  );
};

export default GlobalFootprint;
