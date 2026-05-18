'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  CheckCircle, 
  Building, 
  Globe, 
  Mail, 
  User, 
  FileText, 
  Anchor, 
  Scale, 
  Layers 
} from 'lucide-react';

export default function ExportInquiryPage() {
  // Form submission states
  const [formName, setFormName] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formDesignation, setFormDesignation] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCountry, setFormCountry] = useState("");
  const [formUnit, setFormUnit] = useState("1");
  const [formProduct, setFormProduct] = useState("");
  const [formQuantity, setFormQuantity] = useState("");
  const [formPort, setFormPort] = useState("");
  const [formIncoterm, setFormIncoterm] = useState("FOB");
  const [formMessage, setFormMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Submit Inquiry (Mock API Submission & multi-channel backup)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formCompany) return;

    setIsSubmitting(true);
    
    // Mimic secure API transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleWhatsAppSubmit = () => {
    const concernName = 
      formUnit === "1" ? "Hasan Jute Mills Ltd" :
      formUnit === "2" ? "Hasan Jute & Spinning" :
      formUnit === "3" ? "Pulp & Paper Unit-1" : "Hasan Metal Industries";

    const message = `*NEW INDUSTRIAL EXPORT INQUIRY*\n\n` +
      `*1. Client Details:*\n` +
      `- Name: ${formName || "Valued Buyer"}\n` +
      `- Designation: ${formDesignation || "N/A"}\n` +
      `- Company: ${formCompany}\n` +
      `- Country: ${formCountry || "N/A"}\n` +
      `- Contact: ${formPhone || "N/A"} / ${formEmail}\n\n` +
      `*2. Order Profile:*\n` +
      `- Concern: *${concernName}*\n` +
      `- Product: ${formProduct || "Standard Catalog Spec"}\n` +
      `- Est. Volume: ${formQuantity || "TBD"}\n` +
      `- Destination Port: ${formPort || "TBD"} (${formIncoterm})\n\n` +
      `*3. Bespoke Specifications:*\n` +
      `- ${formMessage || "Standard specs required."}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/8801771855823?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1a1c1c] relative overflow-hidden">
      {/* Background Subtle Texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} 
      />

      <Navbar />

      <main className="pt-24 relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative py-20 bg-[#064015] overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#fed65b]/10 blur-[130px] rounded-full" />
          
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#fed65b] font-bold text-xs uppercase tracking-widest mb-6"
            >
              <Globe size={14} /> B2B Global Trade Desk
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none mb-6"
            >
              Export <span className="text-[#fed65b]">Inquiry</span> Portal
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-sans font-light"
            >
              Submit custom technical specifications, estimated volumes, and shipping logistics. Our specialized global export desk will respond with tailored commercial catalogs within 12 hours.
            </motion.p>
          </div>
        </section>

        {/* FORM CONTENT SECTION */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[40px] shadow-2xl border border-[#0b4619]/5 overflow-hidden"
          >
            {/* Form Banner Header */}
            <div className="bg-[#0b4619] px-8 py-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
              <div>
                <span className="text-[#fed65b] text-[10px] font-bold uppercase tracking-widest">Hasan Group of Industries</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase mt-1">Request Commercial Quote</h2>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white/70">Desk Active: GMT+6</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-sm">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#064015] mb-4">Inquiry Successfully Secured!</h3>
                  <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed mb-10">
                    Thank you. Your detailed B2B export specification has been secured. Our Export Desk will contact your corporate office with customized pricing and compliance sheets within 12 hours.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={handleWhatsAppSubmit}
                      className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider shadow-lg shadow-green-600/20"
                    >
                      <MessageSquare size={16} /> Open Instant WhatsApp
                    </button>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-8 py-4 bg-[#fcf9f8] text-[#064015] border border-[#0b4619]/10 font-bold rounded-2xl hover:bg-[#064015]/5 transition-all text-xs uppercase tracking-wider"
                    >
                      Submit New Spec
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Part 1: Contact Details */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] border-l-2 border-[#d4af37] pl-3 mb-6">
                      1. Corporate Identity & Contact
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Full Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Company Name *</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formCompany}
                            onChange={(e) => setFormCompany(e.target.value)}
                            placeholder="Global Trading Imports LLC"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Designation / Title</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formDesignation}
                            onChange={(e) => setFormDesignation(e.target.value)}
                            placeholder="e.g. Procurement Manager"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Country *</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formCountry}
                            onChange={(e) => setFormCountry(e.target.value)}
                            placeholder="e.g. United Kingdom"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Corporate Email *</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            placeholder="buyer@company.com"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Contact Number</label>
                        <div className="relative">
                          <input
                            type="tel"
                            value={formPhone}
                            onChange={(e) => setFormPhone(e.target.value)}
                            placeholder="e.g. +44 20 7946 0192"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Part 2: Product & Order Details */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] border-l-2 border-[#d4af37] pl-3 mb-6">
                      2. Product & Procurement Scope
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Target Concern / Mill *</label>
                        <div className="relative">
                          <select
                            value={formUnit}
                            onChange={(e) => setFormUnit(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015] appearance-none"
                          >
                            <option value="1">Hasan Jute Mills Ltd (Unit 1)</option>
                            <option value="2">Hasan Jute & Spinning (Unit 2)</option>
                            <option value="3">Pulp & Paper Unit-1 (Unit 3)</option>
                            <option value="4">Hasan Metal Industries (Unit 4)</option>
                          </select>
                          <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Specific Product Class</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formProduct}
                            onChange={(e) => setFormProduct(e.target.value)}
                            placeholder="e.g. Standard Hessian Sacks / Kraft Sack Paper"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Estimated Quantity / Volume</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formQuantity}
                            onChange={(e) => setFormQuantity(e.target.value)}
                            placeholder="e.g. 50 Metric Tons (MT)"
                            className="w-full pl-11 pr-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                          />
                          <Scale className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/30" size={16} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Preferred Incoterm</label>
                          <select
                            value={formIncoterm}
                            onChange={(e) => setFormIncoterm(e.target.value)}
                            className="w-full px-4 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015] appearance-none"
                          >
                            <option value="FOB">FOB</option>
                            <option value="CIF">CIF</option>
                            <option value="CFR">CFR</option>
                            <option value="EXW">EXW</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Destination Port</label>
                          <div className="relative">
                            <input
                              type="text"
                              value={formPort}
                              onChange={(e) => setFormPort(e.target.value)}
                              placeholder="e.g. Port of London"
                              className="w-full pl-10 pr-3 py-3.5 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                            />
                            <Anchor className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#064015]/30" size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Part 3: Message & Specifications */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] border-l-2 border-[#d4af37] pl-3 mb-6">
                      3. Bespoke Specifications & Packing Details
                    </h3>
                    
                    <div>
                      <label className="block text-[11px] uppercase font-extrabold text-[#002e0b] tracking-wider mb-2">Technical Description / R&D Criteria</label>
                      <textarea
                        rows={5}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Provide details such as: GSM requirements, specific dimensions, print formatting, plies count, chemical limits (e.g. Hydrocarbon-free for food-grade bags), or customized packaging preferences..."
                        className="w-full px-5 py-4 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-2xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015] resize-none leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-6 flex flex-col sm:flex-row gap-4 border-t border-[#0b4619]/5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-grow py-4 bg-[#0b4619] hover:bg-[#fed65b] text-[#fed65b] hover:text-[#0b4619] font-bold rounded-2xl flex items-center justify-center gap-2.5 transition-all text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                      {isSubmitting ? (
                        <>Transmitting Secure Quote...</>
                      ) : (
                        <>
                          <Send size={15} /> Submit Secure Inquiry
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="py-4 px-8 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2.5 transition-all text-sm uppercase tracking-wider shadow-lg shadow-green-600/10"
                    >
                      <MessageSquare size={16} /> Instant WhatsApp Sales Desk
                    </button>
                  </div>

                </form>
              )}
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
