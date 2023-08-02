import React from "react";
import FAQData from "../FAQData";
import FAQ from "../components/FAQ";

const FAQPage = () => {
	return (
		<div className="container mt-5">
			<h1 className=" text-center m-5">FAQ</h1>
			{FAQData.map((faq, index) => {
				return <FAQ key={faq.id} {...faq} index={index} />;
			})}
		</div>
	);
};

export default FAQPage;
