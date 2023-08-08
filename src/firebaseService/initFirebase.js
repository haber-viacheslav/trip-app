import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyB4Fbb7BxV-f22W82M732EmQRD6eF7NPZs',
  authDomain: 'trip-app-ac65f.firebaseapp.com',
  projectId: 'trip-app-ac65f',
  storageBucket: 'trip-app-ac65f.appspot.com',
  messagingSenderId: '799838074869',
  appId: '1:799838074869:web:71c5f282a88c2416acd2bc',
  databaseURL:
    'https://trip-app-ac65f-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
