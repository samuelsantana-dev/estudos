import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from "firebase/auth";
import { useState } from "react";

  export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [cancelled, setCancelled] = useState(false);

    const  auth = getAuth();

    function checkIfisCancelled() {
      if (cancelled) {
        return;
      }
    }
  }