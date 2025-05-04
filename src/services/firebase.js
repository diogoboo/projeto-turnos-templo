
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoH5GRiByCPI-2MCUyjIY6pvOJ-LH-B_8",
  authDomain: "sistema-turnos-templo.firebaseapp.com",
  databaseURL: "https://sistema-turnos-templo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sistema-turnos-templo",
  storageBucket: "sistema-turnos-templo.firebasestorage.app",
  messagingSenderId: "1099497330082",
  appId: "1:1099497330082:web:a3e40c3597565a75358efb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
