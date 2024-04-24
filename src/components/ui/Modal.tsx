'use client'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/Dialog'
import { cn } from '@/lib/utils'
import { Separator } from './Separator'

interface ModalProps {
	make: string
	model: string
	price: string | number
	description: string
	isOpen: boolean
	onClose: () => void
	children?: React.ReactNode
	className?: string
}

export const Modal: React.FC<ModalProps> = ({
	price,
	model,
	make,
	description,
	isOpen,
	onClose,
	children,
	className,
}) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose()
		}
	}

	return (
		<Dialog open={isOpen} onOpenChange={onChange}>
			<DialogContent className={cn(className, 'flex flex-col')}>
				<DialogHeader>
					<DialogTitle className="text-2xl">{make}</DialogTitle>
					<DialogDescription>{model}</DialogDescription>
				</DialogHeader>
				{children}
				<DialogHeader className="w-full mx-auto">
					<DialogTitle className="md:text-right md:mr-20 text-black font-semibold">
						{price} <span className="">лв</span>
					</DialogTitle>
					<Separator></Separator>
					<DialogDescription className="w-full sm:w-4/5 mx-auto text-lg font-medium">
						<p className='w-full break-words' >{description}</p>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
