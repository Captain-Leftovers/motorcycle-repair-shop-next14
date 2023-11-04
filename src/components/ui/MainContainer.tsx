import { cn } from "@/lib/utils"

type ContainerProps = {
	children: React.ReactNode
	className?: string
}

export default function MainContainer({ children, className}: ContainerProps) {
	return (
		<div className={cn("grow", className)} >
			<div className="relative w-full mx-auto max-w-7xl scroll-smooth">
				{children}
			</div>
		</div>
	)
}
