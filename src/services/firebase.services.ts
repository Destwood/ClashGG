import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'clashgg-c3e3a.firebaseapp.com',
	projectId: 'clashgg-c3e3a',
	storageBucket: 'clashgg-c3e3a.firebasestorage.app',
	messagingSenderId: '263364344417',
	appId: '1:263364344417:web:326d92b50fede66e430820',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
