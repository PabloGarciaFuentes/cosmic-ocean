# Cosmic Ocean - Electronic Music Artist Web Application Prompt

## Project Overview
Create a stunning, immersive web application for **Cosmic Ocean**, an electronic music producer and DJ specializing in progressive house, dance, and house music. The website should capture the essence of electronic music culture—fluid, cosmic, atmospheric, and deeply rhythmic.

## Artist Profile
- **Artist Name**: Cosmic Ocean
- **Genre**: Progressive House, Dance, House Music
- **Vibe**: Deep, atmospheric, cosmic, flowing like ocean waves meets space exploration
- **Target Audience**: Electronic music enthusiasts, club-goers, festival attendees, streaming platform users

## Design Direction & Aesthetic

### Core Concept
The design should embody the fusion of "cosmic" (space, stars, nebulae, infinite) and "ocean" (waves, depth, fluidity, movement). Think deep space underwater or oceanic galaxies—a unique aesthetic that merges these two infinite realms.

### Visual Style
- **Theme**: Dark, immersive interface with deep blues, purples, teals, and cosmic blacks
- **Motion**: Fluid animations that feel like waves and particles—constant subtle movement
- **Typography**: Bold, futuristic display fonts for headers; clean, modern fonts for body text
- **Atmosphere**: Layered depth with gradients, subtle noise textures, glowing elements, and particle effects
- **Color Palette**: 
  - Deep space navy/black backgrounds
  - Bioluminescent blues and teals (ocean depths)
  - Cosmic purples and magentas (nebulae)
  - Electric accents (neon cyan, violet)
  - Avoid generic purple gradients—go for deep, saturated, otherworldly colors

### Key Visual Elements
- Animated wave/audio waveform patterns
- Subtle particle systems or floating elements
- Gradient meshes that evoke nebulae and deep water
- Glowing borders or elements (bioluminescent effect)
- Smooth scroll-triggered animations
- Interactive elements that respond with fluid motion

## Required Sections & Features

### 1. Hero Section
- Large, bold artist name "COSMIC OCEAN"
- Tagline or genre description
- Animated background (waves, particles, or cosmic elements)
- Call-to-action button (e.g., "Listen Now" or "Latest Release")
- Smooth entrance animation

### 2. Music/Releases Section
- Featured latest release or EP with album artwork
- Track listings with durations
- Embedded audio players (Spotify/SoundCloud iframe or custom player UI)
- Grid or carousel of past releases/singles
- Each release shows: artwork, title, release date, streaming links

### 3. Tour/Events Section
- Upcoming DJ sets and performances
- Event cards showing: date, venue, city, ticket link
- Past events archive or timeline
- Interactive hover states on event cards

### 4. About Section
- Artist biography (2-3 paragraphs)
- High-quality artist photo or atmospheric image
- Artist's musical journey and style description
- Production credits or notable achievements

### 5. Media/Press Section (Optional)
- Press photos for download
- Featured press articles or reviews
- Video content (music videos, live sets, behind-the-scenes)
- Embedded YouTube/Vimeo players

### 6. Contact/Connect Section
- Social media links (Instagram, Twitter/X, Facebook, TikTok)
- Streaming platform links (Spotify, Apple Music, SoundCloud, Beatport)
- Booking/management contact email
- Newsletter signup form
- Creative icon designs for social platforms

### 7. Footer
- Copyright information
- Additional links (Privacy Policy, Press Kit)
- Secondary navigation
- Subtle branding element

## Technical Requirements

### Framework
- **Astro** (recommended) - optimal for content-focused artist websites
  - Ships zero JavaScript by default for maximum performance
  - Use React components as islands for interactive sections
  - Perfect balance of static content delivery and dynamic interactivity
  - Superior SEO and page load speeds (critical for artist discoverability)
  - Ideal for this use case: mostly static content (bio, releases, events) with selective interactive elements
  
### Astro + React Islands Architecture
- **Static sections in Astro**: Hero, About, Footer, Tour dates
- **React islands for interactivity**: 
  - Audio player (`client:load`)
  - Animated scroll-triggered sections (`client:visible`)
  - Contact form (`client:visible`)
  - Interactive release cards with hover effects (`client:visible`)
  
### Why Astro over Next.js or React SPA
- **Astro**: Best for content-heavy sites with selective interactivity (✅ this project)
- **Next.js**: Better for server-side logic, auth, e-commerce, CMS integration
- **React SPA**: Better for app-like experiences with complex state management

### Design Approach
- Single-page experience with smooth scrolling
- Responsive design (mobile-first approach)
- Component-based architecture using Astro + React islands

### Styling
- **Tailwind CSS** for core utility classes
- Custom CSS for unique animations and effects
- CSS variables for consistent theming
- Smooth transitions and micro-interactions

### Interactivity
- Scroll-triggered animations (elements fade/slide in as user scrolls)
- Hover effects on interactive elements (buttons, cards, links)
- Smooth scrolling navigation
- Parallax effects (subtle, not overwhelming)
- Audio waveform visualization (if implementing custom player)

