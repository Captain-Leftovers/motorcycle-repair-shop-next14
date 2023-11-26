

type HeadingProps = {
	title: string
	description: string
}
export default function Heading({ title, description }: HeadingProps) {
	return (
		<div className="mt-10 mb-14" >
			<h2 className="text-center text-2xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
			<p className=" text-sm text-muted-foreground">{description}</p>
		</div>
	)
}
