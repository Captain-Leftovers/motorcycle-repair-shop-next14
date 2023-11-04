import Image from 'next/image'
import heroImage from '/public/images/hero-image.jpg'
import heroPng from '/public/images/png.png'
import MainContainer from '@/components/ui/MainContainer'
import  {Button} from '@/components/ui/Button'
import { Triangle } from 'lucide-react'


export default function HeroHeaderSection() {
	return (
		<MainContainer className="sticky top-16 bg-background-light">
			<section className="flex flex-col justify-around h-[calc(100vh-4rem)] text-black py-10 font-bold">
				<div className=" flex flex-col justify-around items-center grow">
					<h1 className="text-4xl">
						Expert Motorcycle Repairs Done Right at Our Shop
					</h1>
					<p>
						Trust our experienced to get your motorcycle back on the road in no time.
					</p>
					<Button variant={'outline'} className='' >Contact us</Button>
				</div>
				<div className="h-3/4 relative">
					<Image
						src={heroPng}
						fill
						alt=""
						sizes="100%"
						className="object-contain object-center"
						priority
					/>
				</div>
			</section>
		</MainContainer>
	)
}
