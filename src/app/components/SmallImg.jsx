import Image from "next/image";
import Mint from "../../../public/mint.png";
import Navy from "../../../public/navy.png";
import ocean from "../../../public/ocean.png";

const SmallImg = () => {
	return (
		<div className="small-img">
			<div>
				<Image src={Navy} alt="Navy" />
				<span></span>
			</div>
			<div>
				<Image src={Mint} alt="Mint" />
				<span></span>
			</div>
			<div>
				<Image src={ocean} alt="Ocean" />
				<span></span>
			</div>
		</div>
	);
};

export default SmallImg;
