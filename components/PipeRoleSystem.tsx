'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { resolveImage } from '@/lib/utils';

const GET_PIPE_PRODUCTS = gql`
  query GetPipeRoleProducts {
    products(sort: "id:asc") {
      id
      documentId
      title
      image_url
      image { url }
      images(pagination: { limit: -1 }) { url }
      category { name }
    }
  }
`;

/* 4 side face transforms — only Y-axis faces, no top/bottom */
const SIDE_FACES = [
  { angle: 0,   label: 'front' },
  { angle: 90,  label: 'right' },
  { angle: 180, label: 'back'  },
  { angle: 270, label: 'left'  },
];
const RADIUS = 110; // translateZ value

/* ─────────────────────────────────────────────
   Single Product Cube Card
───────────────────────────────────────────── */
const ProductCubeCard = ({
  product,
  index,
}: {
  product: { id: string; title: string; img: string; images: string[] };
  index: number;
}) => {
  const allImgs: string[] =
    product.images?.length > 0 ? product.images : product.img ? [product.img] : [];
  const isMultiple = allImgs.length > 1;
  const mainImg = allImgs[0] || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="flex flex-col items-center gap-5 w-full"
    >
      {/* ── Cube / Flat image ── */}
      <div style={{ width: 280, height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isMultiple ? (
          /* ─── Framer Motion 3D cube — pure Y-axis spin ─── */
          <div style={{ perspective: 850, perspectiveOrigin: '50% 50%', width: 280, height: 280 }}>
            {/* Orbit ring (purely decorative) */}
            <motion.div
              style={{
                position: 'absolute',
                width: 310,
                height: 310,
                marginTop: -155 + 140,
                marginLeft: -155 + 140,
                borderRadius: '50%',
                border: '1.5px dashed rgba(212,175,55,0.35)',
                transformStyle: 'preserve-3d',
                pointerEvents: 'none',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            {/* Cube wrapper — Framer Motion handles the spin */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
              <motion.div
                style={{
                  width: 220,
                  height: 220,
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                {SIDE_FACES.map(({ angle, label }, idx) => {
                  const faceImg = allImgs[idx % allImgs.length];
                  return (
                    <Link
                      href={`/products/${product.id}`}
                      key={label}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: 220,
                        height: 220,
                        borderRadius: 14,
                        overflow: 'hidden',
                        border: '2px solid rgba(212,175,55,0.65)',
                        boxShadow: '0 8px 24px rgba(0,46,11,0.22)',
                        backfaceVisibility: 'hidden',
                        transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                        display: 'block',
                      }}
                    >
                      {faceImg ? (
                        <img
                          src={faceImg}
                          alt={`${product.title} ${label}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          loading="lazy"
                        />
                      ) : (
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,rgba(11,70,25,0.3),rgba(0,46,11,0.5))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg style={{ width: 40, height: 40, color: 'rgba(212,175,55,0.3)' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                          </svg>
                        </div>
                      )}
                    </Link>
                  );
                })}
                {/* NO top face, NO bottom face */}
              </motion.div>
            </div>
          </div>
        ) : (
          /* ── Single image flat card ── */
          <Link href={`/products/${product.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
            <div className="w-full h-full max-h-[280px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group relative flex items-center justify-center">
              {mainImg ? (
                <img
                  src={mainImg}
                  alt={product.title}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700 block"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#0b4619]/5 rounded-2xl">
                  <span className="text-[#002e0b]/40 text-xs">No Image</span>
                </div>
              )}
            </div>
          </Link>
        )}
      </div>

      {/* ── Title + badge + CTA ── */}
      <div className="text-center space-y-2 flex flex-col items-center w-full">
        <h4 className="font-serif text-sm md:text-base font-bold text-[#002e0b] line-clamp-2 px-2 min-h-[48px] flex items-center justify-center">
          {product.title}
        </h4>
        <div className="flex items-center justify-center gap-1.5 text-[#0b4619]/50 text-[10px] font-medium">
          <span className="w-4 h-px bg-[#d4af37]/60" />
          {isMultiple ? `${allImgs.length} images · 3D View` : '1 image · Full view'}
          <span className="w-4 h-px bg-[#d4af37]/60" />
        </div>
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#0b4619]/20 bg-white hover:bg-[#0b4619] hover:border-[#0b4619] text-[#002e0b] hover:text-white text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg"
        >
          View Product
        </Link>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const PipeRoleSystem = () => {
  const { data, loading } = useQuery<any>(GET_PIPE_PRODUCTS, { errorPolicy: 'all' });

  const products =
    data?.products?.map((item: any) => ({
      id: item.documentId,
      title: item.title,
      img: resolveImage(item.image, item.image_url),
      images: item.images?.map((img: any) => resolveImage(img, null)).filter(Boolean) || [],
    })) || [];

  if (loading) {
    return (
      <section className="py-24 bg-[#fcf9f8] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#0b4619] border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  if (!products.length) return null;

  return (
    <section className="py-16 md:py-24 bg-[#fcf9f8] border-t border-[#0b4619]/5 relative overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0b4619 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center md:justify-start gap-4 mb-10 md:mb-14">
          <span className="w-12 h-[2px] bg-[#d4af37] hidden md:block" />
          <h2 className="font-serif text-3xl font-bold text-[#002e0b] text-center md:text-left">
            <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-5xl pr-1">Primary</span>{' '}
            <span className="text-[#d4af37] font-signature normal-case tracking-normal font-normal text-4xl md:text-5xl">Outputs</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-stretch">
          {products.map((product: any, i: number) => (
            <ProductCubeCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#0b4619] hover:bg-[#fed65b] text-[#fed65b] hover:text-[#0b4619] font-bold rounded-xl hover:scale-105 transition-all uppercase tracking-widest text-xs shadow-2xl shadow-[#0b4619]/10"
          >
            Explore Full Product Catalog
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PipeRoleSystem;
