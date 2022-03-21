import React from "react";
import "./FeaturedProduct.css";
import FeaturedProductCard from "./FeaturedProductCard/FeaturedProductCard";
import fimage1 from "../../images/featured-product/fimage1.png";
import fimage2 from "../../images/featured-product/fimage2.png";
import fimage3 from "../../images/featured-product/fimage3.png";
import fimage4 from "../../images/featured-product/fimage4.png";

const FeaturedProduct = () => {
	const featuredProductsList = [
		{ fimage: fimage1, title: "Slick Office Chairs", price: "200-1000" },
		{ fimage: fimage2, title: "For comfortable Home", price: "100-500" },
		{ fimage: fimage3, title: "Resturent and Dinning", price: "50-300" },
		{
			fimage: fimage4,
			title: "For outdoor and Garden",
			price: "20-200",
		},
	];
	return (
		<div className="featured-product-container">
			{featuredProductsList.map(({ fimage, title, price }) => (
				<FeaturedProductCard
					image={fimage}
					title={title}
					price={price}
				></FeaturedProductCard>
			))}
		</div>
	);
};

export default FeaturedProduct;
