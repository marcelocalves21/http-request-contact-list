import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});
	return (
		<div className="container">
			<p className="text-right my-3">
				<Link className="btn btn-success" to="/add">
					Add new contact
				</Link>
			</p>
			<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
				<ul className="list-group pull-down" id="contact-list">
					{store.contacts &&
						store.contacts.map((e, i) => (
							<ContactCard key={i} element={e} index={i} onDelete={() => setState({ showModal: true })} />
						))}
				</ul>
			</div>
		</div>
	);
};
