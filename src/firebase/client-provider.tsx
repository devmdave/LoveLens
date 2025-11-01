'use client';
import { initializeFirebase, FirebaseProvider } from '@/firebase';

let firebaseApp: ReturnType<typeof initializeFirebase>;

export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  if (!firebaseApp) {
    firebaseApp = initializeFirebase();
  }

  return <FirebaseProvider {...firebaseApp}>{children}</FirebaseProvider>;
}
