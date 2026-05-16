'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Download, Mail, Phone, MapPin, Factory, Settings, Leaf, Globe } from 'lucide-react';
import Link from 'next/link';

const unitData: Record<string, any> = {
  "1": {
    title: "Hasan Jute Mills Ltd",
    tag: "Core Concern",
    description: "Specializing in heavy-duty sacks and industrial woven fabrics for global agricultural export requirements.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9lQ7GcXdeP-NNjeU1FYkfBUgQ2RdFxAyatVr-vOvG5_aMPAgnKvCdloMFDkOdZC3p6zqZ0Ec_9wLo77mNMdUXGKR33YPDYoMLzVfRngpjPAk9IWK7fenRU5BZqcCDN8MYHP_cH_ZsTeCpdc36PKGmJiBL3j9PIyawxhJyzlFsdlFjjOWr4DehmTmeJC_gSUg33KKd9Bv1qfeYSoOpi5CgWnpsKPo61lac19-4uyuGrUdInATmOyLU0z-dRvx3IuncYTI2hnE_uxeZ",
    stats: [
      { label: "Daily Output", value: "45 MT" },
      { label: "Machinery", value: "250+ Looms" },
      { label: "Workforce", value: "1,200+" },
      { label: "Export Market", value: "35+ Nations" }
    ],
    specs: [
      { name: "Product Type", value: "Hessian Sacks, Heavy Cees" },
      { name: "Capacity", value: "15,000 MT / Year" },
      { name: "Material", value: "100% Natural Jute Fiber" },
      { name: "Export Grade", value: "Premium Grade A" },
      { name: "Certifications", value: "ISO 9001, OEKO-TEX" }
    ],
    process: [
      { step: "Selection", detail: "Sourcing premium raw jute from specific regions." },
      { step: "Processing", detail: "Reting and stripping to extract robust fibers." },
      { step: "Weaving", detail: "High-precision looms weaving industrial grade fabrics." },
      { step: "Finishing", detail: "Specialized coating and stitching for heavy-duty use." }
    ],
    products: [
      { title: "Standard Hessian Sacks", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" },
      { title: "Heavy Cees Bags", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" },
      { title: "Industrial Twills", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "2": {
    title: "Hasan Jute & Spinning",
    tag: "High Precision",
    description: "Manufacturing premium yarn and high-tensile twine for technical textile applications.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDV90ir7oMILWsxxB7sx-AKBF3JSypz5yw6MKhPlqNV5yyBDJWhNrkMLkLFl0x_vsfBWrQNNDZ-ZjjAx5S5R9Ysa8sCHkTZ6XSf6c-3aarGiUWHIGJi1PVs6lKaAA0CFA6sLTIBgqKXSkIhWylIInLzr4i9RYhZgijM0P6CkeBDzOxLKsgZXOXHr5xr6Uab-DPx6Dig03VAfTSI7yn4O-9qqEjRB-0tguWmNWDWNnMHFi-vpAxJgjattAJjX8zKPRvLWf7sOHPV6Gix",
    stats: [
      { label: "Spindle Count", value: "5,000+" },
      { label: "Yarn Precision", value: "High-Tensile" },
      { label: "Daily Output", value: "25 MT" },
      { label: "Compliance", value: "Global Standard" }
    ],
    specs: [
      { name: "Yarn Count", value: "4 lbs to 72 lbs" },
      { name: "Twist Type", value: "S-Twist / Z-Twist" },
      { name: "Application", value: "Carpet Backing, Cable Filling" },
      { name: "Strength", value: "High-Tensile (CB > 95%)" },
      { name: "Finish", value: "Natural, Bleached, Dyed" }
    ],
    process: [
      { step: "Blending", detail: "Optimizing fiber mix for specific yarn counts." },
      { step: "Spinning", detail: "Precision spinning for consistent thickness." },
      { step: "Winding", detail: "Automated cone winding for industrial use." },
      { step: "Testing", detail: "Tensile strength and moisture verification." }
    ],
    products: [
      { title: "Carpet Backing Yarn", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800" },
      { title: "Precision Twine", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" },
      { title: "Specialty Fibers", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "3": {
    title: "Pulp & Paper Unit-1",
    tag: "Packaging",
    description: "Dedicated production of high-strength industrial brown paper and sustainable packaging solutions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO4TnmdlQ0WYxUNk4OnJadXD-5qOiC7nTnhgL2_d3NhGMQWxxSFv47q2gdU6bfROBDlvbOWRdfdbaQv_RaTKNn4JTZ8a5CsBUBEN9e3mzDzLMiZk2R9IfiB5--c2WV3emQX_-c_bc-sV6zA-HnHM--lCZ2b9w-8BZ4soGp-GT32w_JLEF6OoRTOyuWh4TcgMyqdA5VrONemDh_savjJO6r1X2xymPxw_tnMGXGP_cMjsKWg86gY5DVQZ7OJ03k9aM-CSDtbLSVYFjl",
    stats: [
      { label: "GSM Stability", value: "±2%" },
      { label: "Bursting Factor", value: "22-28" },
      { label: "Recycle Rate", value: "100%" },
      { label: "Tech Grade", value: "German Tech" }
    ],
    specs: [
      { name: "Paper Type", value: "Brown Kraft Paper" },
      { name: "GSM Range", value: "60 GSM to 180 GSM" },
      { name: "Usage", value: "Industrial Sacks, Corrugation" },
      { name: "Durability", value: "High Burst Factor" },
      { name: "Eco-Status", value: "100% Recyclable" }
    ],
    process: [
      { step: "Pulping", detail: "High-consistency pulping for fiber strength." },
      { step: "Screening", detail: "Multi-stage cleaning to remove impurities." },
      { step: "Pressing", detail: "Optimized water removal for density." },
      { step: "Reeling", detail: "Precision winding for automated converters." }
    ],
    products: [
      { title: "Kraft Sack Paper", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
      { title: "Medium Liner Board", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" },
      { title: "Packaging Kraft", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" }
    ]
  },
  "4": {
    title: "Pulp & Paper Unit-2",
    tag: "Premium Grade",
    description: "Premium white paper manufacturing utilizing advanced bleaching and finishing technologies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEdBNoxNwtT1HTFc4wGwwK6A_jIKtrnRVy6lxMp8ttnA8xusL_PnfcT_MozPIltTooWVUpc7GNCYyNn1mnoClzhl7x0m8M8EVuAENVFWQeT7sQymxCq9dQv-pVSSyzFBO5jLQdEjkPFrESeesTra52PS8CObHKt96t_v259HQ8PmcucmseB3n2HGoBzIvWWNOUbkZLVVdGahTgGNXk-MCCZJykPbjweuwHV384G2Xauy_DORpUQYH2gOsQL550mb320ZrZiCUdhARX",
    stats: [
      { label: "Brightness", value: "92% ISO" },
      { label: "Machine Deckle", value: "2850mm" },
      { label: "Basis Weight", value: "45-120g" },
      { label: "FSC Status", value: "Certified" }
    ],
    specs: [
      { name: "Paper Type", value: "Premium White Writing" },
      { name: "Brightness", value: "92% ISO Brightness" },
      { name: "Finish", value: "Super Calendered" },
      { name: "Opacity", value: "> 95% High Opacity" },
      { name: "Certifications", value: "FSC Certified" }
    ],
    process: [
      { step: "Bleaching", detail: "Advanced ECF bleaching for high brightness." },
      { step: "Formation", detail: "Headbox precision for uniform sheet weight." },
      { step: "Calendering", detail: "Surface finishing for premium smoothness." },
      { step: "Slitting", detail: "Dust-free cutting for high-speed printers." }
    ],
    products: [
      { title: "Premium Bond Paper", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
      { title: "Executive Stationery", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800" },
      { title: "White Liner Paper", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" }
    ]
  }
};

export default function UnitDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const unit = unitData[id] || unitData["1"];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Navbar />

      <main className="pt-20">
        {/* Unit Hero Section */}
        <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={unit.image} alt={unit.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002e0b] via-[#002e0b]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <span className="px-3 py-1 bg-[#fed65b] text-[#745c00] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block">
                {unit.tag}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
                {unit.title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {unit.description}
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle size={16} className="text-[#fed65b]" />
                  Global Standards
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle size={16} className="text-[#fed65b]" />
                  Sustainable Energy
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industrial Stats Grid */}
        <section className="py-12 bg-white border-b border-[#0b4619]/5">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {unit.stats.map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-[#d4af37] text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[#41493f] text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Left Content */}
            <div className="lg:col-span-8 space-y-24">

              {/* Technical Specifications */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-12 h-px bg-[#d4af37]" />
                  <h2 className="font-serif text-3xl font-bold text-[#002e0b]">Technical Specifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {unit.specs.map((spec: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-between items-center p-6 bg-white border border-[#0b4619]/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-[#41493f]/60 font-bold text-[10px] uppercase tracking-wider">{spec.name}</span>
                      <span className="text-[#0b4619] font-bold text-sm">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Manufacturing Process (Vector Animated) */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-12 h-px bg-[#d4af37]" />
                  <h2 className="font-serif text-3xl font-bold text-[#002e0b]">Operational Journey</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    {unit.process.map((p: any, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 group"
                      >
                        <div className="relative">
                          <div className="w-12 h-12 bg-[#0b4619] rounded-full flex items-center justify-center text-white font-bold z-10 relative">
                            {i + 1}
                          </div>
                          {i < unit.process.length - 1 && (
                            <div className="absolute top-12 left-6 w-[2px] h-full bg-[#0b4619]/10" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-serif text-xl font-bold text-[#002e0b] mb-2 group-hover:text-[#d4af37] transition-colors">
                            {p.step}
                          </h4>
                          <p className="text-[#41493f] text-sm leading-relaxed">{p.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative aspect-square bg-[#0b4619] rounded-[40px] p-1 overflow-hidden group">
                    {/* Vector Animation Background */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <motion.circle
                          cx="50" cy="50" r="45"
                          fill="none" stroke="#d4af37" strokeWidth="0.2"
                          strokeDasharray="2,2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.circle
                          cx="50" cy="50" r="35"
                          fill="none" stroke="white" strokeWidth="0.1"
                          strokeDasharray="10,5"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        {[0, 90, 180, 270].map(angle => (
                          <motion.line
                            key={angle}
                            x1="50" y1="50"
                            x2={50 + Math.cos(angle * Math.PI / 180) * 45}
                            y2={50 + Math.sin(angle * Math.PI / 180) * 45}
                            stroke="white" strokeWidth="0.1" strokeOpacity="0.3"
                            animate={{ opacity: [0.1, 0.5, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: angle / 90 }}
                          />
                        ))}
                      </svg>
                    </div>
                    <img
                      src={unit.image}
                      className="w-full h-full object-cover rounded-[38px] grayscale group-hover:grayscale-0 transition-all duration-700"
                      alt="Process"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b] via-transparent to-transparent opacity-60" />
                    <motion.div
                      className="absolute bottom-8 left-8 right-8 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 text-[#fed65b]">Precision Hub</div>
                      <div className="text-xl font-serif">Advanced Manufacturing Control</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Product Showcase */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-12 h-px bg-[#d4af37]" />
                  <h2 className="font-serif text-3xl font-bold text-[#002e0b]">Primary Outputs</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {unit.products.map((product: any, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4 relative">
                        <img
                          src={product.img}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          alt={product.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002e0b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                          <button className="w-full py-3 bg-white text-[#0b4619] font-bold rounded-xl text-xs uppercase tracking-widest shadow-xl">
                            View Details
                          </button>
                        </div>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#002e0b] group-hover:text-[#d4af37] transition-colors">
                        {product.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Inquiries */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-[#0b4619]/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full -mr-16 -mt-16" />

                  <h3 className="font-serif text-2xl font-bold text-[#002e0b] mb-8">Direct Inquiry</h3>
                  <div className="space-y-8 mb-10">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#fcf9f8] rounded-2xl flex items-center justify-center text-[#d4af37] shadow-sm">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#41493f]/40 tracking-widest mb-1">Sales Hotline</div>
                        <div className="text-base font-bold text-[#002e0b]">+88 01771 855823</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-[#fcf9f8] rounded-2xl flex items-center justify-center text-[#d4af37] shadow-sm">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#41493f]/40 tracking-widest mb-1">Email Inquiry</div>
                        <div className="text-base font-bold text-[#002e0b]">brohasan773@gmail.com</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-5 bg-[#0b4619] text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#0b4619]/20 transition-all group">
                      Request Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full py-5 bg-white border-2 border-[#0b4619]/10 text-[#0b4619] font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#fcf9f8] transition-colors">
                      Technical PDF <Download size={20} />
                    </button>
                  </div>
                </div>

                <div className="bg-[#0b4619] p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mb-20" />
                  <Globe size={48} className="text-[#fed65b] mb-6 opacity-80" />
                  <h4 className="text-2xl font-serif font-bold mb-4">Export Certified</h4>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    This unit is fully compliant with international export standards, including customs clearance ready documentation.
                  </p>
                  <Link href="/#global-reach" className="inline-flex items-center gap-3 text-[#fed65b] font-bold group">
                    Explore Markets
                    <div className="w-10 h-10 rounded-full border border-[#fed65b]/30 flex items-center justify-center group-hover:bg-[#fed65b] group-hover:text-[#0b4619] transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
