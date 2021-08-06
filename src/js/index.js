//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

// firebase
var firebaseConfig = {
	apiKey: "AIzaSyCnA4GgmY_JfwVgDFlCziUZ6O8IRW4KS_Q",
	authDomain: "auth-test-b70e7.firebaseapp.com",
	projectId: "auth-test-b70e7",
	storageBucket: "auth-test-b70e7.appspot.com",
	messagingSenderId: "315619237157",
	appId: "1:315619237157:web:cfdb1c138c8cc67ec14ecc",
	measurementId: "G-EH8D5T5PM2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
