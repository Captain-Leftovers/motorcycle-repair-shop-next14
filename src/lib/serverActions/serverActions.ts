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
				onHold: false,
				featured: true,
			},
			include: {
				images: true,
			},
			orderBy: {
				sold: 'asc',
			},
		})

		products.sort((a, b) => {
			// Priority to items that are not sold and not upcoming
			if (!a.sold && !a.upcoming && (b.sold || b.upcoming)) {
				return -1 // a should come before b
			} else if (!b.sold && !b.upcoming && (a.sold || a.upcoming)) {
				return 1 // b should come before a
			}

			// Next, prioritize items that are upcoming but not sold
			if (!a.sold && a.upcoming && (b.sold || !b.upcoming)) {
				return -1 // a should come before b
			} else if (!b.sold && b.upcoming && (a.sold || !a.upcoming)) {
				return 1 // b should come before a
			}

			// Lastly, sold items
			if (a.sold && !b.sold) {
				return 1 // a is sold and b is not, a should come after b
			} else if (b.sold && !a.sold) {
				return -1 // b is sold and a is not, b should come after a
			}

			return 0 // If both are equal in terms of their grouping, maintain their order
		})

		return { data: products, errMessage: null }
	} catch (error) {
		return { data: null, errMessage: 'Error getting products' }
	}
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactFormToEmail(input: {
	name: string
	email: string
	message: string
}) {
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
