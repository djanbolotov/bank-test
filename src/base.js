import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBTBW21GrxFKMBYoefUG5PuGPPkcJd-RJI",
  authDomain: "bank-project-c5e7a.firebaseapp.com",
  projectId: "bank-project-c5e7a",
  storageBucket: "bank-project-c5e7a.appspot.com",
  messagingSenderId: "896536503234",
  appId: "1:896536503234:web:bb8a67537ac607fbe86c5b",
  measurementId: "G-658PELKPB4"
})


export const auth = app.auth()
export default app