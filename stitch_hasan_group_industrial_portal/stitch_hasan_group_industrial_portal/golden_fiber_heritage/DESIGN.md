---
name: Golden Fiber Heritage
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#41493f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#71796f'
  outline-variant: '#c1c9bc'
  surface-tint: '#336a38'
  primary: '#002e0b'
  on-primary: '#ffffff'
  primary-container: '#0b4619'
  on-primary-container: '#7ab47b'
  inverse-primary: '#99d599'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#242627'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a3c3c'
  on-tertiary-container: '#a5a6a6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4f2b3'
  primary-fixed-dim: '#99d599'
  on-primary-fixed: '#002106'
  on-primary-fixed-variant: '#195123'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  technical-header:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.05em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

The design system marries the legacy of the jute industry with cutting-edge industrial performance. It targets B2B global partners, government entities, and sustainability-focused manufacturers. The personality is authoritative yet eco-conscious, blending the warmth of natural heritage with the precision of modern engineering.

The visual style is a sophisticated mix of **Glassmorphism** and **Corporate Modernism**. It uses translucent layers to represent transparency in the supply chain, high-resolution industrial photography to showcase scale, and structured technical grids to communicate reliability and data integrity. The emotional response is one of "Premium Sustainability"—where natural fibers are treated as high-performance technical assets.

## Colors

The palette is rooted in the natural lifecycle of Jute. 
- **Forest Green (#0b4619)**: Represents growth, environmental stewardship, and the raw jute plant. Used for primary actions and brand anchoring.
- **Golden Fiber (#d4af37)**: A metallic, earthy gold that signifies the finished premium product and heritage. Used for highlights, specialized metrics, and storytelling accents.
- **Industrial White (#fcfcfc)**: A stark, clinical neutral that provides the high-performance backdrop necessary for technical data and clean glassmorphism effects.
- **Onyx Neutral (#1a1a1a)**: Used for high-contrast typography and structural lines to maintain legibility against light backgrounds.

## Typography

This design system utilizes a dual-font strategy to balance emotion and precision:
- **Noto Serif** is reserved for narrative content, history, and major section headings. It evokes the "Heritage" aspect of the brand, appearing elegant and established.
- **Inter** is the workhorse for technical specifications, HS codes, shipping data, and UI controls. Its neutral, geometric construction ensures maximum legibility in complex tables and industrial dashboards.

Technical data should always use `data-mono` or `technical-header` roles to distinguish factual specs from marketing prose.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the structural integrity of a technical datasheet, while transitioning to a fluid model on mobile. 

- **Desktop**: 12-column grid with 24px gutters. Content is centered in a 1280px container.
- **Mobile**: Single column with 20px side margins.
- **Rhythm**: All spacing is based on a factor of 8px. Use generous vertical padding (80px+) between major sections to emphasize the premium "large-scale" industrial feel. 

Technical grids (spec sheets) should use a tighter 4px baseline to pack information efficiently without losing clarity.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and **Tonal Layering**. 

1.  **Base Layer**: Pure Industrial White (#fcfcfc).
2.  **Surface Layer**: Semi-transparent white (opacity 70%) with a 12px backdrop blur. This is used for cards and floating navigation bars, allowing the industrial photography beneath to bleed through subtly.
3.  **Technical Insets**: Subtle 1px borders in Forest Green (10% opacity) are used instead of shadows to define data zones, maintaining a flat, "blueprint" aesthetic.
4.  **Interactive Elevation**: Only primary buttons use a soft, diffused Forest Green shadow to indicate clickability.

## Shapes

The shape language is **Soft (0.25rem)**. 

While the industry is "hard" (machinery, steel, fiber), the UI uses subtle rounding to feel modern and accessible. Large-scale imagery should retain sharp corners or very minimal rounding (4px) to maintain the industrial "cut" look. Buttons and input fields use the standard `rounded` (4px) or `rounded-lg` (8px) tokens. Avoid pill-shaped elements as they conflict with the technical, grid-based narrative.

## Components

- **Buttons**: Primary buttons are solid Forest Green with white Inter Bold text. Secondary buttons use a "Golden Fiber" outline with a 1px stroke.
- **Technical Cards**: Use the Glassmorphism style—translucent background, 1px neutral border, and `technical-header` titles.
- **Data Tables**: High-density layouts using Inter. Zebra-striping should be incredibly subtle (2% Forest Green tint). Header rows should be Forest Green with white text.
- **Input Fields**: Sharp, 1px bordered boxes. Focus states should shift the border to Forest Green with a faint Golden glow (1px spread).
- **Status Chips**: Used for "In Stock" or "Certified Sustainable." These should be small, uppercase Inter labels with a light green or gold background tint.
- **Navigation**: A sticky top-bar with a heavy backdrop blur (20px) and a bottom border of 1px Forest Green at 5% opacity.