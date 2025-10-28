import Image from "next/image";
import Heading from "./components/Heading";
import BigImg from "./components/BigImg";
import ColorPicker from "./components/ColorPicker";
import CTA from "./components/CTA";
import PageSwitcher from "./components/PageSwitcher";
import SmallImg from "./components/SmallImg";

export default function Home() {
	return (
		<main className="grid-container">
			<Heading />
			<BigImg />
			<ColorPicker />
			<CTA />
			<PageSwitcher />
			<SmallImg />
		</main>
	);
}
