import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/css/styles.css";

const NavMenu = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				{" "}
				<a className="navbar-brand">BlogTime</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					{" "}
					<span className="navbar-toggler-icon" />{" "}
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo02"
				>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item me-4">
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								Home
							</NavLink>{" "}
						</li>

						<li className="nav-item me-4">
							<NavLink
								to="/about"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								About
							</NavLink>{" "}
						</li>

						<li className="nav-item me-4">
							{" "}
							<NavLink
								to="/contact"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								Contact
							</NavLink>{" "}
						</li>

						<li className="nav-item me-4">
							{" "}
							<NavLink
								to="/blogs"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								Blogs
							</NavLink>{" "}
						</li>

						<li className="nav-item me-4">
							{" "}
							<NavLink
								to="/sign-up"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								SignUp
							</NavLink>{" "}
						</li>
						<li className="nav-item me-4">
							{" "}
							<NavLink
								to="/faq"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								FAQs
							</NavLink>{" "}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavMenu;
