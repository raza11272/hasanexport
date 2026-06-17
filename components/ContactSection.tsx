'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#fcf9f8]">
      {/* Contact Cards */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 pt-24 pb-16">
        <div className="text-center mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#d4af37] uppercase mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#002e0b]">
            <span className="font-signature text-[#002e0b] normal-case tracking-normal font-normal text-4xl md:text-6xl">Contact</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-4xl md:text-6xl">Us</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#d4af37] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-2xl border-t-4 border-[#d4af37] shadow-sm text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-[#fcf9f8] rounded-full flex items-center justify-center mb-8 text-[#d4af37]">
              <MapPin size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#002e0b] mb-6">Location</h3>
            <div className="space-y-6 text-[#41493f] text-sm">
              <div>
                <p className="font-bold text-[#0b4619] mb-2">Head Office:</p>
                <p>Hasan Centre, Shantibagh</p>
                <p>Seujgari, Bogura-5800</p>
              </div>
            </div>
          </motion.div>

          {/* Telephone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-2xl border-t-4 border-[#d4af37] shadow-sm text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-[#fcf9f8] rounded-full flex items-center justify-center mb-8 text-[#d4af37]">
              <Phone size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#002e0b] mb-6 whitespace-nowrap">Mobile</h3>
            <div className="space-y-4 text-[#41493f] text-sm">
              <p><span className="font-bold text-[#0b4619]">Mobile:</span> 01713-700276</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-2xl border-t-4 border-[#d4af37] shadow-sm text-center flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-[#fcf9f8] rounded-full flex items-center justify-center mb-8 text-[#d4af37]">
              <Mail size={28} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#002e0b] mb-6">Email</h3>
            <p className="text-[#41493f] text-sm">hgshbd22@gmail.com</p>
          </motion.div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#0b4619] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-white/60 uppercase mb-6 block">
              TRUSTED BY PARTNERS WORLDWIDE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-10 leading-tight">
              <span className="font-signature text-white normal-case tracking-normal font-normal text-3xl md:text-5xl">Ready to experience the</span> <span className="text-[#d4af37] font-signature normal-case tracking-normal pl-2 font-normal text-3xl md:text-5xl">Golden Standard?</span>
            </h2>
            <Link 
              href="/inquiry" 
              className="px-10 py-5 bg-[#d4af37] text-[#002e0b] font-bold rounded-xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-widest text-sm inline-block"
            >
              Request A Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
