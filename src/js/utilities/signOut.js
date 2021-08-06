// Declare a function to signOut
import firebase from "firebase/app";

export const singOut = async () => {
	try {
		await firebase.auth().signOut();
	} catch (e) {
		throw new Error("Error singing out");
	}
};
