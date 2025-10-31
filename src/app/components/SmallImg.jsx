"use client";
import Image from "next/image";
import Mint from "../../../public/mint.png";
import Navy from "../../../public/navy.png";
import ocean from "../../../public/ocean.png";

const SmallImg = ({ setSelectedImage }) => {
	return (
		<div className="small-img">
			<div>
				<Image src={Navy} alt="Navy" onClick={() => setSelectedImage("navy")} />
				<span></span>
			</div>
			<div>
				<Image src={Mint} alt="Mint" onClick={() => setSelectedImage("mint")} />
				<span></span>
			</div>
			<div>
				<Image src={ocean} alt="Ocean" onClick={() => setSelectedImage("ocean")} />
				<span></span>
			</div>
		</div>
	);
};

export default SmallImg;
