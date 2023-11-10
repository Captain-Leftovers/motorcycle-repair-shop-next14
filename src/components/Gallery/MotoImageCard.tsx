import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card'
import { MotoItemWithImagesType } from '@/types'

import Image from 'next/image'
import ModalWrapper from '@/components/ModalWrapper'

function getCoverImage(placeholder: string, imageData: MotoItemWithImagesType) {
	if (
		imageData.coverUrl != null &&
		imageData.images.length > 0 &&
		imageData.images.findIndex(
			(value) => value.url === imageData.coverUrl
		) !== -1
	) {
		return imageData.coverUrl
	} else if (imageData.images.length > 0) {
		return imageData.images[0].url
	} else {
		return placeholder
	}
}
export default function MotoImageCard({
	imageData,
}: {
	imageData: MotoItemWithImagesType
}) {
	const cover = getCoverImage('/images/placeholder.png', imageData)

	return (
		<div className="">
			<ModalWrapper imageData={imageData}>
				<Card className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] p-4 overflow-hidden bg-transparent  hover:scale-105 transition-all ease-out duration-500 hover:bg-stone-50 group hover:border-stone-400">
					<CardContent className="relative w-full h-4/5 flex flex-col justify-between">
						<CardDescription className="truncate w-full overflow-hidden"></CardDescription>
						<Image
							src={cover}
							alt={imageData.model != null ? imageData.model : ''}
							fill
							sizes="(max-width: 640px) 350px, 500px"
							className="object-cover object-center rounded-lg "
							priority
						/>
					</CardContent>
					<CardFooter className="flex justify-between items-center ">
						<CardHeader className="overflow-hidden pl-0">
							<CardTitle className="truncate w-full overflow-hidden">
								{!!imageData.make && imageData.make}
							</CardTitle>
							<CardDescription className="truncate w-full overflow-hidden text-gray-600">
								{!!imageData.model && imageData.model}
							</CardDescription>
						</CardHeader>
						<CardDescription className="text-black font-semibold">
							{imageData.price} <span className="font-sans">лв</span>
						</CardDescription>
					</CardFooter>
				</Card>
			</ModalWrapper>
		</div>
	)
}
