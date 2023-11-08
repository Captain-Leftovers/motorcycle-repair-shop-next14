
import { MotoData } from '@/types'
import MotoImageCard from '@/components/Gallery/MotoImageCard'

import ToastMessage from '../ToastMessage'

type CarouselProps = {
	data: MotoData
}


export default function CarouselMoto({ data }: CarouselProps) {
	return (
		<>
		<ToastMessage message={data.errMessage} />
			<div className="flex gap-8 flex-wrap p-4 justify-center">
				{data.data !== null &&
					data.data.map((motoImage) => (
						<MotoImageCard
							imageData={motoImage}
							key={motoImage.id}
						/>
					))}
			</div>
		</>
	)
}
