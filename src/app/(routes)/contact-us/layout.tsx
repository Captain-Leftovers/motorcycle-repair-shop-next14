import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Bahamata Service - за контакт",
	description: "Свържи се с нас",
}
export default function Layout({ children }: { children: React.ReactNode }) {

	return <div className="h-screen flex flex-col">
	<Navbar className="bg-white bg-opacity-80 backdrop-blur-md" />
	{children}
	<Footer/>
	</div>
}
