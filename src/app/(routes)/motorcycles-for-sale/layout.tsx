import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {

	return <div className="h-screen flex flex-col">
	<Navbar className="bg-white bg-opacity-80 backdrop-blur-md" />
	{children}
	<Footer />
	</div>
}
