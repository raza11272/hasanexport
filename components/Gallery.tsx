'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, LayoutGrid } from 'lucide-react';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { getStrapiMediaUrl } from '@/lib/utils';

export const GET_GALLERY_DATA = gql`
  query GetGalleryData {
    imageCategories(pagination: { limit: -1 }) {
      documentId
      name
      images(pagination: { limit: -1 }) {
        documentId
        url
        name
        caption
        alternativeText
      }
    }
  }
`;

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  span?: string;
}

export interface CategoryGroup {
  categoryId: string;
  categoryName: string;
  items: GalleryItem[];
}

export function parseGalleryData(data: any): CategoryGroup[] {
  if (!data) return [];

  const rawCategories = data.imageCategories?.data || data.imageCategories || [];
  const result: CategoryGroup[] = [];

  rawCategories.forEach((catObj: any) => {
    const cat = catObj.attributes || catObj;
    const items: GalleryItem[] = [];

    // ONLY fetch from Image Category 'images' field
    const rawImages = cat.images?.data || cat.images;
    if (rawImages && Array.isArray(rawImages)) {
      rawImages.forEach((imgObj: any, idx: number) => {
        const imgItem = imgObj.attributes || imgObj;
        const imgUrl = imgItem?.url;
        if (imgUrl) {
          let displayTitle = imgItem.caption || imgItem.alternativeText;
          if (!displayTitle && imgItem.name) {
            displayTitle = imgItem.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
          }
          if (!displayTitle) {
            displayTitle = `${cat.name} Image ${idx + 1}`;
          }

          items.push({
            id: imgItem.documentId || imgObj.id || `${cat.documentId || cat.name}-img-${idx}`,
            image: getStrapiMediaUrl(imgUrl),
            title: displayTitle,
            category: cat.name,
            span: idx % 5 === 0 ? 'large' : idx % 3 === 0 ? 'wide' : 'small'
          });
        }
      });
    }

    if (items.length > 0) {
      result.push({
        categoryId: cat.documentId || catObj.id || cat.name,
        categoryName: cat.name,
        items
      });
    }
  });

  return result;
}

const Gallery = () => {
  const { data, loading } = useQuery<any>(GET_GALLERY_DATA, { errorPolicy: 'all' });
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryGroups = useMemo(() => parseGalleryData(data), [data]);

  // Landing page displays ONLY 1 category's images
  const singleCategoryGroup = categoryGroups[activeCategoryIndex] || categoryGroups[0];

  return (
    <section id="gallery" className="py-24 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#0b4619] uppercase mb-4 block">
              PRODUCT SHOWCASE
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#002e0b]">
              <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">
                The Golden Fiber
              </span>{' '}
              <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">
                Gallery
              </span>
            </h2>
            <div className="w-20 h-[2px] bg-[#0b4619]/20 mt-6" />
          </div>

          <Link href="/gallery">
            <button className="flex items-center gap-2 px-6 py-3 border border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-[#002e0b] transition-all group cursor-pointer shadow-sm">
              EXPLORE ALL WORKS{' '}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Category Selector Tabs (if multiple categories exist, allows selecting which 1 category to view on homepage) */}
        {categoryGroups.length > 1 && (
          <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-[#0b4619]/10">
            {categoryGroups.map((group, idx) => {
              const isActive = idx === (activeCategoryIndex < categoryGroups.length ? activeCategoryIndex : 0);
              return (
                <button
                  key={group.categoryId}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#002e0b] text-[#fed65b] shadow-md'
                      : 'bg-white text-[#002e0b]/70 border border-[#002e0b]/10 hover:border-[#002e0b]/30'
                  }`}
                >
                  {group.categoryName} ({group.items.length})
                </button>
              );
            })}
          </div>
        )}

        {/* Display single category images */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-2xl" />
            ))}
          </div>
        ) : singleCategoryGroup && singleCategoryGroup.items.length > 0 ? (
          <div className="space-y-8">
            {/* Category Title */}
            <div className="flex items-center gap-4">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#002e0b] uppercase tracking-wider flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#d4af37] inline-block" />
                {singleCategoryGroup.categoryName}
              </h3>
              <div className="flex-grow h-[1px] bg-[#0b4619]/10" />
              <span className="text-xs font-bold text-[#002e0b]/50 tracking-wider">
                {singleCategoryGroup.items.length} IMAGES
              </span>
            </div>

            {/* Grid for 1 Category */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
              <AnimatePresence mode="popLayout">
                {singleCategoryGroup.items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="break-inside-avoid mb-4 relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-stone-100"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        height:
                          item.span === 'large'
                            ? '380px'
                            : item.span === 'wide'
                            ? '220px'
                            : '280px',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-white font-serif text-xl font-bold leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <LayoutGrid className="w-12 h-12 text-[#002e0b]/30 mx-auto mb-4" />
            <p className="text-stone-500 font-medium">No images available in this category.</p>
          </div>
        )}

        {/* Bottom Callout link to full gallery */}
        <div className="mt-16 text-center">
          <Link href="/gallery">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#002e0b] text-[#fed65b] font-bold text-sm rounded-xl hover:bg-[#002e0b]/90 transition-all shadow-lg hover:shadow-xl cursor-pointer uppercase tracking-widest">
              View All Categories in Full Gallery
              <ChevronRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
