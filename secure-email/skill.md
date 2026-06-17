# Skill: Secure Serverless Email Form Handler

## Description
Provides the exact template and structure for writing secure Next.js serverless API routes to forward contact forms directly to an administrative inbox using Resend, without risking client credentials.

## Implementation Blueprint

When requested to create or update the email form handler backend, implement this exact code block inside `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialise the secure token inside the server context
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate incoming form boundaries
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing mandatory fields' }, { status: 400 });
    }

    // Process secure delivery
    const data = await resend.emails.send({
      from: 'Mathee Studio Website <enquiries@yourdomain.com>',
      to: ['admin@matheedentalstudio.co.za'],
      subject: `New Patient Enquiry from ${name}`,
      replyTo: email,
      html: `
        <h3>New Website Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```
