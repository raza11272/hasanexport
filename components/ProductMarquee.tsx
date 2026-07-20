'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { resolveImage } from '@/lib/utils';

const GET_MARQUEE_PRODUCTS = gql`
  query GetMarqueeProducts {
    products(sort: "id:asc") {
      id
      documentId
      title
      image_url
      image {
        url
      }
      category {
        name
      }
    }
  }
`;

const ProductMarquee = () => {
  const { data } = useQuery<any>(GET_MARQUEE_PRODUCTS, { errorPolicy: 'all' });

  const products = data?.products?.map((item: any) => ({
    id: item.documentId,
    title: item.title,
    category: item.category?.name || "Premium Catalog",
    img: resolveImage(item.image, item.image_url)
  })) || [];

  if (products.length === 0) return null;

  // Duplicate the array to ensure seamless infinite looping scroll
  const doubledProducts = [...products, ...products, ...products];
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
