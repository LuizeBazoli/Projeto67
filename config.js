import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBadeywKFs4zBSbdUTjRYSpqtjrLunU_ps",
    authDomain: "projeto67-f7b4e.firebaseapp.com",
    databaseURL: "https://projeto67-f7b4e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projeto67-f7b4e",
    storageBucket: "projeto67-f7b4e.appspot.com",
    messagingSenderId: "382503245067",
    appId: "1:382503245067:web:f6fb364bc47fb3aac27e0e"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();