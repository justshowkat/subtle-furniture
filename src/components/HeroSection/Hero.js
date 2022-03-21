import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import TopBar from "../TopBar/TopBar";
import "./hero.css";
import HeroImage from "../../images/Hero-images/sofa promotional headerhero images.png";

const Hero = () => {
	return (
		<div className="hero-custom-container">
			<TopBar></TopBar>
			<Row className="hero-row">
				<Col sm={12} md={12} lg={6} className="hero-col-one">
					<div className="hero-col-one-content">
						<div className="hero-col-one-content-offer">
							<h6>sale off 50%</h6>
						</div>
						<h1>Final sale for 2022</h1>
						<h5>Grab the best offer before it ends</h5>
						<Button>Shop Now</Button>
					</div>
				</Col>
				<Col className="hero-col-two" sm={12} md={12} lg={6}>
					<img className="hero-image" src={HeroImage} alt="" srcset="" />
				</Col>
			</Row>
		</div>
	);
};

export default Hero;
