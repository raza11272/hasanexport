'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, Download, Mail, Phone, MapPin, Factory, Settings, Leaf, Globe, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { MOCK_FACTORIES, MOCK_PRODUCTS } from '@/lib/mockData';
import { Playfair_Display } from 'next/font/google';
import { resolveImage } from '@/lib/utils';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const getEmbedUrl = (url?: string) => {
  if (!url) return '';
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split(/[?#]/)[0];
  } else if (url.includes('youtube.com/watch')) {
    videoId = url.split('v=')[1]?.split('&')[0];
  } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('embed/')[1]?.split(/[?#]/)[0];
  }
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1`;
  }
  return url;
};



import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const GET_FACTORY_DETAILS = gql`
  query GetFactoryDetails($documentId: ID!) {
    factory(documentId: $documentId) {
      documentId
      title
      tag
      description
      image_url
      image {
        url
      }
      video_url
      images {
        url
      }
      stats {
        label
        value
      }
      specs {
        name
        value
      }
      process {
        step
        detail
      }
      team_members {
        name
        title
        description
        image_url
        image {
          url
        }
      }
      products(sort: "id:asc") {
        documentId
        title
        image_url
        image {
          url
        }
      }
    }
  }
`;

const MOCK_TEAM_MEMBERS: Record<string, Array<{ name: string; title: string; img: string }>> = {
  'n4w56pffj53kihujenib0185': [
    {
      name: 'Mr. Md. Hasan',
      title: 'Founder & Chairman, Hasan Group',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
    },
    {
      name: 'Sultana Siddiqua',
      title: 'Director of International Trade',
      img: '/img/sultana_siddiqua.png'
    },
    {
      name: 'Rahim Ahmed',
      title: 'Chief Operations Officer',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop'
    },
    {
      name: 'Kazi Mohammad',
      title: 'Head of Sustainable Innovation',
      img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=600&fit=crop'
    }
  ],
  'l2dsj0qp6ee0qy0dhss2avi9': [
    {
      name: 'Masud Rahman',
      title: 'Senior Plant Manager',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop'
    },
    {
      name: 'Laila Sultana',
      title: 'Lead Quality Auditor',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop'
    },
    {
      name: 'Farhan Saeed',
      title: 'Spinning Supervisor',
      img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=600&fit=crop'
    },
    {
      name: 'Rina Chowdhury',
      title: 'HR Specialist',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop'
    }
  ],
  'bfymz3bnzdt1xv0103ato959': [
    {
      name: 'Robert Chen',
      title: 'Technical Director',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop'
    },
    {
      name: 'Anisul Islam',
      title: 'Operations Manager',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop'
    },
    {
      name: 'Yousuf Khan',
      title: 'Lead Paper Technologist',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop'
    },
    {
      name: 'Sadia Rahman',
      title: 'Quality Control Specialist',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop'
    }
  ],
  'pyyh0n9f32r7xflorn0tw8wg': [
    {
      name: 'Amit Patel',
      title: 'Chief Metallurgical Engineer',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop'
    },
    {
      name: 'Tariq Mahmud',
      title: 'Safety & Compliance Inspector',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop'
    },
    {
      name: 'Vikram Singh',
      title: 'CNC Workshop Lead',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
    },
    {
      name: 'Nilufar Yeasmin',
      title: 'Chief Safety Officer',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop'
    }
  ],
  'tfwlvcxm8g6zi7g7booeop8h': [
    {
      name: 'Mr. Md. Hasan',
      title: 'Founder & Chairman, Hasan Group',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
    },
    {
      name: 'Sultana Siddiqua',
      title: 'Director of International Trade',
      img: '/img/sultana_siddiqua.png'
    },
    {
      name: 'Rahim Ahmed',
      title: 'Chief Operations Officer',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop'
    },
    {
      name: 'Kazi Mohammad',
      title: 'Head of Sustainable Innovation',
      img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=600&fit=crop'
    }
  ]
};

const LadyPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#fcf9f8] to-[#edf3ed] relative">
    {/* Subtle patterns in background */}
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0b4619_1px,transparent_1px)] [background-size:16px_16px]" />

    <svg
      viewBox="0 0 200 200"
      className="w-40 h-40 text-[#002e0b]/20 hover:scale-105 transition-transform duration-500"
      fill="currentColor"
    >
      <circle cx="100" cy="100" r="80" className="fill-none stroke-[#d4af37]/30" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="100" cy="80" r="28" className="fill-[#0b4619]/10 stroke-[#0b4619]/30" strokeWidth="2" />
      <path
        d="M100,45 C80,45 68,60 68,80 C68,100 78,110 88,115 C75,125 55,140 55,160 C70,160 130,160 145,160 C145,140 125,125 112,115 C122,110 132,100 132,80 C132,60 120,45 100,45 Z"
        className="fill-[#0b4619]/15 stroke-[#0b4619]/40"
        strokeWidth="2"
      />
      <path
        d="M100,108 C108,108 118,125 125,140"
        className="fill-none stroke-[#d4af37]/40"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export default function UnitDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  const { data } = useQuery<any>(GET_FACTORY_DETAILS, {
    variables: { documentId: id || "" },
    skip: !id,
    errorPolicy: 'all'
  });

  const getMockUnitByTitleOrId = (unitId: string, title?: string) => {
    if (MOCK_FACTORIES[unitId]) return MOCK_FACTORIES[unitId];
    if (!title) return null;
    const titleLower = title.toLowerCase();
    if (titleLower.includes('spinning')) {
      return MOCK_FACTORIES['l2dsj0qp6ee0qy0dhss2avi9']; // spinning
    }
    if (titleLower.includes('paper') || titleLower.includes('pulp')) {
      return MOCK_FACTORIES['bfymz3bnzdt1xv0103ato959']; // paper
    }
    if (titleLower.includes('metal')) {
      return MOCK_FACTORIES['pyyh0n9f32r7xflorn0tw8wg']; // metal
    }
    if (titleLower.includes('jute')) {
      return MOCK_FACTORIES['n4w56pffj53kihujenib0185']; // jute mills
    }
    return null;
  };

  const resolvedMock = getMockUnitByTitleOrId(id, data?.factory?.title);

  const unit = data?.factory
    ? {
      title: data.factory.title,
      tag: data.factory.tag,
      description: data.factory.description,
      image: resolveImage(data.factory.image, data.factory.image_url),
      stats: data.factory.stats || [],
      specs: data.factory.specs || [],
      process: data.factory.process || [],
      products: data.factory.products?.map((p: any) => ({
        title: p.title,
        img: resolveImage(p.image, p.image_url)
      })) || [],
      team_members: data.factory.team_members && data.factory.team_members.length > 0
        ? data.factory.team_members.map((m: any) => ({
          name: m.name,
          title: m.title,
          description: m.description,
          img: resolveImage(m.image, m.image_url)
        }))
        : (MOCK_TEAM_MEMBERS[id] || MOCK_TEAM_MEMBERS['n4w56pffj53kihujenib0185']),
      images: (data.factory.images && data.factory.images.length > 0)
        ? data.factory.images.map((img: any) => resolveImage(img, null))
        : (resolvedMock?.images || [])
    }
    : (resolvedMock
      ? {
        title: resolvedMock.title,
        tag: resolvedMock.tag,
        description: resolvedMock.description,
        image: resolvedMock.image_url,
        stats: resolvedMock.stats || [],
        specs: resolvedMock.specs || [],
        process: resolvedMock.process || [],
        products: MOCK_PRODUCTS.filter(p => p.factoryId === resolvedMock.documentId).map(p => ({ title: p.title, img: p.image_url })),
        team_members: resolvedMock.team_members || [],
        images: resolvedMock.images || []
      }
      : null);

  const videoUrl = data?.factory?.video_url || resolvedMock?.video_url;
  const embedUrl = getEmbedUrl(videoUrl);

  if (!unit) {
    return (
      <div className="min-h-screen bg-[#fcf9f8] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-[#002e0b] mb-4">Loading Concern Profile...</h2>
          <div className="w-10 h-10 border-4 border-[#0b4619] border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Navbar />

      <main className="pt-20">
        {/* Unit Hero Section */}
        <section className="relative w-full aspect-video md:h-[550px] md:aspect-auto flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {videoUrl ? (
              embedUrl.includes('youtube.com/embed') ? (
                <iframe
                  src={embedUrl}
                  className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 aspect-video object-cover scale-[1.35] pointer-events-none border-none select-none"
                  allow="autoplay; encrypted-media"
                  style={{ pointerEvents: 'none' }}
                />
              ) : (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )
            ) : unit.image ? (
              <img src={unit.image} alt={unit.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#002e0b]" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002e0b] via-[#002e0b]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 w-full py-4 md:py-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h1 className="text-2xl sm:text-3xl md:text-7xl font-extrabold text-white uppercase font-fancy tracking-[0.02em] leading-tight break-words">
                {unit.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Team Members Section */}
        {unit.team_members && unit.team_members.length > 0 && (
          <section className="py-8 md:py-24 bg-white border-b border-[#0b4619]/5">
            <div className="max-w-[1280px] mx-auto px-4 md:px-16">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8 md:mb-16">
                <span className="w-12 h-[2px] bg-[#d4af37] hidden md:block" />
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#002e0b] text-center md:text-left">
                  <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Unit</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Leadership</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                {unit.team_members.map((member: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group relative bg-[#fcf9f8] rounded-2xl md:rounded-[32px] overflow-hidden border border-[#0b4619]/5 shadow-sm hover:shadow-2xl hover:border-[#0b4619]/10 transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#064015]/5">
                      {member.name === 'Sultana Siddiqua' || member.name === 'Sarah Hasan' ? (
                        <LadyPlaceholder />
                      ) : (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Details Container */}
                    <div className="p-3 sm:p-5 md:p-8 text-center bg-white border-t border-[#0b4619]/5">
                      <h3 className="font-serif text-xs md:text-sm font-bold text-[#002e0b] mb-1 group-hover:text-[#d4af37] transition-colors line-clamp-1">
                        {member.name}
                      </h3>
                      <p className="text-[#d4af37] text-[9px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest line-clamp-1">
                        {member.title}
                      </p>
                      {member.description && (
                        <p className="text-[#41493f]/80 text-[10px] md:text-[11px] mt-1.5 font-medium leading-relaxed max-w-[240px] mx-auto line-clamp-2">
                          {member.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dynamic Image Gallery Section */}
        {unit.images && unit.images.length > 0 && (
          <section className="py-12 md:py-24 bg-[#f4efe4] border-t border-[#d4af37]/35 shadow-inner">
            <div className="max-w-[1280px] mx-auto px-4 md:px-16">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8 md:mb-16">
                <span className="w-12 h-[2px] bg-[#d4af37] hidden md:block" />
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#002e0b] text-center md:text-left">
                  <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Industrial</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Gallery</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {unit.images.map((img: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index % 6) * 0.05 }}
                    onClick={() => setActiveImageIndex(index)}
                    className="aspect-square relative cursor-pointer group hover:scale-[1.03] transition-all duration-500 bg-white p-1.5 md:p-3 border-2 border-[#fed65b]/40 hover:border-[#fed65b] shadow-md hover:shadow-xl transition-colors duration-300"
                  >
                    <div className="w-full h-full overflow-hidden relative">
                      <img
                        src={img}
                        alt={`Gallery ${index}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#002e0b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#002e0b] text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Image
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-12 md:py-24 px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="space-y-24">

            {/* Technical Specifications */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
                <span className="w-12 h-[2px] bg-[#d4af37] hidden md:block" />
                <h2 className="font-serif text-3xl font-bold text-[#002e0b] text-center md:text-left">
                  <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-5xl pr-1">Technical</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal font-normal text-4xl md:text-5xl">Specs</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {unit.specs.map((spec: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center p-6 bg-white border border-[#0b4619]/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-[#41493f]/60 font-bold text-[10px] uppercase tracking-wider">{spec.name}</span>
                    <span className="text-[#0b4619] font-bold text-sm">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Manufacturing Process (Vector Animated) */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
                <span className="w-12 h-[2px] bg-[#d4af37] hidden md:block" />
                <h2 className="font-serif text-3xl font-bold text-[#002e0b] text-center md:text-left">
                  <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-5xl pr-1">Operational</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal font-normal text-4xl md:text-5xl">Journey</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {unit.process.map((p: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 bg-[#0b4619] rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                          {i + 1}
                        </div>
                        {i < unit.process.length - 1 && (
                          <div className="absolute top-12 left-6 w-[2px] h-full bg-[#0b4619]/10" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-bold text-[#002e0b] mb-2 group-hover:text-[#d4af37] transition-colors">
                          {p.step}
                        </h4>
                        <p className="text-[#41493f] text-sm leading-relaxed">{p.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="relative aspect-square bg-[#0b4619] rounded-[40px] p-1 overflow-hidden group">
                  {/* Vector Animation Background */}
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <motion.circle
                        cx="50" cy="50" r="45"
                        fill="none" stroke="#d4af37" strokeWidth="0.2"
                        strokeDasharray="2,2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.circle
                        cx="50" cy="50" r="35"
                        fill="none" stroke="white" strokeWidth="0.1"
                        strokeDasharray="10,5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      {[0, 90, 180, 270].map(angle => (
                        <motion.line
                          key={angle}
                          x1="50" y1="50"
                          x2={50 + Math.cos(angle * Math.PI / 180) * 45}
                          y2={50 + Math.sin(angle * Math.PI / 180) * 45}
                          stroke="white" strokeWidth="0.1" strokeOpacity="0.3"
                          animate={{ opacity: [0.1, 0.5, 0.1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: angle / 90 }}
                        />
                      ))}
                    </svg>
                  </div>
                  <img
                    src={unit.image}
                    className="w-full h-full object-cover rounded-[38px] grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt="Process"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b] via-transparent to-transparent opacity-60" />
                  <motion.div
                    className="absolute bottom-8 left-8 right-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-[#fed65b]">Precision Hub</div>
                    <div className="text-xl font-serif">Advanced Manufacturing Control</div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Product Showcase */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
                <span className="w-12 h-[2px] bg-[#d4af37] hidden md:block" />
                <h2 className="font-serif text-3xl font-bold text-[#002e0b] text-center md:text-left">
                  <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-5xl pr-1">Primary</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal font-normal text-4xl md:text-5xl">Outputs</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {unit.products.map((product: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[3/4] rounded-2xl md:rounded-[32px] overflow-hidden mb-3 md:mb-4 relative">
                      <img
                        src={product.img}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={product.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <button className="w-full py-3 bg-white text-[#0b4619] font-bold rounded-xl text-xs uppercase tracking-widest shadow-xl">
                          View Details
                        </button>
                      </div>
                    </div>
                    <h4 className="font-serif text-sm md:text-lg font-bold text-[#002e0b] group-hover:text-[#d4af37] transition-colors line-clamp-1">
                      {product.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Direct Inquiry Section (Full-Width Premium CTA Banner) */}
        <section className="relative py-20 bg-[#002e0b] overflow-hidden">
          {/* Abstract background decorative patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="10" cy="10" r="30" fill="none" stroke="white" strokeWidth="0.2" />
              <circle cx="90" cy="90" r="40" fill="none" stroke="#d4af37" strokeWidth="0.2" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Have an <span className="text-[#d4af37] font-signature normal-case tracking-normal font-normal pl-1">Inquiry?</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-12">
              Connect with our sales team directly for catalogs, pricing, or custom manufacturing options.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
              {/* Sales Hotline */}
              <div className="flex items-center gap-5 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-left hover:border-[#d4af37]/35 transition-all duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Sales Hotline</div>
                  <div className="text-lg font-bold text-white">+88 01771 855823</div>
                </div>
              </div>

              {/* Email Inquiry */}
              <div className="flex items-center gap-5 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-left hover:border-[#d4af37]/35 transition-all duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1">Email Inquiry</div>
                  <div className="text-sm md:text-base font-bold text-white break-all">brohasan773@gmail.com</div>
                </div>
              </div>
            </div>

            <div>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#002e0b] hover:bg-[#d4af37] hover:text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group">
                Request Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && unit.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(null);
              }}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {unit.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : unit.images.length - 1));
                  }}
                  className="absolute left-2 md:left-6 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-3 md:p-4 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev !== null && prev < unit.images.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-2 md:right-6 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-3 md:p-4 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={unit.images[activeImageIndex]}
                alt={`Lightbox image ${activeImageIndex}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white/90 text-xs font-medium tracking-wide">
                Image {activeImageIndex + 1} of {unit.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
