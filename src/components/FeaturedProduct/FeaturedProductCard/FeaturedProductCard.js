import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FeaturedProductCard.css";

const FeaturedProductCard = ({
	image,
	title = "featured product",
	price = "0$",
}) => {
	return (
		<div className="featured-product-card">
			<div className="featured-product-card-image">
				<img src={image} alt="featured-product" />
			</div>
			<div className="featured-product-card-details">
				<a href="#">
					<h5 className="featured-product-card-details-heading">{title}</h5>
				</a>
				<div className="featured-product-card-price-section">
					<h4>{price}$</h4>
					<FontAwesomeIcon className="tool-bar-icon" icon={faHeart} />
				</div>
			</div>
		</div>
	);
};

export default FeaturedProductCard;
