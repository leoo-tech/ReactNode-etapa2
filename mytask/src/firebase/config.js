import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkveQVMS8Bja-Emt-mhG5UXZgJdTAaEtE",
    authDomain: "my-task-37f38.firebaseapp.com",
    projectId: "my-task-37f38",
    storageBucket: "my-task-37f38.appspot.com",
    messagingSenderId: "867408017779",
    appId: "1:867408017779:web:5757a9e0ca87efc4f4ad06"
};

// app = objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth = objeto com as configurações de autenticação
export const auth = getAuth(app);
// db = objeto com as configurações do firestore
export const db = getFirestore(app);