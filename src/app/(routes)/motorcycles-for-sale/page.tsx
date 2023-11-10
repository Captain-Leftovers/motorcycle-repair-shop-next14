import MainContainer from '@/components/ui/MainContainer'
import Heading from '@/components/ui/Heading'
import Gallery from '@/components/Gallery/Gallery'
import { Suspense } from 'react'
import GallerySkeleton from './components/Skeleton/GallerySkeleton'

export default async function MotorcyclesForSale() {
	return (
		<MainContainer className="py-10 min-h-[87vh]">
			<Heading
				title="Изберете вашия следващ мотоциклет тук."
				description=""
			/>
			<Suspense fallback={<GallerySkeleton />}>
				<Gallery />
			</Suspense>
		</MainContainer>
	)
}



