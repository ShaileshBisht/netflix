import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLOhslBprDo4iQX9hK7qsCcAAjzFfrnPE",
  authDomain: "netflix-clone-27e67.firebaseapp.com",
  projectId: "netflix-clone-27e67",
  storageBucket: "netflix-clone-27e67.appspot.com",
  messagingSenderId: "159189847160",
  appId: "1:159189847160:web:ee73353f77378b42e9b18d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
