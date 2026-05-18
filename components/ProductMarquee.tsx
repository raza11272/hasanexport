'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductItem {
  id: number;
  title: string;
  category: string;
  img: string;
}

const products: ProductItem[] = [
  { 
    id: 1, 
    title: "Standard Hessian Sacks", 
    category: "Jute Packaging", 
    img: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    title: "Heavy Cees Sacks", 
    category: "Heavy Duty Bags", 
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    title: "Industrial Jute Yarn", 
    category: "Jute Spinning", 
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    title: "Precision Twine", 
    category: "Spinning & Ropes", 
    img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    title: "Divergent Fine Plies", 
    category: "Spun Yarn", 
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    title: "Heavy Duty Kraft Paper", 
    category: "Pulp & Paper", 
    img: "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 7, 
    title: "High-Burst Linerboard", 
    category: "Industrial Roll", 
    img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 8, 
    title: "Structural Steel Beams", 
    category: "Heavy Industry", 
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 9, 
    title: "Pre-Engineered Metal Frames", 
    category: "Metal Fabrication", 
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 10, 
    title: "Castings & Heavy Spares", 
    category: "Precision Casting", 
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
  }
];

// Duplicate the array to ensure seamless infinite looping scroll
const doubledProducts = [...products, ...products, ...products];

const ProductMarquee = () => {
  return (
    <section className="py-24 bg-[#fcf9f8] overflow-hidden border-t border-[#0b4619]/5 relative">
      
      {/* Decorative Grid Line Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #0b4619 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-[#d4af37] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase block mb-3"
        >
          Premium Industrial Catalog
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#002e0b] uppercase tracking-tight"
        >
          <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Our Product</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-3 font-normal text-4xl md:text-6xl">Showcase</span>
        </motion.h2>
      </div>

      {/* INFINITE SCROLL CONTAINER (Left to Right) */}
      <div className="relative w-full flex items-center justify-center py-6 select-none overflow-hidden group/marquee">
        
        {/* Left Side Shadow Blend */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-60 bg-gradient-to-r from-[#fcf9f8] to-transparent z-10 pointer-events-none" />
        
        {/* Right Side Shadow Blend */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-60 bg-gradient-to-l from-[#fcf9f8] to-transparent z-10 pointer-events-none" />

        {/* Dynamic Horizontal Sliding Loop */}
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["-33.33%", "0%"] }} // Left-to-right infinite scrolling animation
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Premium gliding speed
              ease: "linear"
            }
          }}
          // Pause on hover for enhanced user control and specification inspection
          style={{ display: 'flex' }}
        >
          {doubledProducts.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className="w-[280px] md:w-[350px] shrink-0 bg-white rounded-3xl p-4 shadow-xl shadow-black/[0.03] border border-[#0b4619]/5 transition-transform duration-500 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#e5e7eb] mb-4 relative">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#002e0b]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-[#0b4619]/5 text-[#0b4619] rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg md:text-xl font-bold text-[#002e0b] group-hover:text-[#d4af37] transition-colors leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CATALOG REDIRECT BUTTON */}
      <div className="mt-14 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/products"
            className="inline-flex items-center justify-center px-12 py-5 bg-[#0b4619] hover:bg-[#fed65b] text-[#fed65b] hover:text-[#0b4619] font-bold rounded-xl hover:scale-105 transition-all uppercase tracking-widest text-xs shadow-2xl shadow-[#0b4619]/10"
          >
            Explore Full Product Catalog
          </Link>
        </motion.div>
      </div>

    </section>
  );
};

export default ProductMarquee;
