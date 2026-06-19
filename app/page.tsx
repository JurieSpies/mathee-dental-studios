import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  description:
    "Mathee Dental Studio is your trusted dentist in Somerset West and Firgrove, Helderberg. We provide gentle, expert dental care — from routine cleanings to cosmetic dentistry. Book your visit today.",
  openGraph: {
    title: "Dentist in Somerset West | Mathee Dental Studio",
    description:
      "Mathee Dental Studio is your trusted dentist in Somerset West and Firgrove, Helderberg. We provide gentle, expert dental care — from routine cleanings to cosmetic dentistry. Book your visit today.",
    url: "https://matheedental.com",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Mathee Dental Studio — Gentle & Expert Dental Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentist in Somerset West | Mathee Dental Studio",
    description:
      "Mathee Dental Studio is your trusted dentist in Somerset West and Firgrove, Helderberg. We provide gentle, expert dental care — from routine cleanings to cosmetic dentistry. Book your visit today.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Dental Studio in Somerset West</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                      Crafting beautiful smiles.
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
                      Mathee Dental Studio in Firgrove offers gentle, expert dental care — from
                      routine cleanings to transformative smile makeovers. We are proud to serve
                      patients across Somerset West, Strand, and the Helderberg area.
                    </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Book an Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Why Choose Mathee Dental Studio in Somerset West?
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            { title: "Gentle Care", desc: "We prioritize your comfort with a gentle, patient-first approach." },
            { title: "Modern Technology", desc: "State-of-the-art equipment for accurate diagnostics and treatment." },
            { title: "Flexible Scheduling", desc: "Early morning, evening, and weekend appointments available." },
            { title: "Convenient Location", desc: "Located in the Parc du Links office park in Firgrove, easily accessible from the N2." },
            { title: "Experienced Team", desc: "Decades of combined experience serving families in Somerset West and the Helderberg basin." },
            { title: "Comprehensive Care", desc: "From routine check-ups to cosmetic dentistry and dental implants — all under one roof." },
          ].map((item) => (
            <article key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Local trust section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Your Trusted Dentist in Firgrove, Somerset West
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl mx-auto">
            At Mathee Dental Studio, we have been caring for smiles in the Helderberg region for
            over a decade. Conveniently located at Parc du Links office park in Firgrove, we serve
            patients from Somerset West, Strand, Gordon&rsquo;s Bay, Stellenbosch, and beyond. Whether
            you need a routine cleaning, advanced cosmetic restoration, or a complete smile
            makeover, our experienced team is here to help. We combine modern technology with a
            warm, patient-first approach to make every visit comfortable and effective. Book your
            appointment today and experience the difference that dedicated, local dental care can
            make.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://maps.google.com/?cid=2023782324485113225"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Directions
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors"
            >
              Leave a Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
