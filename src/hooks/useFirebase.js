import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, initializeAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

const useFirebase = () => {
    initializeAuthentication()

    const [user, setUser] = useState({})
    const auth = getAuth()

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        return unSubscribe;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,

    }
}

export default useFirebase;