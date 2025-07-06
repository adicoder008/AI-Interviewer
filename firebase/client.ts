// import { initializeApp, getApps, cert } from 'firebase-admin/app';
// import { getAuth } from 'firebase-admin/auth';
// import { getFirestore } from 'firebase-admin/firestore';
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlFzfwSK8vV3F9PnDN7Xwzi1T_H9AQZb8",
//   authDomain: "ai-coach-f1a2c.firebaseapp.com",
//   projectId: "ai-coach-f1a2c",
//   storageBucket: "ai-coach-f1a2c.firebasestorage.app",
//   messagingSenderId: "606628603565",
//   appId: "1:606628603565:web:8471f0a9282781ff9d8824",
//   measurementId: "G-0FDRCPG3HC"
// };

// // Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
// // const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// firebase/client.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlFzfwSK8vV3F9PnDN7Xwzi1T_H9AQZb8",
  authDomain: "ai-coach-f1a2c.firebaseapp.com",
  projectId: "ai-coach-f1a2c",
  storageBucket: "ai-coach-f1a2c.appspot.com",
  messagingSenderId: "606628603565",
  appId: "1:606628603565:web:8471f0a9282781ff9d8824",
  measurementId: "G-0FDRCPG3HC",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
