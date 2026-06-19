import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Your Somerset West Dentist",
  description:
    "Learn about Mathee Dental Studio in Firgrove, Somerset West — our philosophy, our team, and our commitment to gentle, expert dental care in the Helderberg area.",
  openGraph: {
    title: "About Your Somerset West Dentist | Mathee Dental Studio",
    description:
      "Learn about Mathee Dental Studio in Firgrove, Somerset West — our philosophy, our team, and our commitment to gentle, expert dental care in the Helderberg area.",
    url: "https://matheedental.com/about",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "About Mathee Dental Studio — Your Dentist in Somerset West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Your Somerset West Dentist | Mathee Dental Studio",
    description:
      "Learn about Mathee Dental Studio in Firgrove, Somerset West — our philosophy, our team, and our commitment to gentle, expert dental care in the Helderberg area.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/about",
  },
};

export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Dentist in Somerset West</span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">About Mathee Dental Studio</h1>
                    <p className="mt-4 text-slate-600">
                      A modern dental practice in Firgrove, rooted in compassionate care and clinical
                      excellence, proudly serving Somerset West and the Helderberg area.
                    </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <article>
          <h2 className="text-xl font-semibold text-slate-900">Our Philosophy</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            At Mathee Dental Studio, we believe a visit to the dentist should be something you
            look forward to — not something you dread. We take the time to listen, explain every
            option, and tailor treatment to your unique needs and goals.
          </p>
        </article>

        <article className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Your Somerset West &amp; Helderberg Dental Team</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our team combines decades of experience with a genuine love for what we do. Every
            member, from our lead dentist to our hygienists and front-desk staff, shares one
            mission: make you feel at home while delivering outstanding care. Conveniently located
            in the Parc du Links office park in Firgrove, we welcome patients from Somerset West,
            Strand, Gordon&rsquo;s Bay, Stellenbosch, and across the Helderberg region.
          </p>
        </article>

        <article className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Our Commitment to You</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We believe that excellent dental care goes beyond healthy teeth — it is about building
            lasting relationships with our patients. From your first phone call to your follow-up
            visit, we strive to make every interaction warm, transparent, and stress-free. We take
            the time to explain treatment options, answer your questions, and involve you in every
            decision. Whether you are visiting us for a routine exam in Somerset West or travelling
            from Strand for a cosmetic consultation, you can expect the same high standard of care
            and genuine attention.
          </p>
        </article>

        <div className="mt-10 text-center">
          <Link
            href="/book-appointment"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Meet Us in Person
          </Link>
        </div>
      </section>
    </main>
  );
}
