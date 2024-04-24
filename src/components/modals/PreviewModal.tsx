'use client'

import usePreviewModal from '@/hooks/usePreviewModal'
import { Modal } from '@/components/ui/Modal'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export default function PreviewModal() {
	const previewModal = usePreviewModal()
	const motoItem = usePreviewModal((state) => state.data)
	const [active, setActive] = useState<string>('')

	useEffect(() => {
		if (motoItem?.images != undefined && motoItem?.images?.length > 0) {
			setActive(motoItem.images[0].id)
		}
	}, [motoItem])

	if (!motoItem) return null

	return (
		<Modal
			make={motoItem.make || ''}
			model={motoItem.model || ''}
			price={motoItem.price || ''}
			description={motoItem.description || ''}
			isOpen={previewModal.isOpen}
			onClose={previewModal.onClose}
			className="max-w-7xl w-[calc(100%-4rem)] max-h-[calc(100vh-8rem)]  sm:w-[calc(100%-8rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto rounded-lg"
		>
			<div className="w-full border-4">
				{motoItem.images.length > 0 ? (
					<Tabs
						onValueChange={(value) => setActive(value)}
						defaultValue={motoItem.images[0]?.id}
						className="w-full aspect-square"
					>
						{motoItem.images.map((image) => (
							<TabsContent
								key={image.id}
								value={image.id}
								className="aspect-square relative"
							>
								<Image
									src={image.url}
									alt="Image"
									className="object-contain object-center rounded-lg"
									fill
								/>
								{!motoItem.upcoming && !motoItem.sold && (
									<div className="text-center absolute left-0 bottom-0 w-full z-50 bg-green-400 font-semibold">
										В наличност
									</div>
								)}
								{motoItem.upcoming && !motoItem.sold && (
									<div className="text-center absolute left-0 bottom-0 w-full z-50 bg-cyan-400 font-semibold">
										Скоро се очаква в наличност
									</div>
								)}
								{!motoItem.upcoming && motoItem.sold && (
									<div className="text-center absolute left-0 bottom-0 w-full z-50 bg-red-400 font-semibold">
										Продаден
									</div>
								)}
							</TabsContent>
						))}
						<TabsList className="flex flex-wrap justify-start h-max p-4 gap-4">
							{motoItem.images.map((image) => (
								<TabsTrigger
									key={image.id}
									value={image.id}
									className="h-24 mx-auto sm:mx-0 sm:h-40 aspect-square relative bg-transparent  hover:scale-105 transition-all ease-out duration-500 hover:bg-stone-50 group hover:border-stone-400 hover:contrast-125 p-2 "
								>
									<Image
										src={image.url}
										alt="Image"
										className="object-cover object-center rounded-lg"
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33vw"
									/>
									<span
										className={cn(
											'absolute inset-0 rounded-md ring-2 ring-offset-2',
											active === image.id
												? 'ring-black'
												: 'ring-transparent'
										)}
									/>
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				) : (
					<Tabs defaultValue="placeholder">
						<TabsContent
							value="placeholder"
							className="aspect-square relative"
						>
							<Image
								src={'/images/placeholder.png'}
								alt="Image"
								className="object-contain object-center rounded-lg "
								fill
							/>
						</TabsContent>
					</Tabs>
				)}
			</div>
		</Modal>
	)
}
