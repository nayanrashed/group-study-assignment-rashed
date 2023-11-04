// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkUfzBB47ZaCMnZX8qlKS37Q6Apmgg-ww",
    authDomain: "group-study-rashed.firebaseapp.com",
    projectId: "group-study-rashed",
    storageBucket: "group-study-rashed.appspot.com",
    messagingSenderId: "550350229921",
    appId: "1:550350229921:web:6fb0a4c0f94245039b3be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;