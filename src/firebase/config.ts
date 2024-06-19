import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOTHrfXLMYA6DB7IikH0wg7Mb4t0bWrnA",
  authDomain: "satisfying-you-gp5.firebaseapp.com",
  projectId: "satisfying-you-gp5",
  storageBucket: "satisfying-you-gp5.appspot.com",
  messagingSenderId: "1025366446096",
  appId: "1:1025366446096:web:c70ab1b0dbad868f643a95",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
