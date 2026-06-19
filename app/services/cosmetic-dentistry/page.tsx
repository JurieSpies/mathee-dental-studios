import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry in Somerset West",
  description:
    "Cosmetic dentistry in Somerset West and Firgrove — veneers, bonding, smile makeovers at Mathee Dental Studio. Book a consultation today.",
  openGraph: {
    title: "Cosmetic Dentistry in Somerset West | Mathee Dental Studio",
    description:
      "Cosmetic dentistry in Somerset West and Firgrove — veneers, bonding, smile makeovers at Mathee Dental Studio. Book a consultation today.",
    url: "https://matheedental.com/services/cosmetic-dentistry",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Cosmetic Dentistry at Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic Dentistry in Somerset West | Mathee Dental Studio",
    description:
      "Cosmetic dentistry in Somerset West and Firgrove — veneers, bonding, smile makeovers at Mathee Dental Studio.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/services/cosmetic-dentistry",
  },
};

export default function CosmeticDentistry() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Cosmetic Dentistry in Somerset West</span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                      Transform Your Smile with Expert Cosmetic Care
                    </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Transform your smile with expert cosmetic treatments at Mathee Dental Studio, your trusted practice in the Helderberg area.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Cosmetic Dentist in Somerset West — Enhance Your Smile
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Your smile is one of the first things people notice about you. At Mathee Dental Studio in Firgrove, Somerset West, we believe everyone deserves a smile they are proud to show. Our cosmetic dentistry services are designed to address a wide range of aesthetic concerns, from discoloured and chipped teeth to gaps, misalignment, and worn-down enamel. Whether you are preparing for a special occasion or simply want to feel more confident every day, our cosmetic treatments can help you achieve the natural, radiant smile you have been wanting.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            As a leading cosmetic dentist in Somerset West and the Helderberg region, we combine clinical expertise with an artistic eye. Every treatment plan is customised to your facial structure, skin tone, and personal goals. We take the time to understand what you want to achieve and walk you through each option so you can make an informed decision. Our practice is conveniently located in the Parc du Links office park, making it easy for patients from Firgrove, Somerset West, Stellenbosch, and the surrounding areas to access high-quality cosmetic dental care.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Porcelain Veneers — A Natural, Lasting Transformation
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Porcelain veneers are ultra-thin shells custom-crafted to fit over the front surface of your teeth. They are an excellent solution for correcting chipped, stained, crooked, or unevenly spaced teeth. At our Somerset West dental practice, we use high-quality dental porcelain that mimics the light-reflecting properties of natural enamel, giving you a result that looks authentic and beautiful. The process typically involves two visits: one for consultation and preparation, and a second for bonding your custom veneers in place. With proper care, porcelain veneers can last a decade or more, making them a durable and worthwhile investment in your smile.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Composite Bonding — Quick, Affordable Smile Improvements
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            If you are looking for a more conservative cosmetic option, composite bonding may be the right choice. Bonding uses a tooth-coloured resin material that is shaped and polished directly onto your tooth to repair chips, close small gaps, or improve the shape of a tooth. The procedure is usually completed in a single appointment and does not require any permanent alteration of your natural tooth structure. Our team in Firgrove has extensive experience with composite bonding and can achieve results that blend seamlessly with your surrounding teeth. It is an ideal option for patients in Somerset West who want a noticeable improvement without the commitment of veneers.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Full Smile Makeovers — Comprehensive Cosmetic Care
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            For patients with multiple aesthetic concerns, a full smile makeover combines several cosmetic procedures into a coordinated treatment plan. This may include a combination of teeth whitening, veneers, bonding, and occasionally orthodontic or restorative work to achieve a complete transformation. During your consultation at our Somerset West practice, we will assess your oral health, discuss your goals, and design a step-by-step plan that fits your timeline and budget. A smile makeover is a collaborative process, and we are committed to making sure you feel informed and comfortable at every stage.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            At Mathee Dental Studio, we pride ourselves on delivering cosmetic dentistry that looks natural and enhances your overall facial aesthetics. Whether you are in Firgrove, Somerset West, or anywhere in the Helderberg area, we invite you to book a consultation and discover how cosmetic dentistry can improve not just your smile, but your confidence too.
          </p>
        </article>

        <div className="text-center pt-4">
          <Link
            href="/book-appointment"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Book Your Cosmetic Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
