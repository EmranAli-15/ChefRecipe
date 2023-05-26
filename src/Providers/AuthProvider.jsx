import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = (githubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const creteUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (user, name, photo) => {
        setLoading(true);
        return updateProfile(user, {
            displayName: name, photoURL: photo
        });
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo =
    {
        creteUser,
        loginWithGoogle,
        loginWithGithub,
        signInUser,
        logOut,
        user,
        updateUser,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;