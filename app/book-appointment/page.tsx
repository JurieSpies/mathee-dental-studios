import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment in Somerset West",
  description:
    "Book an appointment at Mathee Dental Studio in Firgrove, Somerset West. Choose a time that works for you and we'll confirm within 24 hours.",
  openGraph: {
    title: "Book an Appointment in Somerset West | Mathee Dental Studio",
    description:
      "Book an appointment at Mathee Dental Studio in Firgrove, Somerset West. Choose a time that works for you and we'll confirm within 24 hours.",
    url: "https://matheedental.com/book-appointment",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Book an Appointment at Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment in Somerset West | Mathee Dental Studio",
    description:
      "Book an appointment at Mathee Dental Studio in Firgrove, Somerset West. Choose a time that works for you and we'll confirm within 24 hours.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/book-appointment",
  },
};

import BookingForm from '@/components/Form';

export default function BookAppointment() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Appointments in Somerset West</span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Book an Appointment</h1>
                    <p className="mt-4 text-slate-600">
                      Ready to visit Mathee Dental Studio in Firgrove? Fill out the form and
                      we&rsquo;ll confirm your appointment within 24 hours.
                    </p>
        </div>
      </section>

      <section className="max-w-xl mx-auto px-4 py-12">
        <BookingForm />
      </section>
    </main>
  );
}
