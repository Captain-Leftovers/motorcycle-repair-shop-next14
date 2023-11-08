
import MainContainer from '@/components/ui/MainContainer'
import ContactSection from './components/ContactSection'
import MapLocation from './components/MapLocation'

export default function ContactUs() {
	return (
		<MainContainer className='mb-10 mt-20'>
			<ContactSection />
			<MapLocation />
		</MainContainer>
	)
}
