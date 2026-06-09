import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditContact() {

	const { id } = useParams();

	const navigate = useNavigate();

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		address: ""
	});

	const getContact = async () => {

		const response = await fetch(
			"https://playground.4geeks.com/contact/agendas/marcos/contacts"
		);

		const data = await response.json();

		const selected = data.contacts.find(
			item => item.id == id
		);

		setContact(selected);
	};

	useEffect(() => {
		getContact();
	}, []);

	const handleChange = (event) => {

		setContact({
			...contact,
			[event.target.name]: event.target.value
		});
	};

	const updateContact = async (event) => {

		event.preventDefault();

		await fetch(
			`https://playground.4geeks.com/contact/agendas/marcos/contacts/${id}`,
			{
				method: "PUT",
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
				Edit Contact
			</h1>

			<form onSubmit={updateContact}>

				<input
					name="name"
					value={contact?.name || ""}
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<input
					name="email"
					value={contact?.email || ""}
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<input
					name="phone"
					value={contact?.phone || ""}
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<input
					name="address"
					value={contact?.address || ""}
					className="form-control mb-3"
					onChange={handleChange}
				/>

				<button className="btn btn-warning w-100">
					Update
				</button>

			</form>

		</div>

	);
}