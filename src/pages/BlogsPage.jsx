// Using state from useLocation
import React from "react";
import { Link } from "react-router-dom";

import BlogDatas from "../data";

const truncateString = (str, num) => {
	if (str.length > num) return str.slice(0, num) + " .... ";
	else return str;
};

const BlogsPage = () => {
	return (
		<>
			<h1 className="h1 text-center my-4">Find Out My Blogs</h1>
			<div className="container px-4">
				<section className="row gx-5 gy-4 p-4">
					{BlogDatas.map((blog) => {
						const { id, title, body } = blog;
						return (
							<article
								key={id}
								className="col-12 col-lg-6 col-md-12 p-4"
							>
								<div className="p-4 content-div">
									<h2>{title}</h2>
									<p className="pe-3 mt-4">
										{truncateString(body, 200)}
										<Link
											className="blog-title-link"
											to={`/blogs/${title.toLowerCase()}`}
											state={{ title, body }}
										>
											Learn More
										</Link>
									</p>
								</div>
							</article>
						);
					})}
				</section>
			</div>
		</>
	);
};

export default BlogsPage;
