

type HeadingProps = {
	title: string
	description: string
}
export default function Heading({ title, description }: HeadingProps) {
	return (
		<div className="mt-14 mb-14" >
			<h2 className="text-center text-4xl font-bold tracking-tight">{title}</h2>
			<p className=" text-sm text-muted-foreground">{description}</p>
		</div>
	)
}
