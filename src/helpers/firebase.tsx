import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBQ_nI1_3YGg_Kz7ma0xhG0dYEECZJ55QI',
	authDomain: 'growth-space-971e4.firebaseapp.com',
	projectId: 'growth-space-971e4',
	storageBucket: 'growth-space-971e4.firebasestorage.app',
	messagingSenderId: '240080030825',
	appId: '1:240080030825:web:29e8920844f921bc5ca6f8',
	measurementId: 'G-TS0DMDMND8',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
