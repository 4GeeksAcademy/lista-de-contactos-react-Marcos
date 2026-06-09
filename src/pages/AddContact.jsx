import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddContact() {

	const navigate = useNavigate();

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});

	const handleChange = (event) => {

		setContact({
			...contact,
			[event.target.name]: event.target.value
		});
	};

	const saveContact = async (event) => {

		event.preventDefault();

		await fetch(
			"https://playground.4geeks.com/contact/agendas/marcos/contacts",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(contact)
			}
		);

		navigate("/");
	};

	return (

		<div className="container">

			<h1 className="text-center mt-5">
				Add a new contact
			</h1>

			<form onSubmit={saveContact}>

				<input
					type="text"
					name="name"
					placeholder="Full Name"
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<input
					type="email"
					name="email"
					placeholder="Email"
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<input
					type="text"
					name="phone"
					placeholder="Phone"
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<input
					type="text"
					name="address"
					placeholder="Address"
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<button className="btn btn-primary w-100">
					Save
				</button>

			</form>

			<Link to="/">
				or get back to contacts
			</Link>

		</div>

	);
}