"use client";
import { useState } from "react";

import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import ColorPicker from "./ColorPicker";

const WatchShowcase = () => {
	const [selectedImage, setSelectedImage] = useState("navy");
	return (
		<div className="watch-showcase">
			<BigImg selectedImage={selectedImage} />
			<ColorPicker selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
			<SmallImg setSelectedImage={setSelectedImage} />
		</div>
	);
};

export default WatchShowcase;
