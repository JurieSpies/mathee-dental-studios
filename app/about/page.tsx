import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Mathee Dental Studio — our philosophy, our team, and our commitment to gentle, expert dental care.",
};

export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About Mathee Dental Studio</h1>
          <p className="mt-4 text-slate-600">
            A modern dental practice rooted in compassionate care and clinical excellence.
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
          <h2 className="text-xl font-semibold text-slate-900">Our Team</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our team combines decades of experience with a genuine love for what we do. Every
            member, from our lead dentist to our hygienists and front-desk staff, shares one
            mission: make you feel at home while delivering outstanding care.
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
