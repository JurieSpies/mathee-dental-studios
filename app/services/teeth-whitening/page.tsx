import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teeth Whitening in Somerset West",
  description:
    "Professional teeth whitening in Somerset West and Firgrove — brighter smiles with safe, dentist-supervised treatments at Mathee Dental Studio.",
  openGraph: {
    title: "Teeth Whitening in Somerset West | Mathee Dental Studio",
    description:
      "Professional teeth whitening in Somerset West and Firgrove — brighter smiles with safe, dentist-supervised treatments at Mathee Dental Studio.",
    url: "https://matheedental.com/services/teeth-whitening",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Teeth Whitening at Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teeth Whitening in Somerset West | Mathee Dental Studio",
    description:
      "Professional teeth whitening in Somerset West and Firgrove — brighter smiles with safe treatments at Mathee Dental Studio.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/services/teeth-whitening",
  },
};

export default function TeethWhitening() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Teeth Whitening in Somerset West</span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                      Brighten Your Smile Safely
                    </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Brighten your smile with professional teeth whitening at Mathee Dental Studio, your trusted practice in the Helderberg area.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Professional Teeth Whitening in Somerset West — Safe, Effective, Noticeable Results
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Over time, your teeth can become stained or discoloured due to coffee, tea, red wine, tobacco use, certain medications, or simply the natural ageing process. While over-the-counter whitening products are widely available, they often deliver inconsistent results and can sometimes cause sensitivity or gum irritation. At Mathee Dental Studio in Firgrove, Somerset West, we offer professional-grade teeth whitening treatments that are supervised by a qualified dentist, ensuring both safety and effectiveness. Our whitening systems use high-quality bleaching agents that are formulated to minimise sensitivity while delivering noticeably brighter results.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Professional whitening is one of the most popular cosmetic dental treatments we provide at our Somerset West practice. It is a non-invasive procedure that can dramatically improve the appearance of your smile in a relatively short time. Whether you are preparing for a wedding, job interview, or simply want to refresh your look, our teeth whitening services offer a convenient and affordable way to boost your confidence.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            In-Office Whitening — Fast, Dramatic Results
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            For patients who want the fastest possible results, our in-office whitening treatment is an excellent choice. During a single appointment at our Firgrove practice, we apply a professional-strength whitening gel to your teeth and activate it with a specialised light or laser. The entire session typically takes about 60 to 90 minutes and can lighten your teeth by several shades in one visit. Your gums are carefully protected throughout the procedure to prevent irritation, and we monitor your comfort closely. Many patients in Somerset West choose in-office whitening for its convenience and immediate, dramatic improvement.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Before beginning any whitening treatment, we perform a thorough examination to ensure your teeth and gums are healthy enough for the procedure. We also discuss your expectations and take baseline shade records so we can track your results. If you have existing restorations such as crowns or veneers, we will advise you on how whitening may affect them so you can make an informed decision.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Take-Home Whitening Kits — Flexible and Convenient
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            If you prefer to whiten your teeth in the comfort of your own home, we also offer custom-fitted take-home whitening kits. These kits include custom-made trays that are fabricated from impressions of your teeth, ensuring the whitening gel is applied evenly and precisely. You wear the trays for a specified period each day over one to two weeks, gradually achieving a brighter smile at your own pace. Our team provides detailed instructions and is available to answer any questions throughout the process.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Take-home whitening is a popular option for patients in Somerset West and the Helderberg area who have busy schedules but still want professional-quality results. Because the trays are custom-made, the gel stays in contact with your teeth and is less likely to irritate your gums compared to one-size-fits-all strips or trays from a pharmacy. We also offer desensitising gel to manage any temporary sensitivity that may occur during the whitening period.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Is Teeth Whitening Right for You?
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Most adults with healthy teeth and gums are good candidates for professional whitening. However, whitening may not be effective for all types of discolouration. Intrinsic stains caused by trauma, certain medications, or developmental conditions may require alternative cosmetic treatments such as veneers or bonding. During your consultation at Mathee Dental Studio in Firgrove, we will evaluate the cause of your discolouration and recommend the most appropriate treatment. Our goal is always to help you achieve a smile that looks naturally bright and healthy.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            If you are searching for teeth whitening in Somerset West or the broader Helderberg area, we invite you to book a consultation at Mathee Dental Studio. We will guide you through your options and help you decide on the whitening approach that best suits your lifestyle and goals.
          </p>
        </article>

        <div className="text-center pt-4">
          <Link
            href="/book-appointment"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Book Your Whitening Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
