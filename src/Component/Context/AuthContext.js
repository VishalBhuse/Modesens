import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";



const AuthContext=createContext();

export const AuthContextProvider =({children})=>{

    const [user, setUser] = useState({})

    const logout=()=>{
        
        signOut(auth)
        // setUser({})
    }

    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }

    useEffect(() => {
      const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        console.log(currentUser.accessToken)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    

    return (
        <AuthContext.Provider value={{googleSignIn,logout,user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext)
}