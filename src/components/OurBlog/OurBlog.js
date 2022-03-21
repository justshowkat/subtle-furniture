import React from "react";
import BlogCard from "./BlogCard/BlogCard";
import "./OurBlog.css";
import blog1 from "../../images/latets-blog/blog1.png";
import blog2 from "../../images/latets-blog/blog2.png";
import blog3 from "../../images/latets-blog/blog3.png";
import blog4 from "../../images/latets-blog/blog4.jpg";

const OurBlog = () => {
	const blogList = [
		{
			img: blog1,
			category: "interior, decoration, home",
			title: "our best tips for your interior",
		},
		{
			img: blog2,
			category: "interior, living room, home",
			title: "10 tips for professional living room decoration",
		},
		{
			img: blog3,
			category: "simple, decoration, minimalistic",
			title: "Simple is always better, here's how",
		},
		{
			img: blog4,
			category: "elegent, decoration, kitchen, dinning",
			title: "Which furniture fit in your dinning room?",
		},
	];
	return (
		<div className="our-blog-section">
			<h1>Our Blog</h1>
			<div className="our-blog-container">
				{blogList.map(({ img, category, title }) => (
					<BlogCard image={img} category={category} title={title} />
				))}
			</div>
		</div>
	);
};

export default OurBlog;
