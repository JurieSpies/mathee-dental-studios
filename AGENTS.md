# Agent Instructions: Mathee Dental Studio Rebuild

## 🎯 Project Overview
This repository contains a high-performance, local-SEO-focused reconstruction of the Mathee Dental Studio website. The original site was built on WordPress. The goal is a highly responsive front end with zero server infrastructure overhead.

## 🛠️ Core Tech Stack
- **Framework:** Next.js (React App Router)
- **Styling:** Tailwind CSS (Utility-first, zero-runtime overhead)
- **State/Interactive Elements:** React Server Components (RSC) by default; `'use client'` strictly for interactive UI fragments.
- **Form Engine:** Serverless Route Handlers + Resend API (Zero-backend setup)
- **Deployment:** Vercel or Netlify Edge Network

## 🛑 Strict Engineering Rules for AI Agents

### 1. SEO & Architecture (No standard CSR)
- Do NOT use standard `create-react-app` or Client-Side Rendered (CSR) Vite architectures.
- All primary routing pages must use Next.js Static Site Generation (SSG). 
- Every major structural page (`app/page.tsx`, `app/services/page.tsx`) must export a native Next.js `metadata` object containing canonical URLs and semantic descriptive fields.
- Use semantic HTML tags exclusively (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`). Do not wrap layouts in generic `<div>` blocks.

### 2. Media Optimization
- Never use the standard HTML `<img>` tag. You must use `next/image`.
- High-resolution dental gallery items must use explicit `width`, `height`, and layout tracking dimensions to achieve a zero Cumulative Layout Shift (CLS) score.
- Above-the-fold media elements (like hero banners or initial studio slider visuals) must have the `priority` attribute explicitly declared.

### 3. Tailwind Styling Policy
- Do not write vanilla `.css` style sheets, CSS Modules, or install CSS-in-JS libraries (e.g., styled-components, Material UI).
- Handle all layout constraints inside inline Tailwind utility classes.
- Design responsive styling patterns via mobile-first breakpoints (`sm:`, `md:`, `lg:`).

### 4. Zero-Backend Form Security
- The main contact form must protect the user's data and client API tokens.
- Do NOT make direct API fetch calls to external email services from interactive browser components.
- Route form submissions to a secure Next.js Route Handler inside `app/api/contact/route.ts`.
- Store the email service provider API keys strictly in server-side system environment variables (`process.env.RESEND_API_KEY`). Never expose these to the browser client.

## 📁 Expected Directory Structure
Ensure any new features follow this exact Next.js App Router tree mapping:
```text
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Secure Email Router Handler
│   ├── services/
│   │   └── page.tsx           # Dental Services Directory
│   ├── layout.tsx             # Global Base Layout + Meta Rules
│   └── page.tsx               # Studio Home View
├── components/
│   ├── Form.tsx               # Interactive booking/contact UI ('use client')
│   ├── ImageSlider.tsx        # Optimized Slideshow
│   └── VideoBackground.tsx    # Lightweight Video Component
└── public/                    # Raw local compressed assets
```
