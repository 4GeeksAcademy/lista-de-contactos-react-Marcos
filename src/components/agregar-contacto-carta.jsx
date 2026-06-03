import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgregarContactoCarta() {
	const navigate = useNavigate();
	const [ contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		addresss: ""
	});

	const handleChange = (event) => {
		setContact({
			...contact,
			[event.target.name]:
			event.target.value
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		await fetch("https://playground.4geeks.com/contact/agendas/marcos/contacts")
	}
}