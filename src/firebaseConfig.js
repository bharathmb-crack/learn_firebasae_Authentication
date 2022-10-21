import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC_gF1Jw6F0yqCtfSOGcAAvhVUss1IUss",
  authDomain: "fir-auth-4abc7.firebaseapp.com",
  projectId: "fir-auth-4abc7",
  storageBucket: "fir-auth-4abc7.appspot.com",
  messagingSenderId: "952468318085",
  appId: "1:952468318085:web:cc82b6b45b71670e2e46ec",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
