import { createContext } from 'react';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut, updateProfile, signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    //social login
    const googlepProvider = new GoogleAuthProvider();

    //sign in
    const  googlepSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, googlepProvider )
    }

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const SignInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    const udateUserProfile=(name,photo)=>{
          return updateProfile(auth.currentUser, {
          displayName: name, photoURL:photo
          })


    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,LoggedInUser => {
            // console.log("hi",LoggedInUser);
            setUser(LoggedInUser);
            setLoading(false);
        })
            return()=>{
                unsubscribe();

            }
        
           
    },[])




    const authInfo={user, createUser,SignInUser,googlepSignIn,logOut,loading,udateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;