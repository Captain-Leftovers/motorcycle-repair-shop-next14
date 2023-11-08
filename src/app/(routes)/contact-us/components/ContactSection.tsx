import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import Divider from './Divider'
import SectionTitle from './SectionTitle'

export default function ContactSection() {
	return (
		<div className="flex flex-col gap-8 sm:gap-14  mt-2 sm:mt-10 w-full">
			<SectionTitle />
			<div className='flex flex-col w-full xl:flex-row '>
				<ContactInfo />
                <Divider/>
				<ContactForm />
			</div>
		</div>
	)
}
