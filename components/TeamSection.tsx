'use client';

import React from 'react';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
import { resolveImage } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="16" 
    height="16" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    teamMembers(sort: "id:asc", pagination: { limit: 3 }) {
      documentId
      name
      title
      image_url
      image {
        url
      }
    }
  }
`;

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

export default function TeamSection() {
  const { data, loading, error } = useQuery<any>(GET_TEAM_MEMBERS, {
    errorPolicy: 'all',
  });

  const MOCK_TEAM = [
    {
      name: 'Mr. Md. Hasan',
      title: 'Founder & Chairman, Hasan Group',
      image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
    },
    {
      name: 'Sultana Siddiqua',
      title: 'Director of International Trade',
      image_url: '/img/sultana_siddiqua.png'
    },
    {
      name: 'Rahim Ahmed',
      title: 'Chief Operations Officer',
      image_url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop'
    }
  ];

  const fetchedTeam = data?.teamMembers?.length ? data.teamMembers : [];
  const team = fetchedTeam.length > 0 ? fetchedTeam : MOCK_TEAM;

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0b4619]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#0b4619] uppercase mb-4 block">
            LEADERSHIP TEAM
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#002e0b] mb-6">
            <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Our Board &</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Leadership</span>
          </h2>
          <p className="text-[#41493f] max-w-2xl mx-auto text-lg leading-relaxed">
            The visionary minds guiding Hasan Group of Industries toward sustainable industrial expansion, global exports, and premium quality standards.
          </p>
          <div className="w-20 h-[2px] bg-[#0b4619]/20 mx-auto mt-8" />
        </div>

        {/* Members Grid - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
          {team.map((member: any, index: number) => {
            // Prefer Strapi media library url if uploaded, then fallback to seed image_url
            const imageSrc = resolveImage(member.image, member.image_url);

            return (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#fcf9f8] rounded-[32px] overflow-hidden border border-[#0b4619]/5 shadow-sm hover:shadow-2xl hover:border-[#0b4619]/10 transition-all duration-500 w-full max-w-sm"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#064015]/5">
                  {member.name === 'Sultana Siddiqua' || member.name === 'Sarah Hasan' ? (
                    <LadyPlaceholder />
                  ) : (
                    <img
                      src={imageSrc}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Details Container */}
                <div className="p-8 text-center bg-white border-t border-[#0b4619]/5">
                  <h3 className="font-serif text-sm font-bold text-[#002e0b] mb-2 group-hover:text-[#d4af37] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                    {member.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}