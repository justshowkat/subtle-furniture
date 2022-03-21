import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import "./ProductsTray.css";
import newArr1 from "../../../images/latest-products/image 1166latest products.png";
import newArr2 from "../../../images/latest-products/image 1168latest products.png";
import newArr3 from "../../../images/latest-products/image 15latest products.png";
import newArr4 from "../../../images/latest-products/image 23latest products.png";

const NewArrival = () => {
	const newArrivalProductsList = [
		{
			image: newArr1,
			title: "Classic leather chair",
			pprice: "120",
			cprice: "70",
		},
		{
			image: newArr2,
			title: "kitchen stool",
			pprice: "90",
			cprice: "50",
		},
		{
			image: newArr3,
			title: "Wooden Deck chair",
			pprice: "290",
			cprice: "250",
		},
		{
			image: newArr4,
			title: "Wooden reading chair",
			pprice: "590",
			cprice: "550",
		},
	];
	return (
		<div className="products-tray">
			{newArrivalProductsList.map(({ image, title, pprice, cprice }) => (
				<ProductCard
					image={image}
					title={title}
					pprice={pprice}
					cprice={cprice}
				/>
			))}
		</div>
	);
};

export default NewArrival;
