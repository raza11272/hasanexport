'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Filter,
  Image as ImageIcon,
  Grid,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_GALLERY_DATA, parseGalleryData, GalleryItem, CategoryGroup } from '@/components/Gallery';

export default function GalleryPage() {
  const { data, loading, error } = useQuery<any>(GET_GALLERY_DATA, { errorPolicy: 'all' });
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeTabImages, setActiveTabImages] = useState<GalleryItem[]>([]);

  // Parse all category groups from GraphQL response
  const categoryGroups = useMemo(() => parseGalleryData(data), [data]);

  // Flattened list of all items for search & lightbox navigation
  const allImages = useMemo(() => {
    return categoryGroups.flatMap((group) => group.items);
  }, [categoryGroups]);

  // Filtered categories based on selected category & search query
  const filteredCategoryGroups = useMemo(() => {
    return categoryGroups
      .map((group) => {
        if (selectedCategory !== 'ALL' && group.categoryName.toLowerCase() !== selectedCategory.toLowerCase()) {
          return null;
        }

        const items = group.items.filter((item) => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          return item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
        });

        if (items.length === 0) return null;

        return {
          ...group,
          items,
        };
      })
      .filter((group): group is CategoryGroup => group !== null);
  }, [categoryGroups, selectedCategory, searchQuery]);

  // Total count of currently visible images
  const totalVisibleCount = useMemo(() => {
    return filteredCategoryGroups.reduce((acc, group) => acc + group.items.length, 0);
  }, [filteredCategoryGroups]);

  // List of images available in current filtered context for lightbox
  const lightboxList = useMemo(() => {
    return filteredCategoryGroups.flatMap((g) => g.items);
  }, [filteredCategoryGroups]);

  const openLightbox = (item: GalleryItem) => {
    const idx = lightboxList.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightboxImage = () => {
    if (lightboxIndex === null || lightboxList.length === 0) return;
    setLightboxIndex((prev) => (prev === 0 ? lightboxList.length - 1 : (prev as number) - 1));
  };

  const nextLightboxImage = () => {
    if (lightboxIndex === null || lightboxList.length === 0) return;
    setLightboxIndex((prev) => (prev === lightboxList.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow bg-[#fcf9f8]">
        {/* Page Hero Banner */}
        <section className="bg-[#064015] text-white pt-24 md:pt-28 pb-12 md:pb-16 px-6 md:px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="max-w-[1280px] mx-auto relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#fed65b] hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <span className="text-xs font-bold tracking-[0.3em] text-[#fed65b] uppercase block mb-3">
                  VISUAL ARCHIVE
                </span>
                <h1 className="font-serif text-4xl md:text-6xl text-white font-bold leading-tight">
                  The Golden Fiber <span className="text-[#fed65b] font-signature font-normal">Gallery</span>
                </h1>
                <p className="mt-4 text-white/70 max-w-2xl text-sm md:text-base leading-relaxed">
                  Browse our complete visual category showcase detailing manufacturing processes, factory units, finished jute products, and corporate achievements.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-xs text-white/90">
                <Grid size={16} className="text-[#fed65b]" />
                <span>
                  <strong className="text-white font-bold">{allImages.length}</strong> Total Images Across{' '}
                  <strong className="text-[#fed65b] font-bold">{categoryGroups.length}</strong> Categories
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="sticky top-[64px] md:top-[70px] z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm py-4 px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'ALL'
                    ? 'bg-[#002e0b] text-[#fed65b] shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                All Categories ({allImages.length})
              </button>

              {categoryGroups.map((group) => {
                const isSelected = selectedCategory.toLowerCase() === group.categoryName.toLowerCase();
                return (
                  <button
                    key={group.categoryId}
                    onClick={() => setSelectedCategory(group.categoryName)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[#002e0b] text-[#fed65b] shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {group.categoryName} ({group.items.length})
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 bg-stone-100 border border-stone-200 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#002e0b] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Content Area */}
        <section className="py-16 px-6 md:px-16 max-w-[1280px] mx-auto min-h-[500px]">
          {loading ? (
            <div className="space-y-12 animate-pulse">
              {[1, 2].map((s) => (
                <div key={s} className="space-y-4">
                  <div className="h-8 bg-stone-200 rounded-lg w-64" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-64 bg-stone-200 rounded-2xl" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : filteredCategoryGroups.length > 0 ? (
            <div className="space-y-20">
              {filteredCategoryGroups.map((group) => (
                <div key={group.categoryId} className="space-y-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                    <div className="w-4 h-4 rounded-full bg-[#d4af37] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#002e0b]" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#002e0b] uppercase tracking-wider">
                      {group.categoryName}
                    </h2>
                    <div className="flex-grow h-[1px] bg-stone-200" />
                    <span className="text-xs font-bold text-[#002e0b]/60 bg-[#002e0b]/5 px-3 py-1 rounded-full uppercase tracking-wider">
                      {group.items.length} {group.items.length === 1 ? 'Image' : 'Images'}
                    </span>
                  </div>

                  {/* Category Images Grid */}
                  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                    <AnimatePresence mode="popLayout">
                      {group.items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => openLightbox(item)}
                          className="break-inside-avoid mb-4 relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-stone-100 border border-stone-200/50"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{
                              height:
                                item.span === 'large'
                                  ? '380px'
                                  : item.span === 'wide'
                                  ? '220px'
                                  : '280px',
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                            <div className="flex justify-end">
                              <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                                <Maximize2 size={16} />
                              </span>
                            </div>
                            <div>
                              <span className="text-[10px] font-bold text-[#fed65b] uppercase tracking-[0.2em] mb-1 block">
                                {item.category}
                              </span>
                              <h3 className="text-white font-serif text-lg font-bold leading-tight">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-stone-200 max-w-lg mx-auto shadow-sm">
              <ImageIcon className="w-16 h-16 text-stone-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#002e0b] mb-2">No Images Found</h3>
              <p className="text-stone-500 text-sm mb-6">
                No images matched your selected category or search term.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('ALL');
                  setSearchQuery('');
                }}
                className="px-6 py-2.5 bg-[#002e0b] text-[#fed65b] font-bold text-xs rounded-xl hover:bg-[#002e0b]/90 transition-all uppercase tracking-wider cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && lightboxList[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
              >
                <X size={24} />
              </button>

              {/* Counter Badge */}
              <div className="absolute top-6 left-6 z-50 text-xs font-bold text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                {lightboxIndex + 1} / {lightboxList.length} -{' '}
                <span className="text-[#fed65b]">{lightboxList[lightboxIndex].category}</span>
              </div>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightboxImage();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all cursor-pointer"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Image Container */}
              <div
                className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={lightboxList[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={lightboxList[lightboxIndex].image}
                  alt={lightboxList[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                />

                <div className="mt-6 text-center">
                  <span className="text-xs font-bold text-[#fed65b] uppercase tracking-[0.2em]">
                    {lightboxList[lightboxIndex].category}
                  </span>
                  <h3 className="text-white font-serif text-xl md:text-2xl font-bold mt-1">
                    {lightboxList[lightboxIndex].title}
                  </h3>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightboxImage();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all cursor-pointer"
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
