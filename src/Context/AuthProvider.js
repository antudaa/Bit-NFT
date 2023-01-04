import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/FirebaseConfig';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // Loading State
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({});

    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth);
    }


    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(user, userInfo);
    }

    // Google login
    const signInWithGoogle = (provider) => {
        setLoading(true);
        return signInWithGoogle(auth, provider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(`Observing user`)
            setUser(currentUser)
            setLoading(false);
        });
        return () => unSubscribe();
    }, [])


    const authInfo = {
        createUserWithEmail,
        Login,
        logOut,
        updateUser,
        signInWithGoogle,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;