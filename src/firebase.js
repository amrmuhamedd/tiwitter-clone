import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkYv6p4mjqvd5y_MeMwoTz2_qGfNQXjs8",
  authDomain: "twitter-clone-8f9e7.firebaseapp.com",
  projectId: "twitter-clone-8f9e7",
  storageBucket: "twitter-clone-8f9e7.appspot.com",
  messagingSenderId: "122219018107",
  appId: "1:122219018107:web:0efc15a03717d97cb46fde",
  measurementId: "G-KP77XBZKK4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
