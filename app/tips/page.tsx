import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Tips from Your Somerset West Dentist",
  description:
    "Practical dental care tips from Mathee Dental Studio in Firgrove, Somerset West — brushing, flossing, diet, and habits for a healthy smile.",
  openGraph: {
    title: "Dental Tips from Your Somerset West Dentist | Mathee Dental Studio",
    description:
      "Practical dental care tips from Mathee Dental Studio in Firgrove, Somerset West — brushing, flossing, diet, and habits for a healthy smile.",
    url: "https://matheedental.com/tips",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Tips — Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Tips from Your Somerset West Dentist | Mathee Dental Studio",
    description:
      "Practical dental care tips from Mathee Dental Studio in Firgrove, Somerset West — brushing, flossing, diet, and habits for a healthy smile.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/tips",
  },
};

const tips = [
  {
    title: "Brush Twice, Floss Once",
    desc: "Brush for two minutes each morning and night, and floss daily to remove plaque between teeth where your brush can't reach.",
  },
  {
    title: "Replace Your Toothbrush Regularly",
    desc: "Swap your toothbrush (or brush head) every three to four months — sooner if bristles are frayed.",
  },
  {
    title: "Limit Sugary Snacks & Drinks",
    desc: "Sugar feeds cavity-causing bacteria. When you do indulge, rinse with water afterward and wait 30 minutes before brushing.",
  },
  {
    title: "Don't Skip Your Check-Ups",
    desc: "A professional cleaning and exam every six months catches problems early and keeps your smile in top shape.",
  },
  {
    title: "Drink More Water",
    desc: "Water helps wash away food particles, keeps gums hydrated, and strengthens enamel if it contains fluoride.",
  },
  {
    title: "Protect Your Teeth During Sports",
    desc: "A custom-fitted mouthguard can prevent chipped or knocked-out teeth during contact sports and high-impact activities.",
  },
];

export default function Tips() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Oral Health Tips from Your Somerset West Dentist</span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Dental Tips</h1>
                    <p className="mt-4 text-slate-600">
                      Simple habits that make a big difference in your oral health, from the team at
                      Mathee Dental Studio in Firgrove.
                    </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {tips.map((tip) => (
            <article key={tip.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-lg font-semibold text-slate-900">{tip.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
