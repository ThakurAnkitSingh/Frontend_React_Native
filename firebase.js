import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';




const firebaseConfig = {
    apiKey: "AIzaSyBx5BBGEXImjg3N7ap-ba5uEsoYeB1ibZ8",
    authDomain: "react-native-assignment-4f314.firebaseapp.com",
    projectId: "react-native-assignment-4f314",
    storageBucket: "react-native-assignment-4f314.appspot.com",
    messagingSenderId: "952075870370",
    appId: "1:952075870370:web:957186a9b83d361d48b7fb",
    measurementId: "G-0L4R9DV55E"
};

// // Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = app.firestore();


