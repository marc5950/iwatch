import Image from "next/image";
import Navy from "../../../public/navy.png";
import Mint from "../../../public/mint.png";
import Ocean from "../../../public/ocean.png";

const BigImg = ({ selectedImage }) => {
	const getImageSrc = () => {
		switch (selectedImage) {
			case "navy":
				return Navy;
			case "mint":
				return Mint;
			case "ocean":
				return Ocean;
			default:
				return Navy;
		}
	};

	return <Image className="big-img" src={getImageSrc()} alt={selectedImage} />;
};

export default BigImg;
