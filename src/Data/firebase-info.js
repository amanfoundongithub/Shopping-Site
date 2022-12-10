// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Fill these up yourself 
const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: 
  measurementId: ,
  databaseURL: 
};

// Initialize Firebase
var app = initializeApp(firebaseConfig)

var auth = getAuth(app) 

var database = getDatabase(app) 
// const analytics = getAnalytics(app);

export var app
export var auth 
export var database
