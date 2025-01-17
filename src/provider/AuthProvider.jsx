import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     const createUser = (email,password) =>{
        setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }
       
     const signIn = (email,password) =>{
        setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     const logOut = () =>{
          return signOut(auth)
     }

     useEffect(()=>{
        const  unsubscribe =  onAuthStateChanged(auth, currentUsr =>{
                  setUser(currentUsr)
                  console.log('current User', currentUsr)
                  setLoading(false)
            })
            return ()=>{
                  unsubscribe()
            }
     },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
     children:PropTypes.node
}