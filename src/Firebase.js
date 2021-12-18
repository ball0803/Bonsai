import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's firebase configuration
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "bonsai-c2608.REACT_APPapp.com",
  projectId: "bonsai-c2608",
  storageBucket: "bonsai-c2608.appspot.com",
  messagingSenderId: "884347205410",
  appId: "1:884347205410:web:544bc746eef2efd700177b"
};

const app = initializeApp(config);
export const db = getFirestore()