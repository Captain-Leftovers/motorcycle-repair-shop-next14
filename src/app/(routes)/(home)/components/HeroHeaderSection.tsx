import Image from 'next/image'
import heroPng from '/public/images/png.png'
import MainContainer from '@/components/ui/MainContainer'
import Link from 'next/link'

export default function HeroHeaderSection() {
	return (
		<MainContainer className=" bg-background-light">
			<section className="flex flex-col justify-around  h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] text-black py-4 lg:pt-10 xl:pt-16 font-bold px-4">
				<div className=" flex flex-col items-center grow gap-4">
					<h1 className="text-2xl w-full  lg:text-4xl font-semibold mx-20 text-center">
						Професионален ремонт на мотоциклети в нашия сервиз.
					</h1>
					<p className='text-center'>
						С доверие в нашия опит, мотоциклетът ви ще бъде отново
						на пътя в най-кратки срокове.
					</p>
					<Link
						href="/contact-us"
						className="mt-4 bg-pallette-orange hover:bg-pallette-orange-red  text-stone-50    dark:bg-pallette-orange dark:text-stone-50 transition  dark:hover:bg-pallette-orange/80  h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300"
					>
						Пишете ни
					</Link>
				</div>
				<div className="min-h-[100px] h-3/4 relative mt-2">
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
