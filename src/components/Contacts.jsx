import { Link } from "react-router-dom";
import { usestore } from "../store";

export default function Contacts({ contact }) {
	const { dispatch } = usestore();

	const deleteContact = async () => {
		await fetch(
			" `https://playground.4geeks.com/contact/agendas/marcos/contacts/${contact.id}`",
			{
				method: "DELETE"
			}
		);

		dispatch({
			type: "delete_contact",
			payload: contact.id
		});
	};

	return (
		<div className="card mb-3">
			<div className="card-body d-flex">

				<img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-88409-800.jpg"
					className=" rounded-circle me-4"
					width="120"
				/>
				<div>
					<h4>{contact.name}</h4>
					<p>{contact.address}</p>
					<p>{contact.phone}</p>
					<p>{contact.email}</p>
				</div>

				<div className="ms-auto">
					<Link
						to={`/edit-contact/${contact.id}`}
						className="btn btn-warning me-2"
					>
						Editar
					</Link>
					<button
						className="btn btn-danger"
						onClick={deleteContact}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
}