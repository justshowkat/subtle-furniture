import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import trending1 from "../../../images/Trending-products/trending1.png";
import trending2 from "../../../images/Trending-products/trending2.png";
import trending3 from "../../../images/Trending-products/trending3.png";
import trending4 from "../../../images/Trending-products/trending4.png";

const TrendingItem = () => {
	const trendingProductsList = [
		{
			image: trending1,
			title: "Half egg wicker chair",
			pprice: "1299",
			cprice: "1150",
		},
		{
			image: trending2,
			title: "Oval wicker chair",
			pprice: "1100",
			cprice: "900",
		},
		{
			image: trending3,
			title: "Mehogoni wooden sofa",
			pprice: "380",
			cprice: "300",
		},
		{
			image: trending4,
			title: "Office lobby chair",
			pprice: "190",
			cprice: "150",
		},
	];
	return (
		<div className="products-tray">
			{trendingProductsList.map(({ image, title, pprice, cprice }) => (
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

export default TrendingItem;
