// Using useLocation(), useNavigate()
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Blog = () => {
	const location = useLocation();
	const { title, body } = location.state;

	const redirect = useNavigate();

	return (
		<div className="container">
			<h1 className="my-5">{title}</h1>
			<p>{body.slice(0, 200)}</p>
			<p>{body.slice(201, 400)}</p>
			<p>{body.slice(401, 6000)}</p>
			<button
				onClick={() => {
					redirect("/blogs");
				}}
			>
				Back to Blogs Page
			</button>
		</div>
	);
};

export default Blog;
