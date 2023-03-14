import React, { createContext, useContext, useState, useEffect } from 'react';

import { auth } from '../firebase';
import {
  Auth,
  User,
  UserCredential,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextProps {
  signUp: (email: string, password: string ) => Promise<UserCredential>;
  signIn: (email: string, password: string ) => Promise<UserCredential>;
  updateEmailAdress: (newEmail: string) => Promise<void>;
  resetPassword: (newEmail: string) => Promise<void>;
  logOut: () => void;
  currentUser: User | null
  auth: Auth | null
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function updateEmailAdress(newEmail: string) {
    if (currentUser) {
      return updateEmail(currentUser, newEmail);
    } else {
      return Promise.resolve();
    }
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail( auth, email);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        updateEmailAdress,
        resetPassword,
        logOut,
        currentUser,
        auth,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
