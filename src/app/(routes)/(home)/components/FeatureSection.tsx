import Image from 'next/image'
import featureImage from '/public/images/feature.jpg'
import MainContainer from '@/components/ui/MainContainer'
import { Separator } from '@radix-ui/react-separator'

export default function FeatureSection() {
	return (
		<MainContainer className=" bg-background-dark">
			<section className=" flex flex-col sm:flex-row justify-between h-screen sm:min-h-screen sm:h-auto text-text-light py-10">
				<div className="sm:w-[47%] flex flex-col justify-center gap-8 pl-4 pr-4 sm:pr-0">
					<h2 className="text-2xl lg:text-4xl  font-medium">
						Ремонт на мотоциклети от професионалисти, на които може
						да се доверите.
					</h2>
					<p className="text-base sm:text-lg">
						В нашия сервиз за ремонт на мотоциклети предлагаме
						разнообразни експертни ремонтни услуги, за да поддържаме
						вашето мотоциклетно превозно средство в отлично
						състояние. От рутинни поддръжки до сложни ремонти,
						нашият екип от опитни техници е тук, за да ви помогне.
					</p>
					<div className="space-x-4">
						<Separator className="bg-gradient-radial from-pallette-orange to-pallette-orange-red w-full h-[1px] rounded-full" />
					</div>
				</div>
				<div className="h-[50%] sm:h-auto sm:w-[47%]  relative">
					<Image
						src={featureImage}
						fill
						alt=""
						sizes="100%"
						className="object-cover object-top"
					/>
				</div>
			</section>
		</MainContainer>
	)
}
