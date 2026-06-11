import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import MDMessage from '@/components/MDMessage';
import Achievements from '@/components/Achievements';
import Gallery from '@/components/Gallery';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import GlobalFootprint from '@/components/GlobalFootprint';
import IndustrialConcerns from '@/components/IndustrialConcerns';
import ProductMarquee from '@/components/ProductMarquee';
import Footer from '@/components/Footer';
  
export const metadata = {
  title: 'Hasan Group | Global Jute & Industrial Excellence',
  description: 'Premium industrial portal for Hasan Jute Mills and associated concerns. Leading the way in sustainable jute, spinning, and paper manufacturing.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      {/* Background Subtle Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* About / Vision Section */}
        <MDMessage />

        {/* Board & Leadership Section */}
        <TeamSection />
        
        {/* Business Scale Section */}
        <IndustrialConcerns />
        
        {/* Dynamic Infinite Product Marquee Section */}
        <ProductMarquee />
        
        {/* Global Impact Section */}
        <GlobalFootprint />
        
        {/* Quality & Manufacturing Section */}
        <ProcessSection />
        
        {/* Trust & Social Proof Section */}
        <Achievements />
        
        {/* Visual Showcase Section */}
        <Gallery />
        
        {/* Engagement Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

