'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const categories = ["ALL", "PROCESS", "YARN", "PACKAGING"];

const galleryItems = [
  {
    id: 1,
    category: "PROCESS",
    image: "https://www.bssnews.net/assets/news_photos/2026/04/14/image-377673-1776180496.jpg",
    title: "Modern Processing Line",
    span: "large"
  },
  {
    id: 2,
    category: "PACKAGING",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT1wjtl6b0hbayqz0NRFcccQ_GdK3rVmU0A&s",
    title: "Eco Jute Packaging",
    span: "wide"
  },
  {
    id: 3,
    category: "PROCESS",
    image: "https://www.anantabd.net/wp-content/uploads/2025/07/SPG01829.jpg",
    title: "Automated Spinning Mill",
    span: "small"
  },
  {
    id: 4,
    category: "YARN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk42Y04jr3jCsGq_7CdhRPAClv88Kkp3Z_Yw&s",
    title: "Spun Yarn Production",
    span: "small"
  },
  {
    id: 5,
    category: "PACKAGING",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjpHEwTt58gU3aJKkjxboSatEZVO1N_NrLw&s",
    title: "Heavy Duty Gunny Bags",
    span: "wide"
  },
  {
    id: 6,
    category: "YARN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZp1RBjpgHP2492gef5X2_dt8QgQkP9JhgA&s",
    title: "Premium Golden Spools",
    span: "small"
  },
  {
    id: 7,
    category: "PROCESS",
    image: "https://www.indembkathmandu.gov.in/storage/gallery-images/1655820.jpg",
    title: "Factory Quality Testing",
    span: "large"
  },
  {
    id: 8,
    category: "PACKAGING",
    image: "https://businessinbangladesh.com.bd/wp-content/uploads/2025/09/546626330_1299351095319579_1318494099473606276_n-1024x683.jpg",
    title: "Industrial Storage & Logistics",
    span: "wide"
  },
  {
    id: 9,
    category: "YARN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1Q-As_Ob_N9YIDMhAHouysCqihorsHp3zQ&s",
    title: "Pure Jute Fiber Spools",
    span: "small"
  },
  {
    id: 10,
    category: "PROCESS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PEHHcgo99ddjI_bqyw-ZsA6Hx5t_nAG0Bw&s",
    title: "Heavy Duty Pressing",
    span: "small"
  },
  {
    id: 11,
    category: "PACKAGING",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jp4k0Y7wrwv4spbtRsWZtR8fkCgPA0JiTQ&s",
    title: "Commercial Burlap Packaging",
    span: "wide"
  },
  {
    id: 12,
    category: "YARN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QaHc8yg5t9ReE6tMhJpjsOlQoCJLrpxDfw&s",
    title: "Premium Twist Twines",
    span: "small"
  },
  {
    id: 13,
    category: "PACKAGING",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzf8z0Mz0KZ6NtnDDvpTg9epHSjhqSdP0pkg&s",
    title: "Multi-ply Kraft Sack Rolls",
    span: "wide"
  },
  {
    id: 14,
    category: "PROCESS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoc_kalyBMrmZ1TGHCf1B4FgMoTIqoldmzw&s",
    title: "Textile Looms Calibration",
    span: "large"
  },
  {
    id: 15,
    category: "PROCESS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXFeR9d1VPAb2Y9-YJXhjdNsMg90fL6xxGw&s",
    title: "Modern Weaving Loom",
    span: "small"
  },
  {
    id: 16,
    category: "YARN",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSFa5UQbPunNeZmAWZ3Pj9RNeCOERNX8xSA&s",
    title: "Organic Raw Jute Bundles",
    span: "small"
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
              <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">The Golden Fiber</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Gallery</span>
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

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid mb-4 relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    height: item.span === 'large' ? '380px' : 
                            item.span === 'wide' ? '220px' : 
                            '280px'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-serif text-xl font-bold leading-tight">{item.title}</h4>
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
