export interface Spec {
  name: string;
  value: string;
}

export interface ProcessStep {
  step: string;
  detail: string;
}

export interface TeamMember {
  name: string;
  title: string;
  description?: string;
  img: string;
}

export interface Product {
  documentId: string;
  title: string;
  description: string;
  image_url: string;
  factoryId: string;
  factoryName: string;
  specs: { label: string; value: string }[];
  features: string[];
}

export interface Factory {
  documentId: string;
  title: string;
  tag: string;
  description: string;
  image_url: string;
  video_url: string;
  stats: { label: string; value: string }[];
  specs: Spec[];
  process: ProcessStep[];
  team_members: TeamMember[];
  images: string[];
}

export const MOCK_FACTORIES: Record<string, Factory> = {
  'n4w56pffj53kihujenib0185': {
    documentId: 'n4w56pffj53kihujenib0185',
    title: 'Hasan Jute Mills Ltd',
    tag: 'Core Concern',
    description: 'Specializing in heavy-duty sacks and industrial woven fabrics for global agricultural export requirements.',
    image_url: '/img/Factories/jute/PXL_20260624_081952608.jpg',
    video_url: 'https://www.youtube.com/embed/WHhz-XQV5DA?autoplay=1&mute=1&loop=1&playlist=WHhz-XQV5DA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1',
    stats: [
      { label: 'Daily Output', value: '45 MT' },
      { label: 'Machinery', value: '250+ Looms' },
      { label: 'Workforce', value: '1,200+' },
      { label: 'Export Market', value: '35+ Nations' }
    ],
    specs: [
      { name: 'Product Type', value: 'Hessian Sacks, Heavy Cees' },
      { name: 'Capacity', value: '15,000 MT / Year' },
      { name: 'Material', value: '100% Natural Jute Fiber' },
      { name: 'Export Grade', value: 'Premium Grade A' },
      { name: 'Certifications', value: 'ISO 9001, OEKO-TEX' }
    ],
    process: [
      { step: 'Selection', detail: 'Sourcing premium raw jute from specific regions.' },
      { step: 'Processing', detail: 'Reting and stripping to extract robust fibers.' },
      { step: 'Weaving', detail: 'High-precision looms weaving industrial grade fabrics.' },
      { step: 'Finishing', detail: 'Specialized coating and stitching for heavy-duty use.' }
    ],
    team_members: [
      {
        name: 'Mr. Md. Hasan',
        title: 'Founder & Chairman, Hasan Group',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
      },
      {
        name: 'Sultana Siddiqua',
        title: 'Director of International Trade',
        img: '/img/sultana_siddiqua.png'
      },
      {
        name: 'Rahim Ahmed',
        title: 'Chief Operations Officer',
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop'
      },
      {
        name: 'Kazi Mohammad',
        title: 'Head of Sustainable Innovation',
        img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=600&fit=crop'
      }
    ],
    images: [
      '/img/Factories/jute/PXL_20260624_081952608.jpg',
      '/img/Factories/jute/PXL_20260624_081956870.jpg',
      '/img/Factories/jute/PXL_20260624_082008653.jpg',
      '/img/Factories/jute/PXL_20260624_082014251.jpg',
      '/img/Factories/jute/PXL_20260624_082056870.jpg',
      '/img/Factories/jute/PXL_20260624_082133597.jpg',
      '/img/Factories/jute/PXL_20260624_082224956.jpg',
      '/img/Factories/jute/PXL_20260624_082333031.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082341621.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082443504.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082524526.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082625971.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082758867.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082819424.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082829727.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_082858714.NIGHT.jpg',
      '/img/Factories/jute/PXL_20260624_084136336.jpg',
      '/img/Factories/jute/PXL_20260624_084229942.NIGHT.jpg'
    ]
  },
  'l2dsj0qp6ee0qy0dhss2avi9': {
    documentId: 'l2dsj0qp6ee0qy0dhss2avi9',
    title: 'Hasan Jute & Spinning',
    tag: 'High Precision',
    description: 'Manufacturing premium yarn and high-tensile twine for technical textile applications.',
    image_url: '/img/Factories/spinning/PXL_20260624_081528450.NIGHT.jpg',
    video_url: 'https://www.youtube.com/embed/35e2BJR4bpE?autoplay=1&mute=1&loop=1&playlist=35e2BJR4bpE&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1',
    stats: [
      { label: 'Spindle Count', value: '5,000+' },
      { label: 'Yarn Precision', value: 'High-Tensile' },
      { label: 'Daily Output', value: '25 MT' },
      { label: 'Compliance', value: 'Global Standard' }
    ],
    specs: [
      { name: 'Yarn Count', value: '4 lbs to 72 lbs' },
      { name: 'Twist Type', value: 'S-Twist / Z-Twist' },
      { name: 'Application', value: 'Carpet Backing, Cable Filling' },
      { name: 'Strength', value: 'High-Tensile (CB > 95%)' },
      { name: 'Finish', value: 'Natural, Bleached, Dyed' }
    ],
    process: [
      { step: 'Blending', detail: 'Optimizing fiber mix for specific yarn counts.' },
      { step: 'Spinning', detail: 'Precision spinning for consistent thickness.' },
      { step: 'Winding', detail: 'Automated cone winding for industrial use.' },
      { step: 'Testing', detail: 'Tensile strength and moisture verification.' }
    ],
    team_members: [
      {
        name: 'Masud Rahman',
        title: 'Senior Plant Manager',
        img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop'
      },
      {
        name: 'Laila Sultana',
        title: 'Lead Quality Auditor',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=600&fit=crop'
      },
      {
        name: 'Farhan Saeed',
        title: 'Spinning Supervisor',
        img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=600&fit=crop'
      },
      {
        name: 'Rina Chowdhury',
        title: 'HR Specialist',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop'
      }
    ],
    images: [
      '/img/Factories/spinning/PXL_20260624_081528450.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081536416.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081606278.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081617003.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081638006.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081645324.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081653670.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081715146.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081721113.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081730819.NIGHT.jpg',
      '/img/Factories/spinning/PXL_20260624_081848073.NIGHT.jpg'
    ]
  },
  'bfymz3bnzdt1xv0103ato959': {
    documentId: 'bfymz3bnzdt1xv0103ato959',
    title: 'Hasan Pulp & Paper Mills',
    tag: 'Packaging',
    description: 'Dedicated production of high-strength industrial brown paper and sustainable packaging solutions.',
    image_url: '/img/Factories/paper/PXL_20260624_055006506.jpg',
    video_url: 'https://www.youtube.com/embed/J3qeRooh7WI?autoplay=1&mute=1&loop=1&playlist=J3qeRooh7WI&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1',
    stats: [
      { label: 'GSM Stability', value: '±2%' },
      { label: 'Bursting Factor', value: '22-28' },
      { label: 'Recycle Rate', value: '100%' },
      { label: 'Tech Grade', value: 'German Tech' }
    ],
    specs: [
      { name: 'Paper Type', value: 'Brown Kraft Paper' },
      { name: 'GSM Range', value: '60 GSM to 180 GSM' },
      { name: 'Usage', value: 'Industrial Sacks, Corrugation' },
      { name: 'Durability', value: 'High Burst Factor' },
      { name: 'Eco-Status', value: '100% Recyclable' }
    ],
    process: [
      { step: 'Pulping', detail: 'High-consistency pulping for fiber strength.' },
      { step: 'Screening', detail: 'Multi-stage cleaning to remove impurities.' },
      { step: 'Pressing', detail: 'Optimized water removal for density.' },
      { step: 'Reeling', detail: 'Precision winding for automated converters.' }
    ],
    team_members: [
      {
        name: 'Robert Chen',
        title: 'Technical Director',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop'
      },
      {
        name: 'Anisul Islam',
        title: 'Operations Manager',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop'
      },
      {
        name: 'Yousuf Khan',
        title: 'Lead Paper Technologist',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop'
      },
      {
        name: 'Sadia Rahman',
        title: 'Quality Control Specialist',
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop'
      }
    ],
    images: [
      '/img/Factories/paper/PXL_20260624_055006506.jpg',
      '/img/Factories/paper/PXL_20260624_055021686.jpg',
      '/img/Factories/paper/PXL_20260624_055031668.jpg',
      '/img/Factories/paper/PXL_20260624_055137773.jpg',
      '/img/Factories/paper/PXL_20260624_055146059.jpg',
      '/img/Factories/paper/PXL_20260624_055350736.jpg',
      '/img/Factories/paper/PXL_20260624_055407469.jpg',
      '/img/Factories/paper/PXL_20260624_055422210.jpg',
      '/img/Factories/paper/PXL_20260624_055437681.jpg',
      '/img/Factories/paper/PXL_20260624_055445139.jpg',
      '/img/Factories/paper/PXL_20260624_055511652.jpg',
      '/img/Factories/paper/PXL_20260624_055522084.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_055701506.jpg',
      '/img/Factories/paper/PXL_20260624_055709775.jpg',
      '/img/Factories/paper/PXL_20260624_055802934.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_060106772.jpg',
      '/img/Factories/paper/PXL_20260624_060146806.jpg',
      '/img/Factories/paper/PXL_20260624_060216317.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_060234778.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_060349836.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_061421362.jpg',
      '/img/Factories/paper/PXL_20260624_061551805.jpg',
      '/img/Factories/paper/PXL_20260624_061614209.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_061823242.jpg',
      '/img/Factories/paper/PXL_20260624_062015012.jpg',
      '/img/Factories/paper/PXL_20260624_062142304.jpg',
      '/img/Factories/paper/PXL_20260624_062147747.jpg',
      '/img/Factories/paper/PXL_20260624_062150274.jpg',
      '/img/Factories/paper/PXL_20260624_062152417.jpg',
      '/img/Factories/paper/PXL_20260624_062230171.jpg',
      '/img/Factories/paper/PXL_20260624_062232382.jpg',
      '/img/Factories/paper/PXL_20260624_070616393.jpg',
      '/img/Factories/paper/PXL_20260624_071009178.jpg',
      '/img/Factories/paper/PXL_20260624_073548584.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073553144.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073642198.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073718903.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073731337.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073743083.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073751776.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073841998.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073850899.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073910308.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_073936770.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_074008485.NIGHT.jpg',
      '/img/Factories/paper/PXL_20260624_074843920.jpg'
    ]
  },
  'pyyh0n9f32r7xflorn0tw8wg': {
    documentId: 'pyyh0n9f32r7xflorn0tw8wg',
    title: 'Hasan Metal Industries',
    tag: 'Heavy Industry',
    description: 'Pioneering heavy metal fabrication, structural steel engineering, and precision spare parts manufacturing for global industrial infrastructures.',
    image_url: '/img/Factories/metal/PXL_20260624_051011628.jpg',
    video_url: 'https://www.youtube.com/embed/aRAYAuPVgcQ?autoplay=1&mute=1&loop=1&playlist=aRAYAuPVgcQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1',
    stats: [
      { label: 'Daily Output', value: '75 MT' },
      { label: 'Machineries', value: 'CNC & Plasma' },
      { label: 'Workforce', value: '450+ Crew' },
      { label: 'Certifications', value: 'ISO 9001, CE' }
    ],
    specs: [
      { name: 'Steel Category', value: 'Structural Fabrication & Casting' },
      { name: 'Main Machinery', value: 'High-Power CNC Laser, Furnaces' },
      { name: 'Material Grade', value: 'Q345B, ASTM A36, Forged Steel' },
      { name: 'Custom Casting', value: 'Up to 10 Tons Single Pour' },
      { name: 'Quality Standard', value: 'NDT / Ultrasonic Tested' }
    ],
    process: [
      { step: 'Design', detail: 'Bespoke CAD modeling & load calculations.' },
      { step: 'Machining', detail: 'High-precision laser cutting & CNC boring.' },
      { step: 'Welding', detail: 'Certified gas-shielded structural assembly.' },
      { step: 'Coating', detail: 'Protective sandblasting & primer coating.' }
    ],
    team_members: [
      {
        name: 'Amit Patel',
        title: 'Chief Metallurgical Engineer',
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop'
      },
      {
        name: 'Tariq Mahmud',
        title: 'Safety & Compliance Inspector',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop'
      },
      {
        name: 'Vikram Singh',
        title: 'CNC Workshop Lead',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
      },
      {
        name: 'Nilufar Yeasmin',
        title: 'Chief Safety Officer',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop'
      }
    ],
    images: [
      '/img/Factories/metal/PXL_20260624_050439844.jpg',
      '/img/Factories/metal/PXL_20260624_050535237.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050615110.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050625022.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050633120.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050746392.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050810352.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050812646.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050816258.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050846465.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050938525.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_050951610.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_051011628.jpg',
      '/img/Factories/metal/PXL_20260624_051020089.jpg',
      '/img/Factories/metal/PXL_20260624_051042315.jpg',
      '/img/Factories/metal/PXL_20260624_051046938.jpg',
      '/img/Factories/metal/PXL_20260624_051106700.NIGHT.jpg',
      '/img/Factories/metal/PXL_20260624_051830040.jpg'
    ]
  }
};

