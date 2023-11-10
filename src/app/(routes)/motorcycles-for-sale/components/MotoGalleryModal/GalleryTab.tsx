import Image from 'next/image'

import { Tab } from '@headlessui/react'

import { cn } from '@/lib/utils'

type GalleryTabProps = {
	imageUrl: string
}
export default function GalleryTab({ imageUrl }: GalleryTabProps) {
	return (
		<Tab
			as="div"
			className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
		>
			{({ selected }) => (
				<div>
					<span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
						<Image
							fill
							src={imageUrl}
							alt=""
							className="object-cover object-center"
							sizes='(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33vw'
						/>
					</span>
					<span
						className={cn(
							'absolute inset-0 rounded-md ring-2 ring-offset-2',
							selected ? 'ring-black' : 'ring-transparent'
						)}
					/>
				</div>
			)}
		</Tab>
	)
}
