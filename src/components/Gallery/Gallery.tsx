import { getMotoFromDb } from '@/lib/serverActions/serverActions'
import CarouselMoto from './CarouselMoto'

type GalleryProps = {}
export default async function Gallery({}: GalleryProps) {
	const data = await getMotoFromDb()

	// if no items in the db show a message
	if (data.data === null || data.data.length === 0) {
		return (
			<div className="">
				<h1 className="text-2xl text-center py-20">
					Няма налични мотоциклети в момента.
				</h1>
			</div>
		)
	}

	return (
		<>
			<CarouselMoto data={data} />
		</>
	)
}
