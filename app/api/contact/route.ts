import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, date, notes } = body;

    if (!firstName || !lastName || !email || !phone || !date) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const name = `${firstName} ${lastName}`;

    await resend.emails.send({
      // ponytail: uses Resend's default test sender. Replace with a
      // verified domain (e.g. hello@yourdomain.com) before going live.
      from: 'Mathee Dental Studio <onboarding@resend.dev>',
      to: ['juriespies@gmail.com'],
      subject: `New Appointment Request from ${name}`,
      replyTo: email,
      html: `
        <h2>New Appointment Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:480px">
          <tr><td style="padding:8px 12px;font-weight:600;color:#475569">Name</td><td style="padding:8px 12px">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#475569">Email</td><td style="padding:8px 12px">${email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#475569">Phone</td><td style="padding:8px 12px">${phone}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#475569">Preferred Date</td><td style="padding:8px 12px">${date}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#475569">Notes</td><td style="padding:8px 12px">${notes || '—'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
