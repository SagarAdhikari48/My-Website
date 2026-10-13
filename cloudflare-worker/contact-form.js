/**
 * Cloudflare Worker — Contact Form Email Handler
 *
 * Deploy this worker at: Workers & Pages → Create Worker in Cloudflare dashboard.
 * Add RESEND_API_KEY as a secret environment variable in the worker settings.
 *
 * Environment variables (set in Cloudflare Worker settings → Variables):
 *   RESEND_API_KEY  — your Resend API key (keep this secret, never expose client-side)
 *   ALLOWED_ORIGIN  — your site URL, e.g. https://www.sagaradhikari.info.np
 */

const ALLOWED_ORIGINS = [
  'https://www.sagaradhikari.info.np',
  'https://sagaradhikari.info.np',
  'http://localhost:3000',
  'http://localhost:3001',
]

const CORS_HEADERS = (origin) => ({
  'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
})

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS(allowedOrigin),
      })
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS(allowedOrigin),
        },
      })
    }

    let body
    try {
      body = await request.json()
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS(allowedOrigin),
        },
      })
    }

    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS(allowedOrigin),
        },
      })
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS(allowedOrigin),
        },
      })
    }

    // Send email via Resend
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Use your verified domain sender once domain is verified in Resend.
        // Before verification, use: onboarding@resend.dev (only sends to your own account email)
        from: 'Portfolio Contact <contact@sagaradhikari.info.np>',
        to: ['contact@sagaradhikari.info.np'],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 100px;">Name</td>
                <td style="padding: 8px 0; color: #1e293b;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; color: #1e293b;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #2563eb;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Subject</td>
                <td style="padding: 8px 0; color: #1e293b;">${escapeHtml(subject)}</td>
              </tr>
            </table>
            <div style="margin-top: 16px;">
              <p style="color: #64748b; font-weight: 600; margin-bottom: 8px;">Message</p>
              <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; color: #1e293b; white-space: pre-wrap;">
                ${escapeHtml(message)}
              </div>
            </div>
            <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">
              Sent from sagaradhikari.info.np contact form
            </p>
          </div>
        `,
      }),
    })

    if (!resendRes.ok) {
      const resendError = await resendRes.text()
      console.error('Resend error:', resendError)
      return new Response(JSON.stringify({ error: 'Failed to send email. Please try again.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...CORS_HEADERS(allowedOrigin),
        },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...CORS_HEADERS(allowedOrigin),
      },
    })
  },
}

/** Prevent XSS in email HTML output */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
