'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Globe, ShieldCheck, Package, TrendingUp } from 'lucide-react';
import { useQuery } from '@apollo/client/react';
import { gql } from '@apollo/client';

const GET_LANDING_ACHIEVEMENTS = gql`
  query GetLandingAchievements {
    landingPage {
      milestones {
        id
        icon
        year
        title
        description
        color
      }
    }
  }
`;

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="text-[#d4af37]" size={24} />,
  Leaf: <Leaf className="text-[#0b4619]" size={24} />,
  Globe: <Globe className="text-[#d4af37]" size={24} />,
  ShieldCheck: <ShieldCheck className="text-[#0b4619]" size={24} />,
  Package: <Package className="text-[#d4af37]" size={24} />,
  TrendingUp: <TrendingUp className="text-[#0b4619]" size={24} />,
};

const Achievements = () => {
  const { data } = useQuery<any>(GET_LANDING_ACHIEVEMENTS, { errorPolicy: 'all' });

  const achievements = data?.landingPage?.milestones?.length 
    ? data.landingPage.milestones.map((m: any) => ({
        ...m,
        icon: iconMap[m.icon] || <Award className="text-[#d4af37]" size={24} />
      }))
    : [];

  return (
    <section id="heritage" className="py-24 bg-[#fcf9f8]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#0b4619] uppercase mb-4 block">
            MILESTONES & RECOGNITION
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#002e0b] mb-6">
            <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Our</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Achievements</span>
          </h2>
          <p className="text-[#41493f] max-w-2xl mx-auto text-lg">
            Decades of dedication have earned us national recognition, international 
            partnerships, and industry-leading certifications.
          </p>
          <div className="w-20 h-[2px] bg-[#0b4619]/20 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-xl shadow-sm border-l-4 ${item.color} hover:shadow-xl transition-all group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#fcf9f8] rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                {item.year && (
                  <span className="text-xs font-bold text-[#d4af37] tracking-widest">{item.year}</span>
                )}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002e0b] mb-3">{item.title}</h3>
              <p className="text-sm text-[#41493f]/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
