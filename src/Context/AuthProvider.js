import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../Firebase/FirebaseConfig';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUserWithEmail,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;