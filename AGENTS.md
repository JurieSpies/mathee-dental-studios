# Agent Instructions: Mathee Dental Studio Rebuild

## 🎯 Project Overview
This repository contains a high-performance, local-SEO-focused reconstruction of the Mathee Dental Studio website. The original site was built on WordPress. The goal is a highly responsive front end with zero server infrastructure overhead, engineered to rank at the top of Google search results for local dental queries.

## 🛠️ Core Tech Stack
- **Framework:** Next.js (React App Router)
- **Styling:** Tailwind CSS (Utility-first, zero-runtime overhead)
- **Fonts:** `next/font` (Hosted locally automatically to maximize Core Web Vitals and prevent render-blocking text)
- **State/Interactive Elements:** React Server Components (RSC) by default; `'use client'` strictly for interactive UI fragments.
- **Form Engine:** Serverless Route Handlers + Resend API (Zero-backend setup)
- **Deployment:** Vercel or Netlify Edge Network

## 🛑 Strict Engineering Rules for AI Agents

### 1. Local SEO & Content Routing Architecture (No standard CSR)
- Do NOT use standard `create-react-app` or Client-Side Rendered (CSR) Vite architectures.
- All primary routing pages must use Next.js Static Site Generation (SSG).
- **Design-Friendly Local Keyword Injection:** Do NOT ruin the UI layout by forced, clunky keyword stuffing in primary high-visibility elements. Instead, balance premium design aesthetics with SEO using the following techniques:
  - **Eyebrow Headings:** Keep main `<h1>` elements elegant and brand-focused. Place a small, clean "eyebrow" text element right above the `<h1>` inside the same header block containing the geographical target (e.g., `<span class="text-xs uppercase tracking-wider">Dental Studio in Somerset West</span> <h1>Crafting beautiful smiles.</h1>`). For service pages: `<span class="text-xs uppercase tracking-wider text-gray-500">Cosmetic Dentistry in Somerset West</span>`.
  - **Footer Geo-Targeting:** Consolidate dense local targeting ("Serving patients in Somerset West, Strand, Gordon's Bay, and the Helderberg basin") inside semantic `<footer>` sections to preserve clean above-the-fold canvas layouts.
  - **Granular Content Structuring:** While the homepage focuses on high-level brand presentation, ensure localized terms (*"Dentist in Somerset West"*, *"Dental Implants Helderberg"*) are seamlessly woven into natural context paragraphs, `<h2>` / `<h3>` headings lower on the page, and within dedicated subpages.
