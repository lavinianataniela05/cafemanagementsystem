

// / export { analytics };
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMzueWGp5F030CVubXYbb1MKhrJF8FwsI",
  authDomain: "brew-and-bliss-cafe.firebaseapp.com",
  projectId: "brew-and-bliss-cafe",
  storageBucket: "brew-and-bliss-cafe.firebasestorage.app",
  messagingSenderId: "359108653787",
  appId: "1:359108653787:web:f79a4814257e60e4b292fe",
  measurementId: "G-WW93LBVPTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };