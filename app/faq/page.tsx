import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Mathee Dental Studio — appointments, insurance, procedures, and more.",
  openGraph: {
    title: "FAQ — Mathee Dental Studio",
    description:
      "Frequently asked questions about Mathee Dental Studio — appointments, insurance, procedures, and more.",
    url: "https://matheedental.com/faq",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions — Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Mathee Dental Studio",
    description:
      "Frequently asked questions about Mathee Dental Studio — appointments, insurance, procedures, and more.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/faq",
  },
};

const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "Most patients benefit from a cleaning and exam every six months. We'll recommend a schedule tailored to your oral health.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we work with most major insurance plans. Call our office or bring your card to your first visit and we'll help verify your coverage.",
  },
  {
    q: "What should I expect at my first appointment?",
    a: "A comprehensive exam, X-rays if needed, a professional cleaning, and a conversation about your goals and any concerns you have.",
  },
  {
    q: "Does the whitening treatment hurt?",
    a: "Most patients experience little to no discomfort. We use professional-grade formulas that are gentler on enamel and gums.",
  },
  {
    q: "What if I'm nervous about the dentist?",
    a: "You're not alone. We offer a calm, patient environment and will move at your pace. Let us know how we can make you more comfortable.",
  },
  {
    q: "How do I book an appointment?",
    a: "Use the Book Appointment page on this site, or call us directly. We offer early morning, evening, and Saturday appointments.",
  },
];

export default function FAQ() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-slate-600">
            Everything you need to know before your visit.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <dl className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-semibold text-slate-900">{faq.q}</dt>
              <dd className="mt-1 text-slate-600 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
