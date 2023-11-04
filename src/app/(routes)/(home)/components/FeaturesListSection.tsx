import Image from 'next/image'
import featureListImage from '/public/images/featuresList.jpg'
import MainContainer from '@/components/ui/MainContainer'

export default function FeaturesListSection() {
	return (
		<MainContainer className="sticky top-24 z-20 bg-slate-600 ">
			<section className=" flex justify-between h-[calc(100vh-6rem)] text-text-light py-10">
				<div className="w-[47%] relative">
					<Image
						src={featureListImage}
						fill
						alt=""
						sizes="100%"
						className="object-cover object-top"
					/>
				</div>
				<ul className="w-[47%] flex flex-col justify-around">
					<li>
						<h2 className="text-4xl">
							Experienced Technicians, Quality Parts
						</h2>
						<p>
							Our repair shop is staffed with experienced
							technicians who are skilled in handling all types of
							motorcycle repairs. We use only high-quality parts
							to ensure the best performance and longevity for
							your bike. With our expertise, you can trust that
							your motorcycle is in good hands.
						</p>
					</li>
					<li>
						<h1 className="text-4xl">Fast Service</h1>
						<p>
							We understand that you want to get back on the road
							as soon as possible. That&apos;s why we prioritize
							fast service and strive to complete repairs in a
							timely manner. Our efficient processes and dedicated
							team ensure that you won&apos;t have to wait long to
							get your motorcycle back in top shape.
						</p>
					</li>
					<li>
						<h1 className="text-4xl">Motorcycles for Sale</h1>
						<p>
							We also sell motorcycles. If you are looking for a
							motorcycle, check out our inventory.If you have any
							questions about our inventory, feel free to contact
							us.
						</p>
					</li>
				</ul>
			</section>
		</MainContainer>
	)
}
