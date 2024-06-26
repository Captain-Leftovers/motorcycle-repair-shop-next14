'use client'

import Image from 'next/image'
import { Tab } from '@headlessui/react'

import GalleryTab from './GalleryTab'
import { MotoItemImages } from '@/types'

type GalleryModalCardProps = {
	images: MotoItemImages[]
}
export default function GalleryModalCard({ images }: GalleryModalCardProps) {

	return (
		<Tab.Group as="div" className="flex flex-col-reverse">
			<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
				<Tab.List className="grid grid-cols-4 gap-6">
					{images.map((image) => (
						<GalleryTab key={image.id} imageUrl={image.url} />
					))}
				</Tab.List>
			</div>
			<Tab.Panels className="aspect-square w-full">
				{images.map((image) => (
					<Tab.Panel key={image.id}>
						<div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden ">
							<Image
								fill
								src={image.url}
								alt="Image"
								className="object-cover object-center"
								sizes='(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33vw'
							/>
						</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>
	)
}
