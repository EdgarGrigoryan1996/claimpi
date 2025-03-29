// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1zkq7PvYv1PKtzHvUck2pF2HqaFFYZU",
  authDomain: "my-project-55f11.firebaseapp.com",
  projectId: "my-project-55f11",
  storageBucket: "my-project-55f11.firebasestorage.app",
  messagingSenderId: "862210140068",
  appId: "1:862210140068:web:ac335edd00f4e2781f0331",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
