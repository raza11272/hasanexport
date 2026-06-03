'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Factory, Settings, Leaf, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const GET_FACTORIES = gql`
  query GetFactories {
    factories(sort: "id:asc") {
      documentId
      title
      tag
      description
      image_url
      image {
        url
      }
    }
  }
`;

const concernStyles = [
  {
    color: "bg-[#fed65b]",
    textColor: "text-[#745c00]",
    icon: <Factory size={24} />
  },
  {
    color: "bg-[#b4f2b3]",
    textColor: "text-[#195123]",
    icon: <Settings size={24} />
  },
  {
    color: "bg-[#e2e2e2]",
    textColor: "text-[#1a1c1c]",
    icon: <Leaf size={24} />
  },
  {
    color: "bg-white",
    textColor: "text-[#0b4619]",
    icon: <Factory size={24} />
  }
];

const IndustrialConcerns = () => {
  const { data } = useQuery<any>(GET_FACTORIES, { errorPolicy: 'all' });

  const concerns = data?.factories?.map((fac: any, index: number) => {
    const style = concernStyles[index % concernStyles.length];
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
    return {
      id: fac.documentId,
      title: fac.title,
      description: fac.description,
      tag: fac.tag,
      color: style.color,
      textColor: style.textColor,
      icon: style.icon,
      image: fac.image?.url 
        ? (fac.image.url.startsWith('http') ? fac.image.url : `${strapiUrl}${fac.image.url}`)
        : fac.image_url
    };
  }) || [];

  return (
    <section id="factories" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-[#002e0b] mb-4"
        >
          <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Industrial</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Excellence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl text-[#41493f] leading-relaxed"
        >
          Hasan Group stands at the intersection of natural heritage and industrial precision. Our facilities integrate advanced manufacturing tech with sustainable raw materials.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {concerns.map((concern, index) => (
          <motion.div
            key={concern.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl h-[450px] shadow-lg border border-[#0b4619]/5"
          >
            <Link href={`/units/${concern.id}`} className="block w-full h-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={concern.image}
                  alt={concern.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b]/90 via-[#002e0b]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="mb-4">
                  <span className={`px-3 py-1 ${concern.color} ${concern.textColor} rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                    {concern.tag}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  {concern.title}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </h3>

                <p className="text-white/80 max-w-md mb-6 line-clamp-2">
                  {concern.description}
                </p>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white font-semibold text-sm group/btn">
                    Technical Specs
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-md"
                    >
                      <ArrowUpRight size={14} />
                    </motion.div>
                  </button>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-12 h-12 ${concern.color} ${concern.textColor} rounded-2xl flex items-center justify-center`}>
                  {concern.icon}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustrialConcerns;