export const MOCK_PRODUCTS: Product[] = [
  // Hasan Jute Mills Ltd (Unit 1)
  {
    documentId: 'p1',
    title: 'Standard Hessian Jute Bags',
    description: 'Premium food-grade and standard woven jute packaging bags designed for global agricultural exports such as cocoa, coffee, rice, and potatoes.',
    image_url: 'https://s.alicdn.com/@sc04/kf/H10bbd75fd3344674b8bd980f53613d0e9/Custom-Natural-Jute-Sack-Source-Factory-30kg-Food-Grade-Burlap-Bag-for-Grain-Cocoa-Coffee-Agricultural-Storage.png',
    factoryId: 'n4w56pffj53kihujenib0185',
    factoryName: 'Hasan Jute Mills Ltd',
    specs: [
      { label: 'Material', value: '100% Eco-Friendly Jute' },
      { label: 'Grade', value: 'Food Grade / Hydrocarbon-Free' },
      { label: 'Dimensions', value: '44" x 26.5" (Standard)' },
      { label: 'Capacity', value: '50 kg - 100 kg' }
    ],
    features: ['Biodegradable & Organic', 'Breathable Fabric', 'Custom Printing Available']
  },
  {
    documentId: 'p2',
    title: 'Heavy Cees Jute Bags',
    description: 'Extra durable, double-warp jute sacking bags engineered for packaging heavy agricultural produce, grains, minerals, and industrial products.',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUeOuiMJAfIBDD5N7XoVbriHIa3APY2vqTA&s',
    factoryId: 'n4w56pffj53kihujenib0185',
    factoryName: 'Hasan Jute Mills Ltd',
    specs: [
      { label: 'Weave', value: 'Double Warp (2/1 Twill)' },
      { label: 'GSM', value: '900g to 1100g per Bag' },
      { label: 'Stitching', value: 'Herakles (Reinforced Sides)' },
      { label: 'Capacity', value: 'Up to 100 kg' }
    ],
    features: ['Super High Tensile Strength', 'Resistant to Ripping', 'Heavy-Duty Seaming']
  },
  {
    documentId: 'p3',
    title: 'Erosion Control Jute Geotextiles',
    description: 'High-density organic woven jute sheets and geotextile mats used in industrial wrapping, packaging, soil conservation, and erosion control.',
    image_url: 'https://5.imimg.com/data5/SELLER/Default/2025/10/550380119/FR/QU/IK/130477180/20kg-jute-gunny-bag.jpg',
    factoryId: 'n4w56pffj53kihujenib0185',
    factoryName: 'Hasan Jute Mills Ltd',
    specs: [
      { label: 'Fabric Type', value: 'A-Twill, B-Twill, L-Twill' },
      { label: 'Width', value: '22" to 45" Available' },
      { label: 'Finish', value: 'Calendered / Uncalendered' },
      { label: 'Eco-Status', value: '100% Organic Fibers' }
    ],
    features: ['Erosion Control Approved', 'Excellent Moisture Retention', 'Industrial-grade Strength']
  },
  // Hasan Jute & Spinning (Unit 2)
  {
    documentId: 'p4',
    title: 'Traditional Jute Twine & Sutli',
    description: 'High-tensile traditional jute twine (sutli) and yarn engineered with precision for general agricultural packaging and automated binding.',
    image_url: 'https://5.imimg.com/data5/SELLER/Default/2025/8/538665129/IB/SW/YY/145877526/1-kg-jute-sutli-roll-500x500.jpg',
    factoryId: 'l2dsj0qp6ee0qy0dhss2avi9',
    factoryName: 'Hasan Jute & Spinning',
    specs: [
      { label: 'Count Range', value: '4 lbs to 72 lbs' },
      { label: 'Plies', value: 'Single or Multi-ply' },
      { label: 'Tensile Strength', value: 'CB > 95% Consistency' },
      { label: 'Spool Weight', value: 'Custom Spools (up to 15 kg)' }
    ],
    features: ['Knotless Long Run', 'Uniform Core Thickness', 'Low Hairiness Index']
  },
  {
    documentId: 'p5',
    title: 'Polished Jute Twine (Sutli)',
    description: 'Multi-ply premium polished twine and ropes with superior knot strength, widely used in agriculture, horticulture, and secure tying.',
    image_url: 'https://5.imimg.com/data5/SELLER/Default/2025/8/538665130/DE/OU/BQ/145877526/1-kg-jute-sutli-roll.jpg',
    factoryId: 'l2dsj0qp6ee0qy0dhss2avi9',
    factoryName: 'Hasan Jute & Spinning',
    specs: [
      { label: 'Types', value: 'Polished, Unpolished, Bleached' },
      { label: 'Structure', value: '2-Ply, 3-Ply, 4-Ply' },
      { label: 'Packaging', value: 'Ball, Cop, or Precision Tube' },
      { label: 'Usage', value: 'Crop Support, Retail Packing' }
    ],
    features: ['High Knot Security', 'Soft Touch Texture', 'Weather & Rot Resistant']
  },
  {
    documentId: 'p6',
    title: 'Premium Jute Carpet Backing Yarn',
    description: 'Custom spun high-precision carpet backing yarn and specialty blended jute fibers processed to meet dynamic global carpet weaving standards.',
    image_url: 'https://images.jdmagicbox.com/quickquotes/images_main/jute-yarn-sutli-387624519-6ltlq.jpg',
    factoryId: 'l2dsj0qp6ee0qy0dhss2avi9',
    factoryName: 'Hasan Jute & Spinning',
    specs: [
      { label: 'Processing', value: 'ECF Bleaching / AZO-Free Dyeing' },
      { label: 'Blending', value: 'Jute-Cotton, Jute-Coir Blends' },
      { label: 'Application', value: 'Acoustic Panels, Geo-textiles' },
      { label: 'Form', value: 'Compressed Bales' }
    ],
    features: ['Acoustic & Sound Dampening', '100% Bio-Content Base', 'Thermal Insulation Utility']
  },
  // Hasan Pulp & Paper Mills (Unit 3)
  {
    documentId: 'p7',
    title: 'Industrial Kraft Paper Roll',
    description: 'Extremely tough, high-strength industrial brown Kraft paper roll designed specifically for sustainable packaging, wrapping, and manufacturing.',
    image_url: 'https://5.imimg.com/data5/XP/TJ/MY-6436108/brown-kraft-paper-roll-500x500.jpg',
    factoryId: 'bfymz3bnzdt1xv0103ato959',
    factoryName: 'Hasan Pulp & Paper Mills',
    specs: [
      { label: 'GSM Range', value: '70 GSM - 120 GSM' },
      { label: 'Bursting Factor', value: '22 - 28 BF' },
      { label: 'Porosity', value: 'High Gurley Air Resistance' },
      { label: 'Origin', value: '100% Recycled Fibers' }
    ],
    features: ['High Tensile Energy Absorption', 'Anti-Slipping Rough Surface', 'Multi-wall Sack Compatible']
  },
  {
    documentId: 'p8',
    title: 'Corrugated Medium Liner Paper Roll',
    description: 'High-rigidity brown corrugated medium liner paper roll, providing superior structural fluting and protection for heavy shipping cartons.',
    image_url: 'https://www.startech.com.bd/image/cache/catalog/pos-printer/roll/pos-roll-500x500.webp',
    factoryId: 'bfymz3bnzdt1xv0103ato959',
    factoryName: 'Hasan Pulp & Paper Mills',
    specs: [
      { label: 'GSM Range', value: '100 GSM - 180 GSM' },
      { label: 'Moisture Content', value: '6.5% ± 1%' },
      { label: 'Cobb Values', value: 'Water Resistant Coated' },
      { label: 'Stiffness', value: 'High Ring Crush Test (RCT)' }
    ],
    features: ['High Crush Resistance', 'Excellent Fluting Capability', 'Eco-friendly Recycled Grade']
  },
  {
    documentId: 'p9',
    title: 'Machine Glazed Wrapping Paper Roll',
    description: 'Premium MG kraft packaging paper rolls and wrapping sheets safe for food-grade protection and custom industrial wrapper box wrapping.',
    image_url: 'https://pixposbd.com/wp-content/uploads/2024/09/510yyfqzcoL._AC_UF8941000_QL80_.jpg',
    factoryId: 'bfymz3bnzdt1xv0103ato959',
    factoryName: 'Hasan Pulp & Paper Mills',
    specs: [
      { label: 'Weight', value: '50 GSM - 90 GSM' },
      { label: 'Formats', value: 'Jumbo Rolls, Custom Sheets' },
      { label: 'Stretching', value: 'Machine Glazed (MG)' },
      { label: 'FDA Status', value: 'Safe for dry-food contact' }
    ],
    features: ['High Tear Resistance', 'Clean & Consistent Surface', 'Easy Folding & Pliable']
  },
  // Hasan Metal Industries (Unit 4)
  {
    documentId: 'p10',
    title: 'Structural Steel Beams',
    description: 'High-tensile fabricated H-beams and I-beams built with extreme load-bearing capacity for modern high-rise and industrial complexes.',
    image_url: 'https://www.bruker.com/en/applications/industrial/metals/_jcr_content/teaserImage.coreimg.jpeg/1733859095146/metal-tubes.jpeg',
    factoryId: 'pyyh0n9f32r7xflorn0tw8wg',
    factoryName: 'Hasan Metal Industries',
    specs: [
      { label: 'Yield Strength', value: '345 MPa / Q345B' },
      { label: 'Standards', value: 'ASTM A36, GB/T 1591' },
      { label: 'Lengths Available', value: '6m - 12m (Customisable)' },
      { label: 'Finishing', value: 'Anti-Corrosive Red Oxide Primer' }
    ],
    features: ['Extreme Yield Resilience', 'ISO 9001 Structural Grade', 'Seismic Movement Compliant']
  },
  {
    documentId: 'p11',
    title: 'Pre-Engineered Metal Frames',
    description: 'Heavy-duty structural steel frames custom engineered with state-of-the-art CAD models for modular warehouse erections.',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgJH3_4DyiBchhRGu6au5-uvnE8IwMYI3cw&s',
    factoryId: 'pyyh0n9f32r7xflorn0tw8wg',
    factoryName: 'Hasan Metal Industries',
    specs: [
      { label: 'Frame Type', value: 'Modular PEB Structural' },
      { label: 'Design Tolerances', value: 'Highly Precise (±1mm)' },
      { label: 'Coating Profile', value: 'Zinc Phosphate primer' },
      { label: 'Wind Load Rating', value: 'Up to 250 km/h' }
    ],
    features: ['Ultra-Fast Assembly Layout', 'Reduced Site Erection Costs', 'Highly Expandable Design']
  },
  {
    documentId: 'p12',
    title: 'Castings & Heavy Spares',
    description: 'Bespoke high-strength castings and replacement industrial spare parts forged to order for manufacturing facilities.',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2uHb-rqQObe5MFnRprIYqaGsoFOtAmkRLg&s',
    factoryId: 'pyyh0n9f32r7xflorn0tw8wg',
    factoryName: 'Hasan Metal Industries',
    specs: [
      { label: 'Forging Capacity', value: '10 Tons Single Melt' },
      { label: 'CNC Tolerances', value: 'Highly Strict (±0.05 mm)' },
      { label: 'Raw Materials', value: 'Cast Iron, Mild Steel, Alloys' },
      { label: 'NDT Inspection', value: '100% Ultrasonic Tested' }
    ],
    features: ['Vibration Absorbing Structures', 'Highly Wear & Heat Resistant', 'Precise CAD Replica Forgings']
  }
];