- **Title & Meta Strategy**:
  - Homepage: `Dentist in Somerset West | Mathee Dental Studio`
  - Service pages: `[Service] Somerset West | Mathee Dental Studio` (e.g. "Dental Implants Somerset West")
  - Use natural variations and secondary terms (Helderberg, Strand, Gordon's Bay, Firgrove) without stuffing.
- **Content Guidelines**: All pages (especially service landing pages) must contain minimum 500–800 words of high-quality, patient-focused content answering common queries. Use related semantic terms naturally.
- Every page must export a typed `Metadata` object with these fields:
  - `title`, `description`
  - `openGraph` — title, description, url, images[] (1200×630)
  - `twitter` — card: "summary_large_image", title, description, images[]
  - `alternates.canonical` — absolute URL matching the page
- Root `layout.tsx` must export:
  - `viewport` (width, initialScale, themeColor)
  - `metadata` including `metadataBase`, `robots`, `keywords[]`, `openGraph` (siteName, locale, type), `twitter` (card), `alternates.canonical`, `icons`
- Use semantic HTML tags exclusively (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`). Do not wrap layouts in generic `<div>` blocks.
- `app/robots.ts` and `app/sitemap.ts` must always exist — automatically add new service subpages to `sitemap.ts` when creating them.

### 2. Schema.org & Local Business Data Rules
- Every page displaying local business info must output a highly specific JSON-LD structured data script (`<script type="application/ld+json">`).
- Use the precise Schema.org **`MedicalBusiness` -> `Dentist`** type.
- Hardcode the following verified practice information directly into the schema objects:
  - **Legal Name:** Mathee Dental Studio
  - **Address:** Unit G04, Parc du Links 7, 9 Niblick Way, Firgrove Rural, Cape Town, 7130
  - **Location Hint:** Parc du Links office park
  - **Telephone:** +27218510461 (Format: `021 851 0461`)
  - **Price Range:** `$$`
  - **Opening Hours:** `Mo-Fr 08:00-17:00`, `Sa-Su Closed`
- Ensure the schema mappings always include `geo` coordinates for Somerset West/Firgrove, `openingHours`, and `sameAs` links pointing to their official Google Business Profile. Only include `AggregateRating` if utilizing a dynamic, compliant first-party review generation engine.

### 3. Media & Performance Optimization (Core Web Vitals)
- Never use the standard HTML `<img>` tag. You must use `next/image`.
- **SEO Descriptive Alt Text:** Every `next/image` component must feature explicit, highly contextual `alt` tags embedded with primary and secondary keywords where natural (e.g., `alt="Modern cosmetic dentistry treatment room at Mathee Dental Studio, Somerset West"`). Never leave alt descriptions blank or generic like `alt="image"`.
- High-resolution dental gallery items must use explicit `width`, `height`, and layout tracking dimensions to achieve a zero Cumulative Layout Shift (CLS) score.
- Above-the-fold media elements (like hero banners or initial studio slider visuals) must have the `priority` attribute explicitly declared.
- **Interaction to Next Paint (INP):** Ensure interactive client-side components (e.g., FAQ accordions, mobile menu toggles) respond instantly. Avoid third-party layout-blocking scripts.

### 4. Tailwind Styling Policy
- Do not write vanilla `.css` style sheets, CSS Modules, or install CSS-in-JS libraries (e.g., styled-components, Material UI).
- Handle all layout constraints inside inline Tailwind utility classes.
- Design responsive styling patterns via mobile-first breakpoints (`sm:`, `md:`, `lg:`).

### 5. Zero-Backend Form Security
- The main contact form must protect the user's data and client API tokens.
- Do NOT make direct API fetch calls to external email services from interactive browser components.
- Route form submissions to a secure Next.js Route Handler inside `app/api/contact/route.ts`.
- Store the email service provider API keys strictly in server-side system environment variables (`process.env.RESEND_API_KEY`). Never expose these to the browser client.

### 6. Google Business Profile (GBP) & Off-Page Local SEO
- The website must reinforce and link to a fully optimized Google Business Profile (primary ranking driver for "dentist Somerset West" and related queries).
- Include prominent, natural calls-to-action for reviews, directions, and booking on the homepage, contact, and footer.
- Maintain perfect NAP (Name, Address, Phone) consistency across site, schema, and GBP.
- If displaying testimonials, use verifiable patient copy and prioritize structured schema markup adjustments to safely emphasize local user social proof.
- Prioritize earning local backlinks through community involvement, sponsorships, or partnerships in the Helderberg basin.

### 7. Technical SEO & Performance Rules
- Submit sitemap to Google Search Console immediately after deployment.
- Ensure full mobile responsiveness and Core Web Vitals compliance (LCP < 2.5s, CLS < 0.1, INP < 200ms).
- Use `next/image` with `sizes` attribute for responsive images and modern formats (WebP/AVIF).
- Monitor with Google Search Console, PageSpeed Insights, and Lighthouse regularly.
- Implement proper hreflang if expanding to Afrikaans/English variants in future.

## 📁 Expected Directory Structure
Ensure any new features or specialized treatment pages follow this exact Next.js App Router tree mapping:
```text
├── app/
│   ├── about/
│   │   └── page.tsx           # About Us & Team Profiles
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Secure Email Router Handler
│   ├── book-appointment/
│   │   └── page.tsx           # Booking form page
│   ├── contact/
│   │   └── page.tsx           # Contact details + JSON-LD LocalBusiness
│   ├── faq/
│   │   └── page.tsx           # FAQ schema page
│   ├── services/
│   │   ├── page.tsx           # Dental Services Directory
│   │   ├── cosmetic-dentistry/
│   │   │   └── page.tsx       # Dedicated landing page (min 500 words)
│   │   ├── dental-implants/
│   │   │   └── page.tsx       # Dedicated landing page (min 500 words)
│   │   └── teeth-whitening/
│   │       └── page.tsx       # Dedicated landing page (min 500 words)
│   ├── tips/
│   │   └── page.tsx           # Dental tips / blog content
│   ├── layout.tsx             # Global Base Layout + Meta Rules + Local Font
│   ├── page.tsx               # Studio Home View (Target: Dentist Somerset West)
│   ├── robots.ts              # Crawler directives
│   └── sitemap.ts             # Search engine sitemap
├── components/
│   ├── Form.tsx               # Interactive booking/contact UI ('use client')
│   └── Nav.tsx                # Responsive navigation ('use client')
└── public/                    # Raw local compressed assets
