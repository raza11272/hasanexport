'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#d4af37] rounded flex items-center justify-center">
                <Globe size={18} className="text-[#1a1a1a]" />
              </div>
              <span className="font-serif text-2xl font-bold">Hasan Group</span>
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
              {['Hasan Jute Mills', 'Spinning & Yarn', 'Pulp & Paper Unit 1', 'Pulp & Paper Unit 2'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
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
          <p className="text-white/40 text-xs font-medium">
            © 2024 Hasan Jute Mills Limited. All Rights Reserved. Built for Global Excellence.
          </p>
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
