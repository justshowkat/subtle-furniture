import React from "react";
import OfferCards from "./OfferCards/OfferCards";
import "./OurOffer.css";
import DeliveryImg from "../../images/Our-Offers/free-delivery.png";
import ServiceImg from "../../images/Our-Offers/customer-service.png";
import DiscountImg from "../../images/Our-Offers/discount.png";
import PaymentImg from "../../images/Our-Offers/money.png";

const OurOffer = () => {
	const OfferCardsList = [
		{
			img: DeliveryImg,
			title: "Free Home Delivery",
		},
		{
			img: PaymentImg,
			title: "Secure Payment",
		},
		{
			img: DiscountImg,
			title: "Big Discounts",
		},
		{
			img: ServiceImg,
			title: "24 x 7 Online Support",
		},
	];
	return (
		<div className="our-offer">
			{OfferCardsList.map(({ img, title }) => (
				<OfferCards image={img} title={title} />
			))}
		</div>
	);
};

export default OurOffer;
