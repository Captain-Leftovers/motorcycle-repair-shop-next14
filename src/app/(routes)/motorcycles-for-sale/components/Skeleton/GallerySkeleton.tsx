import {
	Card,
	
} from '@/components/ui/Card'


type GallerySkeletonProps = {}
export default function GallerySkeleton({}: GallerySkeletonProps) {
	return (
		<div className="flex gap-8 flex-wrap p-4 justify-center">
			<Card className="relative w-[500px] h-[500px] p-4 overflow-hidden bg-transparent  hover:scale-105 transition-all ease-out duration-500 hover:bg-stone-50 group hover:border-stone-400"></Card>
			<Card className="relative w-[500px] h-[500px] p-4 overflow-hidden bg-transparent  hover:scale-105 transition-all ease-out duration-500 hover:bg-stone-50 group hover:border-stone-400"></Card>
			<Card className="relative w-[500px] h-[500px] p-4 overflow-hidden bg-transparent  hover:scale-105 transition-all ease-out duration-500 hover:bg-stone-50 group hover:border-stone-400"></Card>
			<Card className="relative w-[500px] h-[500px] p-4 overflow-hidden bg-transparent  hover:scale-105 transition-all ease-out duration-500 hover:bg-stone-50 group hover:border-stone-400"></Card>
		</div>
	)
}
