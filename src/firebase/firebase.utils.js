import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBuqykggyJ4GGib-tb3crMRA2xPPWAiv0U",
    authDomain: "streetwarestoredb.firebaseapp.com",
    databaseURL: "https://streetwarestoredb.firebaseio.com",
    projectId: "streetwarestoredb",
    storageBucket: "streetwarestoredb.appspot.com",
    messagingSenderId: "27871665389",
    appId: "1:27871665389:web:33fbb6445d287f3f8240e4",
    measurementId: "G-M8RXWQC670"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const  {displayName, email} = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName, email, createAt, ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;