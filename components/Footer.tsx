'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Share2, MessageSquare, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white px-3 py-1.5 rounded-lg flex items-center justify-center shadow-md border border-white/10 hover:shadow-lg hover:bg-white/95 transition-all duration-300">
                <Image 
                  src="/img/Hasan-Group.png" 
                  alt="Hasan Group" 
                  width={130} 
                  height={36} 
                  className="object-contain h-7 w-auto"
                />
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              Decades of excellence in industrial manufacturing, pioneering sustainable solutions for a global market.
            </p>
            <div className="flex gap-4">
              {[Share2, MessageSquare, ExternalLink].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -3, color: '#d4af37' }}
                  href="#"
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-8">Industrial Units</h4>
            <ul className="space-y-4">
              {[
                { name: 'Hasan Jute Mills', href: '/units/1' },
                { name: 'Spinning & Yarn', href: '/units/2' },
                { name: 'Pulp & Paper Unit 1', href: '/units/3' },
                { name: 'Pulp & Paper Unit 2', href: '/units/4' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-8">Corporate</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#d4af37] mt-1" />
                <div>
                  <div className="text-xs text-white/40 uppercase">Contact DMD</div>
                  <div className="text-sm">+88 01771 855823</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#d4af37] mt-1" />
                <div>
                  <div className="text-xs text-white/40 uppercase">Email Support</div>
                  <div className="text-sm">brohasan773@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d4af37] mt-1" />
                <div>
                  <div className="text-xs text-white/40 uppercase">Headquarters</div>
                  <div className="text-sm">Islampur, Harigari, Bogra</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Subscribe for technical updates and industrial insights.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
              />
              <button className="w-full py-3 bg-[#d4af37] text-[#1a1a1a] font-bold rounded-xl hover:opacity-90 transition-opacity">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white/40 text-xs font-medium text-center md:text-left">
            <span>Copyright &copy; 2026 Hasan Group Limited - All Rights Reserved.</span>
            <span className="hidden md:inline text-white/10">|</span>
            <span>
              Powered by{' '}
              <a 
                href="https://wavelinecorp.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#d4af37] hover:text-[#d4af37]/80 hover:underline transition-colors"
              >
                Waveline Corp.
              </a>
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Certifications</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
