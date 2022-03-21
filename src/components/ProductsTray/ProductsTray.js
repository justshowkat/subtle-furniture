import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NewArrival from "./Sections/NewArrival";
import "./ProductsTray.css";
import BestSeller from "./Sections/BestSeller";
import TrendingItem from "./Sections/TrendingItem";

const ProductsTray = () => {
	const [activeTab, setActiveState] = useState(1);
	const clickHandler = (tabNo) => {
		setActiveState(tabNo);
	};
	return (
		<Container className="products-tray-container">
			<div className="products-tray-nav">
				<h2
					onClick={() => clickHandler(1)}
					id={activeTab === 1 && "products-tray-nav-active-item"}
				>
					New Arrivals
				</h2>
				<h2
					onClick={() => clickHandler(2)}
					id={activeTab === 2 && "products-tray-nav-active-item"}
				>
					Best Sellers
				</h2>
				<h2
					onClick={() => clickHandler(3)}
					id={activeTab === 3 && "products-tray-nav-active-item"}
				>
					Trending Items
				</h2>
			</div>
			<div className="products-tray-products">
				{activeTab === 1 && <NewArrival />}
				{activeTab === 2 && <BestSeller />}
				{activeTab === 3 && <TrendingItem />}
			</div>
		</Container>
	);
};

export default ProductsTray;
