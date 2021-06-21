import admin from 'firebase-admin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    projectId: process.env.FIREBASE_ID,
    storageBucket: process.env.FIREBASE_STORAGE,
    messagingSenderId: process.env.FIREBASE_SENDER',
    appId: process.env.FIREBASE_APP
  })
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}

if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id
    }),
    databaseURL: 'https://todo-e4cd0.firebaseio.com'
  })
  
  export {firebase, admin}
  
  // e.g. usage `admin.firestore()` to create changes on db
  // `firebase.auth().createUserWithEmailAndPassword(email, pass) to setup a new user on auth
