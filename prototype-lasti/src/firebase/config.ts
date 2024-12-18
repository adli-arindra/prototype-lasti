import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZ0Qe7bkt_UJXlTUww6fRHf2gseVsVyAs",
  authDomain: "proto-lasti.firebaseapp.com",
  projectId: "proto-lasti",
  storageBucket: "proto-lasti.firebasestorage.app",
  messagingSenderId: "400599740482",
  appId: "1:400599740482:web:1bc1f8da0c599417edbddb"
};

const app = initializeApp(firebaseConfig);

export { app }