import { initializeApp } from 'firebase/app';
import { getFirestore, } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAW1sXiDRI6i40iHeyllwzSj1R4CaWKr3M",
    authDomain: "linkedin-f780a.firebaseapp.com",
    projectId: "linkedin-f780a",
    storageBucket: "linkedin-f780a.appspot.com",
    messagingSenderId: "486047277001",
    appId: "1:486047277001:web:fc6a43d4158b5505971218"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(firebaseApp)

export {db , auth}