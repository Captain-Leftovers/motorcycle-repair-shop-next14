import MainContainer from './ui/MainContainer'

export default function Footer() {
	return (
		<MainContainer className="sticky top-0 bg-amber-300 z-50 grow-0">
			<footer className="bg-amber-300">
				<div className="mx-auto py-6">
					<p className="text-center text-xs text-black">
						Bahamata Service &copy; {new Date().getFullYear()} Motorcycle
						repair
					</p>
				</div>
			</footer>
		</MainContainer>
	)
}

