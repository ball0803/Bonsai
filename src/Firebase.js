import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MAESSAGING_SENDERID,
  appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(config);
export const db = getFirestore()