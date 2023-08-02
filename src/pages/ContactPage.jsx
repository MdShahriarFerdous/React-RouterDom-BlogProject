import React from "react";
// secondly importing useNavigate for redirect
import { useNavigate } from "react-router-dom";

import "../assets/css/styles.css";

const ContactPage = () => {
	// thirdly taking a variable to assign the useNavigate()
	const redirect = useNavigate();
	return (
		<div className="container text-center">
			<h1 className="m-5">This is Contact Page</h1>
			<p className="px-4">
				Commodo est est sunt nulla ex non magna proident labore Lorem
				incididunt commodo sunt. Esse commodo sint enim cupidatat
				pariatur ea duis in. Elit fugiat irure occaecat est veniam
				proident laboris. Adipisicing exercitation sit voluptate id elit
				qui deserunt cupidatat. Elit aliqua tempor exercitation officia
				velit reprehenderit nisi eiusmod aliquip veniam sint laboris
				Lorem velit. Consectetur mollit nulla eiusmod elit exercitation
				irure mollit et commodo.
			</p>
			{/* First taking a button for redirect */}
			{/* Fourthly taking onClick to use the redirect function */}
			<button
				onClick={() => {
					redirect("/");
				}}
			>
				Back to Home
			</button>
		</div>
	);
};

export default ContactPage;
