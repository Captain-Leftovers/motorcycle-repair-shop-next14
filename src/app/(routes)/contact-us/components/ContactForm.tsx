'use client'

import { sendContactFormToEmail } from '@/lib/serverActions/serverActions'
import { useState } from 'react'
import { SubmitButton } from './SubmitButton'
import toast from 'react-hot-toast'

const initialState = {
	name: '',
	email: '',
	message: '',
}

export default function ContactForm() {
	const [blurred, setBlurred] = useState<boolean>(false)
	const [data, setData] = useState(initialState)

	const handleOnBlur = () => {
		setBlurred(true)
	}

	const sendEmail = async () => {
		try {
			await sendContactFormToEmail(data)
			toast.success('Email sent!')
			setData(initialState)
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong')
		}
	}

	return (
		<div className="flex-1 px-4">
			<form action={sendEmail}>
				<div className="text-lg">
					<div className="flex flex-col my-4">
						<label
							htmlFor="name"
							className="mb-2 text-lg font-medium"
						>
							Име
						</label>
						<input
							onChange={(e) => {
								setData({ ...data, name: e.target.value })
							}}
							value={data.name}
							type="text"
							name="name"
							id="name"
							placeholder="Вашето име"
							onBlur={handleOnBlur}
							required={true}
							pattern="^[\p{L}\-' ]+$"
							className=" py-2 px-3 bg-stone-100 rounded-md peer border-2 border-gray-200  p-2  focus:border-pallette-orange focus:outline-none  transition-colors duration-500 ease-in-out"
						/>
						<span
							className={` text-red-500 text-xs opacity-0 pl-1 ${
								blurred ? 'opacity-100' : ''
							}  peer-valid:opacity-0`}
						>
							{'enter your name'}
						</span>
					</div>
					<div className="flex flex-col mb-4">
						<label
							htmlFor="email"
							className="mb-2 text-lg font-medium "
						>
							Е-поща
						</label>
						<input
							onChange={(e) => {
								setData({ ...data, email: e.target.value })
							}}
							type="text"
							value={data.email}
							name="email"
							id="email"
							onBlur={handleOnBlur}
							required={true}
							pattern="[^@\s]+@[^@\s]+"
							placeholder="Вашата Е-поща"
							className="py-2 px-3 bg-stone-100 rounded-md peer border-2 border-gray-300  p-2  focus:border-pallette-orange focus:outline-none  transition-colors duration-500 ease-in-out"
						/>
						<span
							className={` text-red-500 text-xs opacity-0 pl-1 ${
								blurred ? 'opacity-100' : ''
							}  peer-valid:opacity-0`}
						>
							{'enter your email'}
						</span>
					</div>
					<div className="flex flex-col mb-4">
						<label
							htmlFor="message"
							className="mb-2 text-lg  font-medium"
						>
							Съобщение
						</label>
						<textarea
							onChange={(e) => {
								setData({ ...data, message: e.target.value })
							}}
							rows={10}
							value={data.message}
							name="message"
							required={true}
							id="message"
							placeholder="Вашето съобщение..."
							className="py-2 px-3 bg-stone-50 rounded-md peer border-2 border-gray-300  p-2  focus:border-pallette-orange focus:outline-none transition-colors duration-500 ease-in-out"
						/>
					</div>
					<SubmitButton />
				</div>
			</form>
		</div>
	)
}
