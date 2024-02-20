//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyC2vt2XZzpG_l2uRFVLlkQ89-zv0ggLi2s",
    authDomain: "comp1800-demo07-202410.firebaseapp.com",
    projectId: "comp1800-demo07-202410",
    storageBucket: "comp1800-demo07-202410.appspot.com",
    messagingSenderId: "1046099964385",
    appId: "1:1046099964385:web:ca50193d5ff9ba2bc9e2a0"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
