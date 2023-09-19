import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2_ph7ZquN9sQL8j-nF0vL4oa5u9psAos",
  authDomain: "final-swminiproj23.firebaseapp.com",
  projectId: "final-swminiproj23",
  storageBucket: "final-swminiproj23.appspot.com",
  messagingSenderId: "397845956043",
  appId: "1:397845956043:web:0a1a7a6f7ab510fa79e24e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const auth = initializeAuth(app, {
  //persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//});

