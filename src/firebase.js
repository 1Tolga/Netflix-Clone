import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFdp4meFOapT7DrXCnVO4GWdzDNROeO0Y",
    authDomain: "netflix-clone-12816.firebaseapp.com",
    projectId: "netflix-clone-12816",
    storageBucket: "netflix-clone-12816.appspot.com",
    messagingSenderId: "194407212411",
    appId: "1:194407212411:web:407bc90fe57c9686c209de"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth }
export default db;