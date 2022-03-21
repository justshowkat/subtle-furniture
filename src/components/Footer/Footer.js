import { faSortNumericUpAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-newsletter">
				<div className="footer-newsletter-texts">
					<p>Subscribe To Our</p>
					<h2>NEWSLETTER</h2>
				</div>
				<div className="footer-newsletter-form">
					<div className="footer-form-fields">
						<Form.Control className="footer-form-text-field" type="text" />
						<a href="#" className="footer-form-button">
							Submit
						</a>
					</div>
				</div>
			</div>
			<div className="footer-brand">
				<h1 className="footer-brand-name">Subtle Furniture</h1>
			</div>
		</div>
	);
};

export default Footer;
