import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, onAuthStateChanged}from'firebase/auth';
import {getFirestore, collection, getDocs, getDoc, GeoPoint} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA34bN4f06kp3psHwnG0HVmgg0KCQs8z8w",
    authDomain: "examenfinal25dp.firebaseapp.com",
    databaseURL: "https://examenfinal25dp-default-rtdb.firebaseio.com",
    projectId: "examenfinal25dp",
    storageBucket: "examenfinal25dp.firebasestorage.app",
    messagingSenderId: "118309173066",
    appId: "1:118309173066:web:8248a489d3f08ba241f3b3",
    measurementId: "G-VGXVN6ZHSJ"
};


const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);
db.collection('clientes').getDocs();
const clientesCol = collection(db, 'clientes');
const snapshotgetDocs = await getDocs(clientesCol);
const app = initializeApp(firebaseConfig);
const getAnalytics = getAnalytics(app);
console.log(app);


onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        console.log('Usuario logueado:', user.email);
    } else {
        console.log('No hay usuario logueado');
    }
});


















