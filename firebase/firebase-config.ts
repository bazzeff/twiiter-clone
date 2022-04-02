//import firebase from "firebase"; 
import { initializeApp } from "firebase/app"; 
import { 
  getAuth, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  doc,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore"; 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEpOKpocAs4HyyBMB1hgD3fQ8iVHSYJoo",
  authDomain: "clone-459ef.firebaseapp.com",
  projectId: "clone-459ef",
  storageBucket: "clone-459ef.appspot.com",
  messagingSenderId: "1036770956894",
  appId: "1:1036770956894:web:aec8e2ed33bc9c3e9ac6cf",
  measurementId: "G-6FE4R8KSYG"
  };


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  const auth = getAuth();

  
  const logInWithEmailAndPassword = async (email, password) => {
    try {
      const res =  await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
    } catch (err) {
      console.error(err);
      alert(err.message); 
    }
  };
  
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, name, email, password);
      const user = res.user;
      const getRandomProfilePicture = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        return data.results[0].picture.large
      }
      const userRef = collection(db, "users");
      setDoc(doc(userRef, user.uid), {
        userId: user.uid,
        name: user.name,
        authProvider: "local",
        email: user.email,
        profilePicture: await getRandomProfilePicture(),
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  
  const logout = () => {
    signOut(auth);
  };
   const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
       //const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
   }
  export {
    auth,
    db,
    doc,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    onAuthStateChanged,
    signInWithPopup,
    authListener,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout
  };