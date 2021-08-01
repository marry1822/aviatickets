import React from "react";
import s from "../Carousel/Carousel.module.css";
import image1 from "../../assets/Rectangle 23.png";
import image2 from "../../assets/Rectangle 24.png";
import image3 from "../../assets/Rectangle 28.png";

const Carousel = () => {
	return (
		<div className={s.slider}>
			<div className={s.slides}>
				<div className={s.slide}>
					<img src={image1} alt="карусель" />
				</div>
				<div className={s.slide}>
					<img src={image2} alt="карусель" />
				</div>
				<div className={s.slide}>
					<img src={image3} alt="карусель" />
				</div>
				<div className={s.slide}>
					<img src={image1} alt="карусель" />
				</div>
			</div>
		</div>
	);
};

export default Carousel;
