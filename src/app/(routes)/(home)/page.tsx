'use client'

import FeatureSection from '@/app/(routes)/(home)/components/FeatureSection'
import FeaturesListSection from '@/app/(routes)/(home)/components/FeaturesListSection'
import HeroHeaderSection from '@/app/(routes)/(home)/components/HeroHeaderSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import HomeGallery from './components/HomeGallery'

export default function Home() {
	return (
		<main className="relative  overflow-auto scroll-smooth">
			<Navbar />
			<HeroHeaderSection />
			<FeatureSection />
			<FeaturesListSection />
			<HomeGallery />
			<Footer /> 
		</main>
	)
}
