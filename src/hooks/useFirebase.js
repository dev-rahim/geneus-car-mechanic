import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

const useFirebase = () => {
    initializeAuthentication()

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            }).finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unSubscribe;
    })

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,

    }
}

export default useFirebase;