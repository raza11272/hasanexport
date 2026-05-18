'use client';

import React, { useState, useMemo } from 'react';
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

// Detailed Product Data Map (4 Concerns)
const products = [
  // Hasan Jute Mills Ltd (Unit 1)
  {
    id: "p1",
    unitId: "1",
    unitName: "Hasan Jute Mills Ltd",
    title: "Standard Hessian Sacks",
    description: "Premium food-grade and standard woven jute sacks designed for agricultural packaging such as cocoa, coffee, rice, and potato exports.",
    img: "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Material", value: "100% Eco-Friendly Jute" },
      { label: "Grade", value: "Food Grade / Hydrocarbon-Free" },
      { label: "Dimensions", value: "44\" x 26.5\" (Standard)" },
      { label: "Capacity", value: "50 kg - 100 kg" }
    ],
    features: ["Biodegradable & Organic", "Breathable Fabric", "Custom Printing Available"]
  },
  {
    id: "p2",
    unitId: "1",
    unitName: "Hasan Jute Mills Ltd",
    title: "Heavy Cees Bags",
    description: "Extra durable, double-warp sacks engineered for packaging heavy agricultural produce, minerals, sand, and industrial commodities.",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Weave", value: "Double Warp (2/1 Twill)" },
      { label: "GSM", value: "900g to 1100g per Bag" },
      { label: "Stitching", value: "Herakles (Reinforced Sides)" },
      { label: "Capacity", value: "Up to 100 kg" }
    ],
    features: ["Super High Tensile Strength", "Resistant to Ripping", "Heavy-Duty Seaming"]
  },
  {
    id: "p3",
    unitId: "1",
    unitName: "Hasan Jute Mills Ltd",
    title: "Industrial Twills",
    description: "High-density woven jute fabric used in industrial wrapping, packaging, soil conservation, and erosion control sheets.",
    img: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Fabric Type", value: "A-Twill, B-Twill, L-Twill" },
      { label: "Width", value: "22\" to 45\" Available" },
      { label: "Finish", value: "Calendered / Uncalendered" },
      { label: "Eco-Status", value: "100% Organic Fibers" }
    ],
    features: ["Erosion Control Approved", "Excellent Moisture Retention", "Industrial-grade Strength"]
  },

  // Hasan Jute & Spinning (Unit 2)
  {
    id: "p4",
    unitId: "2",
    unitName: "Hasan Jute & Spinning",
    title: "Carpet Backing Yarn",
    description: "High-tensile, uniform count jute yarn engineered with precision for high-speed automated carpet manufacturing backing.",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Count Range", value: "4 lbs to 72 lbs" },
      { label: "Plies", value: "Single or Multi-ply" },
      { label: "Tensile Strength", value: "CB > 95% Consistency" },
      { label: "Spool Weight", value: "Custom Spools (up to 15 kg)" }
    ],
    features: ["Knotless Long Run", "Uniform Core Thickness", "Low Hairiness Index"]
  },
  {
    id: "p5",
    unitId: "2",
    unitName: "Hasan Jute & Spinning",
    title: "Precision Twine",
    description: "Multi-ply polished twine with superior knot strength, widely used in horticulture, packaging, and high-strength industrial tying.",
    img: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Types", value: "Polished, Unpolished, Bleached" },
      { label: "Structure", value: "2-Ply, 3-Ply, 4-Ply" },
      { label: "Packaging", value: "Ball, Cop, or Precision Tube" },
      { label: "Usage", value: "Crop Support, Retail Packing" }
    ],
    features: ["High Knot Security", "Soft Touch Texture", "Weather & Rot Resistant"]
  },
  {
    id: "p6",
    unitId: "2",
    unitName: "Hasan Jute & Spinning",
    title: "Specialty Fibers",
    description: "Custom blended, bleached, and dyed jute fibers processed to meet specialized non-woven, paper, and textile standards.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Processing", value: "ECF Bleaching / AZO-Free Dyeing" },
      { label: "Blending", value: "Jute-Cotton, Jute-Coir Blends" },
      { label: "Application", value: "Acoustic Panels, Geo-textiles" },
      { label: "Form", value: "Compressed Bales" }
    ],
    features: ["Acoustic & Sound Dampening", "100% Bio-Content Base", "Thermal Insulation Utility"]
  },

  // Pulp & Paper Unit-1 (Unit 3)
  {
    id: "p7",
    unitId: "3",
    unitName: "Pulp & Paper Unit-1",
    title: "Kraft Sack Paper",
    description: "Extremely tough, high-porosity brown kraft paper designed specifically for making industrial multi-wall bags.",
    img: "https://images.unsplash.com/photo-1603513492128-ba7bc9bca206?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "GSM Range", value: "70 GSM - 120 GSM" },
      { label: "Bursting Factor", value: "22 - 28 BF" },
      { label: "Porosity", value: "High Gurley Air Resistance" },
      { label: "Origin", value: "100% Recycled Fibers" }
    ],
    features: ["High Tensile Energy Absorption", "Anti-Slipping Rough Surface", "Multi-wall Sack Compatible"]
  },
  {
    id: "p8",
    unitId: "3",
    unitName: "Pulp & Paper Unit-1",
    title: "Medium Liner Board",
    description: "High-rigidity brown corrugated medium liner board, providing superior structural protection for heavy corrugated shipping boxes.",
    img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "GSM Range", value: "100 GSM - 180 GSM" },
      { label: "Moisture Content", value: "6.5% ± 1%" },
      { label: "Cobb Values", value: "Water Resistant Coated" },
      { label: "Stiffness", value: "High Ring Crush Test (RCT)" }
    ],
    features: ["High Crush Resistance", "Excellent Fluting Capability", "Eco-friendly Recycled Grade"]
  },
  {
    id: "p9",
    unitId: "3",
    unitName: "Pulp & Paper Unit-1",
    title: "Packaging Kraft",
    description: "Multi-purpose packaging and wrapping kraft paper sheets and rolls for general industrial protection and box wrapping.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Weight", value: "50 GSM - 90 GSM" },
      { label: "Formats", value: "Jumbo Rolls, Custom Sheets" },
      { label: "Stretching", value: "Machine Glazed (MG)" },
      { label: "FDA Status", value: "Safe for dry-food contact" }
    ],
    features: ["High Tear Resistance", "Clean & Consistent Surface", "Easy Folding & Pliable"]
  },

  // Hasan Metal Industries (Unit 4)
  {
    id: "p10",
    unitId: "4",
    unitName: "Hasan Metal Industries",
    title: "Structural Steel Beams",
    description: "High-tensile fabricated H-beams and I-beams built with extreme load-bearing capacity for modern high-rise and industrial complexes.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Yield Strength", value: "345 MPa / Q345B" },
      { label: "Standards", value: "ASTM A36, GB/T 1591" },
      { label: "Lengths Available", value: "6m - 12m (Customisable)" },
      { label: "Finishing", value: "Anti-Corrosive Red Oxide Primer" }
    ],
    features: ["Extreme Yield Resilience", "ISO 9001 Structural Grade", "Seismic Movement Compliant"]
  },
  {
    id: "p11",
    unitId: "4",
    unitName: "Hasan Metal Industries",
    title: "Pre-Engineered Metal Frames",
    description: "Heavy-duty structural steel frames custom engineered with state-of-the-art CAD models for modular warehouse erections.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Frame Type", value: "Modular PEB Structural" },
      { label: "Design Tolerances", value: "Highly Precise (±1mm)" },
      { label: "Coating Profile", value: "Zinc Phosphate primer" },
      { label: "Wind Load Rating", value: "Up to 250 km/h" }
    ],
    features: ["Ultra-Fast Assembly Layout", "Reduced Site Erection Costs", "Highly Expandable Design"]
  },
  {
    id: "p12",
    unitId: "4",
    unitName: "Hasan Metal Industries",
    title: "Castings & Heavy Spares",
    description: "Bespoke high-strength castings and replacement industrial spare parts forged to order for manufacturing facilities.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Forging Capacity", value: "10 Tons Single Melt" },
      { label: "CNC Tolerances", value: "Highly Strict (±0.05 mm)" },
      { label: "Raw Materials", value: "Cast Iron, Mild Steel, Alloys" },
      { label: "NDT Inspection", value: "100% Ultrasonic Tested" }
    ],
    features: ["Vibration Absorbing Structures", "Highly Wear & Heat Resistant", "Precise CAD Replica Forgings"]
  }
];

