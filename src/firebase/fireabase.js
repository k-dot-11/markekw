// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDRarkpAmt41EqzVFAXSs_ribG5MfxUlrY',
	authDomain: 'markekw.firebaseapp.com',
	projectId: 'markekw',
	storageBucket: 'markekw.appspot.com',
	messagingSenderId: '303065323985',
	appId: '1:303065323985:web:b87515ba3717f3a490a8f0',
	measurementId: 'G-NEPV0X4S5M'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
