// import { createContext } from 'react';
// import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
// import app from "../Firebase/firebase.config";
// import { useEffect } from 'react';
// import { useState } from 'react';
// export const AuthContext=createContext()
// const auth=getAuth(app)

// const AuthProviders = ({children}) => {
//     const [user,setUser]=useState(null);
//     const [loading,setLoading]=useState(true);

//     const createUser=(email,password)=>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);

//     }
//     const SignInUser=(email,password)=>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)

//     }
//     const logOut=()=>{
//         setLoading(true);
//         return signOut(auth);


//     }

//     useEffect(()=>{
//        const unsubscribe= onAuthStateChanged(auth,LoggedInUser => {
//             console.log("hi",LoggedInUser);
//             setUser(LoggedInUser);
//             setLoading(false);
//         })
//             return()=>{
//                 unsubscribe();

//             }
        
           
//     },[])




//     const authInfo={user, createUser,SignInUser,logOut,loading}
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProviders;