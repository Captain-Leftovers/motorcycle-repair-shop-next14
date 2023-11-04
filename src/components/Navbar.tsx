import Link from 'next/link'
import Container from '@/components/ui/Container'
import MainNav from './MainNav'
import NavbarActions from './NavbarActions'

export const revalidate = 0

export default async function Navbar() {

	return (
		<div className="z-50 backdrop-filter sticky top-0 h-16">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
					<Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
						<p className="font-bold text-xl">Moto Revive</p>
					</Link>
					<MainNav />
					<NavbarActions />
				</div>
			</Container>
		</div>
	)
}
   

/* mix blend mode -  difference */