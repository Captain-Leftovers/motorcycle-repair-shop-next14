import MainContainer from '@/components/ui/MainContainer'
import Heading from '@/components/ui/Heading'
import { MotoItemWithImagesType } from '@/types'
import axios from 'axios'
import CarouselMoto from '@/components/Gallery/CarouselMoto'

export default async function MotorcyclesForSale() {
	let data :MotoItemWithImagesType[] | [] = []
	let errMessage = null
	try {
		const moto = await axios.get(process.env.NEXT_CMS_API_GET_MOTO!)
		
		 data = moto.data
	} catch (error) {
		console.log(error);
	}

	return (
		<MainContainer className="">
			<>
				<Heading
					title="Find your next motorcycle here"
					description=""
				/>
				<CarouselMoto motoImagesArr={data} errMessage={errMessage} />
			</>
		</MainContainer>
	)
}
//TODO when you click on the card from the link wrapping it maybe open a modal with all the details of the moto