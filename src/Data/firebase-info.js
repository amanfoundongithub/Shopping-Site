// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_7w2txuE9Yjs-Z3MfgNXkcQtHNXCm8vM",
  authDomain: "todolist-1b3df.firebaseapp.com",
  projectId: "todolist-1b3df",
  storageBucket: "todolist-1b3df.appspot.com",
  messagingSenderId: "217872194189",
  appId: "1:217872194189:web:e3304b377a38b34c2360c4",
  measurementId: "G-QDQNSMXQPS",
  databaseURL: "https://todolist-1b3df-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig)

var auth = getAuth(app) 

var database = getDatabase(app) 
// const analytics = getAnalytics(app);

export var app
export var auth 
export var database
