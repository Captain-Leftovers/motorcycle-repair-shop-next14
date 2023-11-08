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
			className={cn('z-50 backdrop-filter sticky top-0 h-16', className)}
		>
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
					<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
						<p className="font-bold text-xl">Moto Revive</p>
					</Link>
					<MainNav />
				</div>
			</Container>
		</div>
	)
}

/* mix blend mode -  difference */
