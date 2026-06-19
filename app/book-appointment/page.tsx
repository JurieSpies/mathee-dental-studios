export const metadata = {
  title: "Book an Appointment",
  description:
    "Request your appointment at Mathee Dental Studio. Choose a time that works for you and we'll confirm within 24 hours.",
};

export default function BookAppointment() {
  return (
    <main>
      <section className="bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Book an Appointment</h1>
          <p className="mt-4 text-slate-600">
            Ready to visit us? Fill out the form and we&rsquo;ll confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      <section className="max-w-xl mx-auto px-4 py-12">
        {/* ponytail: static form placeholder — add app/api/contact/route.ts and wire action to send real booking requests */}
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First Name</label>
              <input id="firstName" type="text" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last Name</label>
              <input id="lastName" type="text" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
            <input id="phone" type="tel" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-700">Preferred Date</label>
            <input id="date" type="date" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-slate-700">Notes (optional)</label>
            <textarea id="notes" rows={3} className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
          </div>
          <button type="submit" className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
            Request Appointment
          </button>
          <p className="text-xs text-slate-500 text-center">
            We&rsquo;ll respond within 24 hours to confirm your requested time or suggest an alternative.
          </p>
        </form>
      </section>
    </main>
  );
}
