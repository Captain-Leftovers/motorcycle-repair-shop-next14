import { ApiImageType } from '@/types'
import Image from 'next/image'
import { Button } from '../ui/Button'
import ImageCard from './ImageCard'

type CarouselProps = {
	images: ApiImageType[]
}
export default function Carousel({ images }: CarouselProps) {
	console.log(images)

	return (
		<ImageCard  content={images[0]}/>
	)
}
