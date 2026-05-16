'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Factory, Settings, Leaf, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const concerns = [
  {
    id: 1,
    title: "Hasan Jute Mills Ltd",
    description: "Specializing in heavy-duty sacks and industrial woven fabrics for global agricultural export requirements.",
    tag: "Core Concern",
    color: "bg-[#fed65b]",
    textColor: "text-[#745c00]",
    span: "md:col-span-7",
    icon: <Factory size={24} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9lQ7GcXdeP-NNjeU1FYkfBUgQ2RdFxAyatVr-vOvG5_aMPAgnKvCdloMFDkOdZC3p6zqZ0Ec_9wLo77mNMdUXGKR33YPDYoMLzVfRngpjPAk9IWK7fenRU5BZqcCDN8MYHP_cH_ZsTeCpdc36PKGmJiBL3j9PIyawxhJyzlFsdlFjjOWr4DehmTmeJC_gSUg33KKd9Bv1qfeYSoOpi5CgWnpsKPo61lac19-4uyuGrUdInATmOyLU0z-dRvx3IuncYTI2hnE_uxeZ"
  },
  {
    id: 2,
    title: "Hasan Jute & Spinning",
    description: "Manufacturing premium yarn and high-tensile twine for technical textile applications.",
    tag: "High Precision",
    color: "bg-[#b4f2b3]",
    textColor: "text-[#195123]",
    span: "md:col-span-5",
    icon: <Settings size={24} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV90ir7oMILWsxxB7sx-AKBF3JSypz5yw6MKhPlqNV5yyBDJWhNrkMLkLFl0x_vsfBWrQNNDZ-ZjjAx5S5R9Ysa8sCHkTZ6XSf6c-3aarGiUWHIGJi1PVs6lKaAA0CFA6sLTIBgqKXSkIhWylIInLzr4i9RYhZgijM0P6CkeBDzOxLKsgZXOXHr5xr6Uab-DPx6Dig03VAfTSI7yn4O-9qqEjRB-0tguWmNWDWNnMHFi-vpAxJgjattAJjX8zKPRvLWf7sOHPV6Gix"
  },
  {
    id: 3,
    title: "Pulp & Paper Unit-1",
    description: "Dedicated production of high-strength industrial brown paper and sustainable packaging solutions.",
    tag: "Packaging",
    color: "bg-[#e2e2e2]",
    textColor: "text-[#1a1c1c]",
    span: "md:col-span-6",
    icon: <Leaf size={24} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO4TnmdlQ0WYxUNk4OnJadXD-5qOiC7nTnhgL2_d3NhGMQWxxSFv47q2gdU6bfROBDlvbOWRdfdbaQv_RaTKNn4JTZ8a5CsBUBEN9e3mzDzLMiZk2R9IfiB5--c2WV3emQX_-c_bc-sV6zA-HnHM--lCZ2b9w-8BZ4soGp-GT32w_JLEF6OoRTOyuWh4TcgMyqdA5VrONemDh_savjJO6r1X2xymPxw_tnMGXGP_cMjsKWg86gY5DVQZ7OJ03k9aM-CSDtbLSVYFjl"
  },
  {
    id: 4,
    title: "Pulp & Paper Unit-2",
    description: "Premium white paper manufacturing utilizing advanced bleaching and finishing technologies.",
    tag: "Premium Grade",
    color: "bg-white",
    textColor: "text-[#0b4619]",
    span: "md:col-span-6",
    icon: <Globe size={24} />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEdBNoxNwtT1HTFc4wGwwK6A_jIKtrnRVy6lxMp8ttnA8xusL_PnfcT_MozPIltTooWVUpc7GNCYyNn1mnoClzhl7x0m8M8EVuAENVFWQeT7sQymxCq9dQv-pVSSyzFBO5jLQdEjkPFrESeesTra52PS8CObHKt96t_v259HQ8PmcucmseB3n2HGoBzIvWWNOUbkZLVVdGahTgGNXk-MCCZJykPbjweuwHV384G2Xauy_DORpUQYH2gOsQL550mb320ZrZiCUdhARX"
  }
];

const IndustrialConcerns = () => {
  return (
    <section id="factories" className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-4xl font-bold text-[#002e0b] mb-4"
        >
          Industrial Excellence
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

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {concerns.map((concern, index) => (
          <motion.div
            key={concern.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${concern.span} group relative overflow-hidden rounded-3xl h-[450px] shadow-lg border border-[#0b4619]/5`}
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
