import { Metadata } from "next"


export const metadata: Metadata = {
	title: "Bahamata Service",
	description: "Ремонт на мотоциклети",
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>
}