export const MOCK_GALLERY = [
  {
    id: 'g1',
    category: 'PROCESS',
    image: 'https://www.bssnews.net/assets/news_photos/2026/04/14/image-377673-1776180496.jpg',
    title: 'Modern Processing Line',
    span: 'large'
  },
  {
    id: 'g2',
    category: 'PACKAGING',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT1wjtl6b0hbayqz0NRFcccQ_GdK3rVmU0A&s',
    title: 'Eco Jute Packaging',
    span: 'wide'
  },
  {
    id: 'g3',
    category: 'PROCESS',
    image: 'https://www.anantabd.net/wp-content/uploads/2025/07/SPG01829.jpg',
    title: 'Automated Spinning Mill',
    span: 'small'
  },
  {
    id: 'g4',
    category: 'YARN',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk42Y04jr3jCsGq_7CdhRPAClv88Kkp3Z_Yw&s',
    title: 'Spun Yarn Production',
    span: 'small'
  },
  {
    id: 'g5',
    category: 'PACKAGING',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjpHEwTt58gU3aJKkjxboSatEZVO1N_NrLw&s',
    title: 'Heavy Duty Gunny Bags',
    span: 'wide'
  },
  {
    id: 'g6',
    category: 'YARN',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZp1RBjpgHP2492gef5X2_dt8QgQkP9JhgA&s',
    title: 'Premium Golden Spools',
    span: 'small'
  }
];
