import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ibuypower-ed762.firebaseapp.com",
  projectId: "ibuypower-ed762",
  storageBucket: "ibuypower-ed762.appspot.com",
  messagingSenderId: "1076816095723",
  appId: "1:1076816095723:web:db66101405dbb16d7091ae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);