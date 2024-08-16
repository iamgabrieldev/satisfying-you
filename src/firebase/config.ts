import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAOTHrfXLMYA6DB7IikH0wg7Mb4t0bWrnA",
//   authDomain: "satisfying-you-gp5.firebaseapp.com",
//   projectId: "satisfying-you-gp5",
//   storageBucket: "satisfying-you-gp5.appspot.com",
//   messagingSenderId: "1025366446096",
//   appId: "1:1025366446096:web:c70ab1b0dbad868f643a95",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDBUGVcoERS2TGE5EDRIeqgtqY4WfPr_Z0",
  authDomain: "mobile-6699d.firebaseapp.com",
  projectId: "mobile-6699d",
  storageBucket: "mobile-6699d.appspot.com",
  messagingSenderId: "1062553635053",
  appId: "1:1062553635053:web:1aa2bab46345fcc27224e4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
