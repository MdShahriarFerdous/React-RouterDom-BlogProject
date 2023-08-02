import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavMenu from "./components/NavMenu";
import BlogsPage from "./pages/BlogsPage";
import Blog from "./pages/Blog";
import User from "./pages/User";
import SignUpPage from "./pages/SignUpPage";
import FAQPage from "./pages/FAQPage";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavMenu />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/blogs" element={<BlogsPage />} />
					<Route path="/blogs/:title" element={<Blog />} />
					<Route path="/user" element={<User />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/faq" element={<FAQPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
