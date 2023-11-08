'use client'

import { Button } from '@/components/ui/Button'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<Button
			disabled={pending}
			type="submit"
			variant="destructive"
			className=" py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
		>
			Изпрати
		</Button>
	)
}
