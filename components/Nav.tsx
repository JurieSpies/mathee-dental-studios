'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Dental Services' },
  { href: '/tips', label: 'Dental Tips' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/book-appointment', label: 'Book Appointment', cta: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-teal-600 tracking-tight">
          Mathee Dental
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.cta ? (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-slate-700 hover:text-teal-600 text-sm font-medium transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <ul className="flex flex-col px-4 py-4 gap-3">
            {links.map((l) =>
              l.cta ? (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block text-center bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block text-slate-700 py-1 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
