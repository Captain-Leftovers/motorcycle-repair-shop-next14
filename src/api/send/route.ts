import { EmailTemplate } from '@/app/(routes)/contact-us/components/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
	const body = await request.json()

	const { name, email, message } = body

	let data
	try {
		data = await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: ['bboyforce@live.fr'],
			subject: 'Repair Shop Website Contact Form',
			text: message,
			react: EmailTemplate({ name, senderEmail: email, message }),
		})
	} catch (e: unknown) {
		return NextResponse.json({ error: e })
	}

	return NextResponse.json(data)
}
