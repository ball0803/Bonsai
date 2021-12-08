import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAQfPN3u3W01Whz6qi8fYXuTadDFKbKR2w",
  authDomain: "bonsai-c2608.firebaseapp.com",
  projectId: "bonsai-c2608",
  storageBucket: "bonsai-c2608.appspot.com",
  messagingSenderId: "884347205410",
  appId: "1:884347205410:web:544bc746eef2efd700177b"
};

const app = initializeApp(config);

export default app;