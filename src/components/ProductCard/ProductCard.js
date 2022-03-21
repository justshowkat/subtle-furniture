import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import "./ProductCard.css";

const ProductCard = ({ image, title, pprice, cprice }) => {
	return (
		<div>
			<Card className="product-card">
				<Card.Img className="product-card-image" variant="top" src={image} />
				<Card.Body>
					<h3 className="product-card-heading">{title}</h3>
					<div className="product-card-price-section">
						<h5>
							<span className="product-card-previous-price">{pprice}$</span> -
							{cprice}$
						</h5>
						<div className="product-card-add-cart-icon">
							<FontAwesomeIcon icon={faCartPlus} />
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ProductCard;
