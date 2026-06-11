'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Download, Mail, Phone, MapPin, Factory, Settings, Leaf, Globe } from 'lucide-react';
import Link from 'next/link';



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
      name: 'Sarah Hasan',
      title: 'Director of International Trade',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop'
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
      name: 'Sarah Hasan',
      title: 'Director of International Trade',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop'
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

export default function UnitDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const { data } = useQuery<any>(GET_FACTORY_DETAILS, {
    variables: { documentId: id || "" },
    skip: !id,
    errorPolicy: 'all'
  });

  const unit = data?.factory
    ? {
        title: data.factory.title,
        tag: data.factory.tag,
        description: data.factory.description,
        image: data.factory.image?.url
          ? (data.factory.image.url.startsWith('http') ? data.factory.image.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${data.factory.image.url}`)
          : data.factory.image_url,
        stats: data.factory.stats || [],
        specs: data.factory.specs || [],
        process: data.factory.process || [],
        products: data.factory.products?.map((p: any) => ({
          title: p.title,
          img: p.image?.url
            ? (p.image.url.startsWith('http') ? p.image.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${p.image.url}`)
            : p.image_url
        })) || [],
        team_members: MOCK_TEAM_MEMBERS[id] || MOCK_TEAM_MEMBERS['n4w56pffj53kihujenib0185']
      }
    : null;

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
        <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={unit.image} alt={unit.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002e0b] via-[#002e0b]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <span className="px-3 py-1 bg-[#fed65b] text-[#745c00] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
                {unit.tag}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
                {unit.title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {unit.description}
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle size={16} className="text-[#fed65b]" />
                  Global Standards
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle size={16} className="text-[#fed65b]" />
                  Sustainable Energy
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industrial Stats Grid */}
        <section className="py-12 bg-white border-b border-[#0b4619]/5">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {unit.stats.map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-[#d4af37] text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[#41493f] text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        {unit.team_members && unit.team_members.length > 0 && (
          <section className="py-24 bg-white border-b border-[#0b4619]/5">
            <div className="max-w-[1280px] mx-auto px-6 md:px-16">
              <div className="flex items-center gap-4 mb-16">
                <span className="w-12 h-px bg-[#d4af37]" />
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#002e0b]">
                  <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Unit</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Leadership</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {unit.team_members.map((member: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="group relative bg-[#fcf9f8] rounded-[32px] overflow-hidden border border-[#0b4619]/5 shadow-sm hover:shadow-2xl hover:border-[#0b4619]/10 transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#064015]/5">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Details Container */}
                    <div className="p-8 text-center bg-white border-t border-[#0b4619]/5">
                      <h3 className="font-serif text-2xl font-bold text-[#002e0b] mb-2 group-hover:text-[#d4af37] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                        {member.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-24">

              {/* Technical Specifications */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-12 h-px bg-[#d4af37]" />
                  <h2 className="font-serif text-3xl font-bold text-[#002e0b]">Technical Specifications</h2>
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
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-12 h-px bg-[#d4af37]" />
                  <h2 className="font-serif text-3xl font-bold text-[#002e0b]">Operational Journey</h2>
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
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-12 h-px bg-[#d4af37]" />
                  <h2 className="font-serif text-3xl font-bold text-[#002e0b]">Primary Outputs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {unit.products.map((product: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative">
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
                      <h4 className="font-serif text-lg font-bold text-[#002e0b] group-hover:text-[#d4af37] transition-colors">
                        {product.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Inquiries */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-[#0b4619]/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full -mr-16 -mt-16" />

                  <h3 className="font-serif text-2xl font-bold text-[#002e0b] mb-8">Direct Inquiry</h3>
                  <div className="space-y-8 mb-10">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#fcf9f8] rounded-2xl flex items-center justify-center text-[#d4af37] shadow-sm">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#41493f]/40 tracking-widest mb-1">Sales Hotline</div>
                        <div className="text-base font-bold text-[#002e0b]">+88 01771 855823</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#fcf9f8] rounded-2xl flex items-center justify-center text-[#d4af37] shadow-sm">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#41493f]/40 tracking-widest mb-1">Email Inquiry</div>
                        <div className="text-base font-bold text-[#002e0b]">brohasan773@gmail.com</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-5 bg-[#0b4619] text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#0b4619]/20 transition-all group">
                      Request Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full py-5 bg-white border-2 border-[#0b4619]/10 text-[#0b4619] font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#fcf9f8] transition-colors">
                      Technical PDF <Download size={20} />
                    </button>
                  </div>
                </div>

                <div className="bg-[#0b4619] p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mb-20" />
                  <Globe size={48} className="text-[#fed65b] mb-6 opacity-80" />
                  <h4 className="text-2xl font-serif font-bold mb-4">Export Certified</h4>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    This unit is fully compliant with international export standards, including customs clearance ready documentation.
                  </p>
                  <Link href="/#global-reach" className="inline-flex items-center gap-3 text-[#fed65b] font-bold group">
                    Explore Markets
                    <div className="w-10 h-10 rounded-full border border-[#fed65b]/30 flex items-center justify-center group-hover:bg-[#fed65b] group-hover:text-[#0b4619] transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
