import { MotoItemWithImagesType } from '@/types'
import MotoImageCard from '@/components/Gallery/MotoImageCard'
import toast from 'react-hot-toast'

type CarouselProps = {
	motoImagesArr: MotoItemWithImagesType[]
	errMessage: string | null
}

export default function CarouselMoto({ motoImagesArr, errMessage }: CarouselProps) {
	if (errMessage) {
		toast.error(errMessage)
	}
	

	return (
		<div className="flex gap-8 overflow-hidden flex-wrap p-4 justify-center ">
			{motoImagesArr.map((motoImage) => (
				<MotoImageCard imageData={motoImage} key={motoImage.id} />
			))}
		</div>
	)
}
``