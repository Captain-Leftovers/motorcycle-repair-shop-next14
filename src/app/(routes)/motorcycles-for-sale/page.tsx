import MainContainer from '@/components/ui/MainContainer'
import Heading from '@/components/ui/Heading'
import Gallery from '@/components/Gallery/Gallery'
import { Suspense } from 'react'

export default async function MotorcyclesForSale() {
	return (
		<MainContainer className="">
			<>
				<Heading
					title="Find your next motorcycle here"
					description=""
				/>
				<Suspense>
					<Gallery />
				</Suspense>
			</>
		</MainContainer>
	)
}
//TODO when you click on the card from the link wrapping it maybe open a modal with all the details of the moto
