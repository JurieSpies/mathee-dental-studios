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
- **Local Keyword Injection:** Primary landing pages (Home, Services, Contact) must feature `<h1>` and `<h2>` tags combining service terms with target geographic keywords (e.g., *"Dentist in Somerset West"*, *"Dental Implants Helderberg"*, *"Mathee Dental Studio Firgrove"*).
- Every page must export a typed `Metadata` object with these fields (Home page title must follow a local SEO pattern like `Dentist in Somerset West | Mathee Dental Studio`):
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
- Ensure the schema mappings always include `geo` coordinates for Somerset West/Firgrove, `openingHours`, and `sameAs` links pointing to their official Google Business Profile.

### 3. Media & Performance Optimization (Core Web Vitals)
- Never use the standard HTML `<img>` tag. You must use `next/image`.
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
│   │   ├── cosmetic-dentistry/# Dedicated landing page (min 500 words)
│   │   │   └── page.tsx
│   │   ├── dental-implants/   # Dedicated landing page (min 500 words)
│   │   │   └── page.tsx
│   │   └── teeth-whitening/   # Dedicated landing page (min 500 words)
│   │       └── page.tsx
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
