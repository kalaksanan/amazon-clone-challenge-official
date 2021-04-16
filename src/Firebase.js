import firebase from 'firebase';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyB8NZ-r-Wv-KSfDt0XZ-9shT0q93IWssC0",
    authDomain: "clone-kalaksa.firebaseapp.com",
    projectId: "clone-kalaksa",
    storageBucket: "clone-kalaksa.appspot.com",
    messagingSenderId: "873166459194",
    appId: "1:873166459194:web:7e4b0238e5339846704003",
    measurementId: "G-TVFFHZNWY1"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }; 