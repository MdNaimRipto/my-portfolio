// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJIm7_Egk0ku0qdZ7MvZ4UbVtgBWd__70",
    authDomain: "my-portfolio-14c8c.firebaseapp.com",
    projectId: "my-portfolio-14c8c",
    storageBucket: "my-portfolio-14c8c.appspot.com",
    messagingSenderId: "884500450325",
    appId: "1:884500450325:web:6bcc1c82e8368af45d921c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app