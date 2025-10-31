"use client";

const ColorPicker = ({ selectedImage, setSelectedImage }) => {
	return (
		<div className="color-picker">
			<button className={`color-btn navy ${selectedImage === "navy" ? "active" : ""}`} onClick={() => setSelectedImage("navy")}></button>
			<span className="divider"></span>
			<button className={`color-btn mint ${selectedImage === "mint" ? "active" : ""}`} onClick={() => setSelectedImage("mint")}></button>
			<span className="divider"></span>
			<button className={`color-btn ocean ${selectedImage === "ocean" ? "active" : ""}`} onClick={() => setSelectedImage("ocean")}></button>
		</div>
	);
};

export default ColorPicker;
