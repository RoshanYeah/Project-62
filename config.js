import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAa7UMOIMe1nsN_jMJb3r1DQYAcmB1P28o",
  authDomain: "project-60-a2350.firebaseapp.com",
  databaseURL: "https://project-60-a2350-default-rtdb.firebaseio.com",
  projectId: "project-60-a2350",
  storageBucket: "project-60-a2350.appspot.com",
  messagingSenderId: "1081906046286",
  appId: "1:1081906046286:web:8efedbac45bd9d65652a1f"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 
  
console.log(firebase.name);
console.log(firebase.database());
 
 

  