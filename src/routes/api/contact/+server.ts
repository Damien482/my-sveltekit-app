import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

function isEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST({ request, getClientAddress }) {
	try {
		const RESEND_API_KEY = env.RESEND_API_KEY;
		const CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL;
		const CONTACT_FROM_EMAIL = env.CONTACT_FROM_EMAIL;

		if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
			return json(
				{ ok: false, error: 'Server not configured: missing env vars.' },
				{ status: 500 }
			);
		}

		const data = await request.formData();

		// Honeypot
		const company = String(data.get('company') ?? '');
		if (company.trim().length > 0) {
			return json({ ok: true }, { status: 200 });
		}

		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();

		if (!name || !email || !message) {
			return json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
		}
		if (!isEmail(email)) {
			return json({ ok: false, error: 'Invalid email address.' }, { status: 400 });
		}
		if (message.length < 10) {
			return json({ ok: false, error: 'Message is too short.' }, { status: 400 });
		}
		if (message.length > 5000) {
			return json({ ok: false, error: 'Message is too long.' }, { status: 400 });
		}

		const resend = new Resend(RESEND_API_KEY);
		const clientIp = getClientAddress?.() ?? 'unknown';

		await resend.emails.send({
			from: CONTACT_FROM_EMAIL,
			to: CONTACT_TO_EMAIL,
			replyTo: email,
			subject: `Portfolio contact: ${name}`,
			text: `New contact form submission

Name: ${name}
Email: ${email}
IP: ${clientIp}

Message:
${message}
`
		});

		return json({ ok: true });
	} catch (err) {
		console.error(err);
		return json({ ok: false, error: 'Server error.' }, { status: 500 });
	}
}