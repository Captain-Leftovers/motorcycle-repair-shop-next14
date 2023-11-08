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
				<ul className="w-[47%] flex flex-col justify-around pr-4">
					<li>
						<h2 className="text-4xl mb-2">
							Опитни техници, качествени части
						</h2>
						<p>
							В нашия ремонтен център имаме опитни техници,
							специализирани в ремонтите на всички видове
							мотоциклети. При ремонтите използваме само
							висококачествени части, които гарантират най-добрата
							производителност и дълготрайност на вашия
							мотоциклет. С нашия опит, може да се доверите, че
							вашият мотоциклет е в добри ръце.
						</p>
					</li>
					<li>
						<h1 className="text-4xl mb-2">Бързо обслужване</h1>
						<p>
							Разбираме, че искате да се върнете на пътя възможно
							най-скоро. Затова ние отдаваме приоритет на бързото
							обслужване и се стремим да завършим ремонтите
							навреме. Нашите ефективни процеси и предан екип
							гарантират, че няма да трябва да чакате дълго, за да
							получите мотоциклета си в отлично състояние.
						</p>
					</li>
					<li>
						<h1 className="text-4xl mb-2">Мотоциклети на продажба</h1>
						<p>
						Също така продаваме мотоциклети. Ако търсите мотоциклет, проверете нашата наличност. Ако имате въпроси, не се колебайте да се свържете с нас.
						</p>
					</li>
				</ul>
			</section>
		</MainContainer>
	)
}
