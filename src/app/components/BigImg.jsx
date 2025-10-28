import Image from "next/image";
import Navy from "../../../public/navy.png";

const BigImg = () => {
	return <Image className="big-img" src={Navy} alt="Navy" />;
};

export default BigImg;
