import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMV_PbGSlOFHeWN-PT-njwe508jiHvjj8",
    authDomain: "e-commdb-7b080.firebaseapp.com",
    projectId: "e-commdb-7b080",
    storageBucket: "e-commdb-7b080.appspot.com",
    messagingSenderId: "354441862492",
    appId: "1:354441862492:web:8014d47a885f369fa5f599",
    measurementId: "G-33F1DYTSFB"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;
