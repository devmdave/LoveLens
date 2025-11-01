import { initializeApp, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

function initializeFirebase() {
  try {
    return {
      firebaseApp: getApp(),
      auth: getAuth(),
      firestore: getFirestore(),
    };
  } catch (e) {
    const firebaseApp = initializeApp(firebaseConfig);
    return {
      firebaseApp,
      auth: getAuth(firebaseApp),
      firestore: getFirestore(firebaseApp),
    };
  }
}

export * from './provider';
export { initializeFirebase };
export type { FirebaseApp, Auth, Firestore };
