'use client'

import { cn } from '@/lib/utils'
import { RoutesType } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routesArr: RoutesType[] = [
	{
		href: '',
		label: 'Home',
	},
	{
		href: 'motorcycles-for-sale',
		label: 'Motorcycles For Sale',
	},
	{
		href: 'about',
		label: 'About',
	},
	{
		href: 'contact-us',
		label: 'Contact Us',
	},
]

type MainNavProps = {}
export default function MainNav({}: MainNavProps) {
	const pathname = usePathname()
	const routes = routesArr.map((route) => ({
		href: `/${route.href}`,
		label: route.label,
		active: pathname.split('/')[1] === route.href,
	}))
	
	
	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			{routes.map((route) => (
				<Link
					href={route.href}
					key={route.href}
					className={cn(
						'relative group text-sm font-medium transition-colors hover:text-black'
					)}
				>
					{route.label}
					<span
						className={`absolute left-0 inline-block  h-[2px] -bottom-0.5 bg-pallette-orange group-hover:w-full transition-[width] ease duration-300 ${
							route.active ? 'w-full' : 'w-0'
						} `}
					>
						&nbsp;
					</span>
				</Link>
			))}
		</nav>
	)
}
