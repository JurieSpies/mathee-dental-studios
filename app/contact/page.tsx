import type { Metadata } from 'next';
import BookingForm from '@/components/Form';

export const metadata: Metadata = {
  title: 'Contact Your Dentist in Somerset West',
  description:
    'Contact Mathee Dental Studio in Firgrove, Somerset West. Call 021 851 0461 or visit our practice at Parc du Links office park for expert dental care in the Helderberg area.',
  openGraph: {
    title: 'Contact Your Dentist in Somerset West | Mathee Dental Studio',
    description:
      'Contact Mathee Dental Studio in Firgrove, Somerset West. Call 021 851 0461 or visit our practice at Parc du Links office park for expert dental care in the Helderberg area.',
    url: 'https://matheedental.com/contact',
    images: [
      {
        url: 'https://matheedental.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Mathee Dental Studio — Your Dentist in Somerset West',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Your Dentist in Somerset West | Mathee Dental Studio',
    description:
      'Contact Mathee Dental Studio in Firgrove, Somerset West. Call 021 851 0461 or visit our practice at Parc du Links office park for expert dental care in the Helderberg area.',
    images: ['https://matheedental.com/images/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://matheedental.com/contact',
  },
};

export default function Contact() {
  return (
    <main>
      <section className="bg-linear-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">
            Dentist in Somerset West
          </span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                      Get in Touch
                    </h1>
                    <p className="mt-4 text-slate-600">
                      Reach out to Mathee Dental Studio at Parc du Links in Firgrove.
                      We&rsquo;re here to help with all your dental needs in the
                      Helderberg area.
                    </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Visit Your Dentist in Firgrove, Helderberg
          </h2>
          <address className="mt-4 not-italic text-slate-600 space-y-3 leading-relaxed">
            <p>
              <strong className="text-slate-700">Address</strong>
              <br />
              Unit G04, Parc du Links 7
              <br />
              9 Niblick Way, Firgrove Rural
              <br />
              Cape Town, 7130
            </p>
            <p>
              <strong className="text-slate-700">Phone</strong>
              <br />
              <a
                href="tel:+27218510461"
                className="text-teal-600 hover:underline"
              >
                021 851 0461
              </a>
            </p>
            <p>
              <strong className="text-slate-700">Email</strong>
              <br />
              <a
                href="mailto:hello@matheedental.com"
                className="text-teal-600 hover:underline"
              >
                hello@matheedental.com
              </a>
            </p>
            <p className="text-sm text-slate-500">
              Located in the Parc du Links office park, easily accessible from
              the N2 in Firgrove.
            </p>
          </address>

          <h2 className="mt-8 text-xl font-semibold text-slate-900">
            Practice Hours
          </h2>
          <dl className="mt-4 text-slate-600 space-y-2 leading-relaxed">
            <div className="flex justify-between max-w-xs">
              <dt>Monday – Friday</dt>
              <dd>08:00 – 17:00</dd>
            </div>
            <div className="flex justify-between max-w-xs">
              <dt>Saturday</dt>
              <dd>Closed</dd>
            </div>
            <div className="flex justify-between max-w-xs">
              <dt>Sunday</dt>
              <dd>Closed</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Request an Appointment
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Fill in the form and we&rsquo;ll confirm your visit within 24
            hours.
          </p>
          <BookingForm />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['MedicalBusiness', 'Dentist'],
            name: 'Mathee Dental Studio',
            description:
              'Mathee Dental Studio provides gentle, expert dental care including cleanings, exams, whitening, and cosmetic dentistry in Somerset West and the Helderberg area.',
            url: 'https://matheedental.com/contact',
            telephone: '+27218510461',
            email: 'hello@matheedental.com',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Unit G04, Parc du Links 7, 9 Niblick Way',
              addressLocality: 'Firgrove Rural, Cape Town',
              addressRegion: 'Western Cape',
              postalCode: '7130',
              addressCountry: 'ZA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -34.076,
              longitude: 18.844,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Monday',
                opens: '08:00',
                closes: '17:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Tuesday',
                opens: '08:00',
                closes: '17:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Wednesday',
                opens: '08:00',
                closes: '17:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Thursday',
                opens: '08:00',
                closes: '17:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Friday',
                opens: '08:00',
                closes: '17:00',
              },
            ],
            sameAs: [
              'https://maps.google.com/?cid=2023782324485113225',
              'https://www.facebook.com/MatheeDentalStudio',
              'https://www.instagram.com/matheedentalstudio/',
            ],
          }),
        }}
      />
    </main>
  );
}
