import React from "react";
import "./OfferCards.css";
import service from "../../../images/Our-Offers/customer-service.png";

const OfferCards = ({ image, title }) => {
	return (
		<div className="offer-card">
			<img src={image} alt="" srcset="" />
			<h5>{title}</h5>
		</div>
	);
};

export default OfferCards;
