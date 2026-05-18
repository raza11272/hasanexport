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
    title: "Standard Hessian Jute Bags", 
    category: "Jute Bags", 
    img: "https://s.alicdn.com/@sc04/kf/H10bbd75fd3344674b8bd980f53613d0e9/Custom-Natural-Jute-Sack-Source-Factory-30kg-Food-Grade-Burlap-Bag-for-Grain-Cocoa-Coffee-Agricultural-Storage.png" 
  },
  { 
    id: 2, 
    title: "Heavy Cees Jute Bags", 
    category: "Jute Sacks", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUeOuiMJAfIBDD5N7XoVbriHIa3APY2vqTA&s" 
  },
  { 
    id: 3, 
    title: "Traditional Jute Twine & Sutli", 
    category: "Jute Twine / Sutli", 
    img: "https://5.imimg.com/data5/SELLER/Default/2025/8/538665129/IB/SW/YY/145877526/1-kg-jute-sutli-roll-500x500.jpg" 
  },
  { 
    id: 4, 
    title: "Polished Jute Twine (Sutli)", 
    category: "Precision Twine", 
    img: "https://5.imimg.com/data5/SELLER/Default/2025/8/538665130/DE/OU/BQ/145877526/1-kg-jute-sutli-roll.jpg" 
  },
  { 
    id: 5, 
    title: "Erosion Control Jute Geotextiles", 
    category: "Jute Related", 
    img: "https://5.imimg.com/data5/SELLER/Default/2025/10/550380119/FR/QU/IK/130477180/20kg-jute-gunny-bag.jpg" 
  },
  { 
    id: 6, 
    title: "Industrial Kraft Paper Roll", 
    category: "Paper Roll", 
    img: "https://5.imimg.com/data5/XP/TJ/MY-6436108/brown-kraft-paper-roll-500x500.jpg" 
  },
  { 
    id: 7, 
    title: "Corrugated Medium Liner Paper Roll", 
    category: "Paper Roll", 
    img: "https://www.startech.com.bd/image/cache/catalog/pos-printer/roll/pos-roll-500x500.webp" 
  },
  { 
    id: 8, 
    title: "Machine Glazed Wrapping Paper Roll", 
    category: "Paper Roll", 
    img: "https://pixposbd.com/wp-content/uploads/2024/09/510yyfqzcoL._AC_UF8941000_QL80_.jpg" 
  },
  { 
    id: 9, 
    title: "Premium Jute Carpet Backing Yarn", 
    category: "Jute Yarn", 
    img: "https://images.jdmagicbox.com/quickquotes/images_main/jute-yarn-sutli-387624519-6ltlq.jpg" 
  },
  { 
    id: 10, 
    title: "Heavy-Duty Structural Steel Beams", 
    category: "Metal Industry", 
    img: "https://www.bruker.com/en/applications/industrial/metals/_jcr_content/teaserImage.coreimg.jpeg/1733859095146/metal-tubes.jpeg" 
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
