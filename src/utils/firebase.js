// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwhS4zIitvp5Is6Gubfz2-SX75H26zjWw",
    authDomain: "phonemax-792b1.firebaseapp.com",
    projectId: "phonemax-792b1",
    storageBucket: "phonemax-792b1.appspot.com",
    messagingSenderId: "181864676844",
    appId: "1:181864676844:web:f7e651eb318286ae4a54c9",
    measurementId: "G-DSXFJBY57J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export const getProductos = async() => {
    const productosCollectionRef = collection(db, "productos");
    const snapshot = await getDocs(productosCollectionRef);
    const docsData = snapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });
    return docsData;
};

export const getSingleProducto = async(id) => {
    const productosCollectionRef = collection(db, "productos");
    const productoRef = doc(productosCollectionRef, id);
    const snapshot = await getDoc(productoRef);
    return {
        ...snapshot.data(),
        id: snapshot.id,
    };
};

export const getProductosByCategoria = async(categoria) => {
    const productosCollectionRef = collection(db, "productos");
    const q = query(productosCollectionRef, where("categoria", "==", categoria));
    const snapshot = await getDocs(q);
    const docsData = snapshot.docs.map((doc) => {
        //console.log({...doc.data(), id: doc.id })
        return {
            ...doc.data(),
            id: doc.id,
        };
    });
    return docsData;
};

export const getProductosByCategoriaMarca = async(categoria, marca) => {
    const productosCollectionRef = collection(db, "productos");
    const q = query(
        productosCollectionRef,
        where("categoria", "==", categoria),
        where("marca", "==", marca)
    );
    const snapshot = await getDocs(q);
    const docsData = snapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });
    return docsData;
};