'use client';

import React from 'react';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';
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
    teamMembers(sort: "id:asc") {
      
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

export default function TeamSection() {
  const { data, loading, error } = useQuery<any>(GET_TEAM_MEMBERS, {
    errorPolicy: 'all',
  });

  const fetchedTeam = data?.teamMembers?.length ? data.teamMembers : [];
  const team = [...fetchedTeam];

  // Append a fourth member to fill the 4-column grid on the frontend
  if (team.length > 0 && !team.some((m: any) => m.name === 'Kazi Mohammad')) {
    team.push({
      documentId: 'mock-4th-member',
      name: 'Kazi Mohammad',
      title: 'Head of Sustainable Innovation',
      image_url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=600&fit=crop',
      image: null
    });
  }

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

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member: any, index: number) => {
            // Prefer Strapi media library url if uploaded, then fallback to seed image_url
            const imageSrc = member.image?.url 
              ? (member.image.url.startsWith('http') ? member.image.url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${member.image.url}`) 
              : member.image_url;

            return (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#fcf9f8] rounded-[32px] overflow-hidden border border-[#0b4619]/5 shadow-sm hover:shadow-2xl hover:border-[#0b4619]/10 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full overflow-hidden relative bg-[#064015]/5">
                  <img
                    src={imageSrc}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
