import Image from "next/image";
import Heading from "./components/Heading";
import WatchShowcase from "./components/WatchShowcase";
import CTA from "./components/CTA";
import PageSwitcher from "./components/PageSwitcher";

export default function Home() {
	return (
		<main className="grid-container">
			<Heading />
			<WatchShowcase />
			<CTA />
			<PageSwitcher />
		</main>
	);
}
