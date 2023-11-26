'use server'

import { EmailTemplate } from '@/app/(routes)/contact-us/components/EmailTemplate'
import { Resend } from 'resend'
import { unstable_noStore as noStore } from 'next/cache'

import prismadb from '../prismadb'

export async function getMotoFromDb() {
	noStore()

	try {
		const products = await prismadb.motoItem.findMany({
			where: {
				sold: false,
				onHold: false,
				featured: true,
			},
			include: {
				images: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		
		return { data: products, errMessage: null }
	} catch (error) {
		console.log('[PRODUCTS_GET]', error)
		return { data: null, errMessage: 'Error getting products' }
	}
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactFormToEmail(input: {
	name: string
	email: string
	message: string
}) {
	console.log('input', input)

	const { name, email, message } = input

	try {
		await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: ['motorevive.bg@gmail.com'],
			subject: 'Repair Shop Website Contact Form',
			text: message,
			react: EmailTemplate({ name, senderEmail: email, message }),
		})

		
	} catch (e: unknown) {
		console.log('e', e)
		return e
	}
}
