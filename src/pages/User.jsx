import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [userData, setUserData] = useState({
		name: "",
		age: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUserData((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchParams(userData);
		// setSearchParams({name:name, age: age});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={userData.name}
					onChange={handleChange}
					name="name"
					type="text"
					placeholder="name"
				/>
				<br />
				<br />
				<br />
				<input
					value={userData.age}
					name="age"
					onChange={handleChange}
					type="text"
					placeholder="age"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default User;
