'use client'

import {Button} from '@/components/ui/Button'
import { Bike } from 'lucide-react'
import { useEffect, useState } from 'react'

type NavbarActionsProps = {}
export default function NavbarActions({}: NavbarActionsProps) {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<div className="ml-auto flex items-center gap-x-4 ">
			<Button
				className="flex items-center rounded-full bg-black px-4 py-2"
			>
				<Bike size={20} color="white" />
				<span className="ml-2 text-sm font-medium text-white">
					dummy
				</span>
			</Button>
		</div>
	)
}

//TODO : see about the actions section and what the button will do
