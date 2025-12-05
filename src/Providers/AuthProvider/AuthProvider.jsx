import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../fire-base/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    // user create firebase------
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user signIn firebase------
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user google signIn in firebase----------
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // user signOut firebase------
    const signOutUser = () => {
        // setLoading(true)
        return signOut(auth)
    }

    // Update user Profile in firebase--------

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                // get token and store clicen
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setUser(currentUser)
                            setLoading(false)
                        }
                    })
            } else {
                //TODO: remove token (if tokend stored in the client side: local storage, caching , in memory)
                localStorage.removeItem('access-token')
                setUser(currentUser)
                setLoading(false)

            }
        })
        return () => {
            return unSubscribe();
        }
    }, [user, axiosPublic])



    const authInfo = {
        user,
        loading,
        creatUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;