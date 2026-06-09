import { useEffect } from "react";
import ContactCard from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const getContacts = async () => {
		const response = await fetch(
			"https://playground.4geeks.com/contact/agendas/marcos/contacts"
		);

		const data = await response.json();

		dispatch({
			type: "set_contacts",
			payload: data.contacts
		});
	};

	useEffect(() => {
		getContacts();
	}, []);

	return (
		<div className="container mt-4">

			{store.contacts.length === 0 ? (
				<h2 className="text-center">
					No contacts found
				</h2>
			) : (
				store.contacts.map(contact => (
					<ContactCard
						key={contact.id}
						contact={contact}
					/>
				))
			)}

		</div>
	);
};