import Link from "next/link";

export const metadata = {
  title: "Mathee Dental Studio — Gentle & Expert Dental Care",
  description:
    "Welcome to Mathee Dental Studio. We provide gentle, expert dental care — from routine cleanings to cosmetic dentistry. Book your visit today.",
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Your Smile, Our Passion
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Mathee Dental Studio offers gentle, expert care in a comfortable
            environment. From routine cleanings to transformative smile makeovers.
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
          Why Choose Mathee Dental Studio?
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            { title: "Gentle Care", desc: "We prioritize your comfort with a gentle, patient-first approach." },
            { title: "Modern Technology", desc: "State-of-the-art equipment for accurate diagnostics and treatment." },
            { title: "Flexible Scheduling", desc: "Early morning, evening, and weekend appointments available." },
          ].map((item) => (
            <article key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
