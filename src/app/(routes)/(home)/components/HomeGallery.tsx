import MainContainer from '@/components/ui/MainContainer'
import Carousel from '@/components/ImageCarousel/Carousel'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import motoSale from '/public/images/forSale.png'

const images = [
	{
		// url: 'https://res.cloudinary.com/dkeycnddx/image/upload/v1698227123/t1evurlhxdnk07ucrzyz.jpg',
		url: '/images/motoGalleryH1.jpg',
		make: 'Honda',
		model: 'Moto V',
		description: 'Moto V description goes here',
		price: '$100',
	},

	{
		// url: 'https://res.cloudinary.com/dkeycnddx/image/upload/ar_16:10,c_crop/v1698227124/oibfgql2pyk6zconhsxu.jpg',
		url: '/images/motoGalleryV.jpg',
		make: 'Yamahaddddddddd',
		model: 'Moto V',
		description: 'Moto V description goes here',
		price: '$100',
	},
]

type HomeGalleryProps = {}
export default function HomeGallery({}: HomeGalleryProps) {
	return (
		<MainContainer className="sticky top-28 bg-stone-200 z-30">
			<section className="flex justify-between items-center bg-transparent w-full h-[calc(100vh-7rem)] text-black py-10 font-bold">
				<div className="w-[47%] flex flex-col justify-center gap-8 h-full">
					<h2 className="text-4xl">
						Browse our available motorcycles
					</h2>
					<p></p>
					<div className="space-x-4">
						<Button variant={'destructive'} className="">
							View Available Motorcycles
						</Button>
						<Button variant={'outline'} className="">
							Contact Us
						</Button>
					</div>
				</div>
				<div className="w-[47%] h-full relative">
						<Image
							src={motoSale}
							alt=""
							fill
							sizes="100%"
							className="object-cover object-center"
						/>
				</div>
			</section>
		</MainContainer>
	)
}

//TODO see why image not showing
