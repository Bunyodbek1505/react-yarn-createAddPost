import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQB6mEreADWlZQN_iHSmseS7eWqm1mQZo",
    authDomain: "blog-react-project-5dfea.firebaseapp.com",
    projectId: "blog-react-project-5dfea",
    storageBucket: "blog-react-project-5dfea.appspot.com",
    messagingSenderId: "550412860595",
    appId: "1:550412860595:web:5e0cf67901b4ff897704c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()