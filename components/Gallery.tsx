'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const GET_GALLERY_DATA = gql`
  query GetGalleryData {
    imageCategories {
      documentId
      name
    }
    galleries {
      documentId
      title
      image_url
      image {
        url
      }
      category {
        name
      }
      span
    }
  }
`;

const Gallery = () => {
  const { data } = useQuery<any>(GET_GALLERY_DATA, { errorPolicy: 'all' });
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = data?.imageCategories?.length
    ? ["ALL", ...data.imageCategories.map((c: any) => c.name)]
    : ["ALL"];

  const galleryItems = data?.galleries?.length
    ? data.galleries.map((item: any) => ({
        id: item.documentId,
        category: item.category?.name || "PROCESS",
        image: item.image?.url
          ? (item.image.url.startsWith('http') ? item.image.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${item.image.url}`)
          : item.image_url,
        title: item.title,
        span: item.span || "small"
      }))
    : [];

  const filteredItems = galleryItems.filter((item: any) => 
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
            {filteredItems.map((item: any, index: number) => (
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
