'use client';

import { type FormEvent, useState } from 'react';

export default function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const { error: msg } = await res.json();
        throw new Error(msg ?? 'Something went wrong');
      }

      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-semibold text-teal-700">Request sent!</p>
        <p className="mt-2 text-slate-600">
          We&rsquo;ll confirm your appointment within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First Name</label>
          <input id="firstName" name="firstName" type="text" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last Name</label>
          <input id="lastName" name="lastName" type="text" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
        <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
        <input id="phone" name="phone" type="tel" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-slate-700">Preferred Date</label>
        <input id="date" name="date" type="date" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-slate-700">Notes (optional)</label>
        <textarea id="notes" name="notes" rows={3} className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Request Appointment'}
      </button>
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}
      <p className="text-xs text-slate-500 text-center">
        We&rsquo;ll respond within 24 hours to confirm your requested time or suggest an alternative.
      </p>
    </form>
  );
}
