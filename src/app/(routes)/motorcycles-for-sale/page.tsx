import MainContainer from '@/components/ui/MainContainer'
import Heading from '@/components/ui/Heading'
import Gallery from '@/components/Gallery/Gallery'
import { Suspense } from 'react'
import GallerySkeleton from './components/Skeleton/GallerySkeleton'

export default async function MotorcyclesForSale() {
	return (
		<MainContainer className="py-10">
			<>
				<Heading
					title="Изберете вашия следващ мотоциклет тук."
					description=""
				/>
				<Suspense fallback={<GallerySkeleton/>} >
					<Gallery />
				</Suspense>
			</>
		</MainContainer>
	)
}
//TODO when you click on the card from the link wrapping it maybe open a modal with all the details of the moto
