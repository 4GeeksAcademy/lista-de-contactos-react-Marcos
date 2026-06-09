import { useEffect } from "react";
import { Link } from "react-router-dom";
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
			payload: data.contacts || []
		});
	};

	useEffect(() => {
		getContacts();
	}, []);

	return (

		<div className="container mt-5">

			<div className="text-end mb-4">

				<Link
					to="/add-contact"
					className="btn btn-success"
				>
					Add new contact
				</Link>

			</div>

			{
				store.contacts.map(contact => (

					<ContactCard
						key={contact.id}
						contact={contact}
					/>

				))
			}

		</div>

	);
};