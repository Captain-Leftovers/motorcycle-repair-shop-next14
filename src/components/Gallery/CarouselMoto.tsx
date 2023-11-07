"use client"

import { MotoData } from '@/types'
import MotoImageCard from '@/components/Gallery/MotoImageCard'
import toast from 'react-hot-toast'
import { useIsMounted } from '@/hooks/useIsMounted'

type CarouselProps = {
	data : MotoData
}

export default  function CarouselMoto({ data }: CarouselProps) {

	if ( useIsMounted() && data.data === null) {
		toast.error('Something went wrong')
	}
	


		
	

	return (
		<div className="flex gap-8 overflow-hidden flex-wrap p-4 justify-center bg-red-400 ">
			{data.data !== null && data.data.map((motoImage) => (
				<MotoImageCard imageData={motoImage} key={motoImage.id} />
			))}
		</div>
	)
}
