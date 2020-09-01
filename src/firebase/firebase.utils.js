import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCIHSRM4iDVWbDC5XNfCh8GNbgWxYqSMDM",
    authDomain: "astrl-1a5fd.firebaseapp.com",
    databaseURL: "https://astrl-1a5fd.firebaseio.com",
    projectId: "astrl-1a5fd",
    storageBucket: "astrl-1a5fd.appspot.com",
    messagingSenderId: "808808028386",
    appId: "1:808808028386:web:f6358b368b9cd356e666bb",
    measurementId: "G-E1W47DCSML"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;