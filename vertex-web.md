# Vertex Website Build Plan (Next.js + TypeScript)

Based on the design inspiration from Ghost AI and Allytic, here's a comprehensive build plan for Vertex's landing page with a neo-glassmorphism aesthetic.[1][2]

## Tech Stack

**Framework:** Next.js 14+ with App Router and TypeScript for optimal performance and SEO[3][4]
**Styling:** Tailwind CSS with custom glassmorphism utilities
**Animations:** Framer Motion for smooth, Apple-quality transitions
**Deployment:** Vercel for seamless Next.js hosting
**Assets:** High-quality MacBook mockups and custom SVG skill tree animations

## Phase 1: Project Setup & Foundation

### Step 1.1: Initialize Next.js Project
```bash
npx create-next-app@latest vertex-website --typescript --tailwind --app
cd vertex-website
npm install framer-motion clsx tailwind-merge
npm install -D @tailwindcss/typography
```

### Step 1.2: Configure Tailwind for Neo-Glassmorphism
Create custom utilities in `tailwind.config.ts`:
- Define color palette: Deep Space Black (#0A0A0A), Electric Indigo (#6366F1), Sunset Orange (#FB923C), Cyber Pink (#EC4899)[5]
- Add custom backdrop blur values: `blur-glass-sm`, `blur-glass-md`, `blur-glass-lg`
- Create shadow utilities for floating elements
- Set up SF Pro Display font family (fallback to Inter for web)

### Step 1.3: Project Structure
```
/app
  /components
    /sections
    /ui
  /lib
  layout.tsx
  page.tsx
  globals.css
/public
  /mockups
  /videos
```

## Phase 2: Design System Implementation

### Step 2.1: Create Glass Component Library

**GlassCard Component** (`/components/ui/GlassCard.tsx`):
```typescript
- Base styles: rgba background with 10% opacity
- backdrop-filter: blur(10px) for frosted glass effect
- Subtle border: 1px solid rgba(255,255,255,0.1)
- Shadow: 0 8px 32px rgba(0,0,0,0.37)
- Variants: default, hover, active
```


**NeonButton Component**:
- Primary: Glowing effect with Electric Indigo
- Ghost variant with border glow on hover
- Haptic-style spring animations using Framer Motion
- Download CTA and "Coming 2026" variants

**SkillTreeSVG Component**:
- Animated SVG neural network
- Nodes that glow on scroll/hover
- Three color states matching XP types
- Export as reusable React component

### Step 2.2: Typography System
- H1: SF Pro Display (bold, 72px desktop / 48px mobile)
- H2: SF Pro Display (semibold, 48px / 32px)
- Body: SF Pro Text (16px / 14px)
- Metrics: SF Mono for numbers (mono, 14px)[5]

## Phase 3: Hero Section (Ghost AI Style)

### Step 3.1: Above-the-Fold Hero
Following the minimal Ghost AI approach:[5]

**Layout:**
- Full viewport height with centered content
- Animated gradient background (deep black to dark purple)
- Floating glass card with primary message

**Content:**
```
Headline: "Stop Reminding. Start Negotiating."
Subheadline: "Vertex brings your future onto your desktop."
Primary CTA: "Download for macOS Sequoia"
Secondary: "Watch Demo (1:30)"
```

**Animations:**
- Fade-in from opacity 0 with stagger effect
- Subtle floating animation on glass elements
- Gradient shift animation (3s duration, infinite loop)

### Step 3.2: MacBook Mockup Hero
- Bent MacBook Pro mockup showing Vertex skill tree on wallpaper
- Glowing notch with animated chat interface
- Use `framer-motion` parallax scroll effect
- Image optimization with Next.js `<Image>` component

## Phase 4: Feature Sections (Allytic Style)

### Step 4.1: "The Three Layers" Section
Clean feature grid inspired by Allytic:[5]

**Layout:** Three columns on desktop, stack on mobile

**Cards:**
1. **The Aura Wallpaper**
   - Icon: Skill tree visualization
   - Copy: "Your Future Self lives on your desktop"
   - Hover: Glow effect in Electric Indigo

2. **The Notch Coach**
   - Icon: MacBook notch illustration
   - Copy: "AI that negotiates, not nags"
   - Hover: Glow in Cyber Pink

3. **The Intelligence Layer**
   - Icon: Brain/neural network
   - Copy: "Private, on-device Apple Intelligence"
   - Hover: Glow in Sunset Orange

**Implementation:**
- Grid with `gap-6` using Tailwind
- Each card: GlassCard component with hover scale transform
- Framer Motion `whileHover` for glow transitions

### Step 4.2: "How Vertex Works" Flow
Step-by-step process visualization:

1. **Speak Your Routine** → Voice input visual
2. **AI Parses & Plans** → Processing animation
3. **Negotiate Trade-offs** → Chat interface example
4. **Watch Your Tree Grow** → Skill tree progression

Use horizontal scroll on mobile, vertical timeline on desktop with connecting lines

### Step 4.3: "XP System" Showcase
Interactive demo section:

- Three tabs: Logic/LeetCode, Routine, Health/Sleep
- Click to switch between XP types
- Each shows different color theme and example tasks
- Animated XP bar filling with spring animation
- Glass card containing code editor mockup for LeetCode tab

## Phase 5: Social Proof & Trust

### Step 5.1: Philosophy Section (Ghost AI Tone)
Minimal text block with bold statement:[5]

```
"Life doesn't need another reminder app.
It needs a system that respects your agency."

— Built for the developer generation that games their life.
```

### Step 5.2: Feature Comparison Table (Optional)
Glass table comparing:
- Traditional habit apps (Reminders, nags, guilt)
- Vertex (Negotiation, trade-offs, empowerment)

## Phase 6: CTA & Footer

### Step 6.1: Download Section
Large glass card with:
- "Download Vertex.dmg" primary button
- System requirements: macOS Sequoia 15.0+
- "Coming New Year 2026" banner with countdown
- Early access email signup form

### Step 6.2: Footer
Minimal footer with:
- Privacy policy link
- Built by [Your Name]
- Social links (X, LinkedIn)
- "Powered by Apple Intelligence" badge

## Phase 7: Advanced Interactions

### Step 7.1: Scroll Animations
Using Framer Motion's `useScroll` and `useTransform`:

- Parallax background gradient shift
- Skill tree nodes light up as user scrolls
- Feature cards fade in with stagger
- MacBook mockup rotates slightly (3D tilt effect)

### Step 7.2: Cursor Effects (Desktop Only)
Custom cursor that:
- Glows when hovering over interactive elements
- Changes color based on XP type sections
- Leaves subtle trail effect

### Step 7.3: Haptic-Style Micro-interactions
- Button press: Scale down to 0.95
- Card hover: Scale up to 1.02 with glow
- Form input focus: Border glow animation
- All using `spring` animations (response: 0.35, dampingFraction: 0.8)[5]

## Phase 8: Performance Optimization

### Step 8.1: Next.js Optimizations
- Enable static site generation (SSG) for landing page
- Optimize images with Next.js Image component (WebP format)
- Lazy load below-fold sections
- Prefetch CTA links

### Step 8.2: Asset Optimization
- Compress MacBook mockup to < 500KB
- Use SVG for skill tree (smaller file size)
- Implement progressive image loading with blur placeholder
- Self-host fonts to avoid external requests

### Step 8.3: Performance Targets
- Lighthouse score: 95+ on all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total page size: < 2MB

## Phase 9: Responsive Design

### Mobile Breakpoints (Tailwind):
- `sm`: 640px - Single column layout
- `md`: 768px - Two column for features
- `lg`: 1024px - Full three column grid
- `xl`: 1280px - Max width container (1200px)

### Mobile-Specific Adjustments:
- Stack hero content vertically
- Reduce glass blur for performance (6px vs 10px)
- Simplify animations (reduce motion for accessibility)
- Larger touch targets (48px minimum)
- Bottom-sticky CTA button

## Phase 10: SEO & Meta

### Step 10.1: Metadata Setup
In `app/layout.tsx`:
```typescript
export const metadata = {
  title: 'Vertex - System-Native Habit Engine for macOS',
  description: 'Stop reminding. Start negotiating...',
  openGraph: { images: ['/og-image.jpg'] },
  twitter: { card: 'summary_large_image' }
}
```

### Step 10.2: Structured Data
Add JSON-LD schema for:
- SoftwareApplication
- Organization
- VideoObject (for demo video)

## Implementation Timeline

| Week | Deliverable |
|------|-------------|
| 1 | Setup + Design System + Hero |
| 2 | Feature Sections + How It Works |
| 3 | Animations + Interactions |
| 4 | Polish + Performance + Launch |

## Development Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Deploy to Vercel
vercel --prod
```

## Design Assets Needed

1. **MacBook Mockup**: High-res bent MacBook with Vertex UI
2. **Skill Tree SVG**: Neural network visualization (3 color variants)
3. **Demo Video**: 90s screen recording showing notch interaction
4. **App Icon**: 1024x1024 for download section
5. **OG Image**: 1200x630 for social sharing

This plan delivers a production-ready landing page that matches the aesthetic of Ghost AI's minimalism and Allytic's feature showcase, while maintaining the neo-glassmorphism design language essential to Vertex's brand identity.[1][2][5]

[1](https://tryghost.ai)
[2](https://neonpixeldesigns.com/blog/glassmorphism-css-effects/)
[3](https://www.browserstack.com/guide/react-javascript-frameworks)
[4](https://www.brilworks.com/blog/javascript-web-frameworks-comparison/)
[5](https://ghost.org/resources/dream-landing-page/)
[6](https://github.com/TryGhost/Ghost)
[7](https://www.reddit.com/r/Ghost/comments/m8imlp/can_i_create_landing_pages_in_ghost/)
[8](https://blog.epilocal.com/ghost-landing-page/)
[9](https://instapage.com/en/template/web-page-template-compatible-with-ghost)
[10](https://www.youtube.com/watch?v=J6rDXtRkVNQ)