### Libraries & Dependencies
- **@astrojs/react** - Integration for React islands
- **@astrojs/tailwind** - Tailwind CSS integration for Astro
- **Framer Motion** or **Motion One** for advanced animations in React components
- **Lucide React** for icons
- **React Intersection Observer** for scroll triggers in interactive islands
- Audio visualization libraries if building custom player (e.g., WaveSurfer.js)
- **nanostores** (optional) - Lightweight state management across islands if needed

### Performance
- Optimized images (Astro's `<Image />` component with lazy loading)
- Smooth 60fps animations
- Minimal JavaScript - only hydrate interactive components
- Fast load times with Astro's zero-JS default approach
- Accessible (ARIA labels, keyboard navigation)
- Partial hydration strategy: `client:visible` for below-the-fold interactive elements
- Static generation for maximum speed (SSG)

## Getting Started (For Implementation)

### Quick Setup
```bash
# Create new Astro project
npm create astro@latest cosmic-ocean

# Install dependencies
npm install

# Add React integration
npx astro add react

# Add Tailwind integration
npx astro add tailwind

# Install additional packages
npm install framer-motion lucide-react
```

### Development
```bash
npm run dev
# Opens on http://localhost:4321
```

### Build & Deploy
```bash
npm run build
# Deploys to Vercel, Netlify, or Cloudflare Pages
```

---

## Content Guidelines

### Sample Content to Include

**Bio Example**:
"Cosmic Ocean is an electronic music producer and DJ crafting immersive sonic journeys through progressive house, dance, and house music. Drawing inspiration from the infinite expanse of space and the mysterious depths of the ocean, each production is a voyage into atmospheric soundscapes and hypnotic rhythms. With releases spanning deep progressive to peak-time dance floor energy, Cosmic Ocean continues to push the boundaries of electronic music."

**Sample Releases**:
- "Deep Space Dive" (EP - 2024)
- "Tidal Waves" (Single - 2024)
- "Nebula Dreams" (Album - 2023)
- "Ocean Floor" (Single - 2023)

**Sample Events**:
- March 15, 2026 - Warehouse Project, Manchester
- March 22, 2026 - Fabric, London
- April 5, 2026 - Berghain, Berlin

**Social Links**:
- Spotify, SoundCloud, Apple Music, Beatport
- Instagram, Twitter, Facebook, TikTok
- YouTube (for music videos and DJ sets)

## Creative Direction Notes

### Do's:
✅ Create depth with layered backgrounds and subtle animations
✅ Use bold, unexpected typography combinations
✅ Implement smooth, fluid transitions that feel organic
✅ Make interactive elements feel responsive and alive
✅ Add atmospheric effects (grain, glow, gradients)
✅ Design with intention—every element should serve the cosmic ocean theme
✅ Use dark mode as primary (light mode optional)

### Don'ts:
❌ Avoid generic "AI slop" aesthetics (overused fonts, predictable layouts)
❌ Don't use boring system fonts (Arial, Helvetica, Roboto)
❌ Avoid flat, lifeless designs—add dimension and motion
❌ Don't create cluttered layouts—balance density with breathing room
❌ Avoid harsh, jarring animations—keep motion smooth and purposeful
❌ Don't use cliché stock photos—stay abstract and atmospheric

## Deliverable

A complete, production-ready **Astro application** with React islands that:
1. Uses Astro for the main structure and static content delivery
2. Implements React components as islands for interactive features (audio player, animations, forms)
3. Includes all sections mentioned above with placeholder content
4. Features distinctive, memorable design that avoids generic AI aesthetics
5. Implements smooth animations and interactive elements where needed
6. Is responsive and works on mobile, tablet, and desktop
7. Has optimal performance with minimal JavaScript bundle
8. Can be deployed immediately to Vercel, Netlify, or Cloudflare Pages

### File Structure Example
```
/src
  /pages
    index.astro          # Main page with all sections
  /components
    Hero.astro           # Static hero section
    About.astro          # Static about section
    MusicPlayer.jsx      # React island for audio
    ReleaseCard.jsx      # React island for releases
    TourEvents.jsx       # React island for events
    ContactForm.jsx      # React island for contact
    Footer.astro         # Static footer
  /layouts
    Layout.astro         # Base layout with head, styles
```

## Design Inspiration Keywords
- Cosmic ocean depths
- Bioluminescent underwater scenes
- Deep space nebulae
- Audio waveforms and frequency visualizations
- Club/festival atmosphere
- Ethereal, atmospheric, hypnotic
- Fluid motion and particle systems
- Neon-lit underwater caves
- Interstellar voyage meets deep-sea exploration

## Success Criteria
The final web application should:
- Make visitors feel immersed in the Cosmic Ocean universe
- Clearly communicate who the artist is and what music they create
- Provide easy access to music, events, and social platforms
- Be visually stunning and memorable
- Function flawlessly with smooth performance
- Stand out from typical artist websites with its unique aesthetic

---

**Ready to build?** Create a web application that captures the infinite, fluid, cosmic essence of Cosmic Ocean's electronic music journey.
