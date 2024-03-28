// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYYagXr1x6X4pT7PVhCXOkmQEZBmqYgAA",
  authDomain: "miniblog-project-jr.firebaseapp.com",
  databaseURL: "https://miniblog-project-jr-default-rtdb.firebaseio.com",
  projectId: "miniblog-project-jr",
  storageBucket: "miniblog-project-jr.appspot.com",
  messagingSenderId: "1065251754772",
  appId: "1:1065251754772:web:e2337f72c722dcf3bca801"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };