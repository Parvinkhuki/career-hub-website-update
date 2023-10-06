import React, { createContext, useEffect, useState } from 'react';
export const AuthContext=createContext(null)
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from './firebase.config';


const Authprovider = ({children}) => {

    const [loading, setloading]=useState(true)
    const [user, setUser]=useState("")

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleSignIn=()=>{
      setloading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn=()=>{
        setloading(true)
          return signInWithPopup(auth, githubProvider)
      }

      const signup=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
      }
      const logOut=()=>{
        setloading(true)
        return signOut(auth)
      }
      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            console.log('user in the auth state changed', user);
            setUser(user);
            setloading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


   const authinfo={
    googleSignIn,
    githubSignIn,
    loading,
    signup,
    signIn,
    logOut,
    user
   }


    return (
        <>
    
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default Authprovider;