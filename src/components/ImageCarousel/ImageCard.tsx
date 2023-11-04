import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card'
import { ApiImageType } from '@/types'
import Image from 'next/image'

export default function ImageCard({content} : {content: ApiImageType}) {
	return (
		<Card className= " w-[400px] h-[400px] p-4 overflow-hidden bg-transparent border-black/50 hover:scale-105 transition-all ease-out duration-500">
            
			<CardContent  className="relative w-full h-4/5 flex flex-col justify-between">
                    <CardDescription className='truncate w-full overflow-hidden text-black/80'>{content.model}</CardDescription>

				<Image src={content.url} alt={content.model} fill className='object-cover object-center rounded-lg' />
			</CardContent>
            <CardFooter className="flex justify-between items-center ">
                <CardHeader className='overflow-hidden pl-0'>
                    <CardTitle className='truncate w-full overflow-hidden'>{content.make}</CardTitle>
                    <CardDescription className='truncate w-full overflow-hidden text-gray-600'>{content.model}</CardDescription>
                </CardHeader>
                <CardDescription className='text-black font-semibold'>{content.price}</CardDescription>
            </CardFooter>
		</Card>
	)
}
