import React from 'react';
import { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { createContext } from 'react';



export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);
    const [loader , setLoader] = useState(true);
    

    const createUser = (email , password ) =>{
        setLoader(true);
        
        return createUserWithEmailAndPassword(auth , email, password);
    }

    const createLogin = (email , password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const logOut = () =>{
        
    //     return signOut(auth);
    // }

    

    const GoogleLogin = () =>{
        
        return signInWithPopup(auth,googleProvider)
    }





    // useEffect(() =>{
    //     const unsubscribe = onAuthStateChanged( auth, currentUser =>{
    //           setUser(currentUser);
    //           setLoader(false);
    //       })
  
    //       return () =>{
    //           return unsubscribe();
    //       }
    //   },[])

    const authInfo ={
        user,
        loader,
        createUser,
        createLogin,
        // logOut,
       
        GoogleLogin
       
    }



    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;