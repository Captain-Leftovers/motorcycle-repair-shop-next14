import MainContainer from '@/components/ui/MainContainer'
import Carousel from '@/components/ImageCarousel/Carousel'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import motoSale from '/public/images/forSale.png'
import Link from 'next/link'

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
				<div className="w-[47%] flex flex-col justify-center gap-8 h-full pl-4">
					<h2 className="text-4xl">
					Разгледайте наличните мотоциклети.
					</h2>
					<p></p>
					<div className="space-x-4">
						<Link
							href="/motorcycles-for-sale"
							className="bg-pallette-orange hover:bg-pallette-orange-red  text-stone-50    dark:bg-pallette-orange dark:text-stone-50 transition  dark:hover:bg-pallette-orange/80  h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300"
						>
							Мотоциклети на продажба
						</Link>
						
						<Link
							href="/contact-us"
							className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300 hover:bg-stone-300/20 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-stone-50 h-10 px-4 py-2"
						>
							Свържете се с нас
						</Link>
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