const concerns = [
  { id: "all", name: "All Products" },
  { id: "1", name: "Hasan Jute Mills Ltd" },
  { id: "2", name: "Hasan Jute & Spinning" },
  { id: "3", name: "Pulp & Paper Unit-1" },
  { id: "4", name: "Hasan Metal Industries" }
];

export default function ProductsPage() {
  const [selectedConcern, setSelectedConcern] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
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

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesConcern = selectedConcern === "all" || product.unitId === selectedConcern;
      const matchesSearch = 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.unitName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesConcern && matchesSearch;
    });
  }, [selectedConcern, searchQuery]);

  // Open inquiry modal
  const handleOpenInquiry = (product: any) => {
    setSelectedProduct(product);
    setFormMessage(`We are interested in purchasing the "${product.title}" manufactured by ${product.unitName}. Please provide pricing, MOQs, and delivery terms for global export.`);
    setSubmitSuccess(false);
    setIsInquiryModalOpen(true);
  };

  // Submit Inquiry (MOCKED + WhatsApp & Mail Direct)
  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setIsSubmitting(true);
    
    // Mimic API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clear form inputs
      setFormName("");
      setFormCompany("");
      setFormEmail("");
      setFormPhone("");
      setFormQuantity("");
    }, 1500);
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
                ].map((stat, idx) => (
                  <div key={idx} className="border-l border-[#fed65b]/30 pl-4">
                    <div className="text-2xl md:text-3xl font-serif font-bold text-[#fed65b]">{stat.value}</div>
                    <div className="text-[10px] uppercase font-semibold text-white/60 tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTROLS SECTION (Search and Tabs) */}
        <section className="py-12 bg-white border-b border-[#0b4619]/5 sticky top-[72px] z-40 shadow-sm backdrop-blur-md bg-white/95">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {concerns.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedConcern(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedConcern === tab.id
                      ? "bg-[#064015] text-[#fed65b] shadow-md border-transparent scale-102"
                      : "bg-[#fcf9f8] text-[#064015]/75 hover:bg-[#064015]/5 border border-[#0b4619]/10"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

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
          {filteredProducts.length === 0 ? (
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
                We couldn't find any products matching your search query. Try clearing your filters or testing a different search term.
              </p>
              <button 
                onClick={() => { setSelectedConcern("all"); setSearchQuery(""); }}
                className="mt-6 px-6 py-2.5 bg-[#064015] text-[#fed65b] rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Clear All Filters
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
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
                      <div className="space-y-2.5 mb-6 pt-5 border-t border-[#0b4619]/5">
                        <div className="text-[10px] uppercase font-bold text-[#064015]/40 tracking-wider">Specifications</div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {product.specs.slice(0, 4).map((spec, i) => (
                            <div key={i} className="flex flex-col border-b border-[#0b4619]/5 pb-1">
                              <span className="text-[9px] text-gray-400 uppercase font-medium">{spec.label}</span>
                              <span className="text-xs text-[#064015] font-semibold truncate">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="mb-8 space-y-1.5">
                        {product.features.map((feat, i) => (
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
                          className="py-3 bg-[#064015] text-[#fed65b] font-bold rounded-xl text-[11px] uppercase tracking-wider hover:bg-[#fed65b] hover:text-[#064015] transition-all shadow-md flex items-center justify-center gap-1.5 group/btn"
                        >
                          Direct Inquiry
                          <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <Link
                          href={`/units/${product.unitId}`}
                          className="py-3 bg-[#fcf9f8] text-[#064015] border border-[#0b4619]/10 font-bold rounded-xl text-[11px] uppercase tracking-wider hover:bg-[#064015]/5 transition-all flex items-center justify-center gap-1.5"
                        >
                          Factory Profile
                          <ArrowUpRight size={12} />
                        </Link>
                      </div>

                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
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
