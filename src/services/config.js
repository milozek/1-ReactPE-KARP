import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "clase-firebase-e28a7.firebaseapp.com",
    projectId: "clase-firebase-e28a7",
    storageBucket: "clase-firebase-e28a7.appspot.com",
    messagingSenderId: "249288043665",
    appId: "1:249288043665:web:2f19767c04953e7a672330",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
