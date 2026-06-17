'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-[#064015] border-b border-white/10 shadow-lg"
    >
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 max-w-[1400px] mx-auto">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="bg-white px-3 py-1.5 rounded-lg flex items-center justify-center shadow-md border border-white/10 hover:shadow-lg hover:bg-white/95 transition-all duration-300">
            <Image 
              src="/img/Hasan-Group.png" 
              alt="Hasan Group" 
              width={140} 
              height={40} 
              className="object-contain h-8 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {[
            { name: 'Legacy', href: '/#legacy' },
            { name: 'Concerns', href: '/#factories' },
            { name: 'Products', href: '/products' },
            { name: 'Global', href: '/#global-reach' },
            { name: 'Process', href: '/#process' },
            { name: 'Gallery', href: '/#gallery' },
            { name: 'Contact', href: '/#contact' },
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-[#fed65b] font-bold text-[13px] tracking-[0.1em] uppercase transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link href="/inquiry">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2.5 bg-[#fed65b] text-[#064015] font-bold text-[13px] rounded-lg hover:shadow-xl hover:shadow-[#fed65b]/20 transition-all hidden md:block uppercase tracking-wider cursor-pointer"
            >
              Export Inquiry
            </motion.button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#064015] border-t border-white/10 px-6 py-8"
        >
          <div className="flex flex-col gap-6">
            {[
              { name: 'Legacy', href: '/#legacy' },
              { name: 'Concerns', href: '/#factories' },
              { name: 'Products', href: '/products' },
              { name: 'Global', href: '/#global-reach' },
              { name: 'Process', href: '/#process' },
              { name: 'Gallery', href: '/#gallery' },
              { name: 'Contact', href: '/#contact' },
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif font-bold text-white hover:text-[#fed65b]"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/inquiry" onClick={() => setIsOpen(false)}>
              <button className="w-full py-4 bg-[#fed65b] text-[#064015] font-bold rounded-xl shadow-lg uppercase tracking-widest text-sm">
                Export Inquiry
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
