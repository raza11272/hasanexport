'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { resolveImage } from '@/lib/utils';

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

  const fetchedCategories = data?.imageCategories?.map((c: any) => c.name) || [];

  // Fallback to unique categories in items if fetchedCategories is empty
  const categoriesList = fetchedCategories.length > 0
    ? fetchedCategories
    : Array.from(new Set(galleryItems.map((item: any) => item.category)));

  return (
    <section id="gallery" className="py-24 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
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

        {/* Gallery Grouped by Category */}
        <div className="space-y-20">
          {categoriesList.map((cat: string) => {
            const itemsForCat = galleryItems.filter((item: any) => item.category === cat);
            if (itemsForCat.length === 0) return null;

            return (
              <div key={cat} className="space-y-8">
                {/* Category Title */}
                <div className="flex items-center gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#002e0b] uppercase tracking-wider">
                    {cat}
                  </h3>
                  <div className="flex-grow h-[1px] bg-[#0b4619]/10" />
                </div>

                {/* Masonry Columns Layout */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                  {itemsForCat.map((item: any) => (
                    <div
                      key={item.id}
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
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
