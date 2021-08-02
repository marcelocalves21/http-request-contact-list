import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";
import { Modal } from "../component/Modal";

export const ContactCard = ({ element, index, onDelete, match }) => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);
	let history = useHistory();

	return (
		<>
			<li className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img
							src={MikePhoto}
							alt="Mike Anamendolla"
							className="rounded-circle mx-auto d-block img-fluid"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className="float-right">
							<Link to={"/edit/" + index}>
								<button className="btn">
									<i className="fas fa-pencil-alt mr-3" />
								</button>
							</Link>
							<button className="btn" onClick={() => onDelete(() => setState({ showModal: true }))}>
								<i className="fas fa-trash-alt" />
							</button>
						</div>
						<label className="name lead">{element.full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">{element.address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title={element.phone}
						/>
						<span className="text-muted small">{element.phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">{element.email}</span>
					</div>
				</div>
			</li>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} id={element} />
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	match: PropTypes.object,
	element: PropTypes.object,
	index: PropTypes.number,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
