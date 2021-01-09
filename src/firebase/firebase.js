import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FB_DATABASE_URL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
