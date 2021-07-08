import * as admin from 'firebase-admin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_KEY,
    authDomain: process.env.FIREBASE_DOMAIN,
    projectId: process.env.FIREBASE_ID,
    storageBucket: process.env.FIREBASE_STORAGE,
    messagingSenderId: process.env.FIREBASE_SENDER,
    appId: process.env.FIREBASE_APP
  })
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}

const serviceAccount = require('./serviceAccountKey.json')
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL
  })
}

export { firebase, admin }

// e.g. usage `admin.firestore()` to create changes on db
// `firebase.auth().createUserWithEmailAndPassword(email, pass) to setup a new user on auth
