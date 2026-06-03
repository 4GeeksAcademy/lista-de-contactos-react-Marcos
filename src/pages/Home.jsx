import { useEffect } from "react";
import { useStore } from "../store"
import Contacts from "../components/Contacts";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, dispatch } = useStore();

	useEffect(() => {
		getContacts();
	}, []);

	const getContacts = async () => {
		const response = await fetch("https://playground.4geeks.com/contact/agendas/marcos/contacts");
		const data = await response.json();

		dispatch({
			type: "set_contacts",
			payload: data
		});
	};

	return (
		<div className="container mt-4">
			<div className="text-end mb-3">
				<Link
					to="/agregar-contactos"
					className="btn btn-success">
					add Contact
				</Link>
			</div>

			{
				store.Contacts.map(contact => (
					<Contacts
						key={contact.id}
						contact={contact}
					/>
				))
			}
		</div>
	);
};
