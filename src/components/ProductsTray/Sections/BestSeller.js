import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import bestSeller1 from "../../../images/BestSeller/bestseller.png";
import bestSeller2 from "../../../images/BestSeller/bestseller1.png";
import bestSeller3 from "../../../images/BestSeller/bestseller2.png";
import bestSeller4 from "../../../images/BestSeller/bestseller4.png";

const BestSeller = () => {
	const bestSellerProductsList = [
		{
			image: bestSeller1,
			title: "Premium Office chair",
			pprice: "1200",
			cprice: "1100",
		},
		{
			image: bestSeller2,
			title: "Antique leather Sofa",
			pprice: "900",
			cprice: "850",
		},
		{
			image: bestSeller3,
			title: "Stainless Office chair",
			pprice: "290",
			cprice: "250",
		},
		{
			image: bestSeller4,
			title: "Premium deck chair",
			pprice: "890",
			cprice: "750",
		},
	];
	return (
		<div className="products-tray">
			{bestSellerProductsList.map(({ image, title, pprice, cprice }) => (
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

export default BestSeller;
