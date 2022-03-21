import React from "react";
import { Button } from "react-bootstrap";
import "./GuaranteeBanner.css";

const GuaranteeBanner = () => {
	return (
		<div className="guarantee-banner-container">
			<div className="guarantee-banner-content">
				<h2>Every Piece Comes With a 10 Years of Guarantee</h2>
				<p>
					All Products Sale Up To{" "}
					<span className="guarantee-banner-subtext-span">50% Off</span>
				</p>
				<Button className="guarantee-banner-button">Shop Now</Button>
			</div>
		</div>
	);
};

export default GuaranteeBanner;
