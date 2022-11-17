import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-C0_Qs3ojpKTPPBTV9jdseEYihOPcImc",
  authDomain: "final-milan.firebaseapp.com",
  projectId: "final-milan",
  storageBucket: "final-milan.appspot.com",
  messagingSenderId: "887225755637",
  appId: "1:887225755637:web:9c21ba49c3e92da9b3e2bc",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
