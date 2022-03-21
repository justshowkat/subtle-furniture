import React from "react";
import { Card } from "react-bootstrap";
import "./BlogCard.css";

const BlogCard = ({ image, category, title }) => {
	return (
		<div>
			<Card className="blog-card">
				<Card.Img variant="top" src={image} />
				<div className="blog-card-content">
					<p>{category}</p>
					<h3>{title}</h3>
					<a href="#" className="blog-card-button">
						Read More
					</a>
				</div>
			</Card>
		</div>
	);
};

export default BlogCard;
