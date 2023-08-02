// Using Formik
import { useFormik } from "formik";
import { object, string } from "yup";

const SignUpPage = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: object({
			name: string().min(8, "Name must be 8 characters long!").required(),
			email: string().email("Must be a valid email!").required(),
			password: string()
				.min(6, "Password Must be 6 characters long!")
				.required(),
		}),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			resetForm({
				values: "",
			});
		},
	});

	return (
		<div className="container text-center ">
			<h1 className="mt-5">SignUp</h1>
			<form className="mt-3 p-5" onSubmit={formik.handleSubmit}>
				{/* <label htmlFor="name">Enter Your Name:</label> */}
				<input
					id="name"
					onChange={formik.handleChange}
					value={formik.values.name}
					name="name"
					type="text"
					placeholder="Your Name"
				/>
				{formik.touched.name && formik.errors.name && (
					<span>{formik.errors.name}</span>
				)}
				{/* <label htmlFor="email">Enter Your Email</label> */}
				<input
					id="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					name="email"
					type="email"
					placeholder="Your Email"
				/>
				{formik.touched.email && formik.errors.email && (
					<span>{formik.errors.email}</span>
				)}
				{/* <label htmlFor="password">Enter Your Password</label> */}
				<input
					id="password"
					name="password"
					type="Password"
					placeholder="Your Password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password && (
					<span>{formik.errors.password}</span>
				)}
				<button className="btn btn-primary mt-3" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default SignUpPage;
