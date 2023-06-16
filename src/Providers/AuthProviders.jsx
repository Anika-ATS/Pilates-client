import { createContext } from 'react';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut, updateProfile, signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
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

            //set jwt set and get toekn
            if(LoggedInUser)
            {
                axios.post('https://y-opal-kappa.vercel.app/jwt',{email:LoggedInUser.email})
                .then(data=>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                
                })
            }
            else{
                localStorage.removeItem('access-token')
            }




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