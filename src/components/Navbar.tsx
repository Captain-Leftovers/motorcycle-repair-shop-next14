import Link from 'next/link'
import Container from '@/components/ui/Container'
import MainNav from './MainNav'
import { cn } from '@/lib/utils'

export const revalidate = 0

type NavbarProps = {
	className?: string
}

export default async function Navbar({ className }: NavbarProps) {
	return (
		<div
			className={cn('z-50 backdrop-filter h-16', className)}
		>
			<Container>
				<div className="relative lg:px-8 flex h-16 items-center sm:justify-start">
					<div className="mx-auto flex sm:justify-start w-full">
						<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
							<p className=" font-bold text-sm sm:text-base md:text-xl lg:text-2xl">
								Moto Revive
							</p>
						</Link>
						<MainNav />
					</div>
				</div>
			</Container>
		</div>
	)
}

/* mix blend mode -  difference */
