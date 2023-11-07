import { getMotoFromDb } from "@/lib/serverActions/serverActions"
import CarouselMoto from "./CarouselMoto"




type GalleryProps = {
    
  }
export default async function Gallery({}: GalleryProps) {

    const data = await getMotoFromDb()


return (
 <>
    <CarouselMoto data={data} />
 </>
  )
}