import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Snackbar } from "@mui/material";
import toast from "react-hot-toast";
const firebaseConfig = {
  apiKey: "AIzaSyCy1EFXSnjuVzuDTCryXxFPL6DwgUdeeLY",
  authDomain: "my-loginauth.firebaseapp.com",
  projectId: "my-loginauth",
  storageBucket: "my-loginauth.appspot.com",
  messagingSenderId: "733787902499",
  appId: "1:733787902499:web:8fde024b9f57a839d05796",
  measurementId: "G-5HVND98WC1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    <Snackbar message={error.message} autoHideDuration={4000} />;
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
