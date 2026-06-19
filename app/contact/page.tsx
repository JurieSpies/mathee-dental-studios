import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mathee Dental Studio. Find our address, phone number, email, and hours of operation.",
  openGraph: {
    title: "Contact — Mathee Dental Studio",
    description:
      "Get in touch with Mathee Dental Studio. Find our address, phone number, email, and hours of operation.",
    url: "https://matheedental.com/contact",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Mathee Dental Studio",
    description:
      "Get in touch with Mathee Dental Studio. Find our address, phone number, email, and hours of operation.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/contact",
  },
};

export default function Contact() {
  return (
    <main>
      <section className="bg-linear-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-4 text-slate-600">
            We&rsquo;d love to hear from you. Reach out with questions or to schedule your visit.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Get in Touch</h2>
          <address className="mt-4 not-italic text-slate-600 space-y-3 leading-relaxed">
            <p>
              <strong className="text-slate-700">Address</strong><br />
              123 Smile Avenue, Suite 100<br />
              Anytown, ST 12345
            </p>
            <p>
              <strong className="text-slate-700">Phone</strong><br />
              <a href="tel:+15551234567" className="text-teal-600 hover:underline">(555) 123-4567</a>
            </p>
            <p>
              <strong className="text-slate-700">Email</strong><br />
              <a href="mailto:hello@matheedental.com" className="text-teal-600 hover:underline">hello@matheedental.com</a>
            </p>
          </address>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">Hours</h2>
          <dl className="mt-4 text-slate-600 space-y-2 leading-relaxed">
            <div className="flex justify-between max-w-xs"><dt>Mon – Thu</dt><dd>8:00 AM – 5:00 PM</dd></div>
            <div className="flex justify-between max-w-xs"><dt>Friday</dt><dd>8:00 AM – 3:00 PM</dd></div>
            <div className="flex justify-between max-w-xs"><dt>Saturday</dt><dd>9:00 AM – 1:00 PM</dd></div>
            <div className="flex justify-between max-w-xs"><dt>Sunday</dt><dd>Closed</dd></div>
          </dl>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Send a Message</h2>
          {/* ponytail: static form placeholder — no API route wired yet. Add app/api/contact/route.ts and wire action to get submissions */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Dentist",
                name: "Mathee Dental Studio",
                description:
                  "Mathee Dental Studio provides gentle, expert dental care including cleanings, exams, whitening, and cosmetic dentistry.",
                url: "https://matheedental.com",
                telephone: "(555) 123-4567",
                email: "hello@matheedental.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "123 Smile Avenue, Suite 100",
                  addressLocality: "Anytown",
                  addressRegion: "ST",
                  postalCode: "12345",
                  addressCountry: "US",
                },
                openingHoursSpecification: [
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:00", closes: "15:00" },
                  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
                ],
              }),
            }}
          />
          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
              <input id="name" type="text" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input id="email" type="email" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" rows={4} required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
            </div>
            <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
