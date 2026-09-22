# Bayview Gutter Cleaning San Leandro

A modern, high-performance Next.js website built for **Bayview Gutter Cleaning San Leandro**.

## Overview
- **Strict Content Fidelity**: 100% of headlines, copy, bullet points, meta titles, descriptions, and links sourced directly from the provided Google Sheets (`SEO Content Plan` & `Blog Content Plan`).
- **36 Prerendered Pages**:
  - Homepage (`/`)
  - 14 Dedicated Service Pages (`/gutter-cleaning`, `/downspout-cleaning`, etc.)
  - 9 Location Pages (`/areas-we-serve`, `/san-lorenzo`, `/castro-valley`, etc.)
  - Catalog Hub (`/services`)
  - Interactive FAQ (`/faq`)
  - Contact & Quote Request (`/contact`)
  - Blog Hub (`/blog`) and 10 Homeowner Guide Articles (`/blog/[slug]`)
- **Reference Mockup Visual Design**:
  - Dark navigation with service & location dropdowns and mobile drawer
  - Dark hero section with 50% opacity architectural background and dual action buttons
  - Staggered multi-rounded image collage alongside core benefits
  - Interactive dark-mode services accordion with typographic watermarks
  - 3-tier package comparison cards with elevated featured tier
  - Customer proof & satisfaction guarantee
  - Electric blue pre-footer CTA banner
  - Dark footer with company details, complete directory, and embedded Google Map
- **Click-to-Call Integration**: Direct phone calling throughout the website via `+1 (510) 756-3191`.
- **Image Optimization**: 45 high-resolution raw photos converted to modern WebP assets via `sharp`, reducing file sizes by ~98% for sub-second loading speeds.

## Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, SSG static generation)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Processing**: [Sharp](https://sharp.pixelplumbing.com/)

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

## Deploying to Vercel
1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project** and choose this GitHub repository.
3. Vercel will automatically detect Next.js with zero configuration needed.
4. Click **Deploy**.
