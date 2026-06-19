import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dental Implants in Somerset West",
  description:
    "Dental implants in Somerset West and Firgrove — restore missing teeth with durable, natural-looking implants at Mathee Dental Studio. Book a consultation today.",
  openGraph: {
    title: "Dental Implants in Somerset West | Mathee Dental Studio",
    description:
      "Dental implants in Somerset West and Firgrove — restore missing teeth with durable, natural-looking implants at Mathee Dental Studio. Book a consultation today.",
    url: "https://matheedental.com/services/dental-implants",
    images: [
      {
        url: "https://matheedental.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Implants at Mathee Dental Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implants in Somerset West | Mathee Dental Studio",
    description:
      "Dental implants in Somerset West and Firgrove — restore missing teeth with durable implants at Mathee Dental Studio.",
    images: ["https://matheedental.com/images/og-default.jpg"],
  },
  alternates: {
    canonical: "https://matheedental.com/services/dental-implants",
  },
};

export default function DentalImplants() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-wider text-gray-500">Dental Implants in Somerset West</span>
                    <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                      Permanently Restore Missing Teeth
                    </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Permanently replace missing teeth with dental implants at Mathee Dental Studio, your trusted practice in the Helderberg area.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Dental Implants in Somerset West — A Permanent Tooth Replacement Solution
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Losing a tooth can affect more than just your appearance. It can impact your ability to chew comfortably, cause neighbouring teeth to shift, and lead to bone loss in your jaw over time. Dental implants are the gold standard for replacing missing teeth because they address both the visible and structural aspects of tooth loss. At Mathee Dental Studio in Firgrove, Somerset West, we offer high-quality dental implant treatments that restore full function and a natural appearance, so you can eat, speak, and smile with confidence.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            A dental implant is a small titanium post that is surgically placed into the jawbone, where it acts as an artificial tooth root. Once the bone has fused with the implant through a process called osseointegration, a custom-made crown is attached to the top. The result is a replacement tooth that looks, feels, and functions like a natural tooth. Unlike bridges or dentures, implants do not rely on neighbouring teeth for support and can last a lifetime with proper care. Our team in Somerset West has the training and technology to plan and place implants with precision, ensuring the best possible outcome for every patient.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            Single and Multiple Tooth Implants
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Whether you are missing a single tooth or several teeth, dental implants offer a versatile and durable solution. A single implant with a crown is ideal for replacing one missing tooth without affecting adjacent teeth. For patients missing multiple teeth, implant-supported bridges or partial dentures provide a stable and comfortable alternative to traditional removable appliances. These options are designed to distribute chewing forces evenly and prevent the bone loss that often occurs with gaps in the smile.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            During your initial consultation at our Firgrove practice, we will perform a thorough assessment including digital imaging to evaluate your bone density and determine the best implant approach for your situation. Every treatment plan is tailored to your specific needs, whether you require a single implant or a full-arch reconstruction. We take the time to explain each step of the process and answer any questions you may have.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold text-slate-900">
            The Implant Procedure — What to Expect
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            The dental implant process typically takes place over several months to allow for proper healing and integration. The first step involves a comprehensive consultation where we assess your oral health, take 3D scans, and develop a customised treatment plan. The implant is then placed during a surgical procedure performed under local anaesthesia. After placement, a healing period of several weeks allows the bone to bond with the implant. Once healing is complete, a custom abutment and crown are fabricated and attached, completing your restoration.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Throughout the process, our Somerset West dental team prioritises your comfort and provides clear aftercare instructions to support smooth healing. We use modern techniques and sterilised equipment to ensure the highest standards of safety and care. If you are considering dental implants in the Helderberg area, we encourage you to book a consultation at Mathee Dental Studio. We will help you understand your options and determine whether implants are the right choice for your oral health goals.
          </p>
        </article>

        <div className="text-center pt-4">
          <Link
            href="/book-appointment"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Book Your Implant Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
