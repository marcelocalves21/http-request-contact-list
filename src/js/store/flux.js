const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			updateContact: {}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getApiContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/marcelo21")
					.then(response => response.json())
					.then(result => {
						getStore(setStore({ contacts: result }));
					});
			},
			addApiContact: (fullName, email, phone, address) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "marcelo21",
						address: address,
						phone: phone
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/marcelo21")
						.then(response => response.json())
						.then(result => {
							getStore(setStore({ contacts: result }));
						});
				});
			},
			updateApiContact: (id, fullName, email, phone, address) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "marcelo21",
						address: address,
						phone: phone
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/marcelo21")
						.then(response => response.json())
						.then(result => {
							getStore(setStore({ contacts: result }));
						});
				});
			},
			deleteApiContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/marcelo21")
						.then(response => response.json())
						.then(result => {
							getStore(setStore({ contacts: result }));
						});
				});
			}
		}
	};
};

export default getState;
