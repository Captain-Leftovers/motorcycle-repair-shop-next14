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
			// Priority 1: Featured only
			if (
				a.featured &&
				!a.upcoming &&
				!a.onHold &&
				!a.sold &&
				!(b.featured && !b.upcoming && !b.onHold && !b.sold)
			) {
				return -1
			}
			if (
				b.featured &&
				!b.upcoming &&
				!b.onHold &&
				!b.sold &&
				!(a.featured && !a.upcoming && !a.onHold && !a.sold)
			) {
				return 1
			}

			// Priority 2: Upcoming
			if (a.upcoming && !b.upcoming) {
				return -1
			}
			if (b.upcoming && !a.upcoming) {
				return 1
			}

			// Priority 3: OnHold
			if (a.onHold && !b.onHold) {
				return -1
			}
			if (b.onHold && !a.onHold) {
				return 1
			}

			// Priority 4: Sold
			if (a.sold && !b.sold) {
				return -1
			}
			if (b.sold && !a.sold) {
				return 1
			}

			return 0 // Keep original order if none of the above conditions met
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
