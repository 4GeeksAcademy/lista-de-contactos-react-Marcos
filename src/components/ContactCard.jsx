import { Link } from "react-router-dom";

export default function ContactCard({ contact }) {

	const deleteContact = async () => {

		await fetch(
			`https://playground.4geeks.com/contact/agendas/marcos/contacts/${contact.id}`,
			{
				method: "DELETE"
			}
		);

		window.location.reload();
	};

	return (

		<div className="card mb-3">

			<div className="card-body">

				<div className="row align-items-center">

					<div className="col-2">

						<img
							src="https://picsum.photos/200"
							className="rounded-circle img-fluid"
							alt="contact"
						/>

					</div>

					<div className="col-8">

						<h3>{contact.name}</h3>

						<p>📍 {contact.address}</p>

						<p>📞 {contact.phone}</p>

						<p>✉️ {contact.email}</p>

					</div>

					<div className="col-2 text-end">

						<Link
							to={`/edit-contact/${contact.id}`}
							className="btn btn-light me-2"
						>
							✏️
						</Link>

						<button
							className="btn btn-light"
							onClick={deleteContact}
						>
							🗑️
						</button>

					</div>

				</div>

			</div>

		</div>
	);
}