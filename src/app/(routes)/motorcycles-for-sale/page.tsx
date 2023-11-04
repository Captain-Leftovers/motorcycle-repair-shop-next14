import MainContainer from '@/components/ui/MainContainer'
import { MotoItemWithImagesType } from '@/types'
import axios from 'axios'

export default async function MotorcyclesForSale() {

	try {
		const moto = await axios.get(
			process.env.NEXT_CMS_API_GET_MOTO!
		)
		const motoData: MotoItemWithImagesType[] = moto.data
	} catch (error) {
		console.log(error)
	
	}

	return (
		<MainContainer>
			<h1 className='text-center'>For Sale</h1>
		</MainContainer>
	)
}
