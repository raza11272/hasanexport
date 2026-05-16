'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const categories = ["ALL", "PROCESS", "YARN", "PACKAGING"];

const galleryItems = [
  {
    id: 1,
    category: "PROCESS",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200",
    title: "Industrial Looming",
    span: "large"
  },
  {
    id: 2,
    category: "YARN",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    title: "Premium Jute Yarn",
    span: "small"
  },
  {
    id: 3,
    category: "PROCESS",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    title: "Factory Infrastructure",
    span: "small"
  },
  {
    id: 4,
    category: "PACKAGING",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    title: "Eco-Friendly Sacks",
    span: "wide"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "ALL" || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#0b4619] uppercase mb-4 block">
              PRODUCT SHOWCASE
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#002e0b]">
              The Golden Fiber <span className="text-[#d4af37] italic">Gallery</span>
            </h2>
            <div className="w-20 h-[2px] bg-[#0b4619]/20 mt-6" />
          </div>
          
          <button className="flex items-center gap-2 px-6 py-3 border border-[#d4af37] text-[#d4af37] font-bold rounded-sm hover:bg-[#d4af37] hover:text-white transition-all group">
            EXPLORE ALL WORKS <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all ${
                activeCategory === cat 
                ? "bg-[#d4af37] text-white shadow-lg shadow-[#d4af37]/30 scale-105" 
                : "bg-white text-[#41493f] hover:bg-[#fcf9f8] border border-[#0b4619]/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative group rounded-2xl overflow-hidden shadow-xl ${
                  item.span === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  item.span === 'wide' ? 'md:col-span-2 md:row-span-1' : 
                  'md:col-span-1 md:row-span-1'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-serif text-xl">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
