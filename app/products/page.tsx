'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  FileText,
  X,
  Send,
  MessageSquare,
  Sparkles,
  Layers,
  Factory,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { resolveImage } from '@/lib/utils';

import { useQuery, useMutation } from '@apollo/client/react';
import { gql } from '@apollo/client';

const GET_PRODUCTS_PAGE_DATA = gql`
  query GetProductsPageData {
    categories(sort: "id:asc") {
      documentId
      name
      products(pagination: { limit: -1 }) {
        documentId
        title
        description
        image_url
        image {
          url
        }
        factory {
          documentId
          title
        }
        specs {
          label
          value
        }
        features {
          text
        }
        createdAt
      }
    }
  }
`;

const CREATE_PRODUCT_INQUIRY = gql`
  mutation CreateProductInquiry(
    $name: String!
    $company: String
    $email: String!
    $phone: String
    $quantity: String
    $message: String
    $product: ID
  ) {
    createProductInquiry(
      data: {
        name: $name
        company: $company
        email: $email
        phone: $phone
        quantity: $quantity
        message: $message
        product: $product
      }
    ) {
      documentId
    }
  }
`;



export default function ProductsPage() {
  const [createInquiry] = useMutation(CREATE_PRODUCT_INQUIRY);

  const [searchQuery, setSearchQuery] = useState("");

  const [restData, setRestData] = useState<any>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://hasanserver.srv1399648.hstgr.cloud';
    fetch(`${apiUrl}/api/categories?populate[products][populate][0]=image&populate[products][populate][1]=specs&populate[products][populate][2]=features&populate[products][populate][3]=factory`)
      .then(res => res.json())
      .then(d => setRestData(d))
      .catch(e => console.error(e));
  }, []);

  // Modal Inquiry States
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Form submission states
  const [formName, setFormName] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formQuantity, setFormQuantity] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Dynamic Products mapping
  const products = restData?.data?.length
    ? restData.data.flatMap((category: any) =>
      (category.products || []).map((item: any) => ({
        id: item.documentId,
        unitId: category.documentId,
        factoryId: item.factory?.documentId,
        unitName: category.name,
        title: item.title,
        description: item.description,
        img: resolveImage(item.image, item.image_url),
        specs: item.specs || [],
        features: item.features?.map((f: any) => f.text) || []
      }))
    )
    : [];

  const concernsList = restData?.data?.length
    ? restData.data.map((c: any) => ({ id: c.documentId, name: c.name }))
    : [];

  const activeConcerns = concernsList.length > 0
    ? concernsList
    : Array.from(new Set(products.map((p: any) => JSON.stringify({ id: p.unitId, name: p.unitName })))).map((s: any) => JSON.parse(s));

  // Searched Products
  const searchedProducts = useMemo(() => {
    return products.filter((product: any) => {
      return (
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.unitName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery, products]);

  // Open inquiry modal
  const handleOpenInquiry = (product: any) => {
    setSelectedProduct(product);
    setFormMessage(`We are interested in purchasing the "${product.title}" manufactured by ${product.unitName}. Please provide pricing, MOQs, and delivery terms for global export.`);
    setSubmitSuccess(false);
    setIsInquiryModalOpen(true);
  };

  // Submit Inquiry (via Apollo Mutation)
  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setIsSubmitting(true);
    try {
      await createInquiry({
        variables: {
          name: formName,
          company: formCompany,
          email: formEmail,
          phone: formPhone,
          quantity: formQuantity,
          message: formMessage,
          product: selectedProduct?.id
        }
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Clear form inputs
      setFormName("");
      setFormCompany("");
      setFormEmail("");
      setFormPhone("");
      setFormQuantity("");
    } catch (err) {
      console.error("Mutation failed:", err);
      setIsSubmitting(false);
      alert("Inquiry submission failed. Please try again or contact us directly.");
    }
  };


  const handleWhatsAppDirect = () => {
    const pTitle = selectedProduct?.title || "";
    const pUnit = selectedProduct?.unitName || "";
    const message = `Hello Hasan Group, I am interested in inquiring about: *${pTitle}* (from *${pUnit}*).\n\n*My Details:*\n- Name: ${formName || "Valued Buyer"}\n- Company: ${formCompany || "N/A"}\n- Quantity Required: ${formQuantity || "TBD"}\n- Inquiry: ${formMessage}`;
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
        <section className="relative py-24 bg-[#064015] overflow-hidden">
          {/* Subtle vector grid decoration */}
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
          {/* Top glowing gold ambient light */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-[#fed65b]/20 blur-[120px] rounded-full" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[#fed65b] font-bold text-xs uppercase tracking-widest mb-6"
              >
                <Sparkles size={14} /> Global Industrial Exports
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-6"
              >
                Premium <span className="text-[#fed65b]">Export</span> Products
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-sans font-light"
              >
                Explore high-tensile eco-friendly jute packaging, premium precision yarns, and high-performance industrial white & brown papers manufactured across our 4 major concerns.
              </motion.p>

              {/* Group stats indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10"
              >
                {[
                  { value: "4", label: "Factories" },
                  { value: "12+", label: "Product Classes" },
                  { value: "100%", label: "Bio-Degradable Jute" },
                  { value: "35+", label: "Countries Served" }
                ].map((stat: any, idx: number) => (
                  <div key={idx} className="border-l border-[#fed65b]/30 pl-4">
                    <div className="text-2xl md:text-3xl font-serif font-bold text-[#fed65b]">{stat.value}</div>
                    <div className="text-[10px] uppercase font-semibold text-white/60 tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTROLS SECTION (Search) */}
        <section className="py-12 bg-white border-b border-[#0b4619]/5 sticky top-[72px] z-40 shadow-sm backdrop-blur-md bg-white/95">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex justify-center">

            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search products, specifications, or concerns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#fcf9f8] border border-[#0b4619]/15 rounded-full text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#064015] focus:border-transparent transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#064015]/40" size={18} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

          </div>
        </section>

        {/* PRODUCTS GRID */}
        <section className="py-20 max-w-[1280px] mx-auto px-6 md:px-16 min-h-[500px]">
          {searchedProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-3xl border border-dashed border-[#0b4619]/10 shadow-sm"
            >
              <div className="w-16 h-16 bg-[#fcf9f8] rounded-full flex items-center justify-center mx-auto text-[#d4af37] mb-4">
                <Search size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#064015] mb-2">No Products Found</h3>
              <p className="text-[#41493f] max-w-md mx-auto text-sm">
                We couldn't find any products matching your search query. Try typing a different search term.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 px-6 py-2.5 bg-[#064015] text-[#fed65b] rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            <div className="space-y-20">
              {activeConcerns.map((concern: any) => {
                const productsForConcern = searchedProducts.filter((p: any) => p.unitId === concern.id);
                if (productsForConcern.length === 0) return null;

                return (
                  <div key={concern.id} className="space-y-8">
                    {/* Concern Category Title */}
                    <div className="flex items-center gap-4">
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#064015] uppercase tracking-wider">
                        {concern.name}
                      </h3>
                      <div className="flex-grow h-[1px] bg-[#0b4619]/10" />
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {productsForConcern.map((product: any) => (
                        <div
                          key={product.id}
                          className="bg-white rounded-[32px] overflow-hidden border border-[#0b4619]/5 shadow-sm hover:shadow-xl hover:border-[#0b4619]/10 transition-all duration-300 flex flex-col h-full group"
                        >
                          {/* Visual Card Image */}
                          <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#064015]/5">
                            <img
                              src={product.img}
                              alt={product.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b]/80 via-transparent to-transparent" />

                            {/* Concern Tag Badge */}
                            <div className="absolute top-4 left-4 z-10">
                              <span className="px-3.5 py-1.5 bg-[#064015] text-[#fed65b] rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 border border-[#fed65b]/20 shadow-md">
                                <Factory size={10} />
                                {product.unitName}
                              </span>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-8 flex flex-col flex-grow">

                            {/* Title & Description */}
                            <h3 className="font-serif text-2xl font-bold text-[#064015] mb-3 group-hover:text-[#d4af37] transition-colors">
                              {product.title}
                            </h3>

                            <p className="text-[#41493f] text-sm leading-relaxed mb-6 flex-grow font-sans line-clamp-3">
                              {product.description}
                            </p>

                            {/* Technical Specs Small Table */}
                            {product.specs && product.specs.length > 0 && (
                              <div className="space-y-2.5 mb-6 pt-5 border-t border-[#0b4619]/5">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                  {product.specs.slice(0, 4).map((spec: any, i: number) => (
                                    <div key={i} className="flex flex-col border-b border-[#0b4619]/10 pb-1.5">
                                      <span className="text-[11px] text-gray-500 uppercase font-bold tracking-wide">{spec.label}</span>
                                      <span className="text-sm md:text-base text-[#064015] font-bold leading-tight">{spec.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Bullet Highlights */}
                            <div className="mb-8 space-y-1.5">
                              {product.features.map((feat: any, i: number) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-[#41493f]">
                                  <CheckCircle size={14} className="text-[#d4af37] shrink-0" />
                                  <span className="font-medium">{feat}</span>
                                </div>
                              ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3 mt-auto">
                              <button
                                onClick={() => handleOpenInquiry(product)}
                                className="py-3 bg-[#064015] text-[#fed65b] font-bold rounded-xl text-[11px] uppercase tracking-wider hover:bg-[#fed65b] hover:text-[#064015] transition-all shadow-md flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                              >
                                Direct Inquiry
                                <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                              <Link
                                href={`/units/${product.factoryId || product.unitId}`}
                                className="py-3 bg-[#fcf9f8] text-[#064015] border border-[#0b4619]/10 font-bold rounded-xl text-[11px] uppercase tracking-wider hover:bg-[#064015]/5 transition-all flex items-center justify-center gap-1.5"
                              >
                                Factory Profile
                                <ArrowUpRight size={12} />
                              </Link>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* EXPORT INQUIRY BANNER */}
        <section className="bg-[#064015] py-20 px-6 md:px-16 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mb-32 blur-[60px]" />
          <div className="absolute left-10 top-10 w-48 h-48 bg-[#fed65b]/10 rounded-full blur-[40px]" />

          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="text-[#fed65b] text-xs font-bold uppercase tracking-widest mb-4 inline-block">Direct Global Channel</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 uppercase">Looking for Customized Export Bulk Specs?</h2>
              <p className="text-white/70 max-w-2xl text-base leading-relaxed">
                Whether you need special dimensions for Hessian Jute Sacks, specific yarn tensile twists, or distinct GSM kraft and white liner paper, our R&D and engineering departments can accommodate bespoke requirements.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-4">
              <button
                onClick={() => {
                  setSelectedProduct(products[0]);
                  setFormMessage("Hello Hasan Group Sales, we need custom specs for a bulk export order. Please contact our corporate buying desk.");
                  setSubmitSuccess(false);
                  setIsInquiryModalOpen(true);
                }}
                className="w-full py-4 bg-[#fed65b] text-[#064015] font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#fed65b]/20 transition-all text-sm uppercase tracking-wider"
              >
                Inquire Bespoke Order <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/8801771855823"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all text-sm uppercase tracking-wider"
              >
                <Phone size={18} className="text-[#fed65b]" /> Call Sales Desk
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* DIRECT INQUIRY DIALOG MODAL */}
      <AnimatePresence>
        {isInquiryModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsInquiryModalOpen(false)}
              className="absolute inset-0 bg-[#002e0b]/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[40px] shadow-2xl border border-[#0b4619]/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 scrollbar-thin"
            >

              {/* Header */}
              <div className="bg-[#064015] px-8 py-6 text-white flex justify-between items-center relative rounded-t-[40px]">
                <div>
                  <span className="text-[#fed65b] text-[9px] font-bold uppercase tracking-wider">{selectedProduct.unitName}</span>
                  <h3 className="font-serif text-2xl font-bold uppercase mt-1">Product Inquiry</h3>
                </div>
                <button
                  onClick={() => setIsInquiryModalOpen(false)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-sm">
                      <CheckCircle size={44} />
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-[#064015] mb-3">Inquiry Submitted!</h4>
                    <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed mb-8">
                      Thank you. Your industrial inquiry for <strong className="text-[#064015]">{selectedProduct.title}</strong> has been secured. Our Export Desk will contact you with customized catalog pricing within 12 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="px-6 py-3.5 bg-green-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all text-xs uppercase tracking-wider"
                      >
                        <MessageSquare size={16} /> Open WhatsApp Support
                      </button>
                      <button
                        onClick={() => setIsInquiryModalOpen(false)}
                        className="px-6 py-3.5 bg-[#fcf9f8] text-[#064015] border border-[#0b4619]/10 font-bold rounded-2xl hover:bg-[#064015]/5 transition-all text-xs uppercase tracking-wider"
                      >
                        Close Portal
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitInquiry} className="space-y-5">

                    {/* Selected Product Card Detail */}
                    <div className="flex gap-4 p-4 bg-[#fcf9f8] rounded-2xl border border-[#0b4619]/5 items-center mb-2">
                      <img
                        src={selectedProduct.img}
                        alt={selectedProduct.title}
                        className="w-16 h-16 object-cover rounded-xl border border-[#0b4619]/10"
                      />
                      <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Product Selection</div>
                        <div className="text-base font-bold text-[#064015]">{selectedProduct.title}</div>
                        <div className="text-[11px] text-[#d4af37] font-semibold">{selectedProduct.unitName}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#064015]/60 tracking-wider mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#064015]/60 tracking-wider mb-1.5">Company Name</label>
                        <input
                          type="text"
                          value={formCompany}
                          onChange={(e) => setFormCompany(e.target.value)}
                          placeholder="Global Imports LLC"
                          className="w-full px-4 py-3 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#064015]/60 tracking-wider mb-1.5">Corporate Email *</label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="buyer@company.com"
                          className="w-full px-4 py-3 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold text-[#064015]/60 tracking-wider mb-1.5">Quantity Requirement (Tons/Pcs)</label>
                        <input
                          type="text"
                          value={formQuantity}
                          onChange={(e) => setFormQuantity(e.target.value)}
                          placeholder="e.g. 50 Metric Tons"
                          className="w-full px-4 py-3 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-[#064015]/60 tracking-wider mb-1.5">Inquiry Details & Bespoke Specifications</label>
                      <textarea
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        className="w-full px-4 py-3 bg-[#fcf9f8] border border-[#0b4619]/10 rounded-xl text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[#064015] resize-none leading-relaxed"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-grow py-4 bg-[#064015] text-[#fed65b] font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#fed65b] hover:text-[#064015] transition-all text-xs uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>Sending Securely...</>
                        ) : (
                          <>
                            <Send size={14} /> Send Secure Inquiry
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="py-4 px-6 bg-green-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all text-xs uppercase tracking-wider"
                      >
                        <MessageSquare size={16} /> Instant WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
