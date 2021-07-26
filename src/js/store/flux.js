const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getApiContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/marcelo21")
					.then(response => response.text())
					.then(result => {
						getStore(setStore({ contacts: result }));
					});
			}
		}
	};
};

export default getState;
