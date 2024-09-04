// // Import the necessary functions from Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDW2Jq_bQPRZPBvlaoB0Bjbkw10rzBBx6E",
//   authDomain: "infinity-75a69.firebaseapp.com",
//   projectId: "infinity-75a69",
//   storageBucket: "infinity-75a69.appspot.com",
//   messagingSenderId: "71169563308",
//   appId: "1:71169563308:web:373fd7b6f64413cb961d09",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export Firestore instance for database interactions
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZBak_Rfzf7jQPUo0JbFOlnYTOw-XkD9c",
  authDomain: "proyecto-react-raffone.firebaseapp.com",
  projectId: "proyecto-react-raffone",
  storageBucket: "proyecto-react-raffone.appspot.com",
  messagingSenderId: "1086573844384",
  appId: "1:1086573844384:web:49e4fa7abe03d3fef236c5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
