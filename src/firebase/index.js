
import { initializeApp } from "firebase/app";



import { GoogleAuthProvider, getAuth, signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,
 } from "firebase/auth";
 import {
 getFirestore,
 query,
 getDocs,
 collection,
  where,
  addDoc,
    }from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCZbivuHx1EL-Kyb4vaqxz47_ZkNXUcpvA",
  authDomain: "bd-tripit.firebaseapp.com",
  projectId: "bd-tripit",
  storageBucket: "bd-tripit.appspot.com",
  messagingSenderId: "639156345949",
  appId: "1:639156345949:web:b4f4e7ccdac7e464dc41b4",
  measurementId: "G-QBTTE824GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export const login = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log('user', user);
    const q = query(collection("bd-tripit", "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection("bd-tripit", "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  auth.signOut();
};