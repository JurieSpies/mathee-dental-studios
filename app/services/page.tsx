import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Services in Somerset West",
  description:
    "Explore comprehensive dental services at Mathee Dental Studio in Somerset West and Firgrove — cleanings, exams, whitening, veneers, crowns, and more.",
  openGraph: {
    title: "Dental Services in Somerset West | Mathee Dental Studio",
    description:
      "Explore comprehensive dental services at Mathee Dental Studio in Somerset West and Firgrove — cleanings, exams, whitening, veneers, crowns, and more.",
    url: "https://matheedental.com/services",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Services at Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services in Somerset West",
    description:
      "Explore comprehensive dental services at Mathee Dental Studio in Somerset West and Firgrove — cleanings, exams, whitening, veneers, crowns, and more.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/services",
  },
};

const services = [
  {
    title: "Routine Cleanings & Exams",
    desc: "Regular check-ups and professional cleanings to keep your smile healthy and catch issues early.",
  },
  {
    title: "Teeth Whitening",
    desc: "Professional-grade whitening treatments that deliver noticeably brighter results — safely and comfortably.",
  },
  {
    title: "Veneers & Bonding",
    desc: "Transform chipped, stained, or misaligned teeth with custom-crafted veneers or composite bonding.",
  },
  {
    title: "Crowns & Bridges",
    desc: "Restore damaged or missing teeth with durable, natural-looking crowns and bridges.",
  },
  {
    title: "Root Canals",
    desc: "Gentle endodontic treatment to save infected teeth and relieve pain effectively.",
  },
  {
    title: "Cosmetic Consultations",
    desc: "A full smile assessment and custom treatment plan designed around your aesthetic goals.",
  },
];

export default function Services() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Dental Services in Somerset West</span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Dental Care, One Convenient Location</h1>
                    <p className="mt-4 text-slate-600">
                      Comprehensive care under one roof — from prevention to restoration and cosmetic enhancement.
                    </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book-appointment"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
