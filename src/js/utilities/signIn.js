// Declare a function to signIn
import firebase from "firebase/app";

export const singIn = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
};
