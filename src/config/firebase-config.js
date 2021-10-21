// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_UIF03mR_QK8GrDsdyU4s4dcl3hVnllE",
  authDomain: "bonsai-signin.firebaseapp.com",
  projectId: "bonsai-signin",
  storageBucket: "bonsai-signin.appspot.com",
  messagingSenderId: "230227576641",
  appId: "1:230227576641:web:0c29885090ad2c095183c0"
};


firebase.initializeApp(firebaseConfig)
export {firebase}